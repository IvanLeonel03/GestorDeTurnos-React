import React, { useState, useEffect } from 'react';
import ClientList from '../components/clients/ClientList';
import ClientFilters from '../components/clients/ClientFilters';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { clientService } from '../services/clientService';
import { Plus } from 'lucide-react';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    sortBy: '',
    sortOrder: '',
  });

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    filterClients();
  }, [filters, clients]);

  const fetchClients = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await clientService.getClients();
      setClients(response.data);
      setFilteredClients(response.data);
    } catch (err) {
      setError('Error al cargar los clientes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filterClients = () => {
    let filtered = [...clients];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(client =>
        client.name.toLowerCase().includes(searchLower) ||
        client.email.toLowerCase().includes(searchLower) ||
        client.phone.includes(filters.search)
      );
    }

    if (filters.status) {
      filtered = filtered.filter(client => client.status === filters.status);
    }

    if (filters.sortBy) {
      filtered.sort((a, b) => {
        const aVal = a[filters.sortBy] || '';
        const bVal = b[filters.sortBy] || '';
        return filters.sortOrder === 'desc' 
          ? (bVal > aVal ? 1 : -1) 
          : (aVal > bVal ? 1 : -1);
      });
    }

    setFilteredClients(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      status: '',
      sortBy: '',
      sortOrder: '',
    });
  };

  if (loading) return <LoadingSpinner size="large" />;
  if (error) return <ErrorMessage message={error} onRetry={fetchClients} />;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Clientes</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Cliente
        </Button>
      </div>

      <ClientFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      <ClientList clients={filteredClients} />
    </div>
  );
};

export default Clients;
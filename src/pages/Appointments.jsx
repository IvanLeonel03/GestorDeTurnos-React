import React, { useState, useEffect } from 'react';
import AppointmentList from '../components/appointments/AppointmentList';
import AppointmentFilters from '../components/appointments/AppointmentFilters';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { appointmentService } from '../services/appointmentService';
import { Plus } from 'lucide-react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    date: '',
    search: '',
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    filterAppointments();
  }, [filters, appointments]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await appointmentService.getAppointments();
      setAppointments(response.data);
      setFilteredAppointments(response.data);
    } catch (err) {
      setError('Error al cargar los turnos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filterAppointments = () => {
    let filtered = [...appointments];

    if (filters.status) {
      filtered = filtered.filter(app => app.status === filters.status);
    }

    if (filters.date) {
      filtered = filtered.filter(app => app.date === filters.date);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(app =>
        app.clientName.toLowerCase().includes(searchLower) ||
        app.service.toLowerCase().includes(searchLower)
      );
    }

    setFilteredAppointments(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({
      status: '',
      date: '',
      search: '',
    });
  };

  const handleDeleteAppointment = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este turno?')) {
      try {
        await appointmentService.deleteAppointment(id);
        setAppointments(prev => prev.filter(app => app.id !== id));
      } catch (err) {
        setError('Error al eliminar el turno');
      }
    }
  };

  if (loading) return <LoadingSpinner size="large" />;
  if (error) return <ErrorMessage message={error} onRetry={fetchAppointments} />;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Turnos</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Turno
        </Button>
      </div>

      <AppointmentFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-4">
          Mostrando {filteredAppointments.length} de {appointments.length} turnos
        </p>
      </div>

      <AppointmentList
        appointments={filteredAppointments}
        onDelete={handleDeleteAppointment}
      />
    </div>
  );
};

export default Appointments;
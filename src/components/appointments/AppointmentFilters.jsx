import React from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { Search, Filter, X } from 'lucide-react';

const AppointmentFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const statusOptions = [
    { value: '', label: 'Todos los estados' },
    { value: 'confirmed', label: 'Confirmado' },
    { value: 'pending', label: 'Pendiente' },
    { value: 'cancelled', label: 'Cancelado' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-gray-500 mr-2" />
        <h3 className="text-lg font-medium text-gray-700">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Input
            label="Buscar"
            name="search"
            value={filters.search}
            onChange={handleInputChange}
            placeholder="Buscar cliente o servicio..."
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        
        <div>
          <Select
            label="Estado"
            name="status"
            value={filters.status}
            onChange={handleInputChange}
            options={statusOptions}
          />
        </div>
        
        <div>
          <Input
            label="Fecha"
            name="date"
            type="date"
            value={filters.date}
            onChange={handleInputChange}
          />
        </div>
      </div>
      
      <div className="flex justify-end mt-4">
        <Button
          variant="secondary"
          size="small"
          onClick={onClearFilters}
        >
          <X className="h-4 w-4 mr-1" />
          Limpiar Filtros
        </Button>
      </div>
    </div>
  );
};

export default AppointmentFilters;
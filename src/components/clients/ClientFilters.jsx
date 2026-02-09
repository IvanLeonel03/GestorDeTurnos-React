import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import Input from '../common/Input';
import Select from '../common/Select';

const ClientFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleChange = (name, value) => {
    onFilterChange({ [name]: value });
  };

  const handleClear = () => {
    onClearFilters();
    setShowFilters(false);
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Buscar por nombre, email o teléfono..."
            value={filters.search || ''}
            onChange={(e) => handleChange('search', e.target.value)}
            className="w-full"
          />
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
            showFilters
              ? 'bg-blue-50 border-blue-300 text-blue-700'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filtros
          {Object.values(filters).some(v => v && v !== '') && (
            <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>
          )}
        </button>

        {/* Clear Filters */}
        {Object.values(filters).some(v => v && v !== '') && (
          <button
            onClick={handleClear}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <X className="h-4 w-4 mr-2" />
            Limpiar
          </button>
        )}
      </div>

      {/* Extended Filters */}
      {showFilters && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Estado"
              value={filters.status || ''}
              onChange={(e) => handleChange('status', e.target.value)}
              options={[
                { value: '', label: 'Todos' },
                { value: 'active', label: 'Activo' },
                { value: 'inactive', label: 'Inactivo' },
              ]}
            />

            <Select
              label="Ordenar por"
              value={filters.sortBy || ''}
              onChange={(e) => handleChange('sortBy', e.target.value)}
              options={[
                { value: '', label: 'Sin ordenar' },
                { value: 'name', label: 'Nombre' },
                { value: 'createdAt', label: 'Fecha de registro' },
                { value: 'lastVisit', label: 'Última visita' },
              ]}
            />

            <Select
              label="Dirección"
              value={filters.sortOrder || ''}
              onChange={(e) => handleChange('sortOrder', e.target.value)}
              options={[
                { value: 'asc', label: 'Ascendente' },
                { value: 'desc', label: 'Descendente' },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientFilters;

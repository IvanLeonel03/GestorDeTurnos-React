import React from 'react';
import { Calendar, Clock, User, Scissors } from 'lucide-react';

const AppointmentCard = ({ appointment, onDelete, onEdit }) => {
  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const statusLabels = {
    confirmed: 'Confirmado',
    pending: 'Pendiente',
    cancelled: 'Cancelado',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <User className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-semibold text-gray-800">{appointment.clientName}</span>
          </div>
          
          <div className="flex items-center mb-2">
            <Scissors className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">{appointment.service}</span>
          </div>
          
          <div className="flex items-center mb-3">
            <Calendar className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-600">{appointment.date}</span>
            <Clock className="h-5 w-5 text-gray-400 ml-4 mr-2" />
            <span className="text-gray-600">{appointment.time}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[appointment.status]}`}>
            {statusLabels[appointment.status]}
          </span>
          
          <div className="flex mt-3 space-x-2">
            {onEdit && (
              <button
                onClick={() => onEdit(appointment)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Editar
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(appointment.id)}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Eliminar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;

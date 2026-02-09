import React from 'react';
import AppointmentCard from './AppointmentCard';

const AppointmentList = ({ appointments, onDelete, onEdit }) => {
  if (appointments.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No se encontraron turnos</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {appointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          appointment={appointment}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default AppointmentList;

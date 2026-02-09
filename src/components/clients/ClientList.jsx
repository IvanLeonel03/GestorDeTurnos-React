import React from 'react';
import { Mail, Phone, Calendar, User } from 'lucide-react';
import Card from '../common/Card';

const ClientList = ({ clients, onView }) => {
  if (clients.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No se encontraron clientes</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {clients.map((client) => (
        <Card 
          key={client.id} 
          className="p-4 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onView && onView(client)}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {client.name}
              </h3>
              
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{client.email}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{client.phone}</span>
                </div>
                
                {client.lastVisit && (
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Última visita: {client.lastVisit}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ClientList;

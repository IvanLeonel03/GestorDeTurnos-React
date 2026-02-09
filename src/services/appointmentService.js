import api from './api';

// Datos mock para desarrollo
const mockAppointments = [
  { id: 1, clientName: 'Juan Pérez', service: 'Consulta General', date: '2024-01-15', time: '09:00', status: 'confirmed' },
  { id: 2, clientName: 'María García', service: 'Limpieza Dental', date: '2024-01-15', time: '10:30', status: 'pending' },
  { id: 3, clientName: 'Carlos López', service: 'Ortodoncia', date: '2024-01-16', time: '11:00', status: 'cancelled' },
  // ... más datos
];

export const appointmentService = {
  async getAppointments(params = {}) {
    // En producción, esto sería una llamada real a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...mockAppointments];
        
        // Aplicar filtros
        if (params.status) {
          filtered = filtered.filter(app => app.status === params.status);
        }
        
        if (params.date) {
          filtered = filtered.filter(app => app.date === params.date);
        }
        
        if (params.search) {
          const searchLower = params.search.toLowerCase();
          filtered = filtered.filter(app => 
            app.clientName.toLowerCase().includes(searchLower) ||
            app.service.toLowerCase().includes(searchLower)
          );
        }
        
        resolve({ data: filtered });
      }, 500); // Simular delay de red
    });
  },
  
  async updateAppointment(id, data) {
    // Lógica para actualizar
    return Promise.resolve({ data: { ...data, id } });
  },
  
  async deleteAppointment(id) {
    // Lógica para eliminar
    return Promise.resolve();
  },
};
const mockClients = [
  { id: 1, name: 'Juan Pérez', email: 'juan@email.com', phone: '555-0101', lastVisit: '2024-01-10' },
  { id: 2, name: 'María García', email: 'maria@email.com', phone: '555-0102', lastVisit: '2024-01-12' },
  { id: 3, name: 'Carlos López', email: 'carlos@email.com', phone: '555-0103', lastVisit: '2024-01-08' },
  // ... más datos
];

export const clientService = {
  async getClients(params = {}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...mockClients];
        
        if (params.search) {
          const searchLower = params.search.toLowerCase();
          filtered = filtered.filter(client =>
            client.name.toLowerCase().includes(searchLower) ||
            client.email.toLowerCase().includes(searchLower) ||
            client.phone.includes(params.search)
          );
        }
        
        resolve({ data: filtered });
      }, 500);
    });
  },
};
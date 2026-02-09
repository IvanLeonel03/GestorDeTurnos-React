import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, DollarSign } from 'lucide-react';
import Card from '../components/common/Card';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { appointmentService } from '../services/appointmentService';
import { clientService } from '../services/clientService';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalAppointments: 0,
    todayAppointments: 0,
    totalClients: 0,
    revenue: 0,
  });
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Obtener datos en paralelo
      const [appointmentsRes, clientsRes] = await Promise.all([
        appointmentService.getAppointments(),
        clientService.getClients(),
      ]);
      
      const today = new Date().toISOString().split('T')[0];
      const todayApps = appointmentsRes.data.filter(app => app.date === today);
      
      setStats({
        totalAppointments: appointmentsRes.data.length,
        todayAppointments: todayApps.length,
        totalClients: clientsRes.data.length,
        revenue: appointmentsRes.data.length * 75, // Ejemplo: $75 por turno
      });
      
      setRecentAppointments(appointmentsRes.data.slice(0, 5));
    } catch (err) {
      setError('Error al cargar los datos del dashboard');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner size="large" />;
  if (error) return <ErrorMessage message={error} onRetry={fetchDashboardData} />;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Turnos Hoy</p>
              <p className="text-2xl font-bold">{stats.todayAppointments}</p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Clientes</p>
              <p className="text-2xl font-bold">{stats.totalClients}</p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Turnos</p>
              <p className="text-2xl font-bold">{stats.totalAppointments}</p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg mr-4">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Ingresos</p>
              <p className="text-2xl font-bold">${stats.revenue}</p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Recent Appointments */}
      <Card className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Turnos Recientes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Servicio</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hora</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-4 py-3 text-sm text-gray-900">{appointment.clientName}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{appointment.service}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{appointment.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{appointment.time}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      appointment.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : appointment.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {appointment.status === 'confirmed' ? 'Confirmado' : 
                       appointment.status === 'pending' ? 'Pendiente' : 'Cancelado'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
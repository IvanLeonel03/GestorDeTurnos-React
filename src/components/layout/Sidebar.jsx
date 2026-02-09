import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  Scissors
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/appointments', label: 'Turnos', icon: Calendar },
    { path: '/clients', label: 'Clientes', icon: Users },
  ];

  return (
    <aside className="w-64 bg-gray-900 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="flex items-center px-6 py-5 border-b border-gray-800">
        <span className="text-xl font-bold text-white">Gestor de Turnos</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${active
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
            >
              <Icon className={`h-5 w-5 mr-3 ${active ? 'text-white' : ''}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-800">
        <Link
          to="/settings"
          className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
        >
          <Settings className="h-5 w-5 mr-3" />
          <span className="font-medium">Configuración</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

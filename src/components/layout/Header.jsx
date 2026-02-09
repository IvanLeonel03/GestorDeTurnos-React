import React from 'react';
import { Bell, User as UserIcon } from 'lucide-react';

const Header = ({ title = 'Dashboard' }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* User Menu */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              Administrador
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

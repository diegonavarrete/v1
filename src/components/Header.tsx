import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DataRetail</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Casos de Éxito', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
import React from 'react';
import { Brain } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">MarketData</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Experiencia', 'Proceso', 'Resultados', 'Contacto'].map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`} label={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
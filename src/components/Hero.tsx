import React from 'react';
import { TrendingUp, ShoppingCart, LineChart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Potenciamos tu retail con</span>
            <span className="block text-blue-400">datos inteligentes</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Maximiza tus ventas en MercadoLibre con análisis avanzado de datos y estrategias basadas en inteligencia artificial.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a href="#contacto" className="rounded-md bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600 transition-colors">
              Agenda una Demo
            </a>
            <a href="#servicios" className="rounded-md bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-medium text-white hover:bg-white/20 transition-colors">
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
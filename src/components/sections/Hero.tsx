import React from 'react';
import { NeuralParticles } from '../particles/NeuralParticles';
import { Brain, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <NeuralParticles />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Brain className="h-16 w-16 text-indigo-500" />
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Potenciamos tu Presencia</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              en MercadoLibre con IA
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400">
            Más de 100 productos optimizados activamente con inteligencia artificial y análisis predictivo.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <p className="text-3xl font-bold text-indigo-400">+100</p>
              <p className="text-gray-400 mt-2">Productos Activos</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <p className="text-3xl font-bold text-indigo-400">+35%</p>
              <p className="text-gray-400 mt-2">Incremento en Ventas</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <p className="text-3xl font-bold text-indigo-400">+20%</p>
              <p className="text-gray-400 mt-2">Mejora en ROI</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <p className="text-3xl font-bold text-indigo-400">24/7</p>
              <p className="text-gray-400 mt-2">Monitoreo en Tiempo Real</p>
            </div>
          </div>
          <div className="mt-12 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-lg">
            <div className="bg-black px-6 py-3 rounded-lg flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-indigo-400" />
              <span className="text-gray-200">Partner Oficial de MercadoLibre</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
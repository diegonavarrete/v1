import React from 'react';
import { BarChart2, TrendingUp, Brain, ShoppingBag } from 'lucide-react';

const services = [
  {
    title: 'Análisis Predictivo',
    description: 'Anticipa tendencias de mercado y comportamiento del consumidor con modelos predictivos avanzados.',
    icon: TrendingUp,
  },
  {
    title: 'Optimización de Marketplace',
    description: 'Maximiza tu presencia en MercadoLibre con estrategias basadas en datos y análisis competitivo.',
    icon: ShoppingBag,
  },
  {
    title: 'Inteligencia de Negocio',
    description: 'Toma decisiones informadas con dashboards personalizados y reportes en tiempo real.',
    icon: BarChart2,
  },
  {
    title: 'Machine Learning',
    description: 'Implementa soluciones de IA para automatizar y optimizar tus procesos de venta.',
    icon: Brain,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluciones integrales para potenciar tu presencia en marketplaces
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-center">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
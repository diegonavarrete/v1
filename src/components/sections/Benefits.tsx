import React from 'react';
import { TrendingUp, Package, DollarSign } from 'lucide-react';
import { BenefitCard } from '../ui/BenefitCard';

const benefits = [
  {
    title: 'Mayor Exposición',
    description: 'Optimizamos tu presencia en marketplaces para alcanzar a más clientes potenciales.',
    icon: TrendingUp,
  },
  {
    title: 'Gestión de Inventario',
    description: 'Balance perfecto entre stock disponible y demanda del mercado.',
    icon: Package,
  },
  {
    title: 'Mejores Márgenes',
    description: 'Incrementamos tu rentabilidad optimizando precios y costos operativos.',
    icon: DollarSign,
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Beneficios para Proveedores
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Maximiza tu potencial en marketplaces con nuestra experiencia
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
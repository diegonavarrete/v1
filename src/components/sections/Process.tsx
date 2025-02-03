import React from 'react';
import { LineChart, Database, TrendingUp } from 'lucide-react';
import { ProcessStep } from '../ui/ProcessStep';

const steps = [
  {
    title: 'Análisis de Datos',
    description: 'Recopilamos y analizamos datos de mercado para identificar oportunidades.',
    icon: Database,
  },
  {
    title: 'Optimización',
    description: 'Implementamos estrategias basadas en datos para mejorar el rendimiento.',
    icon: LineChart,
  },
  {
    title: 'Crecimiento',
    description: 'Monitoreamos y ajustamos continuamente para maximizar resultados.',
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestro Proceso
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un enfoque sistemático para impulsar tu éxito
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                {...step}
                number={index + 1}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
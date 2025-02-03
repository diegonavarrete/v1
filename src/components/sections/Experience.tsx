import React from 'react';
import { LineChart, Database, TrendingUp, ShoppingBag, BarChart, Brain } from 'lucide-react';

const achievements = [
  {
    title: 'Análisis Predictivo',
    description: 'Algoritmos de IA que anticipan tendencias de mercado y optimizan precios automáticamente.',
    icon: Brain,
    metric: '+40%',
    metricLabel: 'Precisión en Predicciones'
  },
  {
    title: 'Gestión de Inventario',
    description: 'Control en tiempo real del stock con alertas inteligentes y recomendaciones de reposición.',
    icon: ShoppingBag,
    metric: '-30%',
    metricLabel: 'Reducción de Stockouts'
  },
  {
    title: 'Optimización de Listings',
    description: 'Mejora continua de títulos, descripciones y keywords basada en datos de conversión.',
    icon: BarChart,
    metric: '+45%',
    metricLabel: 'Mejora en Conversión'
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Experiencia Comprobada
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Transformamos datos en resultados tangibles para más de 50 sellers en MercadoLibre
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {achievements.map(({ title, description, icon: Icon, metric, metricLabel }) => (
            <div key={title} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-8 bg-black ring-1 ring-white/10 rounded-lg flex flex-col h-full">
                <Icon className="h-12 w-12 text-indigo-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-gray-400 mb-6">{description}</p>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-indigo-400">{metric}</div>
                  <div className="text-sm text-gray-500">{metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
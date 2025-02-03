import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'CEO de TechStore',
    content: 'Incrementamos nuestras ventas en un 35% en MercadoLibre después de implementar las estrategias de análisis de datos.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Ana Martínez',
    role: 'Directora de E-commerce',
    content: 'La inteligencia de negocio nos permitió identificar oportunidades que no habíamos visto antes. Resultados sorprendentes.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
];

export default function Testimonials() {
  return (
    <section id="casos-de-éxito" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Casos de Éxito</h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubre cómo hemos ayudado a otras empresas a crecer
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
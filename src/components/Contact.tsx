import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contáctanos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubre cómo podemos ayudarte a potenciar tu negocio
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">contacto@dataretail.cl</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Teléfono</h3>
                <p className="mt-1 text-gray-600">+56 2 2123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Ubicación</h3>
                <p className="mt-1 text-gray-600">Santiago, Chile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
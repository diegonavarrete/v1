import React from 'react';
import { ContactForm } from '../ui/ContactForm';
import { ContactInfo } from '../ui/ContactInfo';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Comencemos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubre cómo podemos potenciar tu presencia en marketplaces
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
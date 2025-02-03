import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';

const brands = [
  {
    name: 'Logitech',
    logo: 'https://images.unsplash.com/your-image-url',
    color: '#00B8FC'
  },
  {
    name: 'AKG',
    logo: 'https://images.unsplash.com/your-image-url',
    color: '#FF4081'
  },
  {
    name: 'Harman Kardon',
    logo: 'https://images.unsplash.com/your-image-url',
    color: '#FFD700'
  },
  {
    name: 'Oster',
    logo: 'https://images.unsplash.com/your-image-url',
    color: '#4CAF50'
  },
  {
    name: 'Telefunken',
    logo: 'https://images.unsplash.com/your-image-url',
    color: '#E91E63'
  },
  {
    name: 'KZ',
    logo: 'https://images.unsplash.com/your-image-url',
    color: '#9C27B0'
  },
  {
    name: 'Ugreen',
    logo: 'https://images.unsplash.com/your-image-url',
    color: '#2196F3'
  }
];

export default function BrandCarousel() {
  return (
    <section className="py-16 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-white mb-12">
          Marcas que Confían en Nosotros
        </h2>
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <BrandLogo
                key={`${brand.name}-${index}`}
                name={brand.name}
                color={brand.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
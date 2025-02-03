import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import BrandCarousel from './components/sections/BrandCarousel';
import { ParticleProvider } from './contexts/ParticleContext';

function App() {
  return (
    <ParticleProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <BrandCarousel />
          <Experience />
        </main>
        <footer className="bg-black border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">MarketData</h3>
                <p className="text-gray-400">
                  Transformando el futuro del retail con inteligencia artificial.
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">© 2024 MarketData. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ParticleProvider>
  );
}

export default App;
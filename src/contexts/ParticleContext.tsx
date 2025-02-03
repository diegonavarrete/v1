import React, { createContext, useContext, useState } from 'react';

interface ParticleContextType {
  particleColor: string | null;
  updateParticleColor: (color: string | null) => void;
}

const ParticleContext = createContext<ParticleContextType>({
  particleColor: null,
  updateParticleColor: () => {},
});

export function ParticleProvider({ children }: { children: React.ReactNode }) {
  const [particleColor, setParticleColor] = useState<string | null>(null);

  const updateParticleColor = (color: string | null) => {
    setParticleColor(color);
  };

  return (
    <ParticleContext.Provider value={{ particleColor, updateParticleColor }}>
      {children}
    </ParticleContext.Provider>
  );
}

export const useParticleContext = () => useContext(ParticleContext);
import React from 'react';
import { useParticleContext } from '../../contexts/ParticleContext';

interface BrandLogoProps {
  name: string;
  color: string;
}

export function BrandLogo({ name, color }: BrandLogoProps) {
  const { updateParticleColor } = useParticleContext();

  return (
    <div
      className="flex-none w-32 h-20 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-white/20"
      onMouseEnter={() => updateParticleColor(color)}
      onMouseLeave={() => updateParticleColor(null)}
    >
      <span className="text-lg font-medium bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text">
        {name}
      </span>
    </div>
  );
}
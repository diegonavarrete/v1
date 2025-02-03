import React, { useCallback, useEffect } from 'react';
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useMemo } from "react";
import Particles from "react-tsparticles";
import { useParticleContext } from '../../contexts/ParticleContext';

export function NeuralParticles() {
  const { particleColor } = useParticleContext();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: particleColor ? [particleColor] : ["#4F46E5", "#A855F7", "#EC4899"],
      },
      links: {
        color: particleColor || "#4F46E5",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), [particleColor]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0"
    />
  );
}
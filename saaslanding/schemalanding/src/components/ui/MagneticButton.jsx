import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

export function MagneticButton({ children, className = '', onClick, intensity = 0.2 }) {
  const magneticRef = useMagnetic(intensity);

  return (
    <button
      ref={magneticRef}
      onClick={onClick}
      className={`transition-transform duration-200 ease-out inline-flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
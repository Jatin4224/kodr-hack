import React from 'react';

export function Glow({ className = "" }) {
  return (
    <div className={`absolute pointer-events-none rounded-full blur-3xl opacity-20 bg-[#FF5733] ${className}`} />
  );
}
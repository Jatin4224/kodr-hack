import React from 'react';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-[#FF5733] hover:bg-[#FF4520] text-black font-semibold shadow-lg shadow-[#FF5733]/20',
    secondary: 'bg-[#141418] hover:bg-white/10 text-white border border-white/10',
    ghost: 'hover:bg-white/5 text-[#9E9EA8] hover:text-white'
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 inline-flex items-center justify-center font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
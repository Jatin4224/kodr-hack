import React from 'react';

export function Badge({ children, variant = 'orange' }) {
  const styles = {
    orange: 'bg-[#FF5733]/10 text-[#FF5733] border-[#FF5733]/30',
    amber: 'bg-[#FFB300]/10 text-[#FFB300] border-[#FFB300]/30',
    muted: 'bg-white/5 text-[#9E9EA8] border-white/10'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono border ${styles[variant]}`}>
      {children}
    </span>
  );
}
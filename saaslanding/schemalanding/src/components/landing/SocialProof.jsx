import React from 'react';
import { motion } from 'framer-motion';
import { integrations } from '../../data/integrations';
import { ShieldCheck } from 'lucide-react';

export function SocialProof() {
  // Infinite scroll marquee array duplication
  const doubleIntegrations = [...integrations, ...integrations];

  return (
    <div className="py-12 border-y border-white/10 bg-[#0A0A0C] relative overflow-hidden select-none">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0C] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0C] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-8">
        <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest uppercase text-[#62626C] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FF5733]" />
          <span>Natively Integrates With Your Existing Stack</span>
        </div>
      </div>

      {/* Infinite Animated Marquee Container */}
      <div className="flex overflow-hidden relative w-full">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
          className="flex space-x-6 shrink-0"
        >
          {doubleIntegrations.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="group flex items-center space-x-3 bg-[#141418] border border-white/10 hover:border-[#FF5733]/40 px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,87,51,0.15)] cursor-default shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5733]/60 group-hover:bg-[#FF5733] group-hover:shadow-[0_0_8px_rgba(255,87,51,0.8)] transition-all" />
              <span className="font-mono text-xs font-semibold text-[#9E9EA8] group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
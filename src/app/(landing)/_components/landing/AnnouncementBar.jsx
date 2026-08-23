import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-[#0A0A0C] border-b border-white/10 overflow-hidden py-2.5 px-4">
      {/* Background Ambient Glow & Scanline */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5733]/15 via-[#FF4520]/10 to-transparent opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-center font-mono text-xs text-[#9E9EA8] relative z-10">
        <div className="flex items-center space-x-3 flex-wrap justify-center gap-y-1">
          {/* Version Badge */}
          <span className="inline-flex items-center space-x-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#FF5733] shadow-[0_0_12px_rgba(255,87,51,0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733] animate-ping" />
            <span>v2.0 RELEASE</span>
          </span>

          {/* Announcement Message */}
          <div className="flex items-center space-x-2 text-white/90">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5733] hidden sm:inline" />
            <span>
              Introducing <strong className="text-white font-semibold">Schema Studio 2.0</strong> — Visual ERD modeling with real-time SQL compilation.
            </span>
          </div>

          {/* Action Link */}
          <a
            href="#hero"
            className="group inline-flex items-center space-x-1 text-[#FF5733] hover:text-[#FF4520] font-semibold transition-all duration-200 ml-1"
          >
            <span>Explore Canvas</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
}
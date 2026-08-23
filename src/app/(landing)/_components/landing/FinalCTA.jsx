import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { AUTH_ROUTES } from '@/lib/config';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Database, Zap } from 'lucide-react';

export function FinalCTA() {
  const router = useRouter();

  return (
    <section className="py-32 bg-[#0A0A0C] border-t border-white/10 relative overflow-hidden">
      {/* Glow Effects & Grid Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#FF5733]/20 via-[#FF4520]/10 to-[#FFA048]/20 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Top Badge */}
        <Reveal className="flex justify-center">
          <span className="inline-flex items-center space-x-2 bg-[#FF5733]/10 border border-[#FF5733]/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#FF5733] shadow-[0_0_20px_rgba(255,87,51,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5733]" />
            <span>DEPLOY IN SECONDS</span>
          </span>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={0.1} className="mt-6">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Stop guessing how your <br />
            <span className="bg-gradient-to-r from-white via-[#FFA048] to-[#FF5733] bg-clip-text text-transparent">
              data fits together.
            </span>
          </h2>
          <p className="text-lg sm:text-2xl text-[#FF5733] font-mono mt-6 font-semibold tracking-wide">
            Design it visually. Compile it instantly.
          </p>
        </Reveal>

        {/* Interactive CTA Buttons */}
        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton onClick={() => router.push(AUTH_ROUTES.signUp)} className="bg-[#FF5733] hover:bg-[#FF4520] text-black font-extrabold text-base px-8 py-4 rounded-xl transition-all shadow-[0_0_40px_rgba(255,87,51,0.3)] hover:shadow-[0_0_60px_rgba(255,87,51,0.5)] active:scale-95 flex items-center space-x-2 group">
            <span>Start Designing Free</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </MagneticButton>

          <a
            href="#code"
            className="bg-white/5 hover:bg-white/10 text-white font-mono text-sm px-7 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-center space-x-2"
          >
            <Terminal className="w-4 h-4 text-[#FF5733]" />
            <span>View Architecture Docs</span>
          </a>
        </Reveal>

        {/* Feature Pills Footer Strip */}
        <Reveal delay={0.3} className="mt-16 pt-10 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#9E9EA8]">
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#FF5733]" />
            <span>Zero Lock-in</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Database className="w-4 h-4 text-[#FF5733]" />
            <span>Postgres & SQL Ready</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4 text-[#FF5733]" />
            <span>Instant AST Compiler</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5733] animate-pulse" />
            <span>No Credit Card Needed</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
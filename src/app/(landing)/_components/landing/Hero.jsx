import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { AUTH_ROUTES } from '@/lib/config';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight, Play, Terminal, Sparkles, ShieldCheck, Cpu } from 'lucide-react';

export function Hero() {
  const router = useRouter();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothScroll = useSpring(scrollYProgress, { damping: 22, stiffness: 90 });
  const rotateX = useTransform(smoothScroll, [0, 0.4], [10, 0]);
  const scale = useTransform(smoothScroll, [0, 0.4], [0.96, 1]);
  const opacity = useTransform(smoothScroll, [0, 0.7], [1, 0.3]);

  return (
    <section ref={containerRef} id="hero" className="relative pt-28 pb-32 overflow-hidden bg-[#0A0A0C]">
      {/* Dynamic Background Glows & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-[#FF5733]/20 via-[#FF4520]/10 to-[#FFA048]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF5733]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Reveal>
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full text-xs font-mono bg-[#141418] border border-[#FF5733]/30 text-[#FF5733] mb-8 backdrop-blur-2xl shadow-[0_0_20px_rgba(255,87,51,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#FF5733] animate-pulse" />
              <span className="tracking-widest uppercase font-bold text-[11px]">SCHEMA STUDIO 2.0 IS LIVE</span>
              <span className="text-white/20">|</span>
              <span className="text-white/70 flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-[#FF5733]" /> Visual DB Engine
              </span>
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#F5F5F5] tracking-tight leading-[0.93]">
              Design your database.{' '}
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] via-[#FFA048] to-[#FF4520] drop-shadow-[0_0_35px_rgba(255,87,51,0.3)]">
                See the whole system.
              </span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.2}>
            <p className="text-[#9E9EA8] max-w-2xl mx-auto mt-8 text-lg sm:text-xl font-normal leading-relaxed">
              Stop guessing foreign key trees and raw SQL migrations. Model complex architectures visually, validate relationships in real-time, and generate clean production code.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton onClick={() => router.push(AUTH_ROUTES.signUp)} className="bg-[#FF5733] hover:bg-[#FF4520] text-black font-extrabold px-8 py-4 rounded-xl text-sm transition-all shadow-[0_0_35px_-5px_rgba(255,87,51,0.5)] hover:shadow-[0_0_50px_-5px_rgba(255,87,51,0.7)]">
              Build Your Schema Free <ArrowRight className="w-4 h-4 ml-2 inline stroke-[3]" />
            </MagneticButton>
            <button className="bg-[#141418] hover:bg-[#1A1A20] border border-white/15 hover:border-[#FF5733]/40 text-white font-semibold px-7 py-4 rounded-xl text-sm transition-all inline-flex items-center backdrop-blur-xl group">
              <Play className="w-4 h-4 mr-2.5 fill-[#FF5733] text-[#FF5733] group-hover:scale-110 transition-transform" /> Interactive Demo
            </button>
          </Reveal>

          {/* Trust Highlights */}
          <Reveal delay={0.35} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#62626C]">
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5 text-[#FF5733]" /> No DB Connection Needed</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center"><Terminal className="w-4 h-4 mr-1.5 text-[#FFA048]" /> Exports SQL, Prisma, Drizzle</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center"><Cpu className="w-4 h-4 mr-1.5 text-[#FF4520]" /> Real-time Type Validation</span>
          </Reveal>
        </div>

        {/* 3D Visual Canvas Viewport */}
        <motion.div
          style={{ rotateX, scale, opacity, transformPerspective: 1200 }}
          className="mt-16 relative"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FF5733]/30 via-[#FF4520]/20 to-[#FFA048]/30 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
          <HeroCanvas />
        </motion.div>
      </div>
    </section>
  );
}
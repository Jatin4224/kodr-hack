import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { AUTH_ROUTES } from '@/lib/config';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const router = useRouter();

  return (
    <section id="pricing" className="py-28 bg-[#0A0A0C] border-t border-white/10 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#FF5733]/10 via-[#FFA048]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Transparent Billing"
          title="Predictable pricing for engineers & teams."
          description="Build unlimited database schemas free forever. Upgrade for real-time collaboration & advanced migrations."
        />

        {/* Monthly / Annual Toggle Switch */}
        <Reveal delay={0.1} className="mt-8 flex items-center justify-center space-x-4 font-mono text-xs">
          <span className={`transition-colors ${!isAnnual ? 'text-white font-bold' : 'text-[#62626C]'}`}>
            Monthly
          </span>
          
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-[#141418] border border-white/15 rounded-full p-1 relative transition-colors focus:outline-none"
          >
            <motion.div
              animate={{ x: isAnnual ? 26 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-5 h-5 bg-[#FF5733] rounded-full shadow-[0_0_10px_rgba(255,87,51,0.5)]"
            />
          </button>

          <span className={`flex items-center space-x-1.5 transition-colors ${isAnnual ? 'text-white font-bold' : 'text-[#62626C]'}`}>
            <span>Annual</span>
            <span className="bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
              SAVE 20%
            </span>
          </span>
        </Reveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 items-stretch">
          
          {/* Starter Plan */}
          <Reveal delay={0.15} className="flex">
            <div className="bg-[#141418] border border-white/10 hover:border-white/20 p-8 rounded-2xl flex flex-col justify-between w-full transition-all duration-300">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#62626C]">
                  <span>COMMUNITY</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-2">Starter</h3>
                <p className="text-xs text-[#9E9EA8] mt-1">For side projects & open source builders.</p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white font-mono">$0</span>
                  <span className="text-xs font-mono text-[#62626C] ml-2">/ forever free</span>
                </div>

                <ul className="mt-8 space-y-3.5 text-sm text-[#9E9EA8]">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Up to 3 active visual schemas</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> PostgreSQL & Prisma DDL Export</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Static AST Schema Validation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> SVG & PNG High-res Exports</li>
                </ul>
              </div>

              <button onClick={() => router.push(AUTH_ROUTES.signUp)} className="mt-8 w-full bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold py-3 rounded-xl border border-white/15 transition-all">
                Get Started Free
              </button>
            </div>
          </Reveal>

          {/* Pro Architect Plan (POPULAR) */}
          <Reveal delay={0.2} className="flex">
            <div className="bg-[#141418] border-2 border-[#FF5733]/80 p-8 rounded-2xl flex flex-col justify-between w-full relative shadow-[0_0_50px_rgba(255,87,51,0.15)] transition-all duration-300 scale-105">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5733] text-black text-[10px] font-bold font-mono uppercase tracking-wider px-3.5 py-1 rounded-full shadow-[0_0_15px_rgba(255,87,51,0.4)] flex items-center space-x-1">
                <Sparkles className="w-3 h-3 fill-black" />
                <span>MOST POPULAR</span>
              </span>

              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#FF5733] font-bold">
                  <span>INDIVIDUAL ARCHITECT</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-2">Pro Architect</h3>
                <p className="text-xs text-[#9E9EA8] mt-1">For serious full-stack developers & freelancers.</p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold text-white font-mono">
                    ${isAnnual ? '15' : '19'}
                  </span>
                  <span className="text-xs font-mono text-[#62626C] ml-2">/ month {isAnnual && '(billed annually)'}</span>
                </div>

                <ul className="mt-8 space-y-3.5 text-sm text-white/90">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> <strong>Unlimited</strong> visual schemas & tables</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Real-time Drizzle & TypeORM compile</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Focus Mode & Automatic Layout Engine</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Bi-directional Live AST Code Sync</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Dark & Cyberpunk High-Contrast Themes</li>
                </ul>
              </div>

              <button onClick={() => router.push(AUTH_ROUTES.signUp)} className="mt-8 w-full bg-[#FF5733] hover:bg-[#FF4520] text-black font-extrabold font-mono text-xs py-3.5 rounded-xl transition-all shadow-[0_0_25px_rgba(255,87,51,0.3)] flex items-center justify-center space-x-2">
                <span>Upgrade to Pro</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </Reveal>

          {/* Team Plan */}
          <Reveal delay={0.25} className="flex">
            <div className="bg-[#141418] border border-white/10 hover:border-white/20 p-8 rounded-2xl flex flex-col justify-between w-full transition-all duration-300">
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#62626C]">
                  <span>ENTERPRISE & ORGS</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-2">Team Engine</h3>
                <p className="text-xs text-[#9E9EA8] mt-1">For scaling engineering teams & agencies.</p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    ${isAnnual ? '39' : '49'}
                  </span>
                  <span className="text-xs font-mono text-[#62626C] ml-2">/ month {isAnnual && '(billed annually)'}</span>
                </div>

                <ul className="mt-8 space-y-3.5 text-sm text-[#9E9EA8]">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Real-time Multiplayer Canvas (5 seats)</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Git-style Migration Time-Travel</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> Custom SQL Dialect Compiler Generators</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FF5733] mr-2.5 shrink-0" /> SAML SSO & Priority Support Channel</li>
                </ul>
              </div>

              <button className="mt-8 w-full bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold py-3 rounded-xl border border-white/15 transition-all">
                Contact Sales
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
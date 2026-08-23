import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Layers, GitCommit, FileText, AlertTriangle, Flame, AlertOctagon } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-28 bg-[#0A0A0C] border-b border-white/10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#FF5733]/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="The Bottleneck"
          title="Database architecture gets chaotic fast."
          description="Without a unified visual source of truth, engineering teams waste dozens of hours decoding ambiguous SQL migrations and outdated documentation."
        />

        {/* Diagnostic Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          {/* Card 1: Unindexed Tables */}
          <Reveal delay={0.1}>
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-[#141418] border border-[#FFB300]/20 hover:border-[#FFB300]/50 p-7 rounded-2xl transition-all duration-300 relative group overflow-hidden shadow-lg h-full flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#FFB300]/10 rounded-full blur-2xl group-hover:bg-[#FFB300]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#FFB300]/10 border border-[#FFB300]/30 rounded-xl text-[#FFB300]">
                    <Layers className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="inline-flex items-center space-x-1 bg-[#FFB300]/10 border border-[#FFB300]/30 text-[#FFB300] font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    <span>ORPHAN ENTITIES</span>
                  </span>
                </div>

                <h3 className="font-bold text-white text-xl mt-6 group-hover:text-[#FFC438] transition-colors">
                  Scattered Schemas
                </h3>
                <p className="text-sm text-[#9E9EA8] mt-2.5 leading-relaxed">
                  Decoupled tables scattered across dozens of raw SQL migrations make broad refactoring high-risk and error-prone.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#FFB300]/80 bg-[#FFB300]/5 -mx-7 -mb-7 p-4 border-b rounded-b-2xl flex items-center justify-between">
                <span>Refactor Risk Index:</span>
                <span className="font-bold text-[#FFB300]">CRITICAL (88%)</span>
              </div>
            </motion.div>
          </Reveal>

          {/* Card 2: Foreign Key Spaghetti */}
          <Reveal delay={0.2}>
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-[#141418] border border-[#FF5733]/20 hover:border-[#FF5733]/50 p-7 rounded-2xl transition-all duration-300 relative group overflow-hidden shadow-lg h-full flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#FF5733]/10 rounded-full blur-2xl group-hover:bg-[#FF5733]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#FF5733]/10 border border-[#FF5733]/30 rounded-xl text-[#FF5733]">
                    <GitCommit className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="inline-flex items-center space-x-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    <AlertOctagon className="w-3 h-3 mr-1" />
                    <span>REF DRIFT</span>
                  </span>
                </div>

                <h3 className="font-bold text-white text-xl mt-6 group-hover:text-[#FFA048] transition-colors">
                  Complex Foreign Keys
                </h3>
                <p className="text-sm text-[#9E9EA8] mt-2.5 leading-relaxed">
                  Mental mapping of nested cascade rules breaks down as soon as engineering teams scale past 20+ interconnected entities.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#FF5733]/80 bg-[#FF5733]/5 -mx-7 -mb-7 p-4 border-b rounded-b-2xl flex items-center justify-between">
                <span>Mental Overhead:</span>
                <span className="font-bold text-[#FF5733]">HIGH (94%)</span>
              </div>
            </motion.div>
          </Reveal>

          {/* Card 3: Outdated Documentation */}
          <Reveal delay={0.3}>
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-[#141418] border border-[#FF334B]/20 hover:border-[#FF334B]/50 p-7 rounded-2xl transition-all duration-300 relative group overflow-hidden shadow-lg h-full flex flex-col justify-between"
            >
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#FF334B]/10 rounded-full blur-2xl group-hover:bg-[#FF334B]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#FF334B]/10 border border-[#FF334B]/30 rounded-xl text-[#FF334B]">
                    <FileText className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="inline-flex items-center space-x-1 bg-[#FF334B]/10 border border-[#FF334B]/30 text-[#FF334B] font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    <Flame className="w-3 h-3 mr-1" />
                    <span>STALE DOCS</span>
                  </span>
                </div>

                <h3 className="font-bold text-white text-xl mt-6 group-hover:text-[#FF6678] transition-colors">
                  Fragmented Context
                </h3>
                <p className="text-sm text-[#9E9EA8] mt-2.5 leading-relaxed">
                  Architecture specs live in Notion, stale diagrams in Figma, while production schemas drift away in git repositories.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#FF334B]/80 bg-[#FF334B]/5 -mx-7 -mb-7 p-4 border-b rounded-b-2xl flex items-center justify-between">
                <span>Documentation Sync:</span>
                <span className="font-bold text-[#FF334B]">OUT OF SYNC</span>
              </div>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
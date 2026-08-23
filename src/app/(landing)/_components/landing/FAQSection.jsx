import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/faqs';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Plus, Minus, HelpCircle, MessageSquare, Sparkles, Terminal } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 bg-[#0A0A0C] border-t border-white/10 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#FF5733]/15 via-[#FF4520]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Everything you need to know."
          description="Have questions about Database Canvas, raw SQL exports, or security? We've got answers."
        />

        {/* Accordion Container */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Reveal key={faq.question || idx} delay={idx * 0.05}>
                <motion.div
                  initial={false}
                  animate={{
                    borderColor: isOpen ? 'rgba(255, 87, 51, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                    backgroundColor: isOpen ? '#141418' : '#0E0E12',
                  }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'shadow-[0_0_30px_rgba(255,87,51,0.15)]' : 'hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 text-left flex justify-between items-center space-x-4 select-none group"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`p-2 rounded-lg border font-mono text-xs transition-colors ${
                          isOpen
                            ? 'bg-[#FF5733]/20 border-[#FF5733]/40 text-[#FF5733]'
                            : 'bg-white/5 border-white/10 text-white/40 group-hover:text-white'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-base sm:text-lg text-white group-hover:text-[#FFA048] transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`p-2 rounded-full border transition-all duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-[#FF5733] text-black border-[#FF5733] rotate-180'
                          : 'bg-white/5 border-white/10 text-[#9E9EA8] group-hover:border-white/25 group-hover:text-white'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#9E9EA8] leading-relaxed border-t border-white/5 font-sans">
                          <p>{faq.answer}</p>
                          
                          <div className="mt-4 pt-3 border-t border-white/5 flex items-center space-x-2 text-xs font-mono text-[#FF5733]">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Verified Architecture Standard</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Live Support Widget Banner */}
        <Reveal delay={0.4} className="mt-12">
          <div className="p-6 bg-[#141418] border border-white/10 rounded-2xl flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#FF5733]/10 border border-[#FF5733]/20 text-[#FF5733] rounded-xl">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Have more specific architectural questions?</div>
                <div className="text-[#9E9EA8] mt-0.5">Talk with our database systems engineering team directly.</div>
              </div>
            </div>

            <button className="bg-white/5 hover:bg-white/10 text-white font-bold border border-white/15 px-4 py-2.5 rounded-xl transition-all flex items-center space-x-2 active:scale-95">
              <Terminal className="w-3.5 h-3.5 text-[#FF5733]" />
              <span>Join Discord Architecture Channel</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
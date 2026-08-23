import React from 'react';
import { Database } from 'lucide-react';
import { FaGithub, FaXTwitter, FaDiscord } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/10 pt-20 pb-12 px-6 font-sans relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[#FF5733]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm relative z-10">
        
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center space-x-3 text-white font-bold">
            <div className="p-2 bg-[#FF5733]/10 border border-[#FF5733]/30 rounded-xl text-[#FF5733]">
              <Database className="w-5 h-5" />
            </div>
            <span className="text-lg">Schema Studio</span>
          </div>
          <p className="text-[#9E9EA8] text-xs leading-relaxed max-w-sm">
            Visual database architecture engine for modern engineering teams. Design visually, validate static constraints, and compile clean ORM schemas instantly.
          </p>

          <div className="flex items-center space-x-3 text-[#9E9EA8] pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors hover:text-white">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors hover:text-white">
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors hover:text-white">
              <FaDiscord className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Col 1 */}
        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">Product</h4>
          <ul className="space-y-2.5 text-xs text-[#9E9EA8]">
            <li><a href="#features" className="hover:text-[#FF5733] transition-colors">Infinite Canvas</a></li>
            <li><a href="#validator" className="hover:text-[#FF5733] transition-colors">AST Validator</a></li>
            <li><a href="#code" className="hover:text-[#FF5733] transition-colors">Code Generator</a></li>
            <li><a href="#pricing" className="hover:text-[#FF5733] transition-colors">Pricing Engine</a></li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">Resources</h4>
          <ul className="space-y-2.5 text-xs text-[#9E9EA8]">
            <li><a href="#" className="hover:text-[#FF5733] transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-[#FF5733] transition-colors">Prisma Architecture Guide</a></li>
            <li><a href="#" className="hover:text-[#FF5733] transition-colors">SQL DDL Specifications</a></li>
            <li><a href="#" className="hover:text-[#FF5733] transition-colors">Changelog v2.0</a></li>
          </ul>
        </div>

        {/* Links Col 3 */}
        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs text-[#9E9EA8]">
            <li><a href="#" className="hover:text-[#FF5733] transition-colors">About Systems</a></li>
            <li><a href="#" className="hover:text-[#FF5733] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FF5733] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#FF5733] transition-colors">Security Audit</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-[#62626C] gap-4">
        <div>© 2026 Schema Studio Inc. Built for developers who think in systems.</div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5733] animate-pulse" />
          <span>Systems Operational</span>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import { MagneticButton } from '../ui/MagneticButton';
import { Database, ArrowRight, Menu, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0C]/85 border-b border-white/10 px-6 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="p-2 bg-[#FF5733]/10 border border-[#FF5733]/30 rounded-xl text-[#FF5733] group-hover:bg-[#FF5733] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,87,51,0.15)]">
            <Database className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-bold tracking-tight text-white text-base">Schema Visualize</span>
              <span className="bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30 text-[9px] font-mono font-extrabold px-1.5 py-0.2 rounded">v2.0</span>
            </div>
            <span className="text-[10px] font-mono text-[#62626C] -mt-0.5 hidden sm:block">Visual Database Compiler</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-mono text-xs bg-[#141418] border border-white/10 px-4 py-1.5 rounded-full">
          <a href="#features" className="px-3 py-1 text-[#9E9EA8] hover:text-white transition-colors rounded-lg hover:bg-white/5">Features</a>
          <a href="#validator" className="px-3 py-1 text-[#9E9EA8] hover:text-white transition-colors rounded-lg hover:bg-white/5">Validator</a>
          <a href="#code" className="px-3 py-1 text-[#9E9EA8] hover:text-white transition-colors rounded-lg hover:bg-white/5">Engineers</a>
          <a href="#pricing" className="px-3 py-1 text-[#9E9EA8] hover:text-white transition-colors rounded-lg hover:bg-white/5">Pricing</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center space-x-2 text-xs font-mono text-[#9E9EA8] hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl border border-white/10 transition-all"
          >
            <FaGithub className="w-4 h-4" />
            <span>Star</span>
            <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-[#FF5733] font-bold">2.4k</span>
          </a>

          <button className="text-xs font-mono text-[#9E9EA8] hover:text-white transition-colors hidden sm:block px-3 py-2">
            Log in
          </button>

          <MagneticButton className="bg-[#FF5733] hover:bg-[#FF4520] text-black text-xs font-bold font-mono px-4 py-2.5 rounded-xl transition-all shadow-[0_0_20px_rgba(255,87,51,0.25)] flex items-center space-x-1.5">
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </MagneticButton>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9E9EA8] hover:text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 bg-[#141418] border-b border-white/10 mt-3 rounded-2xl font-mono text-sm space-y-3">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-[#9E9EA8] hover:text-white py-1.5">Features</a>
          <a href="#validator" onClick={() => setMobileMenuOpen(false)} className="block text-[#9E9EA8] hover:text-white py-1.5">Validator</a>
          <a href="#code" onClick={() => setMobileMenuOpen(false)} className="block text-[#9E9EA8] hover:text-white py-1.5">Engineers</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-[#9E9EA8] hover:text-white py-1.5">Pricing</a>
        </div>
      )}
    </header>
  );
}
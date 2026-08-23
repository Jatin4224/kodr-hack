import React from 'react';
import { useLenis } from './hooks/useLenis';
import { AnnouncementBar } from './components/landing/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/landing/Hero';
import { SocialProof } from './components/landing/SocialProof';
import { ProblemSection } from './components/landing/ProblemSection';
import { CodeGenerationSection } from './components/landing/CodeGenerationSection';
import { FeatureGrid } from './components/landing/FeatureGrid';
import { PricingSection } from './components/landing/PricingSection';
import { FAQSection } from './components/landing/FAQSection';
import { FinalCTA } from './components/landing/FinalCTA';
import { Footer } from './components/layout/Footer';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-[#050506] text-[#F5F5F5] antialiased selection:bg-emerald-500/30 selection:text-emerald-300 font-sans">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <CodeGenerationSection />
        <FeatureGrid />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
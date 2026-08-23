'use client'


import { useLenis } from './hooks/useLenis'
import { AnnouncementBar } from './landing/AnnouncementBar'
import { Navbar } from './layout/Navbar'
import { Hero } from './landing/Hero'
import { SocialProof } from './landing/SocialProof'
import { ProblemSection } from './landing/ProblemSection'
import { CodeGenerationSection } from './landing/CodeGenerationSection'
import { FeatureGrid } from './landing/FeatureGrid'
import { PricingSection } from './landing/PricingSection'
import { FAQSection } from './landing/FAQSection'
import { FinalCTA } from './landing/FinalCTA'
import { Footer } from './layout/Footer'

export function LandingPage() {
  useLenis()

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
  )
}

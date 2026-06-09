import React from 'react';
import AnnouncementBar from '@/components/webik/AnnouncementBar';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import HeroSection from '@/components/webik/HeroSection';
import TrustStrip from '@/components/webik/TrustStrip';
import ProblemSection from '@/components/webik/ProblemSection';
import SolutionSection from '@/components/webik/SolutionSection';
import ServicesSection from '@/components/webik/ServicesSection';
import TestimonialsSection from '@/components/webik/TestimonialsSection';
import ProcessSection from '@/components/webik/ProcessSection';
import OriginTeaser from '@/components/webik/OriginTeaser';
import FAQSection from '@/components/webik/FAQSection';
import FinalCTA from '@/components/webik/FinalCTA';

export default function Home() {
  return (
    <div style={{
      '--webik-lime': '#C8F048',
      '--webik-dark': '#0E1A0A',
      '--webik-dark-2': '#15240F',
      '--webik-cream': '#F5F3EC',
      '--webik-cream-2': '#EBE8DD',
      '--webik-muted': '#6B7560',
      background: 'var(--webik-cream)'
    }}>
      <AnnouncementBar />
      <StickyNav />
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProcessSection />
      <OriginTeaser />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
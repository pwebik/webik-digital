import React from 'react';
import AnnouncementBar from '../components/webik/AnnouncementBar';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import FinalCTA from '../components/webik/FinalCTA';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    num: '01',
    title: 'The Genesis Company',
    category: 'International — Professional Services',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/da528b25d_Genesis-mockup-1024x708.png',
    problem: 'The client needed a complete website that accurately reflected the quality and credibility of their brand. They had a clear vision but no existing digital presence that matched it — and they needed a team that could deliver without hand-holding the process.',
    whatWeDid: 'Pryce led the project end-to-end — from initial discovery through design, development, and final delivery. The focus was on clean, professional design that communicated trust and authority from the first impression. Communication was kept tight, timelines were respected, and every revision was handled with the same level of care as the first draft.',
    result: 'A clean, professional, and engaging website the client is proud of — delivered on time and to a standard that exceeded expectations.',
    quote: { text: 'Pryce was very responsive, detail-oriented, and professional. The website he delivered was clean, engaging, and exactly what we were looking for.', name: 'Tiana Emery', role: 'Director of Client Value — The Genesis Company' },
  },
  {
    num: '02',
    title: 'E-commerce Client',
    category: 'Lead Generation and E-commerce — Industry Anonymised',
    image: null,
    problem: 'The client had a website that was years old, visually outdated, and functionally broken. It was not generating leads, not converting visitors, and was actively damaging the credibility of a business that had a genuinely good product.',
    whatWeDid: 'Ray redesigned the website from the ground up with lead generation as the primary objective. The new design was clean, fast, and structured to move visitors toward conversion — with clear calls to action, improved navigation, and a visual identity that finally matched the quality of the product.',
    result: 'The redesign delivered the client\'s best sales performance in their two-year history. Leads increased, conversion improved, and the client had a digital presence they could actually stand behind.',
    quote: null,
  },
  {
    num: '03',
    title: 'Real Estate Development Company',
    category: 'Operations and Business Systems — Alfred Achurra',
    image: null,
    problem: 'During a period of rapid growth, the leadership team at a real estate development company found that their internal systems and communication processes had not kept up with the pace of scaling. Things were falling through the cracks, the CEO was stretched thin, and the team was starting to operate in silos.',
    whatWeDid: 'Alfred stepped in to restructure internal workflows, rebuild communication processes, and create operational clarity across the leadership team. He worked directly with the CEO to identify where time was being lost and built systems that gave it back.',
    result: 'Restored operational alignment across the leadership team, reduced friction in day-to-day decision-making, and gave the CEO measurable time back to focus on growth. A demonstration that Webik Corp brings business-level thinking to every engagement — not just design and development.',
    quote: null,
  },
];

const pageVars = {
  '--webik-lime': '#C8F048',
  '--webik-dark': '#0E1A0A',
  '--webik-dark-2': '#15240F',
  '--webik-cream': '#F5F3EC',
  '--webik-cream-2': '#EBE8DD',
  '--webik-muted': '#6B7560',
};

export default function Portfolio() {
  return (
    <div style={pageVars}>
      <AnnouncementBar />
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(circle at 80% 40%, rgba(200,240,72,0.07), transparent 55%)' }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( Portfolio )</span>
          <h1
            className="font-fraunces italic font-light leading-[1.0] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(42px, 7vw, 110px)', letterSpacing: '-0.02em' }}
          >
            We Let the Work Speak.
          </h1>
          <p className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[560px]" style={{ color: 'rgba(245,243,236,0.65)' }}>
            Every project here is a real engagement with a real client. We show you the problem, what we built, and what happened after. Because outcomes matter more than aesthetics.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto space-y-24 lg:space-y-32">
          {caseStudies.map((cs, i) => (
            <div key={i}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b" style={{ borderColor: 'var(--webik-cream-2)' }}>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--webik-lime)' }}>CASE STUDY / {cs.num}</span>
                  <h2 className="font-fraunces italic font-light text-3xl lg:text-4xl mt-2" style={{ color: 'var(--webik-dark)' }}>{cs.title}</h2>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-4 py-2 rounded-full" style={{ background: 'var(--webik-dark)', color: 'var(--webik-lime)' }}>{cs.category}</span>
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left — image or placeholder */}
                <div>
                  {cs.image ? (
                    <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ background: 'var(--webik-dark)' }}>
                      <img src={cs.image} alt={cs.title} className="w-full h-full object-cover opacity-90" />
                    </div>
                  ) : (
                    <div className="rounded-2xl aspect-[4/3] flex items-center justify-center" style={{ background: 'var(--webik-dark-2)', border: '1px solid rgba(200,240,72,0.1)' }}>
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'rgba(245,243,236,0.3)' }}>Industry Anonymised</span>
                    </div>
                  )}
                </div>

                {/* Right — copy */}
                <div className="space-y-8">
                  {[
                    { label: 'The Problem', text: cs.problem },
                    { label: 'What We Did', text: cs.whatWeDid },
                    { label: 'The Result', text: cs.result },
                  ].map((block, bi) => (
                    <div key={bi}>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>{block.label}</span>
                      <p className="font-inter text-base leading-relaxed mt-3" style={{ color: bi === 2 ? 'var(--webik-dark)' : 'var(--webik-muted)' }}>{block.text}</p>
                    </div>
                  ))}

                  {cs.quote && (
                    <div className="p-6 rounded-xl" style={{ background: 'var(--webik-dark)' }}>
                      <p className="font-grotesk font-light text-lg leading-relaxed" style={{ color: 'var(--webik-cream)' }}>"{cs.quote.text}"</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mt-4" style={{ color: 'var(--webik-lime)' }}>{cs.quote.name} · {cs.quote.role}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import GrainOverlay from './GrainOverlay';

export default function FinalCTA() {
  return (
    <section id="book" className="relative bg-[var(--webik-dark)] py-32 lg:py-44 px-6 lg:px-12 text-center overflow-hidden">
      <GrainOverlay />

      {/* Radial lime glow — matches Claude mockup */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(200,240,72,0.12), transparent 50%), radial-gradient(circle at 70% 50%, rgba(200,240,72,0.06), transparent 50%)',
        }}
      />

      <div className="max-w-[900px] mx-auto relative z-10">
        <h2
          className="font-fraunces font-light leading-[0.95] tracking-tight"
          style={{
            color: 'var(--webik-cream)',
            fontSize: 'clamp(48px, 8vw, 128px)',
            letterSpacing: '-0.04em',
          }}
        >
          Ready to launch<br />
          your{' '}
          <em className="italic" style={{ color: 'var(--webik-lime)' }}>
            digital presence?
          </em>
        </h2>

        <p className="mt-6 lg:mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[560px] mx-auto" style={{ color: 'rgba(245,243,236,0.7)' }}>
          Free 15-minute discovery call. No pressure, no pitch deck — just a conversation about whether we're the right partner for your business.
        </p>

        <a
          href="[CALENDLY_URL_PLACEHOLDER]"
          className="mt-10 lg:mt-14 inline-flex items-center gap-3 px-10 py-5 rounded-full font-inter font-medium text-base transition-all duration-300 group"
          style={{
            background: 'var(--webik-lime)',
            color: 'var(--webik-dark)',
            border: '1px solid var(--webik-lime)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--webik-cream)';
            e.currentTarget.style.borderColor = 'var(--webik-cream)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--webik-lime)';
            e.currentTarget.style.borderColor = 'var(--webik-lime)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Book a 15-min discovery call
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
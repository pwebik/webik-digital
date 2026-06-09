import React from 'react';
import { Link } from 'react-router-dom';
import GrainOverlay from './GrainOverlay';

export default function FinalCTA() {
  return (
    <section
      className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden text-center"
      style={{ background: 'var(--webik-dark)' }}
    >
      <GrainOverlay />
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle at 50% 60%, rgba(200,240,72,0.1), transparent 55%)' }}
      />
      <div className="max-w-[760px] mx-auto relative z-10">
        <h2
          className="font-fraunces italic font-light leading-[1.05]"
          style={{ color: 'var(--webik-cream)', fontSize: 'clamp(32px, 5vw, 72px)', letterSpacing: '-0.03em' }}
        >
          Ready to Own Your Digital Presence?
        </h2>
        <p className="mt-6 font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.65)' }}>
          Whether you are starting from scratch or ready to upgrade what you have, we are the team that shows up, stays in, and treats your goals like our own.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-inter font-medium text-base transition-all duration-400"
            style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-cream)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-lime)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            See What We Can Do Together
          </Link>
          <p className="font-fraunces italic text-sm" style={{ color: 'rgba(245,243,236,0.35)' }}>
            Not sure where to start? That is what the first call is for.
          </p>
        </div>
      </div>
    </section>
  );
}
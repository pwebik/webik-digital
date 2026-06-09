import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GrainOverlay from './GrainOverlay';

export default function HeroSection() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const noteRef = useRef(null);
  const monoRef = useRef(null);

  useEffect(() => {
    const els = [headlineRef, subRef, ctaRef, noteRef, monoRef];
    els.forEach((ref, i) => {
      if (!ref.current) return;
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(28px)';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-[92vh] flex items-center"
      style={{ background: 'var(--webik-dark)' }}
    >
      <GrainOverlay />

      {/* Big W background letter */}
      <div
        className="absolute right-[-6vw] top-1/2 -translate-y-1/2 select-none pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.07 }}
      >
        <img
          src="https://media.base44.com/images/public/69ecce3288377cd246349884/848d53c15_Group5.png"
          alt=""
          className="w-[65vw] max-w-[900px] object-contain"
          style={{ filter: 'invert(1)' }}
        />
      </div>

      {/* Subtle lime radial */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle at 15% 55%, rgba(200,240,72,0.09), transparent 50%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10 w-full">
        <div className="max-w-[820px]">
          {/* Eyebrow */}
          <p
            ref={monoRef}
            className="font-mono text-[11px] uppercase tracking-[0.25em] mb-8"
            style={{ color: 'var(--webik-lime)' }}
          >
            Webik Corp · Cebu, Philippines
          </p>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-fraunces italic font-light leading-[1.0] tracking-tight"
            style={{
              color: 'var(--webik-cream)',
              fontSize: 'clamp(48px, 8.5vw, 128px)',
              letterSpacing: '-0.03em',
            }}
          >
            Your Digital Team,<br />Not Just Your Agency.
          </h1>

          {/* Subhead */}
          <p
            ref={subRef}
            className="mt-8 font-inter text-base lg:text-xl leading-relaxed max-w-[600px]"
            style={{ color: 'rgba(245,243,236,0.65)' }}
          >
            We design, build, and grow digital presences for businesses that are serious about owning their corner of the internet. Senior-level thinking. Real partnership. No jargon.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-400"
              style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-cream)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-lime)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              See What We Can Do Together
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-400"
              style={{ background: 'transparent', color: 'var(--webik-cream)', border: '1px solid rgba(245,243,236,0.2)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,243,236,0.5)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,243,236,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              View Our Work
            </Link>
          </div>

          {/* Sub-note */}
          <p
            ref={noteRef}
            className="mt-5 font-fraunces italic text-sm"
            style={{ color: 'rgba(245,243,236,0.38)' }}
          >
            Not sure where to start? That is what the first call is for.
          </p>
        </div>

        {/* Bottom mono strip */}
        <p
          className="mt-16 lg:mt-24 font-mono text-[10px] uppercase tracking-[0.25em]"
          style={{ color: 'rgba(245,243,236,0.25)' }}
        >
          Trusted by businesses in the Philippines and across the globe.
        </p>
      </div>
    </section>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import GrainOverlay from './GrainOverlay';

export default function OriginTeaser() {
  return (
    <section
      className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden"
      style={{ background: 'var(--webik-dark)' }}
    >
      <GrainOverlay />
      <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>
            ( Why We Built This )
          </span>
          <h2
            className="font-grotesk font-light mt-5 leading-[1.05]"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.03em' }}
          >
            We Started Over Fast Food. We Are Building Something That Lasts.
          </h2>

          <div className="mt-8 space-y-5">
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.75)' }}>
              Webik Corp started the way a lot of good ideas do — with a group of friends who realized they had something worth building together. Former co-workers who had grown into senior roles across design, development, sales, and operations. One conversation turned into a registered company, and a side project turned into a mission.
            </p>
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.55)' }}>
              That mission is simple: make enterprise-level digital presence accessible to every business that deserves it — regardless of size or budget.
            </p>
          </div>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-inter text-base transition-colors"
            style={{ color: 'var(--webik-lime)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-cream)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-lime)'}
          >
            Read our full story on the About page →
          </Link>
        </div>

        {/* Image placeholder */}
        <div
          className="aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center relative"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,240,72,0.12)' }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="The Webik team at work"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,26,10,0.6), transparent)' }} />

        </div>
      </div>
    </section>
  );
}
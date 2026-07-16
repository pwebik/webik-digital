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
            Why We Built This
          </span>
          <h2
            className="font-grotesk font-light mt-5 leading-[1.05]"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.03em' }}
          >
            It Started with a Conversation.<br />It Became a Mission.
          </h2>

          <div className="mt-8 space-y-5">
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.75)' }}>
              Webik began with a conversation between friends. Former co-workers who had grown into senior roles across design, development, sales, and operations realized they had something worth building together. What started as a simple conversation grew into a registered company, and a side project evolved into a shared mission.
            </p>
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.55)' }}>
              The trust, collaboration, and lasting friendships we built over the years became the foundation of Webik. Those same values continue to shape how we work today. We don't just build websites, we build lasting partnerships. We're committed to becoming a long-term partner in our clients' growth.
            </p>
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.55)' }}>
              Our mission is simple: to make enterprise-quality digital services and a strong digital presence accessible to every business that deserves them, regardless of size or budget.
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
            src="https://media.base44.com/images/public/69ecce3288377cd246349884/79097b141_IMG_2529.jpg"
            alt="The Webik team at work"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,26,10,0.6), transparent)' }} />

        </div>
      </div>
    </section>
  );
}
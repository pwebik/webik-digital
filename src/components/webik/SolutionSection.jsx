import React from 'react';
import { Link } from 'react-router-dom';

export default function SolutionSection() {
  return (
    <section
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ background: 'var(--webik-dark)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>
              Who We Are
            </span>
            <h2
              className="font-grotesk font-light mt-5 leading-[1.05]"
              style={{ color: 'var(--webik-cream)', fontSize: 'clamp(32px, 4vw, 60px)', letterSpacing: '-0.03em' }}
            >
              A Team That Understands Business, Not Just Design.
            </h2>
          </div>

          <div className="space-y-5">
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.8)' }}>
              We're the digital team businesses can rely on long after their website goes live.
            </p>
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.65)' }}>
              We are Webik Corp, a full-service digital agency specializing in website design, website development, SEO, Answer Engine Optimization (AEO), branding, and digital marketing. Our team of designers, developers, strategists, and operations leaders has worked closely with business owners, built over 100 websites across a wide range of industries, and partnered with brands around the globe.
            </p>
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.65)' }}>
              We started this company because we believe growing businesses deserve the same strong digital foundation as big brands, and that getting there should not cost a fortune.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-4 font-inter text-base font-medium transition-colors underline underline-offset-4"
              style={{ color: 'var(--webik-lime)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-cream)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-lime)'}
            >
              Let's Talk About Your Business →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
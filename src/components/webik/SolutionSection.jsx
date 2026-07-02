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
              ( Who We Are )
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
              We are not a one-person freelance shop. We are not an agency that hands you a finished product and disappears.
            </p>
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.65)' }}>
              We are Webik Corp — a full-service digital agency built by a team of senior practitioners who have spent years doing this work at the highest level. Designers, developers, strategists, and operations leads who have sat in the room with business owners, built over 100 websites across industries, and worked with brands across the globe.
            </p>
            <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'rgba(245,243,236,0.65)' }}>
              We started this company because we believed growing businesses deserve the same digital foundation that big brands are built on — and that it should not cost a fortune to get there.
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
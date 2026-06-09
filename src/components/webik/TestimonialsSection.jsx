import React from 'react';
import GrainOverlay from './GrainOverlay';

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden"
      style={{ background: 'var(--webik-dark)' }}
    >
      <GrainOverlay />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>
          ( What Clients Say )
        </span>
        <h2
          className="font-fraunces italic font-light mt-5"
          style={{ color: 'var(--webik-cream)', fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.02em' }}
        >
          Do Not Take Our Word for It.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Real testimonial */}
          <div
            className="rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
            style={{ background: 'var(--webik-dark-2)', border: '1px solid rgba(200,240,72,0.12)' }}
          >
            <p
              className="font-grotesk font-light text-lg lg:text-xl leading-relaxed"
              style={{ color: 'var(--webik-cream)' }}
            >
              "Pryce was very responsive, detail-oriented, and professional. The website he delivered was clean, engaging, and exactly what we were looking for."
            </p>
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(245,243,236,0.08)' }}>
              <p className="font-inter font-medium text-sm" style={{ color: 'var(--webik-cream)' }}>Tiana Emery</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: 'var(--webik-lime)' }}>Director of Client Value — The Genesis Company</p>
            </div>
          </div>

          {/* Placeholder */}
          <div
            className="rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(245,243,236,0.1)' }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(245,243,236,0.2)' }}>
              Second testimonial coming soon
            </span>
            <p className="mt-3 font-fraunces italic text-sm" style={{ color: 'rgba(245,243,236,0.18)' }}>
              Client name to be confirmed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
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
          className="font-grotesk font-light mt-5"
          style={{ color: 'var(--webik-cream)', fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.03em' }}
        >
          Do Not Take Our Word for It.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
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

          {/* Testimonial 2 */}
          <div
            className="rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
            style={{ background: 'var(--webik-dark-2)', border: '1px solid rgba(200,240,72,0.12)' }}
          >
            <p
              className="font-grotesk font-light text-lg lg:text-xl leading-relaxed"
              style={{ color: 'var(--webik-cream)' }}
            >
              "Working with Pryce was a seamless experience from start to finish. He really took the time to understand our brand and delivered something we are genuinely proud to show clients."
            </p>
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(245,243,236,0.08)' }}>
              <p className="font-inter font-medium text-sm" style={{ color: 'var(--webik-cream)' }}>Lewis Normoyle</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: 'var(--webik-lime)' }}>Chief of Operations, LearnPac Systems Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
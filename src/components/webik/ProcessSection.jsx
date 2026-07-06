import React from 'react';

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn about your business, your goals, and what success looks like for you. No pitch. Just a real conversation.' },
  { num: '02', title: 'Design and Build', desc: 'You stay informed at every stage. Clear proposals, no surprises, and revisions until it is right.' },
  { num: '03', title: 'Launch and Stay', desc: 'Your new digital home goes live. And we do not disappear after this — we stay in as your ongoing digital team.' },
];

export default function ProcessSection() {
  return (
    <section
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ background: 'var(--webik-cream-2)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>
          How We Work
        </span>
        <h2
          className="font-grotesk font-light mt-5"
          style={{ color: 'var(--webik-dark)', fontSize: 'clamp(28px, 4.5vw, 60px)', letterSpacing: '-0.03em' }}
        >
          Simple Process. No Surprises.
        </h2>

        <div className="mt-14 grid sm:grid-cols-3 gap-px" style={{ background: 'rgba(14,26,10,0.08)' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-7 lg:p-10 group transition-colors duration-300"
              style={{ background: 'var(--webik-cream-2)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-cream)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-cream-2)'}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mb-5"
                style={{ background: 'var(--webik-dark)' }}
              >
                <span className="font-mono text-[11px] font-semibold" style={{ color: 'var(--webik-lime)' }}>{step.num}</span>
              </div>
              <h3 className="font-grotesk font-medium text-xl leading-snug" style={{ color: 'var(--webik-dark)' }}>
                {step.title}
              </h3>
              <p className="font-inter text-sm leading-relaxed mt-3" style={{ color: 'var(--webik-muted)' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
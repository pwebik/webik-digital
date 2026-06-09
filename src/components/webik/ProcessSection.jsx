import React from 'react';

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn about your business, your goals, and what success looks like for you. No pitch. Just a real conversation.' },
  { num: '02', title: 'Proposal', desc: 'We send a clear, no-jargon proposal scoped to exactly what you need. Nothing more, nothing less.' },
  { num: '03', title: 'Contract', desc: 'Simple terms, clear deliverables, no surprises.' },
  { num: '04', title: 'Kickoff', desc: 'We align on timelines, assets, and who to talk to. Then we get to work.' },
  { num: '05', title: 'Design and Build', desc: 'You stay informed at every stage. No going dark, no guessing games.' },
  { num: '06', title: 'Revisions', desc: 'We refine until it is right. Your feedback shapes the final product.' },
  { num: '07', title: 'Launch', desc: 'Your new digital home goes live. And we do not disappear after this.' },
];

export default function ProcessSection() {
  return (
    <section
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ background: 'var(--webik-cream-2)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>
          ( How We Work )
        </span>
        <h2
          className="font-fraunces italic font-light mt-5"
          style={{ color: 'var(--webik-dark)', fontSize: 'clamp(28px, 4.5vw, 60px)', letterSpacing: '-0.02em' }}
        >
          Simple Process. No Surprises.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(14,26,10,0.08)' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`p-7 lg:p-8 group transition-colors duration-300 ${i === 0 || i === 4 ? 'sm:col-span-1' : ''}`}
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
              <h3 className="font-fraunces italic font-light text-xl leading-snug" style={{ color: 'var(--webik-dark)' }}>
                {step.title}
              </h3>
              <p className="font-inter text-sm leading-relaxed mt-3" style={{ color: 'var(--webik-muted)' }}>
                {step.desc}
              </p>
            </div>
          ))}

          {/* Final spacer cell on large screens to even the 7-step grid */}
          <div
            className="hidden lg:flex items-center justify-center p-8"
            style={{ background: 'var(--webik-cream-2)' }}
          >
            <span className="font-fraunces italic text-5xl font-light" style={{ color: 'rgba(14,26,10,0.06)' }}>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
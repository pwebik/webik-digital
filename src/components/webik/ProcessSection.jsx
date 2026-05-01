import React from 'react';

const steps = [
  { num: '01', day: 'Day 1', title: 'Discovery', desc: '15-min call to understand your business, goals, and the customers you want to attract.' },
  { num: '02', day: 'Day 2–3', title: 'Design', desc: 'Our designers craft your direction. AI accelerates the heavy lifting; humans make every choice.' },
  { num: '03', day: 'Day 3–4', title: 'Build', desc: 'Built in Bricks, deployed via GitHub. Fast, secure, future-proof. AEO baked in.' },
  { num: '04', day: 'Day 5+', title: 'Guardian', desc: 'You launch. We protect. Monthly updates, security, and support — for as long as you need us.' },
];

export default function ProcessSection() {
  return (
    <section className="bg-[var(--webik-cream-2)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Process )</span>
        <h2 className="font-grotesk text-[var(--webik-dark)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
          AI-accelerated. <span style={{ color: 'var(--webik-lime)' }}>Human-perfected.</span>
        </h2>

        <div className="mt-16 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-10 right-10 h-px opacity-20"
            style={{ background: 'linear-gradient(to right, transparent, var(--webik-dark) 10%, var(--webik-dark) 90%, transparent)' }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Circle — rotates and fills lime on hover, matching Claude */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:-rotate-[8deg]"
                  style={{
                    background: 'var(--webik-cream)',
                    border: '1px solid rgba(14,26,10,0.15)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-lime)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-cream)'}
                >
                  <span className="font-grotesk text-2xl text-[var(--webik-dark)] font-light">{step.num}</span>
                </div>
                <div className="mt-5">
                  <span className="text-[var(--webik-muted)] font-mono text-[10px] uppercase tracking-[0.15em]">{step.day}</span>
                  <h3 className="font-grotesk text-[var(--webik-dark)] text-xl font-light mt-2">{step.title}</h3>
                  <p className="text-[var(--webik-muted)] font-inter text-sm leading-relaxed mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
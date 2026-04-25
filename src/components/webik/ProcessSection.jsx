import React from 'react';

const steps = [
  { num: '01', day: 'Day 1', title: 'Discovery', desc: '15-min call to understand your business, goals, and the customers you want to attract.' },
  { num: '02', day: 'Day 2–3', title: 'Design', desc: 'Our designers craft your direction. AI accelerates the heavy lifting; humans make every choice.' },
  { num: '03', day: 'Day 3–4', title: 'Build', desc: 'Built in Bricks, deployed via GitHub. Fast, secure, future-proof. AEO baked in.' },
  { num: '04', day: 'Day 5+', title: 'Guardian', desc: 'You launch. We protect. Monthly updates, security, and support — for as long as you need us.' },
];

export default function ProcessSection() {
  return (
    <section className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Process )</span>
        <h2 className="font-fraunces text-[var(--webik-dark)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
          AI-accelerated. Human-perfected.
        </h2>

        <div className="mt-16 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-[var(--webik-cream-2)]" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-[var(--webik-dark)] flex items-center justify-center bg-[var(--webik-cream)] relative z-10">
                  <span className="font-fraunces italic text-2xl text-[var(--webik-dark)] font-light">{step.num}</span>
                </div>
                <div className="mt-5">
                  <span className="text-[var(--webik-lime)] font-mono text-[10px] uppercase tracking-[0.2em] bg-[var(--webik-dark)] px-2.5 py-1 rounded-full inline-block">{step.day}</span>
                  <h3 className="font-fraunces text-[var(--webik-dark)] text-xl font-light mt-3">{step.title}</h3>
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
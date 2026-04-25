import React from 'react';

const stats = [
  { number: '5', label: 'Specialists' },
  { number: '100%', label: 'Cebu Based' },
  { number: '48 hrs', label: 'Rapid Deploy' },
  { number: '2+', label: 'Countries Served' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section label */}
        <div className="mb-12 lg:mb-16">
          <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( About )</span>
          <h2 className="font-fraunces text-[var(--webik-dark)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
            Meet Webik
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — body text */}
          <div className="space-y-6 text-[var(--webik-dark)] font-inter text-base sm:text-lg lg:text-[22px] leading-[1.4] opacity-0 animate-reveal">
            <p>
              Most Cebu SMEs face the same impossible choice: pay an agency ₱50,000 upfront and pray, or hire a freelancer who might ghost you halfway through.
            </p>
            <p>
              We built Webik to end that. As a SEC-registered corporation, we're contractually obligated to your success — not just your invoice. We combine premium design with cutting-edge Answer Engine Optimization (AEO) so your business shows up when customers ask Siri, ChatGPT, or Google for recommendations.
            </p>
            <p>
              We're AI-accelerated, human-perfected. Our team uses modern AI tools to ship faster, but every site is reviewed, optimized, and maintained by real developers and designers.
            </p>
          </div>

          {/* Right — 2x2 stats grid */}
          <div className="grid grid-cols-2 gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`p-6 lg:p-8 flex flex-col justify-center
                  ${i % 2 === 0 ? 'border-r border-[var(--webik-cream-2)]' : ''}
                  ${i < 2 ? 'border-b border-[var(--webik-cream-2)]' : ''}
                `}
              >
                <span className="font-fraunces font-light text-5xl sm:text-6xl lg:text-[72px] text-[var(--webik-dark)] leading-none">
                  <span className="text-[var(--webik-lime)]">{stat.number.charAt(0)}</span>
                  {stat.number.slice(1)}
                </span>
                <span className="mt-2 text-[var(--webik-muted)] font-inter text-sm uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
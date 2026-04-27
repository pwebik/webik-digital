import React from 'react';

const portfolioItems = [
  {
    name: 'Imitation Book',
    year: '2025',
    category: 'E-COMMERCE',
    tags: 'Shopify · Web Design · Web Development',
    link: 'https://webikdigital.com/portolios/imitation-book/',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/278dcc613_generated_e738f046.png',
    initial: 'IB',
  },
  {
    name: 'BitLyft',
    year: '2025',
    category: 'TECH',
    tags: 'Web Design · Web Development',
    link: 'https://webikdigital.com/portolios/bitlyft/',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/b81930732_generated_04b180b1.png',
    initial: 'BL',
  },
  {
    name: 'Biosis Designs',
    year: '2025',
    category: 'INDUSTRIAL',
    tags: 'Web Design · Web Development · Real Estate',
    link: 'https://webikdigital.com/portolios/biosis-designs/',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/e657f2b70_generated_5c04f6eb.png',
    initial: 'BD',
  },
  {
    name: 'The Genesis Company',
    year: '2025',
    category: 'BUSINESS',
    tags: 'Web Design · Web Development',
    link: 'https://webikdigital.com/portolios/the-genesis-company/',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/56e5d6252_generated_bf42b44c.png',
    initial: 'GC',
  },
];

export default function PortfolioSection() {
  return (
    <section id="work" className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Work )</span>
        <h2 className="font-fraunces text-[var(--webik-dark)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
          Real clients. Real <em className="italic">results.</em>
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-16 mt-16">
          {portfolioItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block transition-transform duration-[400ms] ${i % 2 === 1 ? 'lg:mt-[60px]' : ''}`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Image container */}
              <div
                className="relative overflow-hidden rounded-sm aspect-[4/3] mb-6 flex items-center justify-center"
                style={{ background: 'var(--webik-dark)' }}
              >
                <img
                  src={item.image}
                  alt={`${item.name} portfolio project by Webik Corp - ${item.tags}`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Fallback initial overlay when no image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--webik-lime)' }}
                  >
                    <span className="font-fraunces italic font-bold text-2xl" style={{ color: 'var(--webik-dark)' }}>
                      ↗
                    </span>
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--webik-muted)' }}>
                  {item.year} / {item.category}
                </span>
                <span className="font-mono text-[11px]" style={{ color: 'var(--webik-muted)' }}>↗</span>
              </div>
              <h3 className="font-fraunces text-[var(--webik-dark)] text-2xl lg:text-3xl font-light tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                {item.name}
              </h3>
              <p className="font-inter text-sm mt-1" style={{ color: 'var(--webik-muted)' }}>{item.tags}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
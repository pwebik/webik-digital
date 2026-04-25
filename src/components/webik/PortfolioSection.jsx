import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    name: 'Imitation Book',
    year: '2025',
    category: 'E-COMMERCE',
    tags: 'Shopify · Web Design · Web Development',
    link: 'https://webikdigital.com/portolios/imitation-book/',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/278dcc613_generated_e738f046.png',
    initial: 'I',
  },
  {
    name: 'BitLyft',
    year: '2025',
    category: 'TECH',
    tags: 'Web Design · Web Development',
    link: 'https://webikdigital.com/portolios/bitlyft/',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/b81930732_generated_04b180b1.png',
    initial: 'B',
  },
  {
    name: 'Biosis Designs',
    year: '2025',
    category: 'INDUSTRIAL',
    tags: 'Web Design · Web Development · Real Estate',
    link: 'https://webikdigital.com/portolios/biosis-designs/',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/e657f2b70_generated_5c04f6eb.png',
    initial: 'B',
  },
  {
    name: 'The Genesis Company',
    year: '2025',
    category: 'BUSINESS',
    tags: 'Web Design · Web Development',
    link: 'https://webikdigital.com/portolios/the-genesis-company/',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/56e5d6252_generated_bf42b44c.png',
    initial: 'G',
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

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {portfolioItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block ${i % 2 === 1 ? 'lg:mt-[60px]' : ''}`}
            >
              <div className="relative overflow-hidden rounded-xl bg-[var(--webik-dark)] aspect-[4/3]">
                <img
                  src={item.image}
                  alt={`${item.name} portfolio project by Webik Corp - ${item.tags}`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--webik-lime)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-[var(--webik-dark)]" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-fraunces text-[var(--webik-dark)] text-xl lg:text-2xl font-light">{item.name}</h3>
                  <span className="text-[var(--webik-muted)] font-inter text-xs">— {item.year}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[var(--webik-lime)] font-mono text-[10px] uppercase tracking-[0.15em] bg-[var(--webik-dark)] px-2 py-0.5 rounded-full">{item.category}</span>
                  <span className="text-[var(--webik-muted)] font-inter text-xs">{item.tags}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
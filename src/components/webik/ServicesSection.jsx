import React from 'react';
import GrainOverlay from './GrainOverlay';

const services = [
  {
    num: '01',
    title: 'The Launchpad',
    subtitle: 'PREMIUM ONE-PAGE WEBSITE',
    desc: 'For cafes, clinics, and service providers ready to look legitimate. Stunning, mobile-responsive sites built on enterprise-grade tech — live in 48 hours.',
    features: [
      'Built on Bricks (fastest visual builder)',
      'Mobile-first for the Cebuano market',
      'Custom design, never templated',
      'SEO + AEO baked in from day one',
    ],
  },
  {
    num: '02',
    title: 'The Guardian',
    subtitle: 'MANDATORY CARE PLAN',
    desc: "Your digital insurance policy. We don't just host — we protect, patch, and update your site monthly. The thing freelancers never give you.",
    features: [
      'Premium cloud hosting + domain management',
      'Professional business email (info@yourbiz.com)',
      'Monthly security patches & updates',
      'Content updates (text/image changes)',
    ],
  },
  {
    num: '03',
    title: 'A.E.O.',
    subtitle: 'ANSWER ENGINE OPTIMIZATION',
    desc: 'We speak the language of AI. Every Webik site includes Schema Markup — code that tells ChatGPT, Siri, and Google exactly who you are and why you matter.',
    features: [
      'LocalBusiness schema for Cebu visibility',
      'FAQ schema for AI answer engines',
      'Optimized for "Best [X] in Cebu" queries',
      'Future-proof for the AI search era',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[var(--webik-dark)] py-20 lg:py-32 px-6 lg:px-12">
      <GrainOverlay />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Services )</span>
        <h2 className="font-grotesk text-[var(--webik-cream)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4 max-w-[700px]">
          Built like a <span style={{ color: 'var(--webik-lime)' }}>partnership.</span> Priced like a subscription.
        </h2>

        {/* Grid with 1px gap borders like Claude */}
        <div
          className="grid lg:grid-cols-3 mt-16"
          style={{ gap: '1px', background: 'rgba(245,243,236,0.12)', border: '1px solid rgba(245,243,236,0.12)' }}
        >
          {services.map((svc, i) => (
            <div
              key={i}
              className="p-8 lg:p-12 transition-colors duration-300 cursor-default"
              style={{ background: 'var(--webik-dark)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
            >
              <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: 'var(--webik-lime)' }}>SERVICE / {svc.num}</span>
              <h3
                className="font-grotesk font-light mt-24 lg:mt-28 leading-none tracking-tight"
                style={{ color: 'var(--webik-cream)', fontSize: 'clamp(32px,3.5vw,44px)', letterSpacing: '-0.03em' }}
              >
                {svc.title}
              </h3>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.1em] mt-3 mb-6" style={{ color: 'var(--webik-lime)' }}>{svc.subtitle}</p>
              <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,243,236,0.75)' }}>{svc.desc}</p>
              <ul
                className="border-t pt-5"
                style={{ borderColor: 'rgba(245,243,236,0.12)' }}
              >
                {svc.features.map((f, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-2.5 font-inter text-sm py-2.5 border-b"
                    style={{ color: 'rgba(245,243,236,0.85)', borderColor: 'rgba(245,243,236,0.12)' }}
                  >
                    <span className="shrink-0 font-semibold" style={{ color: 'var(--webik-lime)' }}>+</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
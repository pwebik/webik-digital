import React from 'react';

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
    <section id="services" className="bg-[var(--webik-dark)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Services )</span>
        <h2 className="font-fraunces text-[var(--webik-cream)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4 max-w-[700px]">
          Built like a <em className="italic">partnership.</em> Priced like a subscription.
        </h2>

        <div className="grid lg:grid-cols-3 gap-0 mt-16">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`p-6 lg:p-10 ${i < services.length - 1 ? 'lg:border-r border-[var(--webik-dark-2)]' : ''} ${i > 0 ? 'border-t lg:border-t-0 border-[var(--webik-dark-2)]' : ''}`}
            >
              <span className="font-inter text-xs tracking-wide" style={{color:'var(--webik-muted)'}}>SERVICE / {svc.num}</span>
              <h3 className="font-fraunces text-2xl lg:text-3xl font-light mt-3" style={{color:'var(--webik-cream)'}}>{svc.title}</h3>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] mt-2" style={{color:'var(--webik-lime)'}}>{svc.subtitle}</p>
              <p className="font-inter text-sm leading-relaxed mt-5" style={{color:'rgba(245,243,236,0.7)'}}>{svc.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {svc.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 font-inter text-sm" style={{color:'rgba(245,243,236,0.8)'}}>
                    <span className="text-xs mt-1 shrink-0" style={{color:'var(--webik-lime)'}}>+</span>
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
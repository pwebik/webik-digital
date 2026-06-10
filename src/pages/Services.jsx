import React from 'react';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import GrainOverlay from '@/components/webik/GrainOverlay';
import HeroBackground from '@/components/webik/HeroBackground';
import FinalCTA from '@/components/webik/FinalCTA';

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
    ideal: 'Ideal for new businesses, restaurants, clinics, and service providers.',
  },
  {
    num: '02',
    title: 'The Guardian',
    subtitle: 'MONTHLY CARE PLAN',
    desc: "Your digital insurance policy. We don't just host — we protect, patch, and update your site monthly. The thing freelancers never give you.",
    features: [
      'Premium cloud hosting + domain management',
      'Professional business email (info@yourbiz.com)',
      'Monthly security patches & updates',
      'Content updates (text/image changes)',
      'Priority support response',
    ],
    ideal: 'Required with every Launchpad build. Keeps your site alive and thriving.',
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
    ideal: 'Included in every build. The future of how customers find businesses.',
  },
  {
    num: '04',
    title: 'Custom Builds',
    subtitle: 'ENTERPRISE & E-COMMERCE',
    desc: 'Multi-page sites, Shopify stores, branding systems, and complex integrations — built for businesses ready to scale beyond a one-pager.',
    features: [
      'Multi-page architecture',
      'E-commerce & Shopify development',
      'Branding & identity systems',
      'Custom animations & integrations',
      'Dedicated project management',
    ],
    ideal: 'For growing businesses that need more than a landing page.',
  },
];

const process = [
  { num: '01', title: 'Discovery Call', desc: 'We learn about your business, your goals, and what success looks like for you. No pitch. Just a real conversation.' },
  { num: '02', title: 'Design and Build', desc: 'You stay informed at every stage. Clear proposals, no surprises, and revisions until it is right.' },
  { num: '03', title: 'Launch and Stay', desc: 'Your new digital home goes live. And we do not disappear after this — we stay in as your ongoing digital team.' },
];

export default function Services() {
  return (
    <div style={{ background: 'var(--webik-cream)' }}>
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <HeroBackground />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( Services )</span>
          <h1
            className="font-grotesk font-light leading-[0.95] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.04em' }}
          >
            Built like a <span style={{ color: 'var(--webik-lime)' }}>partnership.</span><br />Priced like a subscription.
          </h1>
          <p className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[580px]" style={{ color: 'rgba(245,243,236,0.7)' }}>
            Every service we offer is designed for one thing: your long-term digital success — not just a beautiful website.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-px" style={{ background: 'rgba(245,243,236,0.1)' }}>
            {services.map((svc, i) => (
              <div
                key={i}
                className="p-8 lg:p-12 transition-colors duration-300"
                style={{ background: 'var(--webik-dark)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: 'var(--webik-lime)' }}>SERVICE / {svc.num}</span>
                </div>
                <h3
                  className="font-grotesk font-light mt-10 leading-none tracking-tight"
                  style={{ color: 'var(--webik-cream)', fontSize: 'clamp(32px, 3.5vw, 48px)', letterSpacing: '-0.03em' }}
                >
                  {svc.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] mt-3 mb-5" style={{ color: 'var(--webik-lime)' }}>{svc.subtitle}</p>
                <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,243,236,0.75)' }}>{svc.desc}</p>
                <ul className="border-t pt-5 space-y-0" style={{ borderColor: 'rgba(245,243,236,0.12)' }}>
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
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: 'rgba(245,243,236,0.4)' }}>{svc.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>( How It Works )</span>
          <h2 className="font-grotesk font-light text-4xl lg:text-5xl mt-4 leading-tight" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.03em' }}>
            From first call to live site — in <span style={{ color: 'var(--webik-lime)' }}>days,</span> not months.
          </h2>
          <div className="grid sm:grid-cols-3 gap-px mt-14" style={{ background: 'rgba(14,26,10,0.08)' }}>
            {process.map((step, i) => (
              <div
                key={i}
                className="p-7 lg:p-10 group transition-colors duration-300"
                style={{ background: 'var(--webik-cream-2)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-cream)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-cream-2)'}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center mb-5" style={{ background: 'var(--webik-dark)' }}>
                  <span className="font-mono text-[11px] font-semibold" style={{ color: 'var(--webik-lime)' }}>{step.num}</span>
                </div>
                <h3 className="font-grotesk font-medium text-xl leading-snug" style={{ color: 'var(--webik-dark)' }}>{step.title}</h3>
                <p className="font-inter text-sm leading-relaxed mt-3" style={{ color: 'var(--webik-muted)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
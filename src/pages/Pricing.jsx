import React, { useState, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import StickyNav from '@/components/webik/StickyNav';
import FinalCTA from '@/components/webik/FinalCTA';
import Footer from '@/components/webik/Footer';
import GrainOverlay from '@/components/webik/GrainOverlay';

async function detectPhilippines() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    return data.country_code === 'PH';
  } catch {
    return true;
  }
}

const faqs = [
  { q: 'Is the Guardian care plan really mandatory?', a: 'Yes. Without ongoing care, websites break: domains expire, plugins go out of date, security holes appear. The Guardian is what makes our model sustainable — and what protects you from the freelancer ghosting problem.' },
  { q: 'Can I cancel after the first year?', a: 'After the initial 12-month commitment, you can cancel anytime with 30 days\' notice. We\'ll provide a full export of your site files and help you transition.' },
  { q: 'Are there any hidden fees?', a: 'No. The Launchpad is a one-time setup fee. The Guardian is a flat monthly subscription. Custom builds are quoted per project with no surprises.' },
  { q: 'Can I upgrade from a Launchpad to a custom site later?', a: 'Absolutely. Many of our clients start with a Launchpad and upgrade as their business grows. We\'ll credit your existing Guardian subscription toward the new build.' },
];

export default function Pricing() {
  const [isPhilippines, setIsPhilippines] = useState(null);

  useEffect(() => {
    detectPhilippines().then(setIsPhilippines);
  }, []);

  const launchpadPrice = isPhilippines ? '₱5,999' : '$300';
  const guardianPrice  = isPhilippines ? '₱1,500' : '$199';

  const plans = [
    {
      tag: 'Setup / One-Time',
      name: 'The Launchpad',
      price: launchpadPrice,
      priceMeta: 'One-Time · One-Page Website',
      features: [
        'Custom one-page design',
        'Mobile-first, fast-loading',
        'AEO + Schema markup baked in',
        '48-hour rapid deployment',
        'Built on Bricks (enterprise-grade)',
      ],
      cta: 'Book a discovery call',
      featured: false,
      badge: null,
      isSubscription: false,
    },
    {
      tag: 'Care Plan / Monthly',
      name: 'The Guardian',
      price: guardianPrice,
      priceMeta: '12-Month Minimum · Cancel Anytime After',
      features: [
        'Premium cloud hosting + domain',
        'Professional business email',
        'Monthly security patches',
        'Content updates (text/image)',
        'Priority support response',
      ],
      cta: 'Subscribe now',
      featured: true,
      badge: 'Required',
      isSubscription: true,
    },
    {
      tag: 'Custom / Enterprise',
      name: 'Custom Build',
      price: 'Custom',
      priceMeta: 'Quoted per project',
      features: [
        'Multi-page & complex builds',
        'E-commerce & Shopify stores',
        'Branding & identity systems',
        'Custom animations & integrations',
        'Dedicated project management',
      ],
      cta: 'Get a custom quote',
      featured: false,
      badge: 'Custom',
      isSubscription: false,
    },
  ];

  return (
    <div style={{ background: 'var(--webik-dark)' }}>
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="absolute right-[-5vw] top-0 h-full w-[55vw] select-none pointer-events-none" aria-hidden="true" style={{ opacity: 0.12 }}>
          <img src="https://media.base44.com/images/public/69ecce3288377cd246349884/848d53c15_Group5.png" alt="" className="w-full h-full object-cover object-left" style={{ filter: 'invert(1)' }} />
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( Pricing )</span>
          <h1
            className="font-grotesk font-light leading-[0.92] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.04em' }}
          >
            Lower risk.<br />Higher <span style={{ color: 'var(--webik-lime)' }}>partnership.</span>
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="font-inter text-base lg:text-lg leading-relaxed max-w-[500px]" style={{ color: 'rgba(245,243,236,0.7)' }}>
              Transparent pricing. No ₱50,000 upfront gambles. No freelancer ghosting.
            </p>
            {isPhilippines === null && (
              <div className="flex items-center gap-2 font-mono text-xs" style={{ color: 'var(--webik-muted)' }}>
                <Loader2 size={12} className="animate-spin" /> Detecting location…
              </div>
            )}
            {isPhilippines !== null && (
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] px-4 py-2 rounded-full"
                style={{ background: 'rgba(200,240,72,0.1)', border: '1px solid rgba(200,240,72,0.25)', color: 'var(--webik-lime)' }}>
                {isPhilippines ? '🇵🇭 PH Pricing' : '🌍 International Pricing'}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-6 lg:px-12 pb-20 lg:pb-28" style={{ background: 'var(--webik-dark)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 lg:p-10 flex flex-col relative overflow-hidden"
                style={{
                  background: plan.featured ? 'var(--webik-cream)' : 'transparent',
                  border: plan.featured ? 'none' : '1px solid rgba(245,243,236,0.12)',
                }}
              >
                {plan.badge && (
                  <span
                    className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: plan.featured ? 'var(--webik-lime)' : 'rgba(200,240,72,0.12)',
                      color: plan.featured ? 'var(--webik-dark)' : 'var(--webik-lime)',
                      border: plan.featured ? 'none' : '1px solid rgba(200,240,72,0.3)',
                    }}
                  >
                    {plan.badge}
                  </span>
                )}

                <span className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--webik-muted)' }}>
                  {plan.tag}
                </span>
                <h3
                  className="font-grotesk text-2xl font-semibold mt-3"
                  style={{ color: plan.featured ? 'var(--webik-dark)' : 'var(--webik-cream)' }}
                >
                  {plan.name}
                </h3>

                <div className="mt-6 min-h-[72px] flex flex-col justify-center">
                  {isPhilippines === null ? (
                    <div className="flex items-center gap-2" style={{ color: 'var(--webik-muted)' }}>
                      <Loader2 size={16} className="animate-spin" />
                      <span className="font-inter text-sm">Loading price…</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span
                          className="font-grotesk font-semibold text-5xl lg:text-[52px] leading-none"
                          style={{ color: plan.featured ? 'var(--webik-dark)' : 'var(--webik-cream)' }}
                        >
                          {plan.price}
                        </span>
                        {plan.isSubscription && (
                          <span className="font-inter text-base" style={{ color: 'var(--webik-muted)' }}>/mo</span>
                        )}
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mt-2"
                        style={{ color: plan.featured ? 'var(--webik-muted)' : 'rgba(245,243,236,0.45)' }}>
                        {plan.priceMeta}
                      </p>
                    </>
                  )}
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 font-inter text-sm"
                      style={{ color: plan.featured ? 'rgba(14,26,10,0.8)' : 'rgba(245,243,236,0.75)' }}>
                      <Check size={16} className="shrink-0 mt-0.5"
                        style={{ color: plan.featured ? 'var(--webik-dark)' : 'var(--webik-lime)' }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-inter font-medium transition-colors"
                  style={
                    plan.featured
                      ? { background: 'var(--webik-dark)', color: 'var(--webik-cream)' }
                      : { border: '1px solid rgba(245,243,236,0.25)', color: 'var(--webik-cream)' }
                  }
                  onMouseEnter={e => {
                    if (plan.featured) e.currentTarget.style.background = 'var(--webik-dark-2)';
                    else e.currentTarget.style.background = 'rgba(245,243,236,0.08)';
                  }}
                  onMouseLeave={e => {
                    if (plan.featured) e.currentTarget.style.background = 'var(--webik-dark)';
                    else e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {plan.cta} →
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center font-inter text-sm mt-10" style={{ color: 'var(--webik-muted)' }}>
            All Launchpad builds include a mandatory Guardian subscription. Custom builds are quoted per project.
          </p>
        </div>
      </section>

      {/* What's included explainer */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>( Included in Every Build )</span>
          <h2 className="font-grotesk font-light text-4xl lg:text-5xl mt-4 leading-tight" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.03em' }}>
            Not just a website — a <span style={{ color: 'var(--webik-lime)' }}>digital foundation.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-14" style={{ background: 'var(--webik-cream-2)' }}>
            {[
              { icon: '⚡', title: '48-Hour Deploy', desc: 'From kickoff to live site in as little as 48 hours. No waiting weeks.' },
              { icon: '🤖', title: 'AEO Built-In', desc: 'Schema markup so AI assistants can recommend your business when customers ask.' },
              { icon: '📱', title: 'Mobile-First', desc: 'Your site works flawlessly on every device, screen size, and browser.' },
              { icon: '🔒', title: 'Security & Patches', desc: 'Monthly security updates and patches so your site stays protected.' },
              { icon: '✉️', title: 'Business Email', desc: 'Professional email address (info@yourbiz.com) included with every Guardian plan.' },
              { icon: '📊', title: 'SEO Foundation', desc: 'Proper meta tags, page structure, and on-page SEO from day one.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 transition-colors duration-300"
                style={{ background: 'var(--webik-cream)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-cream-2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-cream)'}
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-inter font-semibold text-base mt-4" style={{ color: 'var(--webik-dark)' }}>{item.title}</h3>
                <p className="font-inter text-sm leading-relaxed mt-2" style={{ color: 'var(--webik-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="max-w-[900px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( Pricing FAQ )</span>
          <h2 className="font-grotesk font-light text-4xl lg:text-5xl mt-4 leading-tight" style={{ color: 'var(--webik-cream)', letterSpacing: '-0.03em' }}>
            Common questions.
          </h2>
          <div className="mt-12 divide-y" style={{ borderColor: 'rgba(245,243,236,0.1)' }}>
            {faqs.map((faq, i) => (
              <PricingFAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}

function PricingFAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5 lg:py-6" style={{ borderColor: 'rgba(245,243,236,0.1)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <span className="font-inter text-base lg:text-lg font-medium" style={{ color: 'var(--webik-cream)' }}>{faq.q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 font-mono text-lg leading-none ${open ? 'rotate-45' : ''}`}
          style={{ borderColor: 'rgba(245,243,236,0.25)', color: 'var(--webik-lime)' }}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="font-inter text-sm lg:text-base leading-relaxed pr-12" style={{ color: 'rgba(245,243,236,0.65)' }}>{faq.a}</p>
      </div>
    </div>
  );
}
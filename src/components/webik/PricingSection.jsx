import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

async function detectPhilippines() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    return data.country_code === 'PH';
  } catch {
    return true; // default to PH pricing on error
  }
}

export default function PricingSection() {
  const [isPhilippines, setIsPhilippines] = useState(null); // null = loading

  useEffect(() => {
    detectPhilippines().then(setIsPhilippines);
  }, []);

  const launchpadPrice = isPhilippines ? '₱5,999' : '$300';
  const guardianPrice  = isPhilippines ? '₱1,500' : '$199';
  const priceSuffix    = isPhilippines ? '/mo' : '/mo';

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
      cta: 'Book a 15-min discovery call',
      ctaInternal: true,
      featured: false,
      badge: null,
      isSubscription: false,
    },
    {
      tag: 'Care Plan / Monthly',
      name: 'The Guardian',
      price: guardianPrice,
      priceSuffix,
      priceMeta: '12-Month Minimum · Cancel Anytime After',
      features: [
        'Premium cloud hosting + domain',
        'Professional business email',
        'Monthly security patches',
        'Content updates (text/image)',
        'Priority support response',
      ],
      cta: 'Subscribe now',
      ctaInternal: true,
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
      ctaInternal: true,
      featured: false,
      badge: 'Custom',
      isSubscription: false,
    },
  ];

  return (
    <section id="pricing" className="relative bg-[var(--webik-dark)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Pricing )</span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4">
          <h2 className="font-grotesk text-[var(--webik-cream)] text-3xl sm:text-4xl lg:text-5xl font-light">
            Lower risk. Higher <span style={{ color: 'var(--webik-lime)' }}>partnership.</span>
          </h2>
          {isPhilippines === null && (
            <div className="flex items-center gap-2 text-[var(--webik-muted)] font-mono text-xs">
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

        <div className="grid md:grid-cols-3 gap-6 mt-16">
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
                        <span className="font-inter text-base" style={{ color: 'var(--webik-muted)' }}>{plan.priceSuffix}</span>
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
                {plan.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-[var(--webik-muted)] font-inter text-sm mt-10">
          All Launchpad builds include a mandatory Guardian subscription. Custom builds are quoted per project.
        </p>
      </div>
    </section>
  );
}
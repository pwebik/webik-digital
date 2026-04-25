import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[var(--webik-dark)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Pricing )</span>
        <h2 className="font-fraunces text-[var(--webik-cream)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
          Lower risk. Higher <em className="italic">partnership.</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {/* Card 1 — The Launchpad */}
          <div className="border border-[var(--webik-dark-2)] rounded-2xl p-8 lg:p-10 flex flex-col">
            <span className="text-[var(--webik-muted)] font-mono text-xs uppercase tracking-[0.15em]">Setup / One-Time</span>
            <h3 className="font-fraunces text-[var(--webik-cream)] text-2xl font-light mt-3">The Launchpad</h3>
            <div className="mt-6">
              <span className="font-fraunces font-light text-[var(--webik-cream)] text-5xl lg:text-[56px]">₱5,000</span>
              <p className="text-[var(--webik-muted)] font-mono text-[10px] uppercase tracking-[0.15em] mt-2">One-Time · Minimal Setup Fee</p>
            </div>
            <ul className="mt-8 space-y-3 flex-1">
              {[
                'Custom one-page design',
                'Mobile-first, fast-loading',
                'AEO + Schema markup baked in',
                '48-hour rapid deployment',
                'Built on Bricks (enterprise-grade)',
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3 font-inter text-sm" style={{color: 'rgba(245,243,236,0.8)'}}>
                  <Check size={16} className="text-[var(--webik-lime)] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="[CALENDLY_URL_PLACEHOLDER]"
              className="mt-8 inline-flex items-center justify-center gap-2 border border-[var(--webik-cream)]/30 text-[var(--webik-cream)] px-6 py-3.5 rounded-full text-sm font-inter font-medium hover:bg-[var(--webik-cream)]/10 transition-colors"
            >
              Book discovery call
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 2 — The Guardian (Featured) */}
          <div className="bg-[var(--webik-cream)] rounded-2xl p-8 lg:p-10 flex flex-col relative overflow-hidden">
            <span className="absolute top-5 right-5 bg-[var(--webik-lime)] text-[var(--webik-dark)] font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full font-medium">Required</span>
            <span className="text-[var(--webik-muted)] font-mono text-xs uppercase tracking-[0.15em]">Care Plan / Monthly</span>
            <h3 className="font-fraunces text-[var(--webik-dark)] text-2xl font-light mt-3">The Guardian</h3>
            <div className="mt-6">
              <span className="font-fraunces font-light text-[var(--webik-dark)] text-5xl lg:text-[56px]">₱[X,XXX]</span>
              <span className="font-inter text-[var(--webik-muted)] text-base">/mo</span>
              <p className="text-[var(--webik-muted)] font-mono text-[10px] uppercase tracking-[0.15em] mt-2">12-Month Minimum · Cancel Anytime After</p>
            </div>
            <ul className="mt-8 space-y-3 flex-1">
              {[
                'Premium cloud hosting + domain',
                'Professional business email',
                'Monthly security patches',
                'Content updates (text/image)',
                'Priority support response',
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--webik-dark)]/80 font-inter text-sm">
                  <Check size={16} className="text-[var(--webik-dark)] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="[CALENDLY_URL_PLACEHOLDER]"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[var(--webik-dark)] text-[var(--webik-cream)] px-6 py-3.5 rounded-full text-sm font-inter font-medium hover:bg-[var(--webik-dark-2)] transition-colors"
            >
              Get a quote
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <p className="text-center text-[var(--webik-muted)] font-inter text-sm mt-8">
          Multi-page, e-commerce, and branding add-ons available on request.
        </p>
      </div>
    </section>
  );
}
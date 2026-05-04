import React, { useState } from 'react';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import { Link } from 'react-router-dom';
import GrainOverlay from '@/components/webik/GrainOverlay';
import FinalCTA from '@/components/webik/FinalCTA';

const faqCategories = [
  {
    category: 'Getting Started',
    faqs: [
      {
        q: 'How long does a Webik website take to build?',
        a: 'Our Launchpad sites go live in as little as 48 hours from project kickoff. We\'re able to move this fast because of our AI-accelerated workflow combined with our small, focused team. More complex multi-page or e-commerce sites take 5–14 days depending on scope.',
      },
      {
        q: 'How does the discovery call work?',
        a: 'It\'s a free, no-pressure 15-minute conversation. We\'ll ask about your business, your goals, your timeline, and your budget. From there, we\'ll give you an honest recommendation — whether that\'s working with us or pointing you elsewhere.',
      },
      {
        q: 'What do I need to provide to get started?',
        a: 'Ideally: your logo (or we can help create one), your brand colors (if you have them), a brief description of your business and services, and any reference sites you love. We\'ll guide you through the rest.',
      },
    ],
  },
  {
    category: 'Services & Pricing',
    faqs: [
      {
        q: 'Why is your setup fee so much lower than other agencies?',
        a: 'Two reasons. First, we use AI to accelerate the parts of web development that used to take weeks — design exploration, code scaffolding, content drafting. Second, our business model is partnership-based: a low setup fee plus a monthly Guardian plan. Traditional agencies charge ₱30,000–₱50,000 upfront because they don\'t make money after launch. We do.',
      },
      {
        q: 'Is the monthly Care Plan really mandatory?',
        a: 'It depends on your setup. If you host with us, yes — the Guardian Care Plan is mandatory and is what makes our low-setup-fee model work. It covers hosting, security, backups, and updates. However, if you already have your own hosting platform and domain, the mandatory Care Plan is waived. You\'re still welcome to subscribe for peace of mind, but you are not obligated to. We\'d rather be upfront about this than surprise you.',
      },
      {
        q: 'I already have hosting and a domain. Do I still need the Care Plan?',
        a: 'No. If you already have your own hosting platform and registered domain elsewhere and only want a website redesign, the mandatory Guardian Care Plan does not apply to you. You own your infrastructure — we\'re just building on top of it. You can still subscribe to our monthly Care Plan for ongoing maintenance and support, and we encourage it, but the choice is entirely yours.',
      },
      {
        q: 'Can I upgrade from a Launchpad to a custom multi-page site later?',
        a: 'Absolutely. Many of our clients start with a Launchpad and upgrade as their business grows. We\'ll credit your existing Guardian subscription toward the new build.',
      },
    ],
  },
  {
    category: 'Technology & AEO',
    faqs: [
      {
        q: 'What is Answer Engine Optimization (AEO)?',
        a: 'AEO is the next evolution of SEO. Instead of optimizing only for Google search results, we structure your site with Schema Markup so AI assistants like ChatGPT, Siri, Google Gemini, and Perplexity can understand and recommend your business when customers ask questions like "Best affordable coffee shop in Cebu."',
      },
      {
        q: 'Are you actually using AI to build my website?',
        a: 'Yes — and we\'re transparent about it. We use AI tools to accelerate design exploration, code scaffolding, and content drafting. But every site is reviewed, refined, customized, and maintained by real human specialists on our team. Think of it as a senior architect using power tools instead of a hand-saw. The thinking, taste, and craftsmanship are still ours.',
      },
      {
        q: 'What platform do you build on?',
        a: 'Most of our Launchpad sites are built on WordPress with Bricks Builder — the fastest, most flexible visual builder available. E-commerce builds use Shopify. Custom enterprise projects may use other stacks depending on requirements.',
      },
    ],
  },
  {
    category: 'Ownership & Contracts',
    faqs: [
      {
        q: 'Do I own my website and domain?',
        a: 'Yes, completely. The domain is registered in your name from day one. Your website code, design, and content belong to you. If you ever decide to leave Webik, we\'ll help you migrate to another provider — no lock-in, no hostage situations.',
      },
      {
        q: 'Can I cancel my Care Plan?',
        a: 'After the initial 12-month commitment, you can cancel anytime with 30 days\' notice. We\'ll provide a full export of your site files and help you transition. We\'re confident you won\'t want to leave — but we never want to hold you hostage.',
      },
      {
        q: 'Do you work with clients outside Cebu or the Philippines?',
        a: 'Yes. Our roots are Cebu, but we\'ve built sites for clients in the UK, the United States, and across the Philippines. Our process is fully remote-friendly with weekly check-ins and async updates.',
      },
    ],
  },
];

function FAQItem({ faq, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className="py-5 lg:py-6 border-b" style={{ borderColor: 'var(--webik-cream-2)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <span className="font-inter text-[var(--webik-dark)] text-base lg:text-lg font-medium group-hover:text-[var(--webik-muted)] transition-colors">
          {faq.q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-[var(--webik-dark)]/20 flex items-center justify-center transition-all duration-300 font-mono text-lg leading-none ${open ? 'rotate-45 bg-[var(--webik-dark)]' : ''}`}
          style={{ color: open ? 'var(--webik-cream)' : 'var(--webik-dark)' }}
        >+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-[var(--webik-muted)] font-inter text-sm lg:text-base leading-relaxed pr-12">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div style={{ background: 'var(--webik-cream)' }}>
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="absolute right-[-5vw] top-[20%] h-full w-[55vw] select-none pointer-events-none" aria-hidden="true" style={{ opacity: 0.12 }}>
          <img src="https://media.base44.com/images/public/69ecce3288377cd246349884/848d53c15_Group5.png" alt="" className="w-full h-full object-contain object-right" style={{ filter: 'invert(1)' }} />
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( FAQ )</span>
          <h1
            className="font-grotesk font-light leading-[0.92] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.04em' }}
          >
            Things people ask<br />before they <span style={{ color: 'var(--webik-lime)' }}>sign.</span>
          </h1>
          <p className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[520px]" style={{ color: 'rgba(245,243,236,0.7)' }}>
            Honest answers to the real questions. If you don't see yours here, just ask.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Sticky sidebar nav */}
            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--webik-muted)' }}>Jump to</p>
                {faqCategories.map((cat, i) => (
                  <a
                    key={i}
                    href={`#cat-${i}`}
                    className="block font-inter text-sm py-2 transition-colors"
                    style={{ color: 'var(--webik-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-dark)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-muted)'}
                  >
                    {cat.category}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ list */}
            <div className="lg:col-span-3 space-y-16">
              {faqCategories.map((cat, ci) => (
                <div key={ci} id={`cat-${ci}`}>
                  <h2 className="font-grotesk font-light text-3xl lg:text-4xl leading-tight mb-8" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>
                    {cat.category}
                  </h2>
                  <div>
                    {cat.faqs.map((faq, fi) => (
                      <FAQItem key={fi} faq={faq} defaultOpen={ci === 0 && fi === 0} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
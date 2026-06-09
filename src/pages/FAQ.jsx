import React, { useState } from 'react';
import AnnouncementBar from '@/components/webik/AnnouncementBar';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import GrainOverlay from '@/components/webik/GrainOverlay';
import FinalCTA from '@/components/webik/FinalCTA';

const faqCategories = [
  {
    category: 'Who We Are',
    faqs: [
      {
        q: 'What is Webik Corp?',
        a: 'Webik Corp is an SEC-registered digital agency based in Cebu, Philippines. We design, build, and grow digital presences for businesses that are serious about owning their corner of the internet. Our team combines senior-level experience across web design, development, sales, and operations. We serve clients locally in the Philippines and internationally.',
      },
      {
        q: 'Why do you call yourselves "a digital team, not just an agency"?',
        a: 'Most agencies hand you a deliverable and move on. We do not. We act as a long-term partner — staying in after launch, treating your business goals like our own, and making ourselves available as your digital team. The relationship does not end at handoff.',
      },
      {
        q: 'Is Webik Corp a registered company?',
        a: 'Yes. Webik Corp is a corporation registered with the Securities and Exchange Commission (SEC) of the Philippines. This means clients have legal recourse, contractual protection, and the assurance of working with a legitimate business — not a freelancer who can disappear.',
      },
    ],
  },
  {
    category: 'Digital Presence',
    faqs: [
      {
        q: 'What does it mean to "own your digital presence"?',
        a: 'It means building your business on a foundation you actually control — your website, your domain, your audience — instead of renting space on Facebook, Instagram, or another platform that could change its rules or suspend your account overnight. Social media is a powerful channel. It is a terrible foundation.',
      },
      {
        q: 'Do you work with clients outside the Philippines?',
        a: 'Yes. Webik Corp serves clients in the Philippines and in English-speaking international markets. Time zone differences are not a barrier — we work across them regularly. Our international work funds and sharpens what we do; our local work in the Philippines is the long game.',
      },
    ],
  },
  {
    category: 'Services & Pricing',
    faqs: [
      {
        q: 'Do you publish your prices?',
        a: 'No — and not because we are hiding anything. Every project is genuinely different, and pricing on a website forces businesses to fit themselves into a package. The discovery call is where we figure out together what makes sense for your specific situation. There is no pressure and no obligation.',
      },
      {
        q: 'What services do you actually offer?',
        a: 'Web design and development, email marketing design, branding and logo design, SEO and Answer Engine Optimization (AEO), graphic design, and ongoing website maintenance. Every service is scoped around your business, not a one-size-fits-all package.',
      },
    ],
  },
  {
    category: 'After Launch',
    faqs: [
      {
        q: 'What happens after my website launches?',
        a: 'We do not disappear after launch. Our maintenance plans cover ongoing updates, security patches, performance monitoring, and content edits as your business evolves. If you would rather not subscribe to maintenance, we still respond to issues as a former client — but most of our clients stay on because owning a website is a long-term commitment, not a one-time event.',
      },
      {
        q: 'How does the discovery call work?',
        a: 'It is a free, no-pressure conversation — usually 20 to 30 minutes. We ask about your business, your goals, and what is not working right now. No pitch. From there, we send a clear proposal scoped to exactly what you need. You decide with no pressure and no follow-up calls if you are not ready.',
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
    <div style={{
      '--webik-lime': '#C8F048',
      '--webik-dark': '#0E1A0A',
      '--webik-dark-2': '#15240F',
      '--webik-cream': '#F5F3EC',
      '--webik-cream-2': '#EBE8DD',
      '--webik-muted': '#6B7560',
      background: 'var(--webik-cream)'
    }}>
      <AnnouncementBar />
      <StickyNav />

      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( FAQ )</span>
          <h1
            className="font-fraunces italic font-light leading-[1.0] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(42px, 7vw, 110px)', letterSpacing: '-0.02em' }}
          >
            Things people ask<br />before they <span style={{ color: 'var(--webik-lime)' }}>sign.</span>
          </h1>
          <p className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[520px]" style={{ color: 'rgba(245,243,236,0.65)' }}>
            Honest answers to the real questions. If you do not see yours here, just ask.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
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

            <div className="lg:col-span-3 space-y-16">
              {faqCategories.map((cat, ci) => (
                <div key={ci} id={`cat-${ci}`}>
                  <h2 className="font-fraunces italic font-light text-3xl lg:text-4xl leading-tight mb-8" style={{ color: 'var(--webik-dark)' }}>
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
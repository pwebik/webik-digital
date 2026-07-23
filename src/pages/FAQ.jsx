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
        a: 'We believe great website development goes beyond delivering a finished site. We become your long-term digital partner, providing ongoing website support, maintenance, and strategic guidance to help your business grow. As your goals evolve, we\'re here to ensure your online presence continues to perform, improve, and deliver results.',
      },
      {
        q: 'Is Webik Corp a registered company?',
        a: 'Yes. Webik Corp is a corporation registered with the Securities and Exchange Commission (SEC) of the Philippines, giving you the confidence of partnering with a legitimate digital agency backed by contracts, accountability, and long-term support.',
      },
    ],
  },
  {
    category: 'Digital Presence',
    faqs: [
      {
        q: 'What does it mean to "own your digital presence"?',
        a: 'Owning your digital presence means owning your online home. A professional business website gives you full control over your brand, domain, content, and customer experience. While social media is a powerful way to connect with your audience, platform rules and algorithms can change overnight. Your website remains the one digital asset you truly own. It is a trusted destination where customers can always find your business and a strong foundation for sustainable business growth.',
      },
      {
        q: 'Do you work with clients outside the Philippines?',
        a: 'Yes. Webik Corp proudly serves clients in the Philippines and across the globe. Every project, whether local or international, expands our experience and strengthens our expertise. That means every client benefits from proven strategies, global insights, and digital solutions built to help businesses grow.',
      },
    ],
  },
  {
    category: 'Services & Pricing',
    faqs: [
      {
        q: 'How much does it cost to work with Webik?',
        a: 'Your investment depends on your business goals, project scope, and requirements. We don\'t believe in one-size-fits-all pricing because every business deserves a solution tailored to its needs.\nWe start with a free discovery call, then provide a transparent, customized proposal with no hidden fees, no pressure, and no obligation.',
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
        a: 'Your website launch is just the beginning. We continue to support your business with website maintenance, security updates, performance monitoring, content edits, and technical assistance as your business grows. While our maintenance plans provide the best long-term value and peace of mind, we\'re always here to help our past clients whenever they need us. A successful website isn\'t a one-time project, it\'s an ongoing investment, and we\'re committed to helping it perform at its best.',
      },
      {
        q: 'How does the discovery call work?',
        a: 'It is a free, no-obligation conversation that usually lasts 20 to 30 minutes. We\'ll learn about your business, your goals, and how we can help you grow. Afterward, we\'ll send a clear, customized proposal built around your business goals. You can review everything at your own pace and move forward whenever you\'re ready.',
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
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>FAQ</span>
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
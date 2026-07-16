import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What is Webik Corp?',
    a: 'Webik Corp is a full-service digital agency. We design, build, and grow digital presences for businesses that are serious about owning their corner of the internet. Our team combines senior-level experience across web design, development, sales, and operations. We serve clients globally.',
  },
  {
    q: 'Why do you call yourselves "a digital team, not just an agency"?',
    a: 'Your website launch is just the beginning. At Webik, we believe great website development goes beyond delivering a finished site. We become your long-term digital partner, providing ongoing website support, maintenance, and strategic guidance to help your business grow. As your goals evolve, we\'re here to ensure your online presence continues to perform, improve, and deliver results.',
  },
  {
    q: 'What does it mean to "own your digital presence"?',
    a: 'Owning your digital presence means owning your online home. A professional business website gives you full control over your brand, domain, content, and customer experience. While social media is a powerful way to connect with your audience, platform rules and algorithms can change overnight. Your website remains the one digital asset you truly own. It is a trusted destination where customers can always find your business and a strong foundation for sustainable business growth.',
  },
  {
    q: 'How much does it cost to work with Webik?',
    a: 'Your investment depends on your business goals, project scope, and requirements. We don\'t believe in one-size-fits-all pricing because every business deserves a solution tailored to its needs.\nWe start with a free discovery call, then provide a transparent, customized proposal with no hidden fees, no pressure, and no obligation.',
  },
  {
    q: 'What services do you actually offer?',
    a: 'Web design and development, email marketing design, branding and logo design, SEO and Answer Engine Optimization (AEO), graphic design, and ongoing website maintenance. Every service is scoped around your business, not a one-size-fits-all package.',
  },
  {
    q: 'Do you work with clients outside the Philippines?',
    a: 'Yes. Webik Corp proudly serves clients in the Philippines and across the globe. Every project, whether local or international, expands our experience and strengthens our expertise. That means every client benefits from proven strategies, global insights, and digital solutions built to help businesses grow.',
  },
  {
    q: 'Is Webik Corp a registered company?',
    a: 'Yes. Webik Corp is a corporation registered with the Securities and Exchange Commission (SEC) of the Philippines, giving you the confidence of partnering with a legitimate digital agency backed by contracts, accountability, and long-term support.',
  },
  {
    q: 'What happens after my website launches?',
    a: 'Your website launch is just the beginning. We continue to support your business with website maintenance, security updates, performance monitoring, content edits, and technical assistance as your business grows. While our maintenance plans provide the best long-term value and peace of mind, we\'re always here to help our past clients whenever they need us. A successful website isn\'t a one-time project, it\'s an ongoing investment, and we\'re committed to helping it perform at its best.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">FAQ</span>
        <h2 className="font-grotesk text-[var(--webik-dark)] font-light mt-4 leading-[1.05]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)', letterSpacing: '-0.03em' }}>
          Things people ask before <span style={{ color: '#C8F048' }}>they sign.</span>
        </h2>

        <div className="mt-12 lg:mt-16 divide-y divide-[var(--webik-cream-2)]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5 lg:py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-inter text-[var(--webik-dark)] text-base lg:text-lg font-medium group-hover:text-[var(--webik-muted)] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full border border-[var(--webik-dark)]/20 flex items-center justify-center transition-transform duration-400 ${isOpen ? 'rotate-45 bg-[var(--webik-dark)]' : ''}`}>
                    <Plus size={14} className={`${isOpen ? 'text-[var(--webik-cream)]' : 'text-[var(--webik-dark)]'}`} />
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[var(--webik-muted)] font-inter text-sm lg:text-base leading-relaxed pr-12">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link to="/faq" className="font-inter text-sm underline underline-offset-4 transition-colors" style={{ color: 'var(--webik-muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-dark)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-muted)'}
          >
            See all questions →
          </Link>
        </div>
      </div>
    </section>
  );
}
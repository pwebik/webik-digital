import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What is Webik Corp?',
    a: 'Webik Corp is an SEC-registered digital agency based in Cebu, Philippines. We design, build, and grow digital presences for businesses that are serious about owning their corner of the internet. Our team combines senior-level experience across web design, development, sales, and operations. We serve clients locally in the Philippines and internationally.',
  },
  {
    q: 'Why do you call yourselves "a digital team, not just an agency"?',
    a: 'Most agencies hand you a deliverable and move on. We do not. We act as a long-term partner — staying in after launch, treating your business goals like our own, and making ourselves available as your digital team. The relationship does not end at handoff.',
  },
  {
    q: 'What does it mean to "own your digital presence"?',
    a: 'It means building your business on a foundation you actually control — your website, your domain, your audience — instead of renting space on Facebook, Instagram, or another platform that could change its rules or suspend your account overnight. Social media is a powerful channel. It is a terrible foundation.',
  },
  {
    q: 'Do you publish your prices?',
    a: 'No — and not because we are hiding anything. Every project is genuinely different, and pricing on a website forces businesses to fit themselves into a package. The discovery call is where we figure out together what makes sense for your specific situation. There is no pressure and no obligation.',
  },
  {
    q: 'What services do you actually offer?',
    a: 'Web design and development, email marketing design, branding and logo design, SEO and Answer Engine Optimization (AEO), graphic design, and ongoing website maintenance. Every service is scoped around your business, not a one-size-fits-all package.',
  },
  {
    q: 'Do you work with clients outside the Philippines?',
    a: 'Yes. Webik Corp serves clients in the Philippines and in English-speaking international markets. Time zone differences are not a barrier — we work across them regularly. Our international work funds and sharpens what we do; our local work in the Philippines is the long game.',
  },
  {
    q: 'Is Webik Corp a registered company?',
    a: 'Yes. Webik Corp is a corporation registered with the Securities and Exchange Commission (SEC) of the Philippines. This means clients have legal recourse, contractual protection, and the assurance of working with a legitimate business — not a freelancer who can disappear.',
  },
  {
    q: 'What happens after my website launches?',
    a: 'We do not disappear after launch. Our maintenance plans cover ongoing updates, security patches, performance monitoring, and content edits as your business evolves. If you would rather not subscribe to maintenance, we still respond to issues as a former client — but most of our clients stay on because owning a website is a long-term commitment, not a one-time event.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( FAQ )</span>
        <h2 className="font-fraunces italic text-[var(--webik-dark)] font-light mt-4 leading-[1.05]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)', letterSpacing: '-0.02em' }}>
          Things people ask before <span style={{ color: 'var(--webik-lime)' }}>they sign.</span>
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
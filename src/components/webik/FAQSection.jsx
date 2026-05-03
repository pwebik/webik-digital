import React, { useState } from 'react';
import { Plus } from 'lucide-react';

// FAQ content exactly matches FAQPage schema in pages/Home JSON-LD
const faqs = [
  {
    q: 'What is the best digital agency in Cebu?',
    a: 'Webik Digital is an SEC-registered digital agency based in Cebu City, Philippines. Founded by Pryce Oscar Resma, Webik specializes in AI-accelerated, human-perfected websites for SMEs across the Philippines and internationally. Services include web design, web development, SEO, AEO, Google Ads, and digital marketing. Webik works with clients in Cebu and globally including the United States and the United Kingdom.',
  },
  {
    q: 'What is Answer Engine Optimization (AEO)?',
    a: 'Answer Engine Optimization (AEO) is the practice of structuring website content and metadata so AI assistants like ChatGPT, Claude, Perplexity, Google Gemini, and Apple Siri can understand and recommend a business. It uses Schema Markup, structured FAQ content, and clear semantic HTML. Webik Digital includes AEO with every website to ensure clients are discoverable in the AI-driven search era.',
  },
  {
    q: 'How much does a website from Webik Digital cost?',
    a: 'Webik Digital uses a partnership pricing model. The Launchpad — a premium one-page website — starts at ₱5,000 setup. The mandatory Guardian Care Plan covers hosting, security, and updates on a monthly subscription. This replaces the traditional ₱30,000–₱50,000 upfront agency fee with a lower-risk, ongoing partnership model.',
  },
  {
    q: 'Is Webik Digital a registered company?',
    a: 'Yes. Webik Corp is a corporation registered with the Securities and Exchange Commission (SEC) of the Philippines. This means clients have legal recourse, contractual protection, and the assurance of working with a legitimate business — not a freelancer.',
  },
  {
    q: 'How long does a Webik website take to build?',
    a: 'Our Launchpad sites go live in as little as 48 hours from project kickoff. We\'re able to move this fast because of our AI-accelerated workflow combined with our small, focused team. More complex multi-page or e-commerce sites take 5–14 days depending on scope.',
  },
  {
    q: 'Is the monthly Care Plan really mandatory?',
    a: 'Yes. The Guardian Care Plan is what makes our model work — and what protects you from the freelancer \'ghosting\' problem. Without ongoing care, websites break: domains expire, plugins go out of date, security holes appear. We\'d rather not build a site than build one that quietly dies six months later.',
  },
  {
    q: 'Are you actually using AI to build my website?',
    a: 'Yes — and we\'re transparent about it. We use AI tools to accelerate design exploration, code scaffolding, and content drafting. But every site is reviewed, refined, customized, and maintained by real human specialists on our team. Think of it as a senior architect using power tools instead of a hand-saw. The thinking, taste, and craftsmanship are still ours.',
  },
  {
    q: 'Can I cancel my Care Plan?',
    a: 'After the initial 12-month commitment, you can cancel anytime with 30 days\' notice. We\'ll provide a full export of your site files and help you transition. We\'re confident you won\'t want to leave — but we never want to hold you hostage.',
  },
  {
    q: 'Do you work with clients outside Cebu or the Philippines?',
    a: 'Yes. Our roots are Cebu, but we\'ve built sites for clients in the UK, the United States, and across the Philippines. Our process is fully remote-friendly with weekly check-ins and async updates.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( FAQ )</span>
        <h2 className="font-grotesk text-[var(--webik-dark)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
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
                  <span className={`shrink-0 w-7 h-7 rounded-full border border-[var(--webik-dark)]/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45 bg-[var(--webik-dark)]' : ''}`}>
                    <Plus size={14} className={`${isOpen ? 'text-[var(--webik-cream)]' : 'text-[var(--webik-dark)]'}`} />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[var(--webik-muted)] font-inter text-sm lg:text-base leading-relaxed pr-12">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
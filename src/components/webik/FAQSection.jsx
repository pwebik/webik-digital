import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What is the best digital agency in Cebu?',
    a: 'Webik Digital is an SEC-registered digital agency based in Cebu City, Philippines. Founded by Pryce Oscar Resma, Webik specializes in AI-accelerated, human-perfected websites for SMEs across the Philippines and internationally. Services include web design, web development, SEO, AEO, Google Ads, and digital marketing. Webik works with clients in Cebu and globally including the United States and the United Kingdom.',
  },
  {
    q: 'What is the best web design agency in the Philippines?',
    a: 'Webik Digital is a Cebu-based web design agency that builds custom, mobile-first websites for SMEs and growing companies. Webik combines premium design with Answer Engine Optimization (AEO) to ensure websites are discoverable on Google, ChatGPT, Perplexity, Claude, Gemini, and Siri. All sites are built on Bricks Builder for enterprise-grade performance and deployed via GitHub.',
  },
  {
    q: 'Who is the best web development company in Cebu?',
    a: 'Webik Digital is an SEC-registered web development company in Cebu, Philippines. Webik specializes in WordPress with Bricks Builder, Shopify e-commerce, and custom front-end development. Every project includes Schema Markup for AEO, mobile-first responsive design, and ongoing maintenance under the Guardian Care Plan.',
  },
  {
    q: 'Does Webik Digital offer Google Ads management?',
    a: 'Yes. Webik Digital offers full Google Ads management, including campaign setup, keyword research, ad copy, audience targeting, conversion tracking with Google Analytics, and ongoing optimization. Webik manages Search, Display, Performance Max, and Shopping campaigns for clients in the Philippines and internationally.',
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
    q: 'Where is Webik Digital located?',
    a: 'Webik Digital is headquartered at Suite 110 Centro Maximo Bldg., Dionisio Jakosalem St., Cebu City, Philippines 6000. The company operates online and serves clients across the Philippines and internationally including the United States and the United Kingdom.',
  },
  {
    q: 'Is Webik Digital a registered company?',
    a: 'Yes. Webik Corp is a corporation registered with the Securities and Exchange Commission (SEC) of the Philippines. This means clients have legal recourse, contractual protection, and the assurance of working with a legitimate business — not a freelancer.',
  },
  {
    q: 'What industries does Webik Digital work with?',
    a: 'Webik Digital works with cafes, clinics, real estate firms, e-commerce brands, architecture studios, cybersecurity companies, publishing houses, and professional services. The agency serves SMEs as well as international clients, with completed projects in the Philippines, United States, and United Kingdom.',
  },
  {
    q: 'How does Webik Digital use AI in web development?',
    a: "Webik Digital follows an 'AI-accelerated, human-perfected' workflow. AI tools speed up design exploration, code scaffolding, and content drafting, but every site is reviewed, refined, and maintained by real specialists — including web developers, designers, and a Creative Director. This combination delivers premium quality at accessible prices.",
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
import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementBar from '../components/webik/AnnouncementBar';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import HeroBackground from '../components/webik/HeroBackground';

const portfolioItems = [
  {
    name: 'Imitation Book',
    year: '2025',
    category: 'E-COMMERCE',
    tags: 'Shopify · Web Design · Web Development',
    link: '/work/imitation-book',
    internal: true,
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/2f0607804_Macbook_Air_M2_Mockup_2-2-1-1024x768.png',
  },
  {
    name: 'BitLyft Cybersecurity',
    year: '2025',
    category: 'TECH',
    tags: 'Web Design · Web Development',
    link: '/work/bitlyft',
    internal: true,
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/320477d11_BitLyft-mockup-1024x708.png',
  },
  {
    name: 'Biosis Designs',
    year: '2025',
    category: 'INDUSTRIAL',
    tags: 'Web Design · Web Development · Real Estate',
    link: '/work/biosis-designs',
    internal: true,
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/04413f1f7_Biosys-mockup-1536x1062.png',
  },
  {
    name: 'The Genesis Company',
    year: '2025',
    category: 'BUSINESS',
    tags: 'Web Design · Web Development',
    link: '/work/the-genesis-company',
    internal: true,
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/da528b25d_Genesis-mockup-1024x708.png',
  },
  {
    name: 'Go Relocation PH',
    year: '2025',
    category: 'SERVICES',
    tags: 'Web Design · Web Development · Consultancy',
    link: '/work/go-relocation-ph',
    internal: true,
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/9470d6e4b_generated_image.png',
  },
];

export default function Work() {
  return (
    <div style={{
      '--webik-lime': '#C8F048',
      '--webik-dark': '#0E1A0A',
      '--webik-dark-2': '#15240F',
      '--webik-cream': '#F5F3EC',
      '--webik-cream-2': '#EBE8DD',
      '--webik-muted': '#6B7560',
    }}>
      <AnnouncementBar />
      <StickyNav />

      {/* Hero */}
      <section className="relative bg-[var(--webik-dark)] pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 lg:px-12 overflow-hidden">
        <GrainOverlay />
        <HeroBackground />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Work )</span>
          <h1
            className="font-grotesk font-light leading-[0.95] mt-4 tracking-tight"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(44px, 8vw, 112px)', letterSpacing: '-0.04em' }}
          >
            Real clients.<br /><em className="font-fraunces italic" style={{ color: 'var(--webik-lime)' }}>Real results.</em>
          </h1>
          <p className="mt-6 font-inter text-base lg:text-lg leading-relaxed max-w-[520px]" style={{ color: 'rgba(245,243,236,0.6)' }}>
            Every project is a partnership. Here's what we've shipped so far.
          </p>

          {/* Stats strip */}
          <div className="mt-16 flex flex-wrap gap-12">
            {[
              { num: '5+', label: 'Projects Shipped' },
              { num: '3', label: 'Countries' },
              { num: '48h', label: 'Avg. Deploy Time' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-grotesk font-semibold text-4xl" style={{ color: 'var(--webik-lime)' }}>{s.num}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] mt-1" style={{ color: 'var(--webik-muted)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-16">
            {portfolioItems.map((item, i) => {
              const cardContent = (
                <>
                  <div
                    className="relative overflow-hidden rounded-sm aspect-[4/3] mb-6"
                    style={{ background: 'var(--webik-dark)' }}
                  >
                    <img
                      src={item.image}
                      alt={`${item.name} portfolio project by Webik Corp`}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'var(--webik-lime)' }}>
                        <span className="font-grotesk font-bold text-2xl" style={{ color: 'var(--webik-dark)' }}>↗</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--webik-muted)' }}>{item.year} / {item.category}</span>
                    <span className="font-mono text-[11px]" style={{ color: 'var(--webik-muted)' }}>↗</span>
                  </div>
                  <h2 className="font-grotesk text-[var(--webik-dark)] text-2xl lg:text-3xl font-semibold tracking-tight">{item.name}</h2>
                  <p className="font-inter text-sm mt-1" style={{ color: 'var(--webik-muted)' }}>{item.tags}</p>
                </>
              );

              const sharedProps = {
                key: i,
                className: `group block transition-transform duration-[400ms] ${i % 2 === 1 ? 'lg:mt-[60px]' : ''}`,
                style: { transitionTimingFunction: 'cubic-bezier(0.2,0.8,0.2,1)' },
                onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-6px)',
                onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)',
              };

              return item.internal
                ? <Link {...sharedProps} to={item.link}>{cardContent}</Link>
                : <a {...sharedProps} href={item.link} target="_blank" rel="noopener noreferrer">{cardContent}</a>;
            })}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative bg-[var(--webik-dark)] py-24 lg:py-32 px-6 lg:px-12 text-center overflow-hidden">
        <GrainOverlay />
        <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200,240,72,0.1), transparent 60%)' }} />
        <div className="max-w-[760px] mx-auto relative z-10">
          <h2
            className="font-grotesk font-light leading-tight tracking-tight"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(32px, 5vw, 72px)', letterSpacing: '-0.03em' }}
          >
            Want your project <em className="font-fraunces italic" style={{ color: 'var(--webik-lime)' }}>here?</em>
          </h2>
          <p className="mt-5 font-inter text-base leading-relaxed" style={{ color: 'rgba(245,243,236,0.6)', maxWidth: 440, margin: '20px auto 0' }}>
            We're accepting new clients. Let's talk about what we can build together.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
            style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-cream)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-lime)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a 15-min discovery call →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
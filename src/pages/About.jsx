import React from 'react';
import { Link } from 'react-router-dom';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import GrainOverlay from '@/components/webik/GrainOverlay';

const stats = [
  { number: '5', label: 'Specialists' },
  { number: '100%', label: 'Cebu Based' },
  { number: '48 hrs', label: 'Rapid Deploy' },
  { number: '2+', label: 'Countries Served' },
];

const values = [
  { num: '01', title: 'Partnership First', desc: 'We\'re contractually obligated to your success — not just your invoice. As a SEC-registered corporation, we take long-term accountability seriously.' },
  { num: '02', title: 'AI-Accelerated, Human-Perfected', desc: 'We use modern AI tools to ship faster, but every site is reviewed, optimized, and maintained by real developers and designers.' },
  { num: '03', title: 'No Lock-in', desc: 'Your domain, your code, your content. If you ever leave, we help you migrate. We\'d rather earn your loyalty than trap you.' },
  { num: '04', title: 'Future-Ready by Default', desc: 'Every site we build is structured for AI search engines. AEO isn\'t an add-on — it\'s how we build by default.' },
];

export default function About() {
  return (
    <div style={{ background: 'var(--webik-cream)' }}>
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="absolute right-[-5vw] top-0 h-full w-[55vw] select-none pointer-events-none" aria-hidden="true" style={{ opacity: 0.12 }}>
          <img src="https://media.base44.com/images/public/69ecce3288377cd246349884/848d53c15_Group5.png" alt="" className="w-full h-full object-cover object-left" style={{ filter: 'invert(1)' }} />
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( About Webik )</span>
          <h1
            className="font-fraunces font-light italic leading-[0.92] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.04em' }}
          >
            We exist to end<br />the impossible <em style={{ color: 'var(--webik-lime)' }}>choice.</em>
          </h1>
          <p className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[580px]" style={{ color: 'rgba(245,243,236,0.7)' }}>
            Most Cebu SMEs are stuck between a ₱50,000 agency gamble or a freelancer who ghosts them. We built a third option.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: 'var(--webik-lime)' }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="py-10 px-6 lg:px-10 flex flex-col"
                style={{ borderRight: i < 3 ? '1px solid rgba(14,26,10,0.15)' : 'none' }}
              >
                <span className="font-fraunces font-light text-5xl lg:text-6xl leading-none" style={{ color: 'var(--webik-dark)' }}>
                  {stat.number}
                </span>
                <span className="mt-2 font-inter text-sm uppercase tracking-wider" style={{ color: 'rgba(14,26,10,0.65)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>( Our Story )</span>
              <h2 className="font-fraunces font-light italic text-4xl lg:text-5xl mt-4 leading-tight" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.03em' }}>
                Born in Cebu.<br />Built for everyone.
              </h2>
              <div className="mt-8 space-y-5 font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-dark)' }}>
                <p>
                  Most Cebu SMEs face the same impossible choice: pay an agency ₱50,000 upfront and pray, or hire a freelancer who might ghost you halfway through.
                </p>
                <p>
                  We built Webik to end that. As a SEC-registered corporation, we're contractually obligated to your success — not just your invoice. We combine premium design with cutting-edge Answer Engine Optimization (AEO) so your business shows up when customers ask Siri, ChatGPT, or Google for recommendations.
                </p>
                <p>
                  We're AI-accelerated, human-perfected. Our team uses modern AI tools to ship faster, but every site is reviewed, optimized, and maintained by real developers and designers.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://media.base44.com/images/public/69ecce3288377cd246349884/8d8f029fe_IMG_05551.jpg"
                alt="Webik team"
                className="w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 32px 64px rgba(14,26,10,0.18)' }}
              />
              <div className="absolute -bottom-6 -left-6 hidden lg:block rounded-xl px-6 py-4" style={{ background: 'var(--webik-lime)' }}>
                <p className="font-fraunces italic font-light text-2xl" style={{ color: 'var(--webik-dark)' }}>SEC-Registered</p>
                <p className="font-mono text-[11px] uppercase tracking-wider mt-1" style={{ color: 'rgba(14,26,10,0.6)' }}>Philippines Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream-2)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://media.base44.com/images/public/69ecce3288377cd246349884/252551088_IMG_05601.jpg"
                alt="Webik team having fun"
                className="w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 32px 64px rgba(14,26,10,0.15)' }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>( The Team )</span>
              <h2 className="font-fraunces font-light italic text-4xl lg:text-5xl mt-4 leading-tight" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.03em' }}>
                Small team.<br /><em style={{ color: 'var(--webik-lime)', WebkitTextStroke: '1px var(--webik-dark)' }}>Big output.</em>
              </h2>
              <p className="mt-6 font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-dark)' }}>
                We're a focused team of 5 specialists — designers, developers, and strategists — based entirely in Cebu City. No outsourcing, no offshoring. When you work with Webik, you work with the people who actually build your site.
              </p>
              <p className="mt-4 font-inter text-base leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                We keep our team small intentionally. It means every project gets real attention, real accountability, and real craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( Our Values )</span>
          <h2 className="font-fraunces font-light italic text-4xl lg:text-5xl mt-4 leading-tight" style={{ color: 'var(--webik-cream)', letterSpacing: '-0.03em' }}>
            What we stand for.
          </h2>
          <div className="grid sm:grid-cols-2 gap-px mt-14" style={{ background: 'rgba(245,243,236,0.1)' }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 lg:p-10 transition-colors duration-300"
                style={{ background: 'var(--webik-dark)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
              >
                <span className="font-fraunces italic text-5xl font-light" style={{ color: 'var(--webik-lime)' }}>{v.num}</span>
                <h3 className="font-inter font-semibold text-lg mt-4" style={{ color: 'var(--webik-cream)' }}>{v.title}</h3>
                <p className="font-inter text-sm leading-relaxed mt-2" style={{ color: 'rgba(245,243,236,0.65)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 text-center" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-fraunces font-light italic text-4xl lg:text-5xl leading-tight" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.03em' }}>
            Want to work with us?
          </h2>
          <p className="mt-5 font-inter text-base leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
            Free 15-minute discovery call. No pressure — just a conversation about your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-300"
            style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
          >
            Book a 15-min discovery call →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    title: 'Web Design and Development',
    promise: 'A professionally designed, fast, modern website that converts visitors into leads or customers — and makes you visible on Google and AI tools from day one.',
  },
  {
    num: '02',
    title: 'Email Marketing Design',
    promise: 'Professional email designs that get opened, clicked, and acted on — built to represent your brand at every send.',
  },
  {
    num: '03',
    title: 'Branding and Logo Design',
    promise: 'A complete brand kit — logo, colors, typography, and usage guidelines — so every touchpoint looks intentional and consistent.',
  },
  {
    num: '04',
    title: 'SEO and AEO',
    promise: 'Visibility on Google and AI-powered search tools so the right people find you when they are already looking.',
  },
  {
    num: '05',
    title: 'Graphic Design',
    promise: 'On-brand visual assets ready for web, print, and social — built to match the quality of your actual product or service.',
  },
  {
    num: '06',
    title: 'Website Maintenance',
    promise: 'Ongoing support so your site stays fast, secure, and up to date — without you having to think about it.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ background: 'var(--webik-cream)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>
          ( What We Build )
        </span>
        <div className="mt-5 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2
            className="font-fraunces italic font-light leading-[1.05] max-w-[640px]"
            style={{ color: 'var(--webik-dark)', fontSize: 'clamp(28px, 4.5vw, 60px)', letterSpacing: '-0.02em' }}
          >
            Everything Your Digital Presence Needs. Under One Roof.
          </h2>
          <p className="font-inter text-sm leading-relaxed max-w-[340px]" style={{ color: 'var(--webik-muted)' }}>
            We do not do cookie-cutter. Every service we offer is scoped around what your business actually needs — not a package you have to fit into.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--webik-cream-2)' }}>
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 lg:p-10 flex flex-col transition-colors duration-300 group"
              style={{ background: 'var(--webik-dark)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--webik-dark)'}
            >
              <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>
                {service.num}
              </span>
              <h3
                className="font-fraunces italic font-light text-xl lg:text-2xl mt-4 leading-snug flex-1"
                style={{ color: 'var(--webik-cream)' }}
              >
                {service.title}
              </h3>
              <p className="font-inter text-sm leading-relaxed mt-4" style={{ color: 'rgba(245,243,236,0.55)' }}>
                {service.promise}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-medium text-sm transition-all duration-400"
            style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-dark-2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--webik-dark)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            See What We Can Do Together
          </Link>
        </div>
      </div>
    </section>
  );
}
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--webik-cream)]/90 backdrop-blur-xl shadow-sm' : 'bg-[var(--webik-cream)]'}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="https://media.base44.com/images/public/69ecce3288377cd246349884/35800a971_Webikprimarylogo.png"
              alt="Webik Corp"
              className="h-8 lg:h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[var(--webik-muted)] hover:text-[var(--webik-dark)] text-sm font-inter font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="[CALENDLY_URL_PLACEHOLDER]"
              className="hidden sm:inline-flex bg-[var(--webik-dark)] text-[var(--webik-cream)] px-5 py-2.5 rounded-full text-sm font-inter font-medium hover:bg-[var(--webik-dark-2)] transition-colors"
            >
              Book a call
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--webik-dark)] z-[60] relative"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen mobile overlay */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden flex flex-col items-center justify-center transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--webik-dark)' }}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center"
          style={{ color: 'var(--webik-cream)' }}
          aria-label="Close menu"
        >
          <X size={26} />
        </button>

        {/* Nav links — large Fraunces italic */}
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-fraunces italic font-light text-5xl sm:text-6xl leading-tight transition-all duration-200"
              style={{
                color: 'var(--webik-cream)',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: `color 0.2s, opacity 0.4s ease ${0.1 + i * 0.07}s, transform 0.4s ease ${0.1 + i * 0.07}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-cream)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="[CALENDLY_URL_PLACEHOLDER]"
          className="mt-12 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-inter font-semibold"
          style={{ backgroundColor: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
        >
          Book a call
        </a>
      </div>
    </>
  );
}
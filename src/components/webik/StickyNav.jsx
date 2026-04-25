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

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--webik-dark)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--webik-cream)] border-t border-[var(--webik-cream-2)] px-6 pb-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block py-3 text-[var(--webik-dark)] font-inter text-base font-medium border-b border-[var(--webik-cream-2)] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="[CALENDLY_URL_PLACEHOLDER]"
            className="mt-4 block text-center bg-[var(--webik-dark)] text-[var(--webik-cream)] px-5 py-3 rounded-full text-sm font-inter font-medium"
          >
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
}
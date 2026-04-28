import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--webik-dark)]/95 backdrop-blur-xl shadow-sm' : 'bg-[var(--webik-dark)]'}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center group">
            <img
              src="https://media.base44.com/images/public/69ecce3288377cd246349884/72f22f932_Icon2.png"
              alt="Webik Corp"
              className="h-8 lg:h-9 w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Home', href: '/' },
              { label: 'Work', href: '/#work' },
              { label: 'Services', href: '/#services' },
              { label: 'Pricing', href: '/#pricing' },
            ].map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[var(--webik-muted)] hover:text-[var(--webik-cream)] text-sm font-inter font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="[CALENDLY_URL_PLACEHOLDER]"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-inter font-medium transition-colors"
              style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
            >
              Book a call
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center z-[60] relative"
              style={{ color: 'var(--webik-cream)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[55] lg:hidden flex flex-col items-center justify-center transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--webik-dark)' }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center"
          style={{ color: 'var(--webik-cream)' }}
        >
          <X size={26} />
        </button>
        <nav className="flex flex-col items-center gap-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'Work', href: '/#work' },
            { label: 'Services', href: '/#services' },
            { label: 'Pricing', href: '/#pricing' },
          ].map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-fraunces italic font-light text-5xl sm:text-6xl leading-tight transition-all duration-200"
              style={{
                color: 'var(--webik-cream)',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: `color 0.2s, opacity 0.4s ease ${0.1 + i * 0.07}s, transform 0.4s ease ${0.1 + i * 0.07}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
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
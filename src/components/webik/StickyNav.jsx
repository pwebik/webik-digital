import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const workItems = [
  { label: 'Imitation Book', slug: 'imitation-book', tag: 'E-Commerce' },
  { label: 'BitLyft Cybersecurity', slug: 'bitlyft', tag: 'Tech' },
  { label: 'Biosis Designs', slug: 'biosis-designs', tag: 'Architecture' },
  { label: 'The Genesis Company', slug: 'the-genesis-company', tag: 'Business' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setWorkOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleAnchorClick = (e, href) => {
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
          <a href="/" className="flex items-center group">
            <img
              src="https://media.base44.com/images/public/69ecce3288377cd246349884/35800a971_Webikprimarylogo.png"
              alt="Webik Corp"
              className="h-8 lg:h-9 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Work dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setWorkOpen(v => !v)}
                className="flex items-center gap-1 text-[var(--webik-muted)] hover:text-[var(--webik-dark)] text-sm font-inter font-medium transition-colors"
              >
                Work
                <ChevronDown size={14} className={`transition-transform duration-200 ${workOpen ? 'rotate-180' : ''}`} />
              </button>

              {workOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl overflow-hidden shadow-xl z-50"
                  style={{ background: 'var(--webik-dark)', border: '1px solid rgba(245,243,236,0.1)' }}
                >
                  {/* All work link */}
                  <a
                    href="#work"
                    onClick={(e) => { setWorkOpen(false); handleAnchorClick(e, '#work'); }}
                    className="flex items-center justify-between px-5 py-3.5 border-b font-inter text-sm transition-colors"
                    style={{ color: 'var(--webik-lime)', borderColor: 'rgba(245,243,236,0.08)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--webik-dark-2)'}
                    onMouseLeave={e => e.currentTarget.style.background = ''}
                  >
                    All Projects
                    <span className="font-mono text-[10px]" style={{ color: 'var(--webik-muted)' }}>↓ scroll</span>
                  </a>
                  {workItems.map(item => (
                    <Link
                      key={item.slug}
                      to={`/work/${item.slug}`}
                      onClick={() => setWorkOpen(false)}
                      className="flex items-center justify-between px-5 py-3.5 font-inter text-sm transition-colors"
                      style={{ color: 'rgba(245,243,236,0.85)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--webik-dark-2)'; e.currentTarget.style.color = 'var(--webik-cream)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'rgba(245,243,236,0.85)'; }}
                    >
                      {item.label}
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(200,240,72,0.12)', color: 'var(--webik-lime)' }}>{item.tag}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-[var(--webik-muted)] hover:text-[var(--webik-dark)] text-sm font-inter font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-[var(--webik-dark)] text-[var(--webik-cream)] px-5 py-2.5 rounded-full text-sm font-inter font-medium hover:bg-[var(--webik-dark-2)] transition-colors"
            >
              Book a 15-min discovery call
            </Link>
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
        className={`fixed inset-0 z-[55] lg:hidden flex flex-col items-center justify-center transition-all duration-500 overflow-y-auto ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--webik-dark)' }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center"
          style={{ color: 'var(--webik-cream)' }}
        >
          <X size={26} />
        </button>

        <nav className="flex flex-col items-center gap-5 py-16 w-full px-8">
          {/* Work expandable */}
          <div className="w-full text-center">
            <button
              onClick={() => setMobileWorkOpen(v => !v)}
              className="font-fraunces italic font-light text-5xl sm:text-6xl leading-tight flex items-center gap-3 mx-auto transition-colors"
              style={{ color: 'var(--webik-cream)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
              onMouseLeave={e => e.currentTarget.style.color = mobileWorkOpen ? 'var(--webik-lime)' : 'var(--webik-cream)'}
            >
              Work
              <ChevronDown size={28} className={`transition-transform duration-200 ${mobileWorkOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileWorkOpen && (
              <div className="mt-4 space-y-2">
                {workItems.map(item => (
                  <Link
                    key={item.slug}
                    to={`/work/${item.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block font-inter text-base py-2 transition-colors"
                    style={{ color: 'rgba(245,243,236,0.7)' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="font-fraunces italic font-light text-5xl sm:text-6xl leading-tight transition-all duration-200"
              style={{
                color: 'var(--webik-cream)',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: `color 0.2s, opacity 0.4s ease ${0.15 + i * 0.07}s, transform 0.4s ease ${0.15 + i * 0.07}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-cream)'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          to="/contact"
          className="mb-12 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-inter font-semibold"
          style={{ backgroundColor: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
        >
          Book a 15-min discovery call
        </Link>
      </div>
    </>
  );
}
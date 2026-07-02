import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const workItems = [
  { label: 'Imitation Book', slug: 'imitation-book', tag: 'E-Commerce' },
  { label: 'BitLyft Cybersecurity', slug: 'bitlyft', tag: 'Tech' },
  { label: 'Biosis Designs', slug: 'biosis-designs', tag: 'Industrial' },
  { label: 'The Genesis Company', slug: 'the-genesis-company', tag: 'Business' },
  { label: 'Go Relocation PH', slug: 'go-relocation-ph', tag: 'Services' },
  { label: 'PNLT', slug: 'pnlt', tag: 'Legal' },
];

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Contact', href: '/contact' },
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

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setWorkOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-400 ${scrolled ? 'bg-[var(--webik-cream)]/90 backdrop-blur-xl shadow-sm' : 'bg-[var(--webik-cream)]'}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="https://media.base44.com/images/public/69ecce3288377cd246349884/35800a971_Webikprimarylogo.png"
              alt="Webik Corp"
              className="h-8 lg:h-9 w-auto object-contain group-hover:opacity-85 transition-opacity"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Work dropdown */}
            <div className="relative" ref={dropdownRef} onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <Link
                to="/work"
                className="flex items-center gap-1 text-[var(--webik-muted)] hover:text-[var(--webik-dark)] text-sm font-inter font-medium transition-colors"
              >
                Work
                <ChevronDown size={14} className={`transition-transform duration-200 ${workOpen ? 'rotate-180' : ''}`} />
              </Link>
              {/* Invisible bridge to prevent gap from closing dropdown */}
              <div className="absolute top-full left-0 w-full h-3" />
              {workOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 rounded-2xl overflow-hidden shadow-xl z-50"
                  style={{ marginTop: '8px', background: 'var(--webik-dark)', border: '1px solid rgba(245,243,236,0.1)' }}
                >
                  <Link
                    to="/work"
                    onClick={() => setWorkOpen(false)}
                    className="flex items-center justify-between px-5 py-3.5 border-b font-inter text-sm transition-colors"
                    style={{ color: 'var(--webik-lime)', borderColor: 'rgba(245,243,236,0.08)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,243,236,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = ''}
                  >
                    All Projects
                    <span className="font-mono text-[10px]" style={{ color: 'var(--webik-muted)' }}>→</span>
                  </Link>
                  {workItems.map(item => (
                    <Link
                      key={item.slug}
                      to={`/work/${item.slug}`}
                      onClick={() => setWorkOpen(false)}
                      className="flex items-center justify-between px-5 py-3.5 font-inter text-sm transition-colors"
                      style={{ color: 'rgba(245,243,236,0.85)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,243,236,0.05)'; e.currentTarget.style.color = 'var(--webik-cream)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'rgba(245,243,236,0.85)'; }}
                    >
                      {item.label}
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(200,240,72,0.12)', color: 'var(--webik-lime)' }}>{item.tag}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[var(--webik-muted)] hover:text-[var(--webik-dark)] text-sm font-inter font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex bg-[var(--webik-dark)] text-[var(--webik-cream)] px-5 py-2.5 rounded-full text-sm font-inter font-medium hover:bg-[var(--webik-dark-2)] transition-all duration-300 hover:-translate-y-0.5"
            >
              See What We Can Do Together
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
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="font-grotesk font-light text-5xl sm:text-6xl leading-tight transition-colors"
            style={{ color: 'var(--webik-cream)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-cream)'}
          >
            Home
          </Link>
          {/* Work expandable */}
          <div className="w-full text-center">
            <button
              onClick={() => setMobileWorkOpen(v => !v)}
              className="font-grotesk font-light text-5xl sm:text-6xl leading-tight flex items-center gap-3 mx-auto transition-colors"
              style={{ color: 'var(--webik-cream)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
              onMouseLeave={e => e.currentTarget.style.color = mobileWorkOpen ? 'var(--webik-lime)' : 'var(--webik-cream)'}
            >
              Work
              <ChevronDown size={28} className={`transition-transform duration-200 ${mobileWorkOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileWorkOpen && (
              <div className="mt-4 space-y-2">
                <Link
                  to="/work"
                  onClick={() => setMobileOpen(false)}
                  className="block font-inter text-base py-2 transition-colors"
                  style={{ color: 'var(--webik-lime)' }}
                >
                  All Projects
                </Link>
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
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-grotesk font-light text-5xl sm:text-6xl leading-tight transition-all duration-200"
              style={{
                color: 'var(--webik-cream)',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: `color 0.2s, opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--webik-lime)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--webik-cream)'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          onClick={() => setMobileOpen(false)}
          className="mb-12 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-inter font-semibold"
          style={{ backgroundColor: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
        >
          See What We Can Do Together
        </Link>
      </div>
    </>
  );
}
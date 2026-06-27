import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
{ label: 'Facebook', href: 'https://www.facebook.com/p/Webik-Digital-61577379911344/', icon: 'https://unpkg.com/simple-icons@v11/icons/facebook.svg' },
{ label: 'Instagram', href: 'https://www.instagram.com/webik.digital', icon: 'https://unpkg.com/simple-icons@v11/icons/instagram.svg' },
{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/webik-digital', icon: 'https://unpkg.com/simple-icons@v11/icons/linkedin.svg' }];


export default function Footer() {
  return (
    <footer className="bg-[var(--webik-dark)] border-t border-[var(--webik-dark-2)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="https://media.base44.com/images/public/69ecce3288377cd246349884/72f22f932_Icon2.png"
                alt="Webik Corp icon"
                className="h-10 w-auto opacity-90" />
              
            </Link>
            <p className="font-fraunces italic text-sm mt-4 leading-relaxed" style={{ color: 'rgba(245,243,236,0.5)' }}>
              Your Digital Team, Not Just Your Agency.
            </p>
            <div className="flex gap-2 mt-6">
              {socialLinks.map((s) =>
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[var(--webik-muted)]/30 flex items-center justify-center hover:border-[var(--webik-lime)]/50 transition-colors">
                
                  <img src={s.icon} alt={s.label} className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity" style={{ filter: 'invert(1)' }} />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--webik-cream)] font-inter text-sm font-semibold uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {['Web Design and Development', 'Email Marketing Design', 'Branding and Logo Design', 'SEO and AEO', 'Graphic Design', 'Website Maintenance'].map((s) =>
              <li key={s}>
                  <Link to="/services" className="text-[var(--webik-muted)] hover:text-[var(--webik-cream)] font-inter text-sm transition-colors">{s}</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--webik-cream)] font-inter text-sm font-semibold uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {[
              { label: 'About', to: '/about' },
              { label: 'Team', to: '/team' },
              { label: 'Work', to: '/work' },
              { label: 'Blog', to: '/blog' },
              { label: 'Contact', to: '/contact' }].
              map((l) =>
              <li key={l.label}>
                  <Link to={l.to} className="text-[var(--webik-muted)] hover:text-[var(--webik-cream)] font-inter text-sm transition-colors">{l.label}</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--webik-cream)] font-inter text-sm font-semibold uppercase tracking-wider mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-[var(--webik-muted)] font-inter text-sm">
              <li><a href="mailto:pryce@webikdigital.com" className="hover:text-[var(--webik-cream)] transition-colors">pryce@webikdigital.com</a></li>
              <li className="hidden"><a href="mailto:support@webikdigital.com" className="hover:text-[var(--webik-cream)] transition-colors">support@webikdigital.com</a></li>
              <li><a href="tel:+639273532498" className="hover:text-[var(--webik-cream)] transition-colors">+63 927 353 2498</a></li>
              <li className="leading-relaxed">Suite 110 Centro Maximo Bldg.,<br />Dionisio Jakosalem St.,<br />Cebu City, Philippines</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-[var(--webik-dark-2)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-[var(--webik-muted)] font-inter text-xs">
              © 2026 Webik Corp. All rights reserved. SEC-Registered Philippines.
            </p>
            <p className="text-xs mt-1 [font-family:'Host_Grotesk',_'system-ui',_sans-serif] not-italic" style={{ color: 'rgba(245,243,236,0.25)' }}>
              SEC-registered. Built on experience. Here for the long game.
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: 'rgba(245,243,236,0.2)' }}>
            webikdigital.com · Cebu, Philippines · Serving clients globally
          </p>
        </div>
      </div>
    </footer>);

}
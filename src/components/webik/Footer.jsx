import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/p/Webik-Digital-61577379911344/', icon: 'https://unpkg.com/simple-icons@v11/icons/facebook.svg' },
  { label: 'Instagram', href: 'https://www.instagram.com/webik.digital', icon: 'https://unpkg.com/simple-icons@v11/icons/instagram.svg' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/webik-digital', icon: 'https://unpkg.com/simple-icons@v11/icons/linkedin.svg' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--webik-dark)] border-t border-[var(--webik-dark-2)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <img
                src="https://media.base44.com/images/public/69ecce3288377cd246349884/72f22f932_Icon2.png"
                alt="Webik Corp icon"
                className="h-10 w-auto opacity-90"
              />
            </div>
            <p className="text-[var(--webik-muted)] font-inter text-sm mt-4 leading-relaxed">
              Premium Digital Presence.<br />Accessible to All.
            </p>
            <div className="flex gap-2 mt-6">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[var(--webik-muted)]/30 flex items-center justify-center hover:border-[var(--webik-lime)]/50 transition-colors"
                >
                  <img src={s.icon} alt={s.label} className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity" style={{ filter: 'invert(1)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--webik-cream)] font-inter text-sm font-semibold uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', to: '/about' },
                { label: 'Portfolio', to: '/work' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'Contact', to: '/contact' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[var(--webik-muted)] hover:text-[var(--webik-cream)] font-inter text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--webik-cream)] font-inter text-sm font-semibold uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {['The Launchpad', 'The Guardian', 'A.E.O.', 'Branding'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-[var(--webik-muted)] hover:text-[var(--webik-cream)] font-inter text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--webik-cream)] font-inter text-sm font-semibold uppercase tracking-wider mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-[var(--webik-muted)] font-inter text-sm">
              <li><a href="mailto:pryce@webikdigital.com" className="hover:text-[var(--webik-cream)] transition-colors">pryce@webikdigital.com</a></li>
              <li><a href="mailto:support@webikdigital.com" className="hover:text-[var(--webik-cream)] transition-colors">support@webikdigital.com</a></li>
              <li><a href="tel:+639273532498" className="hover:text-[var(--webik-cream)] transition-colors">+63 927 353 2498</a></li>
              <li className="leading-relaxed">Suite 110 Centro Maximo Bldg.,<br />Dionisio Jakosalem St.,<br />Cebu City, Philippines</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-[var(--webik-dark-2)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--webik-muted)] font-inter text-xs">
            © 2026 Webik Corp. All rights reserved. SEC-Registered Philippines. · Last updated: May 2026
          </p>
          <div className="flex gap-5">
            {['Terms', 'Privacy', 'Cookies'].map(l => (
              <a key={l} href="#" className="text-[var(--webik-muted)] hover:text-[var(--webik-cream)] font-inter text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
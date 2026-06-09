import React from 'react';

const phrases = [
  'Your Digital Team, Not Just Your Agency',
  'Senior Practitioners · Real Partnership',
  'Web Design & Development',
  'Branding & Identity',
  'SEO & AEO',
  'Email Marketing Design',
  'Graphic Design',
  'Website Maintenance',
  'SEC-Registered · Cebu, Philippines',
  'Serving Clients Locally and Internationally',
];

export default function AnnouncementBar() {
  const items = [...phrases, ...phrases];

  return (
    <div
      className="overflow-hidden py-2.5 relative"
      style={{ background: 'var(--webik-dark-2)', borderBottom: '1px solid rgba(200,240,72,0.1)' }}
    >
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {items.map((phrase, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--webik-muted)' }}>
              {phrase}
            </span>
            <span style={{ color: 'var(--webik-lime)', fontSize: '8px' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
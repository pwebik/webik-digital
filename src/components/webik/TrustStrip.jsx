import React from 'react';

const stats = [
  { number: '100+', label: 'Websites Built' },
  { number: '5+', label: 'Years Senior Experience' },
  { number: 'PH & Global', label: 'Philippines and International Clients' },
  { number: 'SEC', label: 'SEC-Registered Agency' },
];

export default function TrustStrip() {
  return (
    <div
      className="py-6 px-6 lg:px-12 overflow-hidden"
      style={{ background: 'var(--webik-dark-2)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-5 lg:py-6 text-center"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(200,240,72,0.15)' : 'none',
              }}
            >
              <span
                className="font-fraunces italic font-light"
                style={{ color: 'var(--webik-lime)', fontSize: 'clamp(22px, 3.5vw, 36px)' }}
              >
                {stat.number}
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.15em] mt-1.5"
                style={{ color: 'var(--webik-muted)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';

const items = [
  "SEC Registered",
  "100% Cebu Based",
  "UK + PH Clients",
  "AEO Optimized",
  "Premium Bricks Builder",
  "48-Hour Rapid Deploy"
];

export default function TrustStrip() {
  const content = items.map((item, i) => (
    <React.Fragment key={i}>
      <span className="text-[var(--webik-cream)] font-grotesk text-xl sm:text-2xl lg:text-[28px] whitespace-nowrap">{item}</span>
      <span className="text-[var(--webik-lime)] text-lg mx-5">✦</span>
    </React.Fragment>
  ));

  return (
    <div className="bg-[var(--webik-dark)] overflow-hidden py-5 lg:py-6">
      <div className="flex animate-marquee-slow whitespace-nowrap">
        {content}{content}{content}{content}
      </div>
    </div>
  );
}
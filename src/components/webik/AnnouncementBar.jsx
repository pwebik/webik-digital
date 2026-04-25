import React from 'react';

const phrases = [
  "SEC-Registered Cebu Digital Agency",
  "AI-Accelerated, Human-Perfected",
  "Now booking Q2 projects",
  "Premium Digital Presence. Accessible to All"
];

export default function AnnouncementBar() {
  const marqueeContent = phrases.map((p, i) => (
    <React.Fragment key={i}>
      <span className="mx-4 text-[var(--webik-cream)] text-xs tracking-[0.2em] uppercase font-inter whitespace-nowrap">{p}</span>
      <span className="mx-4 text-[var(--webik-lime)]">◆</span>
    </React.Fragment>
  ));

  return (
    <div className="bg-[var(--webik-dark)] overflow-hidden py-2.5 relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeContent}{marqueeContent}{marqueeContent}{marqueeContent}
      </div>
    </div>
  );
}
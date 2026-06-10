import React from 'react';

/**
 * Reusable hero background decoration — lime-tinted Webik W logo + radial glow.
 * Drop inside any dark hero section (position relative, overflow-hidden).
 */
export default function HeroBackground() {
  return (
    <>
      {/* Lime-tinted W logo */}
      <div
        className="absolute right-[-5vw] top-[20%] h-full w-[55vw] select-none pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.1 }}
      >
        <img
          src="https://media.base44.com/images/public/69ecce3288377cd246349884/848d53c15_Group5.png"
          alt=""
          className="w-full h-full object-contain object-right"
          style={{ filter: 'invert(0) sepia(1) saturate(10) hue-rotate(30deg) brightness(1.2)' }}
        />
      </div>
      {/* Subtle lime radial */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ background: 'radial-gradient(circle at 15% 55%, rgba(200,240,72,0.08), transparent 50%)' }}
      />
    </>
  );
}
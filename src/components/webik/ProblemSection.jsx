import React, { useRef, useEffect } from 'react';

export default function ProblemSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('revealed');
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ background: 'var(--webik-cream)' }}
    >
      <div
        ref={sectionRef}
        className="max-w-[900px] mx-auto reveal-on-scroll"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>
          ( Sound Familiar? )
        </span>
        <h2
          className="font-fraunces italic font-light mt-5 leading-[1.05]"
          style={{ color: 'var(--webik-dark)', fontSize: 'clamp(32px, 5vw, 64px)', letterSpacing: '-0.02em' }}
        >
          You Built a Business. Your Digital Presence Should Reflect That.
        </h2>

        <div className="mt-10 space-y-6 max-w-[680px]">
          <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-dark)', fontWeight: 500 }}>
            Most businesses in the Philippines are pouring time, energy, and money into platforms they do not own. Facebook pages. Instagram profiles. Rented space on someone else's platform.
          </p>
          <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
            One algorithm change. One suspended account. One platform shift — and the audience you spent years building is gone.
          </p>
          <p className="font-inter text-base lg:text-lg leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
            You deserve better than that. You deserve a digital presence that is yours — built to convert, built to last, and built to grow with you.
          </p>
          <p
            className="font-fraunces italic text-xl lg:text-2xl"
            style={{ color: 'var(--webik-dark)' }}
          >
            That is what we do at Webik Corp.
          </p>
        </div>
      </div>
    </section>
  );
}
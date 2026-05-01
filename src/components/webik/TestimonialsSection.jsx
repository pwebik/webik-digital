import React from 'react';

const testimonials = [
  {
    quote: "Pryce was a pleasure to work with from start to finish. He took the time to understand our brand, our goals, and our audience, and turned that into a clean, professional, and engaging website that we're proud of.",
    name: 'Lewis Normoyle',
    role: 'Chief Operations Officer',
    company: 'LearnPac Systems UK',
    initial: 'L',
  },
  {
    quote: "Working with Pryce was a fantastic experience. Very responsive, professional, and quick to turn things around without sacrificing quality. He took the time to understand our needs and made the entire process smooth and stress-free.",
    name: 'Tiana Emery',
    role: 'Director of Client Value',
    company: 'The Genesis Company',
    initial: 'T',
  },
  {
    quote: '[Cebu client testimonial coming soon] Webik gave us a site that finally matches the quality of our service. We started getting inquiries from Google within the first week.',
    name: '[Client Name]',
    role: '[Role]',
    company: '[Cebu Business]',
    initial: 'C',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[var(--webik-lime)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-dark)]/60 text-xs font-mono uppercase tracking-[0.2em]">( Testimonials )</span>
        <h2 className="font-grotesk text-[var(--webik-dark)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
          Don't take it from <em className="font-fraunces italic">us.</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[var(--webik-dark)] rounded-md p-8 lg:p-10 flex flex-col transition-transform duration-300"
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Big quote mark like Claude */}
              <div
                className="font-fraunces italic font-light leading-none mb-4"
                style={{ fontSize: '80px', lineHeight: '0.6', color: 'var(--webik-lime)', height: '36px' }}
              >
                "
              </div>
              <p
                className="font-fraunces font-light text-lg lg:text-xl leading-[1.45] tracking-tight flex-1 mb-8"
                style={{ color: 'var(--webik-cream)', letterSpacing: '-0.01em' }}
              >
                {t.quote}
              </p>
              <div
                className="pt-5 border-t flex items-center gap-4"
                style={{ borderColor: 'rgba(245,243,236,0.12)' }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-fraunces font-bold text-lg"
                  style={{ background: 'var(--webik-lime)', color: 'var(--webik-dark)' }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-inter text-sm font-semibold" style={{ color: 'var(--webik-cream)' }}>{t.name}</p>
                  <p className="font-inter text-xs mt-0.5" style={{ color: 'rgba(245,243,236,0.6)' }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';

const testimonials = [
  {
    quote: "Pryce was a pleasure to work with from start to finish. He took the time to understand our brand, our goals, and our audience, and turned that into a clean, professional, and engaging website that we're proud of.",
    name: 'Lewis Normoyle',
    role: 'Chief Operations Officer',
    company: 'LearnPac Systems UK',
  },
  {
    quote: "Working with Pryce was a fantastic experience. Very responsive, professional, and quick to turn things around without sacrificing quality. He took the time to understand our needs and made the entire process smooth and stress-free.",
    name: 'Tiana Emery',
    role: 'Director of Client Value',
    company: 'The Genesis Company',
  },
  {
    quote: '[Cebu client testimonial coming soon]',
    name: '[Client Name]',
    role: '[Role]',
    company: '[Cebu Business]',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[var(--webik-lime)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-dark)]/60 text-xs font-mono uppercase tracking-[0.2em]">( Testimonials )</span>
        <h2 className="font-fraunces text-[var(--webik-dark)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
          Don't take it from <em className="italic">us.</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[var(--webik-dark)] rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
              <p className="text-[var(--webik-cream)] font-inter text-sm lg:text-base leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-5 border-t border-[var(--webik-dark-2)]">
                <p className="text-[var(--webik-cream)] font-inter text-sm font-medium">{t.name}</p>
                <p className="text-[var(--webik-muted)] font-inter text-xs mt-0.5">{t.role} · {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
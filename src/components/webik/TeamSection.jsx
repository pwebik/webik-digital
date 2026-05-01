import React from 'react';

const team = [
  { name: 'Pryce Resma', role: 'FOUNDER · CEO', image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/560a14f4b_IMG_0554.jpg' },
  { name: 'Ray Mendoza', role: 'COO · OPERATIONS', image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/102dfcc8c_IMG_0553.jpg' },
  { name: 'Xavier Gonzales', role: 'HEAD OF WEB DEVELOPMENT', image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/8e9f72288_IMG_0557.jpg' },
  { name: 'Julius Parungao', role: 'CREATIVE DIRECTOR', image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/3ff4696ea_IMG_0563.jpg' },
  { name: '[Name TBD]', role: 'CMO · MARKETING', image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/343467812_generated_68f653e7.png' },
];

export default function TeamSection() {
  return (
    <section className="bg-[var(--webik-cream)] py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[var(--webik-muted)] text-xs font-mono uppercase tracking-[0.2em]">( Team )</span>
        <h2 className="font-grotesk text-[var(--webik-dark)] text-3xl sm:text-4xl lg:text-5xl font-light mt-4">
          Five specialists. One <em className="font-fraunces italic">goal.</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-16">
          {team.map((member, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.role} at Webik Corp`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[400ms] group-hover:scale-105"
                style={{ filter: 'grayscale(40%)', transition: 'filter 0.4s ease, transform 0.5s ease' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(40%)'}
              />
              {/* Hover lime overlay */}
              <div className="absolute inset-0 bg-[var(--webik-lime)]/0 group-hover:bg-[var(--webik-lime)]/10 transition-colors duration-300" />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--webik-dark)] via-[var(--webik-dark)]/30 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <h3 className="font-fraunces text-[var(--webik-cream)] text-lg lg:text-xl font-light">{member.name}</h3>
                <p className="text-[var(--webik-lime)] font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
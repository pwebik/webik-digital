import React from 'react';
import AnnouncementBar from '../components/webik/AnnouncementBar';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import FinalCTA from '../components/webik/FinalCTA';

const members = [
  {
    name: 'Pryce Oscar Resma',
    role: 'FOUNDER AND CEO',
    workingStyle: 'Dependable, approachable, and thorough.',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/560a14f4b_IMG_0554.jpg',
    bio: [
      'Pryce has spent over five years in the digital services industry — working across web design, development, e-commerce, email design, and UI/UX before founding Webik Corp. He has led design teams, managed client relationships, and built 20+ websites and e-commerce stores for clients who came to him with little to no digital presence and left with something they were genuinely proud of.',
      'What drives Pryce is not just the technical side of the work — it is the relationship. He built Webik Corp because he wanted his team to grow together rather than chase opportunities separately, and he has carried that same spirit into every client engagement.',
      'Clients who work with Pryce consistently say the same thing: the process felt easy, they were always in the loop, and the end result was better than they expected. He holds a Bachelor of Science in Computer Engineering and brings five years of hands-on, client-facing experience to every project.',
    ],
  },
  {
    name: 'Ray Justin C. Mendoza',
    role: 'CO-FOUNDER AND CHIEF OPERATING OFFICER',
    workingStyle: 'Understanding, fast, and reliable.',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/102dfcc8c_IMG_0553.jpg',
    bio: [
      'Ray keeps the engine running. As COO, he makes sure every project moves forward, every team member is aligned, and no client ever falls through the cracks. With five years of experience spanning web design, UI/UX, and senior development, Ray brings both the craft and the operational discipline that a growing agency needs.',
      'He has built over 100 websites across industries — and his approach has always been the same: understand what the client actually needs, then build something that delivers real results.',
      "One of his most memorable projects involved redesigning a completely outdated, non-functioning website for a client that had been struggling to generate leads. The redesign resulted in the client's best sales performance in their two-year history. Ray holds a Computer Engineering degree and combines formal training with years of self-taught, hands-on practice.",
    ],
  },
  {
    name: 'Joseph Miles S. Babad',
    role: 'PROJECT MANAGER AND INVESTOR',
    workingStyle: 'Organized, communicative, and reliable.',
    image: null,
    bio: [
      'Joseph is the reason projects at Webik Corp run the way they should. As Project Manager, he sits between the team and the client — making sure timelines are clear, communication never drops, and every deliverable arrives when it is supposed to. His background spans financial operations in cryptocurrency markets and project coordination at VNS Information Technology Services, where he developed a sharp eye for workflow efficiency and cross-team communication.',
      'Joseph joined Webik Corp not just as a team member but as an investor — someone who saw the potential in both the business and the people behind it, and wanted to be part of building it from the ground up.',
      'His Tourism Management background shaped how he handles clients: with patience, clarity, and a genuine commitment to making the experience smooth from start to finish.',
    ],
  },
  {
    name: 'Alfred Lean Achurra',
    role: 'DIRECTOR OF SALES AND CLIENT SERVICES',
    workingStyle: 'Driven, communicative, and solution-oriented.',
    image: null,
    bio: [
      'Alfred is the bridge between what clients want and what the team builds. With close to a decade in digital services, his career started in tech support for Apple and Microsoft — giving him a deep, hands-on understanding of how technology actually works and how people interact with it.',
      'From there, he moved into an Executive Assistant role at a real estate development company, working directly alongside senior leadership through a period of rapid operational growth. That experience is what makes Alfred different. He has sat in the room with CEOs. He understands the pressures, the priorities, and the blind spots that business owners carry.',
      'He brings that understanding into every client conversation at Webik Corp — not to sell a package, but to be a strategic partner in their growth. Alfred holds the Google AI Professional Certificate and the Google Digital Marketing and E-commerce Professional Certificate.',
    ],
  },
];

const pageVars = {
  '--webik-lime': '#C8F048',
  '--webik-dark': '#0E1A0A',
  '--webik-dark-2': '#15240F',
  '--webik-cream': '#F5F3EC',
  '--webik-cream-2': '#EBE8DD',
  '--webik-muted': '#6B7560',
};

export default function Team() {
  return (
    <div style={pageVars}>
      <AnnouncementBar />
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( The Team )</span>
          <h1
            className="font-fraunces italic font-light leading-[1.0] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(42px, 7vw, 110px)', letterSpacing: '-0.02em' }}
          >
            Senior Experience.{' '}
            <span style={{ color: 'var(--webik-lime)' }}>Real Partnership.</span>{' '}
            One Team.
          </h1>
          <p className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[600px]" style={{ color: 'rgba(245,243,236,0.7)' }}>
            We are not a marketplace of freelancers or a rotating roster of junior staff. We are a fixed team of senior practitioners who have built real careers in this industry — and who chose to build Webik Corp together because we believed we could do better work as a unit than we ever could apart. When you work with Webik Corp, you work with us.
          </p>
        </div>
      </section>

      {/* Team members */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto space-y-20 lg:space-y-28">
          {members.map((m, i) => (
            <div key={i} className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-1">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden" style={{ background: 'var(--webik-dark-2)' }}>
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" style={{ filter: 'grayscale(20%)' }} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-fraunces italic text-8xl font-light" style={{ color: 'rgba(200,240,72,0.15)' }}>
                        {m.name.split(' ')[0][0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-5 p-4 rounded-xl" style={{ background: 'var(--webik-dark)' }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--webik-lime)' }}>Working Style</p>
                  <p className="font-fraunces italic text-sm" style={{ color: 'rgba(245,243,236,0.8)' }}>{m.workingStyle}</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--webik-muted)' }}>{m.role}</span>
                <h2 className="font-fraunces italic font-light text-3xl lg:text-4xl mt-3 leading-tight" style={{ color: 'var(--webik-dark)' }}>
                  {m.name}
                </h2>
                <div className="mt-6 space-y-4">
                  {m.bio.map((para, pi) => (
                    <p key={pi} className="font-inter text-base leading-relaxed" style={{ color: pi === 0 ? 'var(--webik-dark)' : 'var(--webik-muted)' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] rounded-2xl flex flex-col items-center justify-center" style={{ background: 'var(--webik-dark-2)', border: '1px solid rgba(200,240,72,0.12)' }}>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--webik-lime)' }}>Coming Soon</span>
                <div className="w-8 h-px" style={{ background: 'var(--webik-lime)' }} />
              </div>
            </div>
            <div className="lg:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--webik-muted)' }}>TEAM MEMBER 5</span>
              <h2 className="font-fraunces italic font-light text-3xl lg:text-4xl mt-3 leading-tight" style={{ color: 'var(--webik-dark)' }}>
                We Are Still Growing.
              </h2>
              <p className="mt-4 font-inter text-base leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                Webik Corp is a team in progress. The fifth seat is reserved for someone who brings the same commitment, senior experience, and long-game thinking that defines everyone here. Watch this space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
import React from 'react';
import AnnouncementBar from '../components/webik/AnnouncementBar';
import StickyNav from '../components/webik/StickyNav';
import Footer from '../components/webik/Footer';
import GrainOverlay from '../components/webik/GrainOverlay';
import HeroBackground from '../components/webik/HeroBackground';
import FinalCTA from '../components/webik/FinalCTA';

const members = [
  {
    name: 'Pryce Oscar Resma',
    role: 'FOUNDER AND CEO',
    workingStyle: 'Dependable, approachable, and thorough.',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/560a14f4b_IMG_0554.jpg',
    bio: [
      'Pryce has spent over five years in the digital services industry, working across web design, development, e-commerce, email design, and UI/UX before founding Webik Corp. He has led design teams, managed client relationships, and built 20+ websites and e-commerce stores for clients who came to him with little to no digital presence and left with something they were genuinely proud of.',
      'What drives Pryce is not just the technical side of the work, but the relationship. He built Webik Corp because he wanted his team to grow together rather than chase opportunities separately, and he has carried that same spirit into every client engagement.',
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
      'He has built over 100 websites across industries, His approach has always been the same: understand what the client actually needs, then build something that delivers real results.',
      "One of his most memorable projects involved redesigning a completely outdated, non-functioning website for a client that had been struggling to generate leads. The redesign resulted in the client's best sales performance in their two-year history. Ray holds a Computer Engineering degree and combines formal training with years of self-taught, hands-on practice.",
    ],
  },
  {
    name: 'Xavier Gonzales',
    role: 'HEAD OF WEB DEVELOPMENT',
    workingStyle: 'Precise, methodical, and quietly brilliant.',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/8e9f72288_IMG_0557.jpg',
    bio: [
      'Xavier is the engineer behind every Webik build. He brings a depth of technical knowledge that ensures every site is not just beautiful but structurally sound: fast, secure, and built to last. His work spans front-end and back-end development, with a particular focus on performance optimization and clean, maintainable code.',
      'What sets Xavier apart is his ability to take a creative vision and execute it without compromise. He translates design into reality with precision, and his attention to technical detail means clients rarely encounter issues after launch.',
    ],
  },
  {
    name: 'Julius Parungao',
    role: 'CREATIVE DIRECTOR',
    workingStyle: 'Visually sharp, thoughtful, and concept-driven.',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/3ff4696ea_IMG_0563.jpg',
    bio: [
      'Julius leads the creative direction at Webik Corp. He is the person responsible for ensuring that every design decision serves both the brand and the user, making sure the work looks right, feels right, and actually performs. His background spans branding, UI/UX, and digital identity systems built for businesses at various stages of growth.',
      'He approaches each project as a storytelling challenge: what does this brand need to communicate, and how do we communicate it in a way that earns attention and trust? The results speak for themselves. Every Webik site carries a visual standard that consistently exceeds what clients expect.',
    ],
  },
  {
    name: 'Alfred Lean Achurra',
    role: 'DIRECTOR OF SALES AND CLIENT SERVICES',
    workingStyle: 'Driven, communicative, and solution-oriented.',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/6b5ee415f_AlfredAchurra.png',
    bio: [
      'Alfred is the bridge between what clients want and what the team builds. With close to a decade in digital services, his career started in tech support for Apple and Microsoft, giving him a deep, hands-on understanding of how technology actually works and how people interact with it.',
      'From there, he moved into an Executive Assistant role at a real estate development company, working directly alongside senior leadership through a period of rapid operational growth. That experience is what makes Alfred different. He has sat in the room with CEOs. He understands the pressures, the priorities, and the blind spots that business owners carry.',
      'He brings that understanding into every client conversation at Webik Corp, not to sell a package, but to be a strategic partner in their growth. Alfred holds the Google AI Professional Certificate and the Google Digital Marketing and E-commerce Professional Certificate.',
    ],
  },
  {
    name: 'Allaiah Divina',
    role: 'CHIEF MARKETING OFFICER',
    workingStyle: 'Strategic, energetic, and audience-driven.',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/343467812_generated_68f653e7.png',
    bio: [
      'Allaiah leads marketing strategy at Webik Corp, bringing a deep understanding of digital consumer behaviour, brand positioning, and campaign execution. Her work ensures that every client-facing message, from social to email to content, is purposeful, consistent, and built to move people to action.',
      'She brings a data-informed creative instinct to everything she touches, and her ability to bridge the gap between strategy and execution makes her an essential part of how Webik Corp grows, and how our clients grow with us.',
    ],
  },
  {
    name: 'Joseph Miles S. Babad',
    role: 'PROJECT DIRECTOR',
    workingStyle: 'Organized, communicative, and reliable.',
    image: 'https://media.base44.com/images/public/69ecce3288377cd246349884/91c615527_MilesBabad.png',
    bio: [
      'Joseph is the reason projects at Webik Corp run the way they should. As Project Manager, he sits between the team and the client, making sure timelines are clear, communication never drops, and every deliverable arrives when it is supposed to. His background spans financial operations in cryptocurrency markets and project coordination at VNS Information Technology Services, where he developed a sharp eye for workflow efficiency and cross-team communication.',
      'Joseph joined Webik Corp not just as a team member but as an investor, someone who saw the potential in both the business and the people behind it, and wanted to be part of building it from the ground up.',
      'His Tourism Management background shaped how he handles clients: with patience, clarity, and a genuine commitment to making the experience smooth from start to finish.',
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
        <HeroBackground />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>The Team</span>
          <h1
            className="font-grotesk font-light leading-[1.0] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(42px, 7vw, 110px)', letterSpacing: '-0.04em' }}
          >
            Senior Talent.{' '}
            <span style={{ color: 'var(--webik-lime)' }}>Direct Team</span>{' '}
            Value.
          </h1>
          <div className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[600px] space-y-4" style={{ color: 'rgba(245,243,236,0.7)' }}>
            <p>Webik Corp is built by a dedicated team of senior professionals who have spent years delivering digital solutions across industries. We came together because we believed we could create better work together than we ever could individually.</p>
            <p>Every project is handled by the same experienced team from start to finish, giving you consistency, accountability, and a true long-term partner.</p>
            <p>When you work with Webik Corp, you work with us.</p>
          </div>
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
                      <span className="font-grotesk text-8xl font-light" style={{ color: 'rgba(200,240,72,0.15)' }}>
                        {m.name.split(' ')[0][0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-5 p-4 rounded-xl" style={{ background: 'var(--webik-dark)' }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--webik-lime)' }}>Working Style</p>
                  <p className="font-inter italic text-sm" style={{ color: 'rgba(245,243,236,0.8)' }}>{m.workingStyle}</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--webik-muted)' }}>{m.role}</span>
                <h2 className="font-grotesk font-light text-3xl lg:text-4xl mt-3 leading-tight" style={{ color: 'var(--webik-dark)', letterSpacing: '-0.02em' }}>
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


        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import AnnouncementBar from '@/components/webik/AnnouncementBar';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import GrainOverlay from '@/components/webik/GrainOverlay';
import HeroBackground from '@/components/webik/HeroBackground';
import ShowcaseCard from '@/components/webik/ShowcaseCard';
import ShowcaseModal from '@/components/webik/ShowcaseModal';

const projects = [
  {
    name: 'KitCuts',
    initial: 'K',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://kitcuts.base44.app/',
    thumbnail: 'https://media.base44.com/images/public/69ecce3288377cd246349884/2d86a1497_5.png',
  },
  {
    name: 'PNDK Studio',
    initial: 'P',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    url: 'https://pundok-groom-craft.base44.app/',
    thumbnail: 'https://media.base44.com/images/public/69ecce3288377cd246349884/4f4c2df33_2.png',
  },
  {
    name: 'Ursal Pascual',
    initial: 'U',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    url: 'https://ursal-pascual.base44.app/',
    thumbnail: 'https://media.base44.com/images/public/69ecce3288377cd246349884/232e9e35e_6.png',
  },
  {
    name: 'Cusina Lucas',
    initial: 'C',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    url: 'https://cusina-lucas.base44.app/',
    thumbnail: 'https://media.base44.com/images/public/69ecce3288377cd246349884/5226c6675_4.png',
  },
  {
    name: 'Serene Dental',
    initial: 'S',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    url: 'https://serene-dental-center.base44.app/',
    thumbnail: 'https://media.base44.com/images/public/69ecce3288377cd246349884/6004b794f_3.png',
  },
  {
    name: 'Seamasters Food Products',
    initial: 'S',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    url: 'https://seamaster-ocean-harvest.base44.app',
    thumbnail: 'https://media.base44.com/images/public/69ecce3288377cd246349884/6004b794f_3.png',
  },
  {
    name: 'Conquer Fitness',
    initial: 'C',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    url: 'https://conquerfitnessgym.base44.app',
    thumbnail: 'https://media.base44.com/images/public/69ecce3288377cd246349884/6004b794f_3.png',
  },
];

export default function Showcase() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div
      style={{
        '--webik-lime': '#C8F048',
        '--webik-dark': '#0E1A0A',
        '--webik-dark-2': '#15240F',
        '--webik-cream': '#F5F3EC',
        '--webik-cream-2': '#EBE8DD',
        '--webik-muted': '#6B7560',
        '--webik-border': '#D9D4C5',
      }}
    >
      <AnnouncementBar />
      <StickyNav />

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden" style={{ background: 'var(--webik-dark)' }}>
        <GrainOverlay />
        <HeroBackground />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-lime)' }}>( Showcase )</span>
          <h1
            className="font-grotesk font-light leading-[0.92] tracking-tight mt-6"
            style={{ color: 'var(--webik-cream)', fontSize: 'clamp(48px, 8vw, 120px)', letterSpacing: '-0.04em' }}
          >
            Interactive Mockups,<br />Built to <span style={{ color: 'var(--webik-lime)' }}>Perform.</span>
          </h1>
          <p className="mt-8 font-inter text-base lg:text-lg leading-relaxed max-w-[580px]" style={{ color: 'rgba(245,243,236,0.7)' }}>
            Browse our recent mockups below. Click any project to explore them. Fully interactive, right here in your browser.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="px-6 lg:px-12 py-12 lg:py-16" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((p) => (
              <ShowcaseCard key={p.name} project={p} onOpen={setActiveProject} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ShowcaseModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
import React, { useState } from 'react';
import AnnouncementBar from '@/components/webik/AnnouncementBar';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import ShowcaseCard from '@/components/webik/ShowcaseCard';
import ShowcaseModal from '@/components/webik/ShowcaseModal';

const projects = [
  {
    name: 'KitCuts',
    initial: 'K',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://kitcuts.base44.app/',
  },
  {
    name: 'PNDK Studio',
    initial: 'P',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    url: 'https://pundok-groom-craft.base44.app/',
  },
  {
    name: 'Ursal Pascual',
    initial: 'U',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    url: 'https://ursal-pascual.base44.app/',
  },
  {
    name: 'Cusina Lucas',
    initial: 'C',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    url: 'https://cusina-lucas.base44.app/',
  },
  {
    name: 'Serene Dental',
    initial: 'S',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    url: 'https://serene-dental-center.base44.app/',
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
      <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ background: 'var(--webik-cream)' }}>
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--webik-muted)' }}>
            ( Showcase )
          </span>
          <h1
            className="font-grotesk font-light mt-5"
            style={{ color: 'var(--webik-dark)', fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            Live Websites,<br />Built to Perform.
          </h1>
          <p className="font-inter text-base lg:text-lg mt-6 max-w-2xl leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
            Browse our recent work below. Click any project to explore the live site — fully interactive, right here in your browser.
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
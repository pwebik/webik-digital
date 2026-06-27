import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ShowcaseCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group text-left rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{ background: 'var(--webik-cream)', border: '1px solid var(--webik-border)' }}
    >
      {/* Thumbnail image */}
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: 'var(--webik-cream-2)' }}>
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.name} website preview`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <span className="font-grotesk font-light" style={{ color: 'var(--webik-muted)', opacity: 0.2, fontSize: 'clamp(56px, 6vw, 88px)' }}>
              {project.initial}
            </span>
          </div>
        )}
        <div
          className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
          style={{ background: 'var(--webik-dark)', color: 'var(--webik-lime)' }}
        >
          Live Preview
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7">
        <h3 className="font-grotesk text-xl font-medium" style={{ color: 'var(--webik-dark)' }}>{project.name}</h3>
        <div className="mt-5 inline-flex items-center gap-1.5 font-inter text-sm font-medium" style={{ color: 'var(--webik-dark)' }}>
          View Interactive Mockups
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </button>
  );
}
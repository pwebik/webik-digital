import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Monitor, Smartphone, Loader2, ExternalLink, AlertCircle } from 'lucide-react';

const LOAD_TIMEOUT = 6000;

export default function ShowcaseModal({ project, onClose }) {
  const [device, setDevice] = useState('desktop');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [embedBlocked, setEmbedBlocked] = useState(false);
  const [dims, setDims] = useState({
    w: typeof window !== 'undefined' ? window.innerWidth : 1280,
    h: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const timeoutRef = useRef(null);

  // Reset state when project changes + lock body scroll
  useEffect(() => {
    if (!project) return;
    setDevice('desktop');
    setIframeLoaded(false);
    setEmbedBlocked(false);
    document.body.style.overflow = 'hidden';
    // If iframe doesn't report onLoad within the timeout, assume embedding is blocked
    timeoutRef.current = setTimeout(() => {
      setEmbedBlocked(true);
    }, LOAD_TIMEOUT);
    return () => {
      document.body.style.overflow = '';
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [project]);

  const handleIframeLoad = useCallback(() => {
    setIframeLoaded(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  // Escape to close
  useEffect(() => {
    if (!project) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [project, onClose]);

  // Track viewport size
  useEffect(() => {
    const handler = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const switchDevice = useCallback((d) => {
    setDevice(d);
    setIframeLoaded(false);
    setEmbedBlocked(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setEmbedBlocked(true), LOAD_TIMEOUT);
  }, []);

  if (!project) return null;

  const isMobileViewport = dims.w < 768;
  const modalW = isMobileViewport ? dims.w : Math.round(dims.w * 0.9);
  const modalH = isMobileViewport ? dims.h : Math.round(dims.h * 0.9);
  const headerH = 56;
  const contentW = modalW;
  const contentH = modalH - headerH;
  const showToggle = !isMobileViewport;
  const currentDevice = isMobileViewport ? 'mobile' : device;

  // Desktop view: render iframe at 1440px, scale to fit
  const desktopScale = contentW > 0 ? contentW / 1440 : 1;
  const desktopIframeH = desktopScale > 0 ? contentH / desktopScale : contentH;

  // Mobile view: phone frame at 390px
  const phoneW = 390;
  const phoneH = contentH;
  const iframeKey = `${project.name}-${currentDevice}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'rgba(14,26,10,0.88)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col overflow-hidden"
        style={{
          width: `${modalW}px`,
          height: `${modalH}px`,
          background: 'var(--webik-cream)',
          borderRadius: isMobileViewport ? '0' : '1rem',
          maxWidth: '100vw',
          maxHeight: '100vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-5 flex-shrink-0"
          style={{ height: `${headerH}px`, background: 'var(--webik-dark)', borderBottom: '1px solid rgba(200,240,72,0.15)' }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] flex-shrink-0" style={{ color: 'var(--webik-lime)' }}>
              Live Preview
            </span>
            <span className="font-grotesk text-sm font-medium truncate" style={{ color: 'var(--webik-cream)' }}>
              {project.name}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {showToggle && (
              <div className="flex items-center rounded-full p-1" style={{ background: 'rgba(245,243,236,0.08)' }}>
                <button
                  onClick={() => switchDevice('desktop')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-inter font-medium transition-colors"
                  style={device === 'desktop'
                    ? { background: 'var(--webik-lime)', color: 'var(--webik-dark)' }
                    : { color: 'rgba(245,243,236,0.6)' }}
                >
                  <Monitor size={13} /> Desktop
                </button>
                <button
                  onClick={() => switchDevice('mobile')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-inter font-medium transition-colors"
                  style={device === 'mobile'
                    ? { background: 'var(--webik-lime)', color: 'var(--webik-dark)' }
                    : { color: 'rgba(245,243,236,0.6)' }}
                >
                  <Smartphone size={13} /> Mobile
                </button>
              </div>
            )}
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ color: 'var(--webik-cream)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(245,243,236,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = ''; }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="relative flex-1 overflow-hidden" style={{ background: 'var(--webik-cream-2)' }}>
          {/* Loading spinner */}
          {!iframeLoaded && !embedBlocked && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <Loader2 size={32} className="animate-spin" style={{ color: 'var(--webik-dark)' }} />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: 'var(--webik-muted)' }}>
                  Loading {project.name}…
                </span>
              </div>
            </div>
          )}

          {/* Embedding blocked fallback */}
          {embedBlocked && (
            <div className="absolute inset-0 flex items-center justify-center z-20 p-6">
              <div className="flex flex-col items-center gap-4 max-w-sm text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(14,26,10,0.08)' }}>
                  <AlertCircle size={24} style={{ color: 'var(--webik-dark)' }} />
                </div>
                <h3 className="font-grotesk text-lg font-medium" style={{ color: 'var(--webik-dark)' }}>
                  Preview unavailable
                </h3>
                <p className="font-inter text-sm leading-relaxed" style={{ color: 'var(--webik-muted)' }}>
                  {project.name} can't be embedded here, but you can explore the full site in a new tab.
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-inter font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
                >
                  <ExternalLink size={15} />
                  Open {project.name} in new tab
                </a>
              </div>
            </div>
          )}

          {/* Desktop view: iframe at 1440px, scaled to fit */}
          {currentDevice === 'desktop' && !embedBlocked && (
            <div style={{ width: `${contentW}px`, height: `${contentH}px`, overflow: 'hidden', position: 'relative' }}>
              <iframe
                key={iframeKey}
                src={project.url}
                title={project.name}
                onLoad={handleIframeLoad}
                style={{
                  width: '1440px',
                  height: `${desktopIframeH}px`,
                  border: 'none',
                  transform: `scale(${desktopScale})`,
                  transformOrigin: 'top left',
                  display: 'block',
                }}
              />
            </div>
          )}

          {/* Mobile view: phone frame */}
          {currentDevice === 'mobile' && !embedBlocked && (
            <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
              <div
                className="relative rounded-[2rem] flex-shrink-0 overflow-hidden"
                style={{
                  width: `${phoneW}px`,
                  height: `${phoneH}px`,
                  maxWidth: '100%',
                  border: '8px solid var(--webik-dark)',
                  borderRadius: '2.5rem',
                  boxShadow: '0 20px 60px rgba(14,26,10,0.35)',
                }}
              >
                <iframe
                  key={iframeKey}
                  src={project.url}
                  title={project.name}
                  onLoad={handleIframeLoad}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
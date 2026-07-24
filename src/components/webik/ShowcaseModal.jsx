import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Monitor, Smartphone, Loader2, ExternalLink, AlertCircle } from 'lucide-react';
import MacBookProFrame from '@/components/webik/MacBookProFrame';
import IPhoneProFrame from '@/components/webik/IPhoneProFrame';

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

  // ── Desktop (MacBook Pro) sizing ──
  // Real MacBook Pro screens are 16:10 aspect ratio
  const macPadding = 32;
  const macBaseReserve = 34; // base + bezel overhead
  const macAvailW = contentW - macPadding * 2;
  const macAvailH = contentH - macPadding * 2 - macBaseReserve;
  const macAspect = 16 / 10; // width / height
  // Compute screen that fits within both width and height constraints at 16:10
  let macScreenW = Math.min(macAvailW, 1100);
  let macScreenH = macScreenW / macAspect;
  if (macScreenH > macAvailH) {
    macScreenH = macAvailH;
    macScreenW = macScreenH * macAspect;
  }
  // iframe renders at 1440px native, scaled to screen width
  const desktopScale = macScreenW > 0 ? macScreenW / 1440 : 1;
  const desktopIframeH = desktopScale > 0 ? macScreenH / desktopScale : macScreenH;

  // ── Mobile (iPhone 17 Pro) sizing ──
  const phonePadding = 32;
  const phoneBezelOverhead = 14; // bezel on all sides
  const phoneAvailW = contentW - phonePadding * 2;
  const phoneAvailH = contentH - phonePadding * 2;
  // iPhone 17 Pro aspect ratio ≈ 9:19.5 (screenH/screenW ≈ 2.165)
  const phoneRatio = 19.5 / 9;
  // Try height-constrained first
  let phoneScreenH = phoneAvailH - phoneBezelOverhead;
  let phoneScreenW = phoneScreenH / phoneRatio;
  // If too wide, switch to width-constrained
  if (phoneScreenW > phoneAvailW - phoneBezelOverhead) {
    phoneScreenW = phoneAvailW - phoneBezelOverhead;
    phoneScreenH = phoneScreenW * phoneRatio;
  }
  // Cap phone width to 440 (iPhone Pro Max width)
  if (phoneScreenW > 440) {
    phoneScreenW = 440;
    phoneScreenH = phoneScreenW * phoneRatio;
  }
  const mobileScale = phoneScreenW > 0 ? phoneScreenW / 390 : 1;
  const mobileIframeH = mobileScale > 0 ? phoneScreenH / mobileScale : phoneScreenH;

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
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-inter font-medium transition-colors flex-shrink-0"
              style={{ color: 'var(--webik-cream)', background: 'rgba(245,243,236,0.08)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(245,243,236,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(245,243,236,0.08)'; }}
              title={`Open ${project.name} in a new tab`}
            >
              <ExternalLink size={13} />
              Open in new tab
            </a>
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
            <div className="absolute inset-0 flex items-center justify-center z-30">
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
            <div className="absolute inset-0 flex items-center justify-center z-40 p-6">
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

          {/* Desktop view: MacBook Pro frame */}
          {currentDevice === 'desktop' && !embedBlocked && (
            <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
              <MacBookProFrame screenW={macScreenW} screenH={macScreenH}>
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
              </MacBookProFrame>
            </div>
          )}

          {/* Mobile view: iPhone Pro frame */}
          {currentDevice === 'mobile' && !embedBlocked && (
            <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
              <IPhoneProFrame screenW={phoneScreenW} screenH={phoneScreenH}>
                <iframe
                  key={iframeKey}
                  src={project.url}
                  title={project.name}
                  onLoad={handleIframeLoad}
                  style={{
                    width: '390px',
                    height: `${mobileIframeH}px`,
                    border: 'none',
                    transform: `scale(${mobileScale})`,
                    transformOrigin: 'top left',
                    display: 'block',
                  }}
                />
              </IPhoneProFrame>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
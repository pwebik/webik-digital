import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ICON_URL = 'https://media.base44.com/images/public/69ecce3288377cd246349884/72f22f932_Icon2.png';
const MIN_DISPLAY = 850;

export default function PageTransition() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let raf1, raf2;
    const start = performance.now();
    setVisible(true);
    setFadingOut(false);

    const scheduleHide = () => {
      const elapsed = performance.now() - start;
      const delay = Math.max(0, MIN_DISPLAY - elapsed);
      raf1 = setTimeout(() => {
        setFadingOut(true);
        raf2 = setTimeout(() => setVisible(false), 300);
      }, delay);
    };

    // Wait for next paint so the enter animation runs
    requestAnimationFrame(scheduleHide);

    return () => {
      clearTimeout(raf1);
      clearTimeout(raf2);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none transition-opacity duration-300"
      style={{
        backgroundColor: 'var(--webik-dark)',
        opacity: fadingOut ? 0 : 1,
      }}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Rotating ring */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <span
            className="absolute inset-0 rounded-full border-2 border-dashed"
            style={{ borderColor: 'rgba(200,240,72,0.4)', animation: 'page-transition-spin 0.8s linear infinite' }}
          />
          <span
            className="absolute inset-2 rounded-full border-t-2"
            style={{ borderColor: 'var(--webik-lime)', animation: 'page-transition-spin 0.6s linear infinite reverse' }}
          />
          <img
            src={ICON_URL}
            alt="Webik"
            className="w-10 h-10 object-contain relative z-10"
            style={{ animation: 'page-transition-pulse 0.8s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes page-transition-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes page-transition-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes page-transition-fade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
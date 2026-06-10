import React, { useEffect, useRef } from 'react';

export default function RotatingGlobe({ size = 320, opacity = 0.18 }) {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const s = size;
    canvas.width = s * dpr;
    canvas.height = s * dpr;
    canvas.style.width = s + 'px';
    canvas.style.height = s + 'px';
    ctx.scale(dpr, dpr);

    const cx = s / 2;
    const cy = s / 2;
    const R = s * 0.44;
    const dotR = 1.4;
    const dotColor = '#C8F048';

    // Lat/lon grid points
    const points = [];
    for (let lat = -80; lat <= 80; lat += 18) {
      for (let lon = 0; lon < 360; lon += 14) {
        points.push([lat, lon]);
      }
    }

    function project(lat, lon, rotY) {
      const phi = (lat * Math.PI) / 180;
      const lam = ((lon + rotY) * Math.PI) / 180;
      const x = Math.cos(phi) * Math.sin(lam);
      const y = Math.sin(phi);
      const z = Math.cos(phi) * Math.cos(lam);
      return { x, y, z };
    }

    function draw() {
      ctx.clearRect(0, 0, s, s);
      angleRef.current += 0.25;
      const rot = angleRef.current;

      // Draw outer circle
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(200,240,72,0.12)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Draw latitude lines
      for (let lat = -60; lat <= 60; lat += 18) {
        const phi = (lat * Math.PI) / 180;
        const r = R * Math.cos(phi);
        const yOff = cy - R * Math.sin(phi);
        ctx.beginPath();
        ctx.ellipse(cx, yOff, r, r * 0.25, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(200,240,72,0.07)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Draw longitude lines (meridians)
      for (let lon = 0; lon < 180; lon += 18) {
        const lam = ((lon + rot) * Math.PI) / 180;
        const sinL = Math.sin(lam);
        // Only draw front-facing
        ctx.beginPath();
        ctx.ellipse(cx, cy, R * Math.abs(sinL), R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(200,240,72,0.07)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Draw dots
      for (const [lat, lon] of points) {
        const p = project(lat, lon, rot);
        if (p.z < 0) continue; // back-face cull
        const px = cx + p.x * R;
        const py = cy - p.y * R;
        const brightness = 0.3 + p.z * 0.7;
        ctx.beginPath();
        ctx.arc(px, py, dotR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,240,72,${brightness * 0.7})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity, display: 'block' }}
      aria-hidden="true"
    />
  );
}
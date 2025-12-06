import React, { useEffect, useRef } from 'react';

const Loader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles effect
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
      particle.style.animation = `float-up ${2 + Math.random() * 1}s ease-out forwards`;
      
      container.appendChild(particle);
      
      setTimeout(() => particle.remove(), 3000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-overlay" role="status" aria-live="polite">
      <div className="loader">
        <div className="arc-reactor">
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            {/* ==================== OUTER CIRCULAR HOUSING ==================== */}
            {/* Main outer ring - Steel/Titanium casing */}
            <circle cx="60" cy="60" r="55" fill="none" stroke="#c0c0c0" strokeWidth="2" opacity="0.8" />
            <circle cx="60" cy="60" r="53" fill="none" stroke="#a9a9a9" strokeWidth="0.5" opacity="0.5" />
            
            {/* ==================== ELECTROMAGNETIC INDUCTION PLATES ==================== */}
            {/* 6 wedge-shaped metal plates radiating outward */}
            <g opacity="0.7">
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 60 + 35 * Math.cos(rad);
                const y1 = 60 + 35 * Math.sin(rad);
                const x2 = 60 + 50 * Math.cos(rad);
                const y2 = 60 + 50 * Math.sin(rad);
                const nextRad = ((angle + 50) * Math.PI) / 180;
                const x3 = 60 + 50 * Math.cos(nextRad);
                const y3 = 60 + 50 * Math.sin(nextRad);
                const x4 = 60 + 35 * Math.cos(nextRad);
                const y4 = 60 + 35 * Math.sin(nextRad);
                
                return (
                  <path
                    key={`plate-${angle}`}
                    d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`}
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                  />
                );
              })}
            </g>

            {/* ==================== TRIANGULAR COIL HOUSING ==================== */}
            {/* Three triangular coils positioned symmetrically around core */}
            <g className="coil-housing">
              {/* Triangle 1 - Top */}
              <path
                d="M 60 30 L 75 48 L 45 48 Z"
                fill="none"
                stroke="#ff6b1a"
                strokeWidth="1.5"
                opacity="0.6"
              />
              {/* Triangle 2 - Bottom Right */}
              <path
                d="M 80 75 L 75 57 L 95 62 Z"
                fill="none"
                stroke="#ff6b1a"
                strokeWidth="1.5"
                opacity="0.6"
              />
              {/* Triangle 3 - Bottom Left */}
              <path
                d="M 40 75 L 45 57 L 25 62 Z"
                fill="none"
                stroke="#ff6b1a"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </g>

            {/* ==================== CIRCUIT TRACES & MICRO-CIRCUIT WEB ==================== */}
            {/* Glowing circuit network connecting coils to center */}
            <g className="circuit-network" opacity="0.5">
              {/* Wire traces from triangles to core */}
              <line x1="60" y1="30" x2="60" y2="45" stroke="#1e90ff" strokeWidth="0.8" />
              <line x1="80" y1="75" x2="70" y2="65" stroke="#1e90ff" strokeWidth="0.8" />
              <line x1="40" y1="75" x2="50" y2="65" stroke="#1e90ff" strokeWidth="0.8" />
              
              {/* Hexagonal circuit mesh around middle section */}
              <circle cx="60" cy="60" r="42" fill="none" stroke="#1e90ff" strokeWidth="0.5" opacity="0.3" />
              <circle cx="60" cy="60" r="38" fill="none" stroke="#1e90ff" strokeWidth="0.5" opacity="0.3" />
            </g>

            {/* ==================== ELECTROMAGNETIC COIL MESH ==================== */}
            {/* Concentric rings representing magnetic field */}
            <g className="em-field" opacity="0.4">
              <circle cx="60" cy="60" r="45" fill="none" stroke="#00d4ff" strokeWidth="0.5" />
              <circle cx="60" cy="60" r="40" fill="none" stroke="#00d4ff" strokeWidth="0.5" />
              <circle cx="60" cy="60" r="35" fill="none" stroke="#00d4ff" strokeWidth="0.5" />
            </g>

            {/* ==================== INDUCTION PLATES - Inner ring ==================== */}
            {/* Rectangular metal segments representing conductive material */}
            <g opacity="0.6">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 60 + 28 * Math.cos(rad);
                const y1 = 60 + 28 * Math.sin(rad);
                const x2 = 60 + 34 * Math.cos(rad);
                const y2 = 60 + 34 * Math.sin(rad);
                
                return (
                  <line
                    key={`segment-${angle}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#ffd700"
                    strokeWidth="1.2"
                  />
                );
              })}
            </g>

            {/* ==================== CENTRAL CORE (FUSION CHAMBER) ==================== */}
            {/* Outer core ring - Copper/gold colored */}
            <circle
              cx="60"
              cy="60"
              r="18"
              fill="none"
              stroke="#ffb81c"
              strokeWidth="2"
              opacity="0.9"
            />

            {/* Core glow effect - Cyan/Blue inner light */}
            <circle
              className="core-glow"
              cx="60"
              cy="60"
              r="14"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="1.5"
              opacity="0.7"
            />

            {/* Inner core chamber - Bright plasma blue */}
            <circle
              className="core-plasma"
              cx="60"
              cy="60"
              r="10"
              fill="#1e90ff"
              fillOpacity="0.6"
            />

            {/* Core pulse - Innermost bright point */}
            <circle
              className="core-pulse"
              cx="60"
              cy="60"
              r="6"
              fill="#00ffff"
              fillOpacity="0.8"
            />

            {/* ==================== CHARGING INDICATOR RING ==================== */}
            {/* Animated ring showing charge level */}
            <circle
              className="charge-ring"
              cx="60"
              cy="60"
              r="24"
              fill="none"
              stroke="#ff6b1a"
              strokeWidth="2"
              strokeDasharray="150"
              strokeDashoffset="150"
              opacity="0.8"
            />
          </svg>
          <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />
        </div>
        <div className="loader-text">INITIALIZING ARC REACTOR...</div>
      </div>
    </div>
  );
};

export default Loader;

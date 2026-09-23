import React, { useState, useRef } from 'react';
import { ShieldCheck, Activity, Scan, Sparkles, Cpu, Award, CheckCircle2, Zap } from 'lucide-react';

export const BeautyTechHeroVisual = ({ activeTabIndex = 0, onTabChange }) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  // 3D Parallax Tilt Handler
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -4;
    const rotateY = ((x - rect.width / 2) / rect.width) * 4;
    setTiltStyle({
      transform: `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      transition: 'transform 0.08s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
  };

  const tabTelemetry = [
    {
      category: 'Skin Intelligence',
      badge: 'Active Protocol',
      accent: '#c4622d',
      highlight: 'Clinical Hydrafacial + RF Microneedling',
      metrics: [
        { label: 'Deep Dermal Hydration', value: '94.8%', progress: 95, status: 'Optimal' },
        { label: 'Epidermal Barrier Index', value: '98.2%', progress: 98, status: 'Fortified' },
        { label: 'Collagen Density Renewal', value: '+84.6%', progress: 85, status: 'Accelerating' },
      ],
    },
    {
      category: 'Body Sculpting',
      badge: 'Targeted Protocol',
      accent: '#c29b64',
      highlight: 'Lymphatic Drainage + RF Sculpting',
      metrics: [
        { label: 'Micro-Circulation Flow', value: '+88.4%', progress: 88, status: 'Enhanced' },
        { label: 'Muscle Tone Activation', value: '92.0%', progress: 92, status: 'High Response' },
        { label: 'Tissue Elasticity Score', value: '95.5%', progress: 96, status: 'Peak Health' },
      ],
    },
    {
      category: 'Longevity & Calm',
      badge: 'Sensory Protocol',
      accent: '#8b5e3c',
      highlight: 'Cellular Restoration + Sensory Calm',
      metrics: [
        { label: 'Sensory Calm Score', value: '99.4%', progress: 99, status: 'Pure Bliss' },
        { label: 'Autonomic Stress Reset', value: '-68.2%', progress: 86, status: 'Restored' },
        { label: 'Cellular Longevity Vitality', value: '94.0%', progress: 94, status: 'Doctor-Monitored' },
      ],
    },
  ];

  const current = tabTelemetry[activeTabIndex] || tabTelemetry[0];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '540px',
        margin: '0 auto',
        transformStyle: 'preserve-3d',
        paddingTop: '46px',
        ...tiltStyle,
      }}
      className="beauty-tech-hero-wrapper"
    >
      {/* ── Floating Badges Above the Glass Telemetry Card ── */}

      {/* Top-Left Badge: Skin Analysis */}
      <div
        className="floating-tech-card float-card-1"
        style={{
          position: 'absolute',
          top: '0px',
          left: '4px',
          zIndex: 10,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          padding: '8px 16px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.95)',
          boxShadow: '0 12px 32px rgba(44,24,16,0.1), 0 0 16px rgba(196,98,45,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transform: 'translateZ(35px)',
        }}
      >
        <div
          style={{
            width: '32px', height: '32px', borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(196,98,45,0.16), rgba(194,155,100,0.25))',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4622d',
          }}
        >
          <Activity size={17} />
        </div>
        <div>
          <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#3d2314', letterSpacing: '0.02em' }}>
            Skin Diagnostics
          </div>
          <div style={{ fontSize: '10px', color: '#8b5e3c', fontWeight: 600 }}>
            Bespoke Dermal Analysis
          </div>
        </div>
      </div>

      {/* Top-Right Badge: Clinical Care */}
      <div
        className="floating-tech-card float-card-2"
        style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          zIndex: 10,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          padding: '8px 16px',
          borderRadius: '9999px',
          border: '1px solid rgba(255,255,255,0.95)',
          boxShadow: '0 12px 30px rgba(44,24,16,0.08), 0 0 14px rgba(194,155,100,0.12)',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '11.5px', fontWeight: 700, color: '#3d2314',
          transform: 'translateZ(30px)',
        }}
      >
        <ShieldCheck size={16} color="#c4622d" />
        <span>Clinical Care · Doctor-Led</span>
      </div>

      {/* ── Ambient Radial Glow behind telemetry panel ── */}
      <div
        style={{
          position: 'absolute',
          top: '40px', left: '-10px', right: '-10px', bottom: '-10px',
          borderRadius: '32px',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(196,98,45,0.15) 0%, rgba(194,155,100,0.1) 60%, transparent 80%)',
          filter: 'blur(30px)',
          zIndex: 0, pointerEvents: 'none',
        }}
      />

      {/* ── Glassmorphic Live Clinical Intelligence Telemetry Card ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          borderRadius: '24px',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(255,255,255,0.95)',
          boxShadow: '0 24px 60px rgba(44,24,16,0.1), 0 4px 20px rgba(196,98,45,0.06)',
          padding: 'clamp(20px, 3.5vw, 28px)',
          transform: 'translateZ(20px)',
          transition: 'all 0.4s ease',
        }}
        className="clinical-telemetry-card"
      >
        {/* Header strip with Live Dermal Scan and REC */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '16px',
            marginBottom: '18px',
            borderBottom: '1px solid rgba(61,35,20,0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '28px', height: '28px', borderRadius: '8px',
                background: `${current.accent}18`, color: current.accent,
              }}
            >
              <Sparkles size={16} />
            </span>
            <div>
              <div
                style={{
                  fontSize: '9.5px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: current.accent,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: current.accent,
                    boxShadow: `0 0 8px ${current.accent}`,
                    animation: 'pulseDot 1.6s infinite',
                  }}
                />
                Clinical Dermal Evaluation · Active
              </div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#3d2314' }}>
                {current.category}
              </div>
            </div>
          </div>

          <span
            style={{
              padding: '4px 11px',
              borderRadius: '9999px',
              fontSize: '10.5px',
              fontWeight: 700,
              background: `${current.accent}12`,
              color: current.accent,
              border: `1px solid ${current.accent}30`,
              letterSpacing: '0.03em',
            }}
          >
            {current.badge}
          </span>
        </div>

        {/* Treatment Highlight Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(253,248,243,0.9)',
            border: '1px solid rgba(196,98,45,0.18)',
            padding: '8px 14px',
            borderRadius: '12px',
            marginBottom: '20px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#5c3520',
          }}
        >
          <Sparkles size={13} color={current.accent} />
          <span>Recommended: <strong>{current.highlight}</strong></span>
        </div>

        {/* Live Metrics Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
          {current.metrics.map((metric, idx) => (
            <div key={metric.label}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '5px',
                  fontSize: '11.5px',
                }}
              >
                <span style={{ color: '#6b4c38', fontWeight: 600 }}>{metric.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: 'rgba(196,98,45,0.09)',
                      color: '#8b5e3c',
                    }}
                  >
                    {metric.status}
                  </span>
                  <span style={{ fontWeight: 800, color: '#3d2314', minWidth: '42px', textAlign: 'right' }}>
                    {metric.value}
                  </span>
                </div>
              </div>

              {/* Animated Progress Track */}
              <div
                style={{
                  height: '6px',
                  borderRadius: '9999px',
                  background: 'rgba(61,35,20,0.07)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${metric.progress}%`,
                    borderRadius: '9999px',
                    background: `linear-gradient(90deg, ${current.accent} 0%, #c29b64 100%)`,
                    transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: `0 0 10px ${current.accent}55`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Doctor-Led Verification Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '14px',
            borderTop: '1px solid rgba(61,35,20,0.08)',
            fontSize: '11px',
            color: '#8b5e3c',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#c4622d" />
            <span>GMC Certified Aesthetic Protocol</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span
              style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 6px #22c55e',
                display: 'inline-block',
              }}
            />
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#3d2314' }}>Dermal Verified</span>
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.35); opacity: 0.6; }
        }

        .float-card-1 { animation: floatGentle1 5s ease-in-out infinite alternate; }
        .float-card-2 { animation: floatGentle2 6s ease-in-out infinite alternate; }

        @keyframes floatGentle1 {
          0%   { transform: translateY(0px) translateZ(35px); }
          100% { transform: translateY(-6px) translateZ(35px); }
        }
        @keyframes floatGentle2 {
          0%   { transform: translateY(0px) translateZ(30px); }
          100% { transform: translateY(5px) translateZ(30px); }
        }

        @media (max-width: 767px) {
          .float-card-1 { top: -6px !important; left: 0px !important; padding: 6px 12px !important; }
          .float-card-2 { top: -6px !important; right: 0px !important; padding: 6px 12px !important; }
          .clinical-telemetry-card { padding: 18px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .float-card-1, .float-card-2 {
            animation: none !important; transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BeautyTechHeroVisual;

import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

// Animated counter hook
const useCountUp = (target, duration = 1200, start = true) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
};

// Radial SVG Score Ring
const ScoreRing = ({ score, color, size = 100, strokeWidth = 7 }) => {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e2e8f0" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.16,1,0.3,1)' }}
      />
    </svg>
  );
};

export const BeautyTechHeroVisual = ({ activeTabIndex = 0, onTabChange }) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

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
      accent: '#1e5aa8',
      highlight: 'Clinical Hydrafacial + RF Microneedling',
      overallScore: 96,
      scoreColor: '#1e5aa8',
      scoreLabel: 'Skin Score',
      metrics: [
        { label: 'Deep Dermal Hydration', value: '94.8%', progress: 95, status: 'Optimal' },
        { label: 'Epidermal Barrier Index', value: '98.2%', progress: 98, status: 'Fortified' },
        { label: 'Collagen Density Renewal', value: '+84.6%', progress: 85, status: 'Accelerating' },
      ],
    },
    {
      category: 'Body Sculpting',
      badge: 'Targeted Protocol',
      accent: '#16a34a',
      highlight: 'Lymphatic Drainage + RF Sculpting',
      overallScore: 92,
      scoreColor: '#16a34a',
      scoreLabel: 'Body Score',
      metrics: [
        { label: 'Micro-Circulation Flow', value: '+88.4%', progress: 88, status: 'Enhanced' },
        { label: 'Muscle Tone Activation', value: '92.0%', progress: 92, status: 'High Response' },
        { label: 'Tissue Elasticity Score', value: '95.5%', progress: 96, status: 'Peak Health' },
      ],
    },
    {
      category: 'Longevity & Calm',
      badge: 'Sensory Protocol',
      accent: '#0284c7',
      highlight: 'Cellular Restoration + Sensory Calm',
      overallScore: 99,
      scoreColor: '#0284c7',
      scoreLabel: 'Calm Score',
      metrics: [
        { label: 'Sensory Calm Score', value: '99.4%', progress: 99, status: 'Pure Bliss' },
        { label: 'Autonomic Stress Reset', value: '-68.2%', progress: 86, status: 'Restored' },
        { label: 'Cellular Longevity Vitality', value: '94.0%', progress: 94, status: 'Doctor-Monitored' },
      ],
    },
  ];

  const current = tabTelemetry[activeTabIndex] || tabTelemetry[0];
  const countedScore = useCountUp(current.overallScore, 1200, mounted);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        perspective: '1100px',
        ...tiltStyle,
      }}
      className="beauty-tech-hero-wrapper"
    >
      {/* ── Top-Left: Animated Circular Score Ring ── */}
      <div
        className="floating-tech-card float-card-1"
        style={{
          position: 'absolute',
          top: '-6px',
          left: '4px',
          zIndex: 10,
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(20px)',
          padding: '10px 16px 10px 10px',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 12px 32px rgba(15,41,66,0.09), 0 0 16px rgba(37,99,235,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transform: 'translateZ(35px)',
          minWidth: '152px',
        }}
      >
        {/* Radial ring */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <ScoreRing score={mounted ? current.overallScore : 0} color={current.scoreColor} size={56} strokeWidth={5.5} />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '13px', fontWeight: 900, color: current.scoreColor, lineHeight: 1 }}>
              {countedScore}
            </span>
            <span style={{ fontSize: '7.5px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.02em' }}>/ 100</span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f2942' }}>{current.scoreLabel}</div>
          <div style={{ fontSize: '9.5px', color: current.scoreColor, fontWeight: 700, marginTop: '2px' }}>
            AI Clinical Analysis
          </div>
          <div style={{
            marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px',
            background: `${current.scoreColor}12`, borderRadius: '6px',
            padding: '2px 6px', width: 'fit-content',
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 5px #22c55e' }} />
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#15803d' }}>Live Reading</span>
          </div>
        </div>
      </div>

      {/* ── Top-Right: Glowing Doctor-Led Trust Badge ── */}
      <div
        className="floating-tech-card float-card-2"
        style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          zIndex: 10,
          background: 'linear-gradient(135deg, rgba(22,163,74,0.1) 0%, rgba(255,255,255,0.97) 60%)',
          backdropFilter: 'blur(20px)',
          padding: '9px 14px',
          borderRadius: '9999px',
          border: '1px solid rgba(22,163,74,0.25)',
          boxShadow: '0 8px 24px rgba(22,163,74,0.15), 0 0 20px rgba(22,163,74,0.08)',
          display: 'flex', alignItems: 'center', gap: '7px',
          fontSize: '11.5px', fontWeight: 700, color: '#0f2942',
          transform: 'translateZ(30px)',
        }}
      >
        <div style={{
          width: '26px', height: '26px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #16a34a, #22c55e)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 10px rgba(22,163,74,0.4)',
        }}>
          <ShieldCheck size={14} color="#ffffff" />
        </div>
        <span>Clinical Care · Doctor-Led</span>
      </div>

      {/* ── Ambient Radial Glow behind telemetry panel ── */}
      <div
        style={{
          position: 'absolute',
          top: '40px', left: '-10px', right: '-10px', bottom: '-10px',
          borderRadius: '32px',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.15) 0%, rgba(22,163,74,0.12) 60%, transparent 80%)',
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
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(226,232,240,0.9)',
          boxShadow: '0 24px 60px rgba(15,41,66,0.09), 0 4px 20px rgba(37,99,235,0.06)',
          padding: 'clamp(20px, 3.5vw, 28px)',
          transform: 'translateZ(20px)',
          transition: 'all 0.4s ease',
        }}
        className="clinical-telemetry-card"
      >
        {/* Header strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '16px',
            marginBottom: '18px',
            borderBottom: '1px solid #e2e8f0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '28px', height: '28px', borderRadius: '8px',
                background: `${current.accent}15`, color: current.accent,
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
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f2942' }}>
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
            background: 'rgba(240,249,255,0.9)',
            border: '1px solid #bae6fd',
            padding: '8px 14px',
            borderRadius: '12px',
            marginBottom: '20px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#0f2942',
          }}
        >
          <Sparkles size={13} color={current.accent} />
          <span>Recommended: <strong>{current.highlight}</strong></span>
        </div>

        {/* Live Metrics Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
          {current.metrics.map((metric) => (
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
                <span style={{ color: '#334155', fontWeight: 600 }}>{metric.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: '#dcfce7',
                      color: '#15803d',
                    }}
                  >
                    {metric.status}
                  </span>
                  <span style={{ fontWeight: 800, color: '#0f2942', minWidth: '42px', textAlign: 'right' }}>
                    {metric.value}
                  </span>
                </div>
              </div>

              {/* Animated Progress Track */}
              <div
                style={{
                  height: '6px',
                  borderRadius: '9999px',
                  background: '#e2e8f0',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${metric.progress}%`,
                    borderRadius: '9999px',
                    background: `linear-gradient(90deg, ${current.accent} 0%, #16a34a 100%)`,
                    transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: `0 0 10px ${current.accent}55`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verification Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '14px',
            borderTop: '1px solid #e2e8f0',
            fontSize: '11px',
            color: '#475569',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="#16a34a" />
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
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#0f2942' }}>Dermal Verified</span>
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
          100% { transform: translateY(-7px) translateZ(35px); }
        }
        @keyframes floatGentle2 {
          0%   { transform: translateY(0px) translateZ(30px); }
          100% { transform: translateY(6px) translateZ(30px); }
        }

        @media (max-width: 767px) {
          .float-card-1 { top: -6px !important; left: 0px !important; padding: 8px 12px !important; }
          .float-card-2 { top: -6px !important; right: 0px !important; padding: 7px 12px !important; }
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

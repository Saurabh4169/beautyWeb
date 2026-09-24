import React, { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const isFloat = target % 1 !== 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      const current = isFloat ? +(ease * target).toFixed(1) : Math.floor(ease * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatItem = ({ value, suffix, label, started, divider }) => {
  const num = parseFloat(value.replace(/[^0-9.]/g, ''));
  const counted = useCountUp(num, 1800, started);

  return (
    <div
      style={{
        textAlign: 'center',
        position: 'relative',
        padding: '0 clamp(12px, 2vw, 24px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      {/* Vertical divider */}
      {divider && (
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, #cbd5e1, transparent)',
          }}
        />
      )}

      <div
        style={{
          fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)',
          fontWeight: 700,
          fontFamily: 'var(--font-serif-display)',
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          background: 'linear-gradient(135deg, #1e5aa8 0%, #0284c7 50%, #16a34a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {counted.toLocaleString()}{suffix}
      </div>

      <div
        style={{
          fontSize: '11px',
          color: '#334155',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          lineHeight: 1.4,
          maxWidth: '130px',
        }}
      >
        {label}
      </div>

      {/* Bottom accent dot */}
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1e5aa8, #16a34a)',
          display: 'block',
          marginTop: '2px',
          opacity: 0.85,
        }}
      />
    </div>
  );
};

export const StatsBar = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '12+', suffix: '+', label: 'Years Clinical Excellence' },
    { value: '18000', suffix: '+', label: 'Bespoke Client Results', raw: 18000 },
    { value: '100', suffix: '%', label: 'Medical-Grade Formulations' },
    { value: '99.8', suffix: '%', label: 'Client Satisfaction Rating' },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(to right, #f0f7ff, #ffffff, #f0fdf4)',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
        padding: 'clamp(28px, 4vw, 48px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient sky shimmer */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: '-20%',
          width: '60%', height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(16px, 2vw, 0px)',
            alignItems: 'center',
          }}
        >
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix || ''}
              label={stat.label}
              started={started}
              divider={idx > 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

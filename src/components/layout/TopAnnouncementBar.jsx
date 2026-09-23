import React from 'react';
import { Sparkles, Phone, MapPin, Clock } from 'lucide-react';

export const TopAnnouncementBar = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #1a0e08 0%, #241409 50%, #1a0e08 100%)',
        color: '#c4a898',
        fontSize: '12px',
        borderBottom: '1px solid rgba(196,98,45,0.18)',
        padding: '9px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle animated warm shimmer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(196,98,45,0.06) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'topBarShimmer 4s ease infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Main Promo Message */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '7px', width: '100%', justifyContent: 'center' }}
          className="promo-text-wrapper"
        >
          <Sparkles size={12} color="#c4622d" style={{ flexShrink: 0 }} />
          <span style={{ textAlign: 'center' }}>
            <strong style={{ color: '#d4784a' }}>Autumn Promotion:</strong>{' '}
            15% off your first treatment — use code{' '}
            <span
              style={{
                color: '#fdf8f3',
                fontWeight: 800,
                letterSpacing: '0.06em',
                background: 'rgba(196,98,45,0.18)',
                padding: '1px 8px',
                borderRadius: '4px',
                border: '1px solid rgba(196,98,45,0.35)',
              }}
            >
              OASIS15
            </span>
          </span>
          <Sparkles size={12} color="#c29b64" style={{ flexShrink: 0 }} />
        </div>

        {/* Secondary Info — desktop only */}
        <div
          style={{ display: 'none', alignItems: 'center', gap: '20px' }}
          className="topbar-secondary-info"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={11} color="#c4622d" />
            <span>Allen, TX &amp; London</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={11} color="#c4622d" />
            <span>Mon–Sat: 09:00–19:30</span>
          </div>

          <a
            href="tel:+12145007825"
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              color: '#fdf8f3', fontWeight: 600,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#d4784a')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fdf8f3')}
          >
            <Phone size={11} color="#c4622d" />
            (214) 500-7825
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .promo-text-wrapper {
            width: auto !important;
            justify-content: flex-start !important;
          }
          .topbar-secondary-info {
            display: flex !important;
          }
        }
        @keyframes topBarShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

import React from 'react';
import { Sparkles, Phone, MapPin, Clock } from 'lucide-react';

export const TopAnnouncementBar = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #0b2545 0%, #1e5aa8 50%, #0b2545 100%)',
        color: '#e2e8f0',
        fontSize: '12px',
        borderBottom: '1px solid rgba(56, 189, 248, 0.25)',
        padding: '9px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle animated sky blue shimmer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.12) 50%, transparent 100%)',
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
          <Sparkles size={12} color="#38bdf8" style={{ flexShrink: 0 }} />
          <span style={{ textAlign: 'center' }}>
            <strong style={{ color: '#38bdf8' }}>New Patient Special:</strong>{' '}
            15% off your first treatment — use code{' '}
            <span
              style={{
                color: '#15803d',
                fontWeight: 800,
                letterSpacing: '0.06em',
                background: '#dcfce7',
                padding: '1px 8px',
                borderRadius: '4px',
                border: '1px solid #86efac',
              }}
            >
              OASIS15
            </span>
          </span>
          <Sparkles size={12} color="#4ade80" style={{ flexShrink: 0 }} />
        </div>

        {/* Secondary Info — desktop only */}
        <div
          style={{ display: 'none', alignItems: 'center', gap: '20px' }}
          className="topbar-secondary-info"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={11} color="#38bdf8" />
            <span>Allen, TX Clinic (333 East Bethany)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={11} color="#4ade80" />
            <span>Mon–Sat: 09:00–19:30</span>
          </div>

          <a
            href="tel:+12145007825"
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              color: '#ffffff', fontWeight: 600,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            <Phone size={11} color="#38bdf8" />
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

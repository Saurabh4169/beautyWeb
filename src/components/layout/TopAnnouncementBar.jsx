import React from 'react';
import { Sparkles, Phone, MapPin, Clock } from 'lucide-react';

export const TopAnnouncementBar = () => {
  return (
    <div
      style={{
        background: "#0e241d",
        color: "#c2dad2",
        fontSize: "12px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "8px 0"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px"
        }}
      >
        {/* Main Promo Message */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", width: "100%", justifyContent: "center" }} className="promo-text-wrapper">
          <Sparkles size={13} color="#10b981" style={{ flexShrink: 0 }} />
          <span style={{ textAlign: "center" }}>
            <strong>Autumn Promotion:</strong> 15% off first treatment with code <span style={{ color: "#ffffff", fontWeight: 700, textDecoration: "underline" }}>OASIS15</span>
          </span>
        </div>

        {/* Secondary Info (Desktop & Tablets Only) */}
        <div
          style={{ display: "none", alignItems: "center", gap: "18px" }}
          className="topbar-secondary-info"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <MapPin size={12} color="#10b981" />
            <span>Allen, TX & London</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Clock size={12} color="#10b981" />
            <span>Mon–Sat: 09:00–19:30</span>
          </div>

          <a
            href="tel:+12145007825"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#ffffff",
              fontWeight: 600
            }}
          >
            <Phone size={12} color="#10b981" />
            <span>(214) 500-7825</span>
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
      `}</style>
    </div>
  );
};

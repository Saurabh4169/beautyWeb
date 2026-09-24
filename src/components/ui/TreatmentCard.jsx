import React from 'react';
import { Sparkles, Clock, ShieldCheck, ArrowRight, CheckCircle2, Droplets, Zap, Activity, HeartHandshake } from 'lucide-react';
import { Badge } from './Badge';
import { useBooking } from '../../context/BookingContext';

export const TreatmentCard = ({ treatment }) => {
  const { openBookingModal } = useBooking();

  const getIcon = (id) => {
    switch (id) {
      case 'hydrafacial-deluxe':
        return <Droplets size={20} color="#1e5aa8" />;
      case 'rf-microneedling':
        return <Zap size={20} color="#16a34a" />;
      case 'polynucleotides-boosters':
        return <Activity size={20} color="#1e5aa8" />;
      case 'chemical-peels-bespoke':
        return <Sparkles size={20} color="#16a34a" />;
      case 'laser-genesis-ipl':
        return <ShieldCheck size={20} color="#1e5aa8" />;
      default:
        return <HeartHandshake size={20} color="#16a34a" />;
    }
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        border: "1px solid #e2e8f0",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        boxShadow: "0 4px 20px rgba(15, 41, 66, 0.05)"
      }}
      className="treatment-card-hover"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 18px 45px rgba(30, 90, 168, 0.12)";
        e.currentTarget.style.borderColor = "#1e5aa8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(15, 41, 66, 0.05)";
        e.currentTarget.style.borderColor = "#e2e8f0";
      }}
    >
      <div>
        {/* Top Icon & Badge Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#f0f7ff",
              border: "1px solid #e0f2fe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {getIcon(treatment.id)}
          </div>
          <Badge variant="emerald">{treatment.badge}</Badge>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#16a34a",
            marginBottom: "6px"
          }}
        >
          {treatment.tagline}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.45rem",
            color: "#0f2942",
            marginBottom: "14px",
            lineHeight: 1.25,
            fontFamily: "var(--font-serif-display)"
          }}
        >
          {treatment.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.92rem",
            color: "#334155",
            lineHeight: 1.6,
            marginBottom: "20px"
          }}
        >
          {treatment.description}
        </p>

        {/* Features list */}
        <ul style={{ listStyle: "none", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {treatment.features.slice(0, 3).map((feature, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "#334155" }}>
              <CheckCircle2 size={15} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Meta & Action */}
      <div
        style={{
          borderTop: "1px solid #e2e8f0",
          paddingTop: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#64748b" }}>
            <Clock size={13} color="#1e5aa8" />
            <span>{treatment.duration}</span>
            <span style={{ margin: "0 4px" }}>•</span>
            <span style={{ fontWeight: 700, color: "#1e5aa8", fontSize: "14px" }}>{treatment.price}</span>
          </div>
        </div>

        <button
          onClick={() => openBookingModal(treatment)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "13px",
            fontWeight: 700,
            color: "#1e5aa8",
            padding: "8px 16px",
            borderRadius: "9999px",
            background: "#f0f7ff",
            border: "1px solid #bae6fd",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #1e5aa8, #16a34a)";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.borderColor = "#1e5aa8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f0f7ff";
            e.currentTarget.style.color = "#1e5aa8";
            e.currentTarget.style.borderColor = "#bae6fd";
          }}
        >
          <span>Book</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

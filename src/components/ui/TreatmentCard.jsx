import React from 'react';
import { Sparkles, Clock, ShieldCheck, ArrowRight, CheckCircle2, Droplets, Zap, Activity, HeartHandshake } from 'lucide-react';
import { Badge } from './Badge';
import { useBooking } from '../../context/BookingContext';

export const TreatmentCard = ({ treatment }) => {
  const { openBookingModal, setQuickViewTreatment } = useBooking();

  const getIcon = (id) => {
    switch (id) {
      case 'hydrafacial-deluxe':
        return <Droplets size={20} color="#155e4c" />;
      case 'rf-microneedling':
        return <Zap size={20} color="#155e4c" />;
      case 'polynucleotides-boosters':
        return <Activity size={20} color="#155e4c" />;
      case 'chemical-peels-bespoke':
        return <Sparkles size={20} color="#155e4c" />;
      case 'laser-genesis-ipl':
        return <ShieldCheck size={20} color="#155e4c" />;
      default:
        return <HeartHandshake size={20} color="#155e4c" />;
    }
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        border: "1px solid #e7edea",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        boxShadow: "0 4px 20px rgba(16, 38, 31, 0.04)"
      }}
      className="treatment-card-hover"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 18px 45px rgba(21, 62, 53, 0.1)";
        e.currentTarget.style.borderColor = "#bed9cf";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(16, 38, 31, 0.04)";
        e.currentTarget.style.borderColor = "#e7edea";
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
              background: "#eaf5f1",
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
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#4e8275",
            marginBottom: "6px"
          }}
        >
          {treatment.tagline}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.45rem",
            color: "var(--color-primary-dark)",
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
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
            marginBottom: "20px"
          }}
        >
          {treatment.description}
        </p>

        {/* Features list */}
        <ul style={{ listStyle: "none", marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {treatment.features.slice(0, 3).map((feature, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "#364a43" }}>
              <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Meta & Action */}
      <div
        style={{
          borderTop: "1px solid #edf2f0",
          paddingTop: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#6b7d76" }}>
            <Clock size={13} />
            <span>{treatment.duration}</span>
            <span style={{ margin: "0 4px" }}>•</span>
            <span style={{ fontWeight: 700, color: "var(--color-primary-dark)", fontSize: "14px" }}>{treatment.price}</span>
          </div>
        </div>

        <button
          onClick={() => openBookingModal(treatment)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#163a31",
            padding: "6px 12px",
            borderRadius: "6px",
            background: "#f0f6f4",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#163a31";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f0f6f4";
            e.currentTarget.style.color = "#163a31";
          }}
        >
          <span>Book</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

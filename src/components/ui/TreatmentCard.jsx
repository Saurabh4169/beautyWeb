import React from 'react';
import { Sparkles, Clock, ShieldCheck, ArrowRight, CheckCircle2, Droplets, Zap, Activity, HeartHandshake } from 'lucide-react';
import { Badge } from './Badge';
import { useBooking } from '../../context/BookingContext';

export const TreatmentCard = ({ treatment }) => {
  const { openBookingModal, setQuickViewTreatment } = useBooking();

  const getIcon = (id) => {
    switch (id) {
      case 'hydrafacial-deluxe':
        return <Droplets size={20} color="#c4622d" />;
      case 'rf-microneedling':
        return <Zap size={20} color="#c4622d" />;
      case 'polynucleotides-boosters':
        return <Activity size={20} color="#c4622d" />;
      case 'chemical-peels-bespoke':
        return <Sparkles size={20} color="#c4622d" />;
      case 'laser-genesis-ipl':
        return <ShieldCheck size={20} color="#c4622d" />;
      default:
        return <HeartHandshake size={20} color="#c4622d" />;
    }
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        border: "1px solid #ede5da",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        boxShadow: "0 4px 20px rgba(44, 24, 16, 0.04)"
      }}
      className="treatment-card-hover"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 18px 45px rgba(44, 24, 16, 0.12)";
        e.currentTarget.style.borderColor = "#c4622d";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(44, 24, 16, 0.04)";
        e.currentTarget.style.borderColor = "#ede5da";
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
              background: "#fdf0e8",
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
            color: "#8b5e3c",
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
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "#5c3520" }}>
              <CheckCircle2 size={15} color="#c4622d" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Meta & Action */}
      <div
        style={{
          borderTop: "1px solid #ede5da",
          paddingTop: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#8b5e3c" }}>
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
            color: "#3d2314",
            padding: "6px 14px",
            borderRadius: "6px",
            background: "#f8f2eb",
            border: "1px solid #e4d8cc",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#3d2314";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.borderColor = "#3d2314";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f8f2eb";
            e.currentTarget.style.color = "#3d2314";
            e.currentTarget.style.borderColor = "#e4d8cc";
          }}
        >
          <span>Book</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

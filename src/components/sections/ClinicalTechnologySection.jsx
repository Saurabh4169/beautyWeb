import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { technologyData } from '../../data/technologyData';
import { Cpu, Zap, Activity, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export const ClinicalTechnologySection = () => {
  const { openBookingModal } = useBooking();

  return (
    <section
      id="technology"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #091e36 0%, #0e2e54 50%, #091e36 100%)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background ambient blue lighting effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.18) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeader
          dark={true}
          badge="EVIDENCE-BASED EXCELLENCE"
          title="Stunning Results, Powered by Clinical Technology"
          subtitle="Precision dermatological engineering meets cellular biology for uncompromising clinical safety and long-lasting collagen regeneration."
        />

        {/* 4 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginBottom: "50px"
          }}
        >
          {technologyData.map((tech) => (
            <div
              key={tech.number}
              style={{
                background: "rgba(14, 46, 84, 0.72)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: "20px",
                padding: "32px 26px",
                backdropFilter: "blur(10px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.35s ease",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#38bdf8";
                e.currentTarget.style.boxShadow = "0 12px 35px rgba(37, 99, 235, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.25)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                {/* Number & Tag */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif-display)",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "#38bdf8",
                      lineHeight: 1
                    }}
                  >
                    {tech.number}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#bae6fd",
                      fontWeight: 700,
                      background: "rgba(56, 189, 248, 0.15)",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      padding: "4px 10px",
                      borderRadius: "9999px"
                    }}
                  >
                    {tech.tag}
                  </span>
                </div>

                {/* Tech Title */}
                <h3
                  style={{
                    fontSize: "1.35rem",
                    color: "#ffffff",
                    marginBottom: "12px",
                    fontFamily: "var(--font-serif-display)"
                  }}
                >
                  {tech.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "#94a3b8",
                    lineHeight: 1.65,
                    marginBottom: "20px"
                  }}
                >
                  {tech.description}
                </p>
              </div>

              {/* Benefits list */}
              <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "16px" }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {tech.benefits.map((b, i) => (
                    <li key={i} style={{ fontSize: "12px", color: "#e2e8f0", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner inside Dark Section */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: "18px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Cpu size={22} color="#38bdf8" />
            <span style={{ fontSize: "0.95rem", color: "#ffffff" }}>
              Interested in clinical device specifications and contraindications?
            </span>
          </div>

          <button
            onClick={() => openBookingModal()}
            style={{
              background: "linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)",
              color: "#ffffff",
              padding: "11px 26px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(30,90,168,0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 22px rgba(30,90,168,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(30,90,168,0.4)";
            }}
          >
            <span>Consult With a Physician</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

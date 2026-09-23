import React, { useState } from 'react';
import { Calendar, Layers } from 'lucide-react';
import { Badge } from './Badge';

export const BeforeAfterSlider = ({ cases }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const currentCase = cases[activeCaseIndex];

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
      {/* Case Selector Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "28px",
          flexWrap: "wrap"
        }}
      >
        {cases.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => setActiveCaseIndex(idx)}
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: "12.5px",
              fontWeight: 600,
              transition: "all 0.25s ease",
              background: activeCaseIndex === idx ? "#3d2314" : "#ffffff",
              color: activeCaseIndex === idx ? "#ffffff" : "#6b4c38",
              border: activeCaseIndex === idx ? "1px solid #3d2314" : "1px solid #ede5da",
              boxShadow: activeCaseIndex === idx ? "0 4px 14px rgba(44, 24, 16, 0.22)" : "none"
            }}
          >
            {c.category}
          </button>
        ))}
      </div>

      {/* Main Before/After Card */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "clamp(18px, 3vw, 24px)",
          border: "1px solid #ede5da",
          padding: "clamp(16px, 3.5vw, 32px)",
          boxShadow: "0 12px 40px rgba(44, 24, 16, 0.06)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px"
        }}
      >
        {/* Top Header Row of the Card */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "12px",
            borderBottom: "1px solid #ede5da",
            paddingBottom: "14px"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
              <Badge variant="emerald">CLINICAL CASE #{activeCaseIndex + 1}</Badge>
              <span style={{ fontSize: "11.5px", color: "#8b5e3c", fontWeight: 500 }}>Standard Polarized Photography</span>
            </div>
            <h3
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)",
                color: "var(--color-primary-dark)",
                fontFamily: "var(--font-serif-display)",
                lineHeight: 1.25
              }}
            >
              {currentCase.title}
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              fontSize: "12px",
              color: "#6b4c38",
              flexWrap: "wrap"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Calendar size={14} color="#c4622d" />
              <span><strong>Timeline:</strong> {currentCase.timeline}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Layers size={14} color="#c4622d" />
              <span><strong>Protocol:</strong> {currentCase.sessions}</span>
            </div>
          </div>
        </div>

        {/* The Image Container with Labels */}
        <div
          style={{
            position: "relative",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #ede5da",
            background: "#1a0e08",
            width: "100%"
          }}
        >
          <img
            src={currentCase.image}
            alt={currentCase.title}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              maxHeight: "480px",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Detailed Clinical Notes Box */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "16px",
            background: "#fdf8f3",
            borderRadius: "14px",
            padding: "clamp(14px, 2.5vw, 22px)",
            border: "1px solid #ede5da"
          }}
        >
          <div>
            <div style={{ fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "#a84e22", marginBottom: "4px" }}>
              Initial Clinical Baseline
            </div>
            <p style={{ fontSize: "0.86rem", color: "#6b4c38", lineHeight: 1.55 }}>
              {currentCase.beforeNotes}
            </p>
          </div>

          <div>
            <div style={{ fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "#c4622d", marginBottom: "4px" }}>
              Documented Post-Treatment Result
            </div>
            <p style={{ fontSize: "0.86rem", color: "#6b4c38", lineHeight: 1.55 }}>
              {currentCase.afterNotes}
            </p>
          </div>

          <div
            style={{
              gridColumn: "1 / -1",
              borderTop: "1px solid #ede5da",
              paddingTop: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              fontSize: "12px"
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--color-primary-dark)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Clinical Pathway:
            </span>
            <span style={{ color: "#3d2314", fontWeight: 500 }}>
              {currentCase.protocolUsed}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

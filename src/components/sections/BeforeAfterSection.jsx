import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { beforeAfterCases } from '../../data/beforeAfterData';
import { ShieldCheck, Camera, Sparkles, Award } from 'lucide-react';

export const BeforeAfterSection = () => {
  const trustPoints = [
    { icon: <Camera size={14} color="#1e5aa8" />, text: "Cross-Polarized Lighting Standards" },
    { icon: <ShieldCheck size={14} color="#16a34a" />, text: "100% Raw & Unretouched Documentation" },
    { icon: <Award size={14} color="#1e5aa8" />, text: "Doctor-Administered Protocols" },
    { icon: <Sparkles size={14} color="#16a34a" />, text: "Verified Allen, TX Patient Outcomes" }
  ];

  return (
    <section id="before-after" className="section-padding" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0f7ff 50%, #ffffff 100%)", position: "relative" }}>
      <div className="container">
        <SectionHeader
          badge="CLINICAL RESULTS GALLERY"
          title="See The Difference — Real Clinical Transformations"
          subtitle="Documented visual evidence of doctor-led treatment protocols photographed under standard cross-polarized clinical illumination."
        />

        {/* Clinical Trust Strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(10px, 2vw, 24px)",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {trustPoints.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "12px",
                color: "#334155",
                fontWeight: 600,
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(15, 41, 66, 0.04)"
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <BeforeAfterSlider cases={beforeAfterCases} />
      </div>
    </section>
  );
};

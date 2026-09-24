import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TreatmentCard } from '../ui/TreatmentCard';
import { treatmentCategories, treatmentsData } from '../../data/treatmentsData';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export const TreatmentsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Treatments");
  const { openBookingModal } = useBooking();

  const filteredTreatments = selectedCategory === "All Treatments"
    ? treatmentsData
    : treatmentsData.filter(t => t.category === selectedCategory || (selectedCategory === "Skin Rejuvenation" && t.category === "Skin Rejuvenation"));

  return (
    <section id="treatments" className="section-padding" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0f7ff 50%, #ffffff 100%)" }}>
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="BESPOKE CLINICAL AESTHETICS"
          title="Clinical Excellence & Bespoke Aesthetic Care"
          subtitle="Medical-grade aesthetic treatments tailored to rejuvenate, restore radiance, and elevate natural facial harmony with science-backed protocols."
        />

        {/* Category Pills Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "36px"
          }}
        >
          {treatmentCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "9px 20px",
                  borderRadius: "9999px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  background: isActive ? "#1e5aa8" : "#ffffff",
                  color: isActive ? "#ffffff" : "#334155",
                  border: isActive ? "1px solid #1e5aa8" : "1px solid #e2e8f0",
                  boxShadow: isActive ? "0 4px 14px rgba(30, 90, 168, 0.25)" : "0 2px 6px rgba(15,41,66,0.03)"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Treatments Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "24px",
            marginBottom: "40px"
          }}
        >
          {filteredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>

        {/* Bottom Diagnostic Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #f0f7ff 0%, #f0fdf4 100%)",
            borderRadius: "18px",
            border: "1px solid #bae6fd",
            padding: "clamp(20px, 3vw, 32px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            boxShadow: "0 6px 20px rgba(15,41,66,0.04)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1e5aa8, #16a34a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                flexShrink: 0
              }}
            >
              <Sparkles size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: "1.15rem", color: "#0f2942", fontFamily: "var(--font-serif-display)", marginBottom: "3px" }}>
                Unsure which protocol fits your skin needs?
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#334155", margin: 0 }}>
                Schedule a 3D VISIA deep dermal scan and diagnostic doctor consultation at our Allen, TX clinic.
              </p>
            </div>
          </div>

          <button
            onClick={() => openBookingModal()}
            style={{
              background: "linear-gradient(135deg, #1e5aa8 0%, #16a34a 100%)",
              color: "#ffffff",
              padding: "11px 22px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(30,90,168,0.3)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,90,168,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(30,90,168,0.3)';
            }}
          >
            <span>Book Diagnostic Scan</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

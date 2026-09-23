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
    <section id="treatments" className="section-padding" style={{ background: "#fdf8f3" }}>
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
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  background: isActive ? "#3d2314" : "#ffffff",
                  color: isActive ? "#ffffff" : "#6b4c38",
                  border: isActive ? "1px solid #3d2314" : "1px solid #ede5da",
                  boxShadow: isActive ? "0 4px 14px rgba(44, 24, 16, 0.22)" : "0 2px 6px rgba(44,24,16,0.03)"
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
            background: "linear-gradient(135deg, #fdf0e8 0%, #fdf8f3 100%)",
            borderRadius: "18px",
            border: "1px solid #ede5da",
            padding: "clamp(20px, 3vw, 32px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#3d2314",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4784a",
                flexShrink: 0
              }}
            >
              <Sparkles size={18} />
            </div>
            <div>
              <h4 style={{ fontSize: "1.1rem", color: "#3d2314", fontFamily: "var(--font-serif-display)" }}>
                Unsure which protocol fits your skin needs?
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#8b5e3c", margin: 0 }}>
                Schedule a 3D VISIA deep dermal scan and diagnostic doctor consultation.
              </p>
            </div>
          </div>

          <button
            onClick={() => openBookingModal()}
            style={{
              background: "#3d2314",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "background 0.2s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#c4622d'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#3d2314'; }}
          >
            <span>Book Diagnostic Scan</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

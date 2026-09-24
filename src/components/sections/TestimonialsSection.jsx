import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { testimonialsData, clientStats } from '../../data/testimonialsData';
import { Star, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0f7ff 100%)" }}>
      <div className="container">
        <SectionHeader
          badge="CLIENT EXPERIENCES"
          title="What Our Clients Say"
          subtitle="Inspiring stories and genuine clinical feedback from our valued patients across our Harley Street & Mayfair suites."
        />

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            marginBottom: "50px"
          }}
        >
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                boxShadow: "0 6px 24px rgba(30, 90, 168, 0.05)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 14px 35px rgba(30, 90, 168, 0.13)";
                e.currentTarget.style.borderColor = "#93c5fd";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(30, 90, 168, 0.05)";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <div>
                {/* Top stars & treatment */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#16a34a" color="#16a34a" />
                    ))}
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#1e5aa8", background: "#f0f7ff", padding: "4px 10px", borderRadius: "9999px" }}>
                    {review.treatment}
                  </span>
                </div>

                {/* Quote text */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#334155",
                    lineHeight: 1.68,
                    fontStyle: "italic",
                    marginBottom: "24px"
                  }}
                >
                  "{review.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div
                style={{
                  borderTop: "1px solid #e2e8f0",
                  paddingTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1rem", color: "#0f2942", fontWeight: 700, fontFamily: "var(--font-serif-display)" }}>
                    {review.author}
                  </h4>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>
                    {review.role}
                  </div>
                </div>

                {review.verified && (
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", fontWeight: 600, color: "#16a34a" }}>
                    <CheckCircle2 size={14} />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Trust Strip */}
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            background: "#f0f7ff",
            borderRadius: "14px",
            border: "1px solid #bfdbfe",
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "13px",
            color: "#334155"
          }}
        >
          Rated <strong style={{ color: "#1e5aa8" }}>{clientStats.fiveStarRating}</strong> across {clientStats.verifiedReviews} on Doctify & Google Reviews.
        </div>
      </div>
    </section>
  );
};

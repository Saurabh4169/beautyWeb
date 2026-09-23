import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { testimonialsData, clientStats } from '../../data/testimonialsData';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ background: "#ffffff" }}>
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
                border: "1px solid #ede5da",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                boxShadow: "0 6px 24px rgba(44, 24, 16, 0.04)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 14px 35px rgba(44, 24, 16, 0.1)";
                e.currentTarget.style.borderColor = "#c4622d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(44, 24, 16, 0.04)";
                e.currentTarget.style.borderColor = "#ede5da";
              }}
            >
              <div>
                {/* Top stars & treatment */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div style={{ display: "flex", gap: "2px", color: "#c29b64" }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#c29b64" color="#c29b64" />
                    ))}
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#c4622d", background: "#fdf0e8", padding: "4px 10px", borderRadius: "9999px" }}>
                    {review.treatment}
                  </span>
                </div>

                {/* Quote text */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#5c3520",
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
                  borderTop: "1px solid #ede5da",
                  paddingTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1rem", color: "#3d2314", fontWeight: 700, fontFamily: "var(--font-serif-display)" }}>
                    {review.author}
                  </h4>
                  <div style={{ fontSize: "12px", color: "#8b5e3c" }}>
                    {review.role}
                  </div>
                </div>

                {review.verified && (
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", fontWeight: 600, color: "#c4622d" }}>
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
            background: "#fdf8f3",
            borderRadius: "14px",
            border: "1px solid #ede5da",
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "13px",
            color: "#6b4c38"
          }}
        >
          Rated <strong style={{ color: "#3d2314" }}>{clientStats.fiveStarRating}</strong> across {clientStats.verifiedReviews} on Doctify & Google Reviews.
        </div>
      </div>
    </section>
  );
};

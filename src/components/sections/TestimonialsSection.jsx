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
                background: "#fcfbf9",
                borderRadius: "20px",
                border: "1px solid #e7eee9",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                boxShadow: "0 6px 24px rgba(16, 38, 31, 0.03)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 14px 35px rgba(22, 58, 49, 0.08)";
                e.currentTarget.style.borderColor = "#bed9cf";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(16, 38, 31, 0.03)";
                e.currentTarget.style.borderColor = "#e7eee9";
              }}
            >
              <div>
                {/* Top stars & treatment */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div style={{ display: "flex", gap: "2px", color: "#eab308" }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#eab308" color="#eab308" />
                    ))}
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#165e4c", background: "#e8f5f0", padding: "4px 10px", borderRadius: "9999px" }}>
                    {review.treatment}
                  </span>
                </div>

                {/* Quote text */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#30463e",
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
                  borderTop: "1px solid #ebf2ee",
                  paddingTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1rem", color: "#163a31", fontWeight: 700, fontFamily: "var(--font-serif-display)" }}>
                    {review.author}
                  </h4>
                  <div style={{ fontSize: "12px", color: "#748e84" }}>
                    {review.role}
                  </div>
                </div>

                {review.verified && (
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", fontWeight: 600, color: "#10b981" }}>
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
            background: "#f5faf7",
            borderRadius: "14px",
            border: "1px solid #d9ebe2",
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "13px",
            color: "#3d574d"
          }}
        >
          Rated <strong style={{ color: "#163a31" }}>{clientStats.fiveStarRating}</strong> across {clientStats.verifiedReviews} on Doctify & Google Reviews.
        </div>
      </div>
    </section>
  );
};

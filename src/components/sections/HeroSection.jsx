import React from 'react';
import { ArrowRight, ArrowUpRight, Star, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useBooking } from '../../context/BookingContext';

export const HeroSection = () => {
  const { openBookingModal } = useBooking();

  return (
    <section
      style={{
        position: "relative",
        background: "radial-gradient(ellipse at 80% 20%, #eaf4f0 0%, #fbfaf7 60%, #faf8f4 100%)",
        paddingTop: "clamp(40px, 6vw, 70px)",
        paddingBottom: "clamp(48px, 7vw, 80px)",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(36px, 5vw, 56px)",
            alignItems: "center"
          }}
        >
          {/* Left Column: Hero Text Content */}
          <div>
            {/* Pill Badge */}
            <div style={{ marginBottom: "18px" }}>
              <Badge variant="emerald" icon={<Sparkles size={13} color="#10b981" />}>
                Clinical Excellence & Medical Grade Aesthetics
              </Badge>
            </div>

            {/* Editorial Headline */}
            <h1
              style={{
                fontSize: "clamp(2.3rem, 5vw, 4.4rem)",
                lineHeight: 1.1,
                color: "var(--color-primary-dark)",
                letterSpacing: "-0.03em",
                marginBottom: "20px",
                fontFamily: "var(--font-serif-display)"
              }}
            >
              Your Beauty, <br />
              Your Wellness, <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  color: "#1d5849",
                  textDecoration: "underline",
                  textDecorationColor: "#a7d9c8",
                  textUnderlineOffset: "6px"
                }}
              >
                Your Oasis.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.12rem)",
                color: "#4e635b",
                lineHeight: 1.65,
                maxWidth: "540px",
                marginBottom: "30px"
              }}
            >
              At Beauty Oasis, we believe the best skincare is rooted in medical science. Providing bespoke clinical aesthetic treatments and personalized care tailored precisely to your unique dermal signature and longevity goals.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "28px"
              }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={17} />}
                onClick={() => openBookingModal()}
              >
                Book Consultation
              </Button>

              <a href="#treatments">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<ArrowUpRight size={17} />}
                >
                  Explore Treatments
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                fontSize: "12px",
                color: "#4f6960",
                fontWeight: 500
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span>Doctor-Led Clinic</span>
              </div>
              <span style={{ color: "#bdcfc7" }}>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span>12,000+ Five-Star Treatments</span>
              </div>
              <span style={{ color: "#bdcfc7" }}>•</span>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span>GMC Registered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div style={{ position: "relative", width: "100%", maxWidth: "560px", margin: "0 auto" }}>
            {/* Main Treatment Photo Frame */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "clamp(18px, 3vw, 28px)",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(16, 38, 31, 0.12)",
                border: "3px solid #ffffff",
                background: "#e4ede9"
              }}
            >
              <img
                src="/images/hero_treatment.jpg"
                alt="Luxury medical facial aesthetic treatment"
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "320px",
                  maxHeight: "460px",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>

            {/* Floating Top-Right Accreditation Pill */}
            <div
              className="hero-badge-float"
              style={{
                position: "absolute",
                top: "16px",
                right: "12px",
                zIndex: 2,
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                padding: "6px 14px",
                borderRadius: "9999px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "11.5px",
                fontWeight: 600,
                color: "#163a31",
                border: "1px solid rgba(255, 255, 255, 0.8)"
              }}
            >
              <ShieldCheck size={15} color="#10b981" />
              <span>Certified Doctors</span>
            </div>

            {/* Floating Bottom Review Card */}
            <div
              className="hero-review-card"
              style={{
                marginTop: "16px",
                zIndex: 2,
                background: "rgba(255, 255, 255, 0.96)",
                backdropFilter: "blur(12px)",
                padding: "16px 20px",
                borderRadius: "18px",
                boxShadow: "0 14px 35px rgba(16, 38, 31, 0.1)",
                border: "1px solid #e7eeea"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <div style={{ display: "flex", gap: "2px", color: "#eab308" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#163a31" }}>
                  Verified Patient Review
                </span>
              </div>

              <p style={{ fontSize: "12px", color: "#384f46", fontStyle: "italic", lineHeight: 1.45, marginBottom: "4px" }}>
                "Noticeable transformation after just one session. The sensory-calm room was pure bliss."
              </p>

              <div style={{ fontSize: "11px", color: "#718b82", fontWeight: 600 }}>
                — Sarah W. • Clinical Hydrafacial + RF
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-review-card {
            position: absolute !important;
            bottom: -20px !important;
            left: -16px !important;
            margin-top: 0 !important;
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
};

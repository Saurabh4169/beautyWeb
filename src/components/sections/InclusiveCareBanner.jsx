import React from 'react';
import { Sparkles, ArrowUpRight, VolumeX, SunMedium, Clock, Heart } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useBooking } from '../../context/BookingContext';

export const InclusiveCareBanner = () => {
  const { openBookingModal } = useBooking();

  const inclusiveFeatures = [
    {
      icon: <SunMedium size={18} color="#10b981" />,
      title: "Sensory-Adapted Lighting & Sound",
      desc: "Warm dimmable amber cove lighting, zero harsh fluorescent glare, and acoustic-shielded silent rooms."
    },
    {
      icon: <Clock size={18} color="#10b981" />,
      title: "Unhurried Extended Pacing",
      desc: "Double-length appointment intervals with clear visual step-by-step briefings before every stage."
    },
    {
      icon: <VolumeX size={18} color="#10b981" />,
      title: "Low-Stimulation Modalities",
      desc: "Whisper-quiet pneumatic vortex extraction and touch-sensitive pressure adjustments."
    },
    {
      icon: <Heart size={18} color="#10b981" />,
      title: "Dedicated Sensory Coordinator",
      desc: "Personalized pre-arrival care plans accommodating autism, ADHD, sensory processing and medical anxiety."
    }
  ];

  return (
    <section id="inclusive-care" className="section-padding" style={{ background: "#ffffff" }}>
      <div className="container">
        <div
          style={{
            background: "linear-gradient(145deg, #f5fbf8 0%, #edf7f2 100%)",
            borderRadius: "clamp(20px, 4vw, 28px)",
            border: "1px solid #d8ece2",
            padding: "clamp(24px, 4vw, 56px)",
            boxShadow: "0 10px 35px rgba(16, 38, 31, 0.04)"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(28px, 4vw, 48px)",
              alignItems: "center"
            }}
          >
            {/* Left Text Column */}
            <div>
              <div style={{ marginBottom: "14px" }}>
                <Badge variant="emerald" icon={<Sparkles size={13} color="#10b981" />}>
                  INCLUSIVE WELLNESS PROGRAM
                </Badge>
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)",
                  color: "var(--color-primary-dark)",
                  lineHeight: 1.18,
                  marginBottom: "16px",
                  fontFamily: "var(--font-serif-display)"
                }}
              >
                Inclusive Skincare: Dedicated Programs for Neuro-Divergent Needs & Adults
              </h2>

              <p
                style={{
                  fontSize: "clamp(0.9rem, 1.1vw, 0.98rem)",
                  color: "#4d665e",
                  lineHeight: 1.65,
                  marginBottom: "28px"
                }}
              >
                Clinical aesthetic care should be empowering and comforting for everyone. Our purpose-built sensory suites, low-stimulation protocols, and bespoke pacing ensure a tranquil, anxiety-free medical aesthetic journey.
              </p>

              {/* 4 Feature Points Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
                  gap: "18px",
                  marginBottom: "32px"
                }}
              >
                {inclusiveFeatures.map((feat, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "10px",
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                      }}
                    >
                      {feat.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.9rem", color: "#163a31", fontWeight: 700, marginBottom: "2px" }}>
                        {feat.title}
                      </h4>
                      <p style={{ fontSize: "0.8rem", color: "#617d73", lineHeight: 1.4, margin: 0 }}>
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button
                variant="primary"
                size="md"
                icon={<ArrowUpRight size={16} />}
                onClick={() => openBookingModal()}
              >
                Explore Inclusive Sensory Suite
              </Button>
            </div>

            {/* Right Photo Frame */}
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  borderRadius: "clamp(16px, 3vw, 22px)",
                  overflow: "hidden",
                  boxShadow: "0 16px 40px rgba(22, 58, 49, 0.12)",
                  border: "3px solid #ffffff",
                  background: "#e2ede8"
                }}
              >
                <img
                  src="/images/sensory_room.jpg"
                  alt="Sensory-calm treatment suite interior"
                  style={{
                    width: "100%",
                    height: "auto",
                    minHeight: "260px",
                    maxHeight: "380px",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* Overlay note on photo */}
              <div
                style={{
                  position: "relative",
                  marginTop: "12px",
                  background: "rgba(22, 58, 49, 0.94)",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "12px",
                  lineHeight: 1.4
                }}
              >
                <strong style={{ color: "#34d399", display: "block", marginBottom: "2px" }}>
                  🌿 The Sensory Sanctuary Suite
                </strong>
                Designed in partnership with neuro-inclusion clinicians for maximum sensory comfort.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

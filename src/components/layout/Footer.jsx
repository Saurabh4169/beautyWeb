import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, Award, Heart, Navigation } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export const Footer = () => {
  const { openBookingModal } = useBooking();

  const areasWeServe = [
    "Allen", "Melissa", "Anna", "Plano", "Frisco", "Princeton", "Lucas", "Richardson", "McKinney", "Van Alstyne"
  ];

  return (
    <footer
      style={{
        background: "#0a1814",
        color: "#c3ded5",
        paddingTop: "80px",
        paddingBottom: "40px",
        borderTop: "1px solid #16362e"
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "60px"
          }}
        >
          {/* Col 1: Brand & Contact Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "8px",
                  background: "#163e33",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#34d399"
                }}
              >
                <Sparkles size={18} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-serif-display)", fontSize: "1.35rem", color: "#ffffff", fontWeight: 700, lineHeight: 1.1 }}>
                  Beauty Oasis Rx
                </div>
                <div style={{ fontSize: "9.5px", letterSpacing: "0.15em", color: "#34d399", textTransform: "uppercase" }}>
                  Renew Your Skin
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem", color: "#9fc0b6", marginTop: "18px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <MapPin size={16} color="#10b981" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>333 East Bethany 110-A, Allen, Texas 75002</span>
              </div>

              <a href="tel:+12145007825" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ffffff", fontWeight: 600 }}>
                <Phone size={15} color="#10b981" />
                <span>(214) 500-7825</span>
              </a>

              <a href="mailto:infobeautyoasisrx@gmail.com" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9fc0b6", fontSize: "0.85rem" }}>
                <Mail size={15} color="#10b981" />
                <span>infobeautyoasisrx@gmail.com</span>
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=333+East+Bethany+Dr+Suite+110-A+Allen+Texas+75002"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#34d399",
                  fontWeight: 600,
                  fontSize: "13px",
                  textDecoration: "underline",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "4px"
                }}
              >
                <Navigation size={13} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: "#ffffff", fontSize: "1.05rem", fontFamily: "var(--font-serif-display)", marginBottom: "18px" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", fontSize: "0.88rem" }}>
              {[
                { name: "Home", href: "#" },
                { name: "About Our Clinic", href: "#inclusive-care" },
                { name: "Clinical Treatments", href: "#treatments" },
                { name: "Medical Skincare Products", href: "#products" },
                { name: "Before & After Results", href: "#before-after" },
                { name: "Clinic Locations & Map", href: "#locations" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    style={{ color: "#8aa69d", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#34d399")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8aa69d")}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Areas We Serve */}
          <div>
            <h4 style={{ color: "#ffffff", fontSize: "1.05rem", fontFamily: "var(--font-serif-display)", marginBottom: "18px" }}>
              Areas We Serve
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px 14px",
                fontSize: "0.86rem",
                color: "#8aa69d"
              }}
            >
              {areasWeServe.map((area) => (
                <span key={area} style={{ color: "#a5c2b9" }}>
                  • {area}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Information & Concierge */}
          <div>
            <h4 style={{ color: "#ffffff", fontSize: "1.05rem", fontFamily: "var(--font-serif-display)", marginBottom: "18px" }}>
              Information & Booking
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px", fontSize: "0.88rem", marginBottom: "20px" }}>
              <li><a href="#" style={{ color: "#8aa69d" }}>Terms & Clinical Policy</a></li>
              <li><a href="#" style={{ color: "#8aa69d" }}>Return & Refund Policy</a></li>
              <li><a href="#" style={{ color: "#8aa69d" }}>Cancellation Policy</a></li>
              <li><a href="#" style={{ color: "#8aa69d" }}>Physician Consultations</a></li>
            </ul>

            <button
              onClick={() => openBookingModal()}
              style={{
                background: "#10b981",
                color: "#081d16",
                padding: "10px 22px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "13px",
                boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
                display: "inline-block"
              }}
            >
              Book Clinical Visit
            </button>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div
          style={{
            borderTop: "1px solid #142e27",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "12px",
            color: "#6b8b80"
          }}
        >
          <div>
            © {new Date().getFullYear()} Beauty Oasis Rx. All rights reserved. Registered Medical Aesthetics Clinic.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ color: "#6b8b80" }}>Privacy Policy</a>
            <a href="#" style={{ color: "#6b8b80" }}>Terms of Service</a>
            <a href="#" style={{ color: "#6b8b80" }}>Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  Clock,
  Car,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { useBooking } from '../../context/BookingContext';
import { useCart } from '../../context/CartContext';

export const LocationMapSection = () => {
  const { openBookingModal } = useBooking();
  const { showToast } = useCart();
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const locations = [
    {
      id: "allen-texas",
      name: "Beauty Oasis Rx — Allen, Texas",
      tagline: "Premier Medical Aesthetics & Laser Clinic",
      address: "333 East Bethany Dr, Suite 110-A",
      cityStateZip: "Allen, Texas 75002",
      fullAddress: "333 East Bethany Dr, Suite 110-A, Allen, Texas 75002",
      phone: "(214) 500-7825",
      phoneRaw: "+12145007825",
      email: "infobeautyoasisrx@gmail.com",
      hours: "Mon–Sat: 9:00 AM – 7:30 PM",
      isOpen: true,
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.8837130095914!2d-96.65756382348308!3d33.097561873531835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1979b8a36d27%3A0xb35b67a1b0d2d385!2s333%20E%20Bethany%20Dr%20%23110a%2C%20Allen%2C%20TX%2075002%2C%20USA!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=333+East+Bethany+Dr+Suite+110-A+Allen+Texas+75002",
      parkingInfo: "Complimentary reserved patient parking in front of Suite 110-A.",
      areasServed: ["Allen", "Plano", "Frisco", "McKinney", "Lucas", "Fairview", "Richardson", "Melissa", "Dallas Metro"]
    },
    {
      id: "harley-st",
      name: "Beauty Oasis — Harley Street Flagship",
      tagline: "Doctor-Led Aesthetic Sanctuary",
      address: "48 Harley Street, Marylebone",
      cityStateZip: "London W1G 9PW, United Kingdom",
      fullAddress: "48 Harley Street, Marylebone, London W1G 9PW",
      phone: "+44 (0) 20 7946 0912",
      phoneRaw: "+442079460912",
      email: "harley@beautyoasis.clinic",
      hours: "Mon–Fri: 8:30 AM – 8:30 PM • Sat: 9:00 AM – 6:00 PM",
      isOpen: true,
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6865215849884!2d-0.14987082337774025!3d51.51900147181604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad47a83d47d%3A0x6b4457e937d1d23b!2s48%20Harley%20St%2C%20London%20W1G%209PW%2C%20UK!5e0!3m2!1sen!2suk!4v1711200000000!5m2!1sen!2suk",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=48+Harley+Street+London+W1G+9PW",
      parkingInfo: "Valet arrangement available; Oxford Circus station nearby.",
      areasServed: ["Marylebone", "Mayfair", "Fitzrovia", "Knightsbridge", "Kensington", "Chelsea", "Greater London"]
    }
  ];

  const currentLoc = locations[activeLocationIndex];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(currentLoc.fullAddress);
    setCopied(true);
    showToast("Clinic address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="locations"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #f0f7ff 0%, #f8fafc 50%, #f0fdf4 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="OUR CLINIC LOCATIONS"
          title="Visit Our Aesthetic Sanctuary"
          subtitle="Experience serene, state-of-the-art clinical care. Easily find our suites, get driving directions, and explore the communities we serve."
        />

        {/* Location Selection Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "30px",
            flexWrap: "wrap"
          }}
        >
          {locations.map((loc, idx) => {
            const isSelected = activeLocationIndex === idx;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocationIndex(idx)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  background: isSelected ? "linear-gradient(135deg, #1e5aa8 0%, #0f3460 100%)" : "#ffffff",
                  color: isSelected ? "#ffffff" : "#1e3a5f",
                  border: isSelected ? "1px solid #1e5aa8" : "1px solid #e2e8f0",
                  boxShadow: isSelected
                    ? "0 6px 18px rgba(30, 90, 168, 0.22)"
                    : "0 2px 6px rgba(30, 90, 168, 0.03)"
                }}
              >
                <MapPin size={15} color={isSelected ? "#ffffff" : "#1e5aa8"} />
                <span>{loc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Map & Information Showcase Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "clamp(18px, 3vw, 28px)",
            border: "1px solid #e2e8f0",
            boxShadow: "0 16px 50px rgba(30, 90, 168, 0.07)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr",
            position: "relative"
          }}
        >
          {/* Top Quick Status Ribbon */}
          <div
            style={{
              background: "linear-gradient(135deg, #0b2545 0%, #1e5aa8 100%)",
              color: "#ffffff",
              padding: "12px clamp(16px, 3vw, 28px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              fontSize: "12.5px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 10px #4ade80"
                }}
              />
              <strong style={{ color: "#4ade80" }}>Open Today</strong>
              <span style={{ color: "#93c5fd" }}>• Appointments Available</span>
            </div>

            <a
              href={currentLoc.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontWeight: 600,
                fontSize: "12px",
                background: "rgba(255, 255, 255, 0.15)",
                padding: "4px 12px",
                borderRadius: "9999px"
              }}
            >
              <Navigation size={12} color="#4ade80" />
              <span>Google Maps Directions</span>
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Grid: Details on Left / Dynamic Map on Right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              minHeight: "480px"
            }}
          >
            {/* Left Column: Clinic Contact & Info */}
            <div
              style={{
                padding: "clamp(20px, 3vw, 36px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#f0f7ff",
                borderRight: "1px solid #e2e8f0"
              }}
            >
              <div>
                <Badge variant="emerald" icon={<Sparkles size={12} />}>
                  {currentLoc.tagline}
                </Badge>

                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.7rem)",
                    color: "var(--color-primary-dark)",
                    fontFamily: "var(--font-serif-display)",
                    margin: "10px 0 14px 0",
                    lineHeight: 1.2
                  }}
                >
                  {currentLoc.name}
                </h3>

                {/* Address Box */}
                <div
                  style={{
                    background: "#ffffff",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                    padding: "14px 16px",
                    marginBottom: "18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <MapPin size={18} color="#1e5aa8" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div style={{ fontWeight: 700, color: "#0f2942", fontSize: "13.5px" }}>
                        {currentLoc.address}
                      </div>
                      <div style={{ color: "#475569", fontSize: "12.5px" }}>
                        {currentLoc.cityStateZip}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyAddress}
                    title="Copy address"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      background: copied ? "#f0fdf4" : "#f0f7ff",
                      color: copied ? "#16a34a" : "#1e5aa8",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      fontSize: "11.5px",
                      fontWeight: 600,
                      flexShrink: 0
                    }}
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {/* Direct Contact Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                  <a
                    href={`tel:${currentLoc.phoneRaw}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#0f2942",
                      fontSize: "13.5px",
                      fontWeight: 600
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "#f0f7ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1e5aa8",
                        flexShrink: 0
                      }}
                    >
                      <Phone size={15} />
                    </div>
                    <div>
                      <span style={{ fontSize: "10.5px", textTransform: "uppercase", color: "#64748b", display: "block" }}>Direct Line</span>
                      <span>{currentLoc.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${currentLoc.email}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#0f2942",
                      fontSize: "13.5px",
                      fontWeight: 600
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#16a34a",
                        flexShrink: 0
                      }}
                    >
                      <Mail size={15} />
                    </div>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                      <span style={{ fontSize: "10.5px", textTransform: "uppercase", color: "#64748b", display: "block" }}>Email Inquiries</span>
                      <span style={{ fontSize: "12.5px" }}>{currentLoc.email}</span>
                    </div>
                  </a>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0f2942", fontSize: "13px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "#f0f7ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1e5aa8",
                        flexShrink: 0
                      }}
                    >
                      <Clock size={15} />
                    </div>
                    <div>
                      <span style={{ fontSize: "10.5px", textTransform: "uppercase", color: "#64748b", display: "block" }}>Hours</span>
                      <span style={{ color: "#334155" }}>{currentLoc.hours}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#0f2942", fontSize: "13px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#16a34a",
                        flexShrink: 0
                      }}
                    >
                      <Car size={15} />
                    </div>
                    <div>
                      <span style={{ fontSize: "10.5px", textTransform: "uppercase", color: "#64748b", display: "block" }}>Parking</span>
                      <span style={{ color: "#334155" }}>{currentLoc.parkingInfo}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", paddingTop: "14px", borderTop: "1px solid #e2e8f0" }}>
                <a
                  href={currentLoc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: "1 1 140px",
                    background: "linear-gradient(135deg, #1e5aa8 0%, #0f3460 100%)",
                    color: "#ffffff",
                    padding: "11px 16px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "opacity 0.2s"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  <Navigation size={14} color="#ffffff" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={() => openBookingModal()}
                  style={{
                    flex: "1 1 140px",
                    background: "#ffffff",
                    color: "#16a34a",
                    border: "1px solid #16a34a",
                    padding: "11px 16px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#16a34a';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = '#16a34a';
                  }}
                >
                  <Sparkles size={14} color="#16a34a" />
                  <span>Book at Clinic</span>
                </button>
              </div>
            </div>

            {/* Right Column: Embedded Map */}
            <div style={{ position: "relative", minHeight: "360px", background: "#e8f0fe", width: "100%" }}>
              <iframe
                title={currentLoc.name}
                src={currentLoc.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "360px",
                  display: "block"
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Areas We Serve Ribbon */}
        <div
          style={{
            marginTop: "28px",
            background: "#ffffff",
            borderRadius: "18px",
            border: "1px solid #e2e8f0",
            padding: "clamp(18px, 3vw, 24px)",
            boxShadow: "0 4px 14px rgba(30, 90, 168, 0.05)"
          }}
        >
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#16a34a" }}>
              REGIONAL CARE REACH
            </span>
            <h4 style={{ fontSize: "1.1rem", color: "var(--color-primary-dark)", fontFamily: "var(--font-serif-display)", margin: "2px 0 0 0" }}>
              Areas & Communities We Proudly Serve
            </h4>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px"
            }}
          >
            {currentLoc.areasServed.map((area, i) => (
              <span
                key={i}
                style={{
                  background: "#f0f7ff",
                  color: "#1e5aa8",
                  border: "1px solid #bfdbfe",
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px"
                }}
              >
                <CheckCircle2 size={12} color="#c4622d" />
                <span>{area}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

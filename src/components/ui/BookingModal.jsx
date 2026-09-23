import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { useCart } from '../../context/CartContext';
import { treatmentsData } from '../../data/treatmentsData';

export const BookingModal = () => {
  const { isBookingOpen, closeBookingModal, selectedTreatment } = useBooking();
  const { showToast } = useCart();

  const [formData, setFormData] = useState({
    treatmentId: selectedTreatment?.id || "hydrafacial-deluxe",
    location: "Allen, Texas Clinic (333 East Bethany Dr)",
    suiteType: "Standard Luxury Suite",
    practitioner: "Dr. Alistair Vance, GMC Specialist",
    date: "2026-10-02",
    time: "11:30 AM",
    name: "",
    email: "",
    phone: "",
    sensoryNotes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isBookingOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast("Consultation booked successfully! Confirmation sent.");
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeBookingModal();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "clamp(18px, 3vw, 24px)",
          maxWidth: "640px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          padding: "clamp(20px, 4vw, 36px)",
          animation: "fadeIn 0.3s ease"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: "#fdf0e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b4c38"
          }}
        >
          <X size={16} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#fdf0e8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px auto"
              }}
            >
              <CheckCircle2 size={36} color="#c4622d" />
            </div>

            <h3 style={{ fontSize: "1.6rem", color: "#3d2314", fontFamily: "var(--font-serif-display)", marginBottom: "8px" }}>
              Consultation Reserved
            </h3>

            <p style={{ color: "#6b4c38", fontSize: "0.92rem", maxWidth: "420px", margin: "0 auto 20px auto", lineHeight: 1.55 }}>
              Thank you, <strong>{formData.name || "Valued Client"}</strong>. Your clinical appointment has been scheduled at our <strong>{formData.location}</strong> on <strong>{formData.date} at {formData.time}</strong>.
            </p>

            <button
              onClick={handleClose}
              style={{
                background: "#3d2314",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "13.5px"
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "20px", paddingRight: "28px" }}>
              <span style={{ fontSize: "10.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#c4622d" }}>
                DOCTOR-LED AESTHETIC CARE
              </span>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)", color: "#3d2314", fontFamily: "var(--font-serif-display)", marginTop: "2px" }}>
                Book Your Clinical Consultation
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#8b5e3c", margin: 0 }}>
                Select your preferred clinic, specialist, and sensory preferences.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Treatment Select */}
              <div>
                <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#3d2314", marginBottom: "5px" }}>
                  Selected Treatment / Focus
                </label>
                <select
                  value={formData.treatmentId}
                  onChange={(e) => setFormData({ ...formData, treatmentId: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    borderRadius: "10px",
                    border: "1px solid #ede5da",
                    background: "#ffffff",
                    fontSize: "13.5px",
                    color: "#3d2314"
                  }}
                >
                  <option value="general-consult">Comprehensive Doctor Diagnostic Consultation</option>
                  {treatmentsData.map(t => (
                    <option key={t.id} value={t.id}>{t.title} ({t.price})</option>
                  ))}
                </select>
              </div>

              {/* Clinic Location & Suite Type */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                  gap: "12px"
                }}
              >
                <div>
                  <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#3d2314", marginBottom: "5px" }}>
                    Clinic Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      borderRadius: "10px",
                      border: "1px solid #ede5da",
                      background: "#ffffff",
                      fontSize: "13px",
                      color: "#3d2314"
                    }}
                  >
                    <option>Allen, Texas Clinic (333 East Bethany Dr)</option>
                    <option>Harley Street, London (Flagship)</option>
                    <option>Mayfair Sanctuary Suite, London</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#3d2314", marginBottom: "5px" }}>
                    Suite Preference
                  </label>
                  <select
                    value={formData.suiteType}
                    onChange={(e) => setFormData({ ...formData, suiteType: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      borderRadius: "10px",
                      border: "1px solid #ede5da",
                      background: "#ffffff",
                      fontSize: "13px",
                      color: "#3d2314"
                    }}
                  >
                    <option>Standard Luxury Suite</option>
                    <option>🌿 Sensory-Calm Suite (Low-Stimulation)</option>
                    <option>VIP Private Recovery Suite</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                  gap: "12px"
                }}
              >
                <div>
                  <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#3d2314", marginBottom: "5px" }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      borderRadius: "10px",
                      border: "1px solid #ede5da",
                      fontSize: "13px",
                      color: "#3d2314"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#3d2314", marginBottom: "5px" }}>
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      borderRadius: "10px",
                      border: "1px solid #ede5da",
                      background: "#ffffff",
                      fontSize: "13px",
                      color: "#3d2314"
                    }}
                  >
                    <option>09:30 AM</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:30 PM</option>
                    <option>06:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Patient Contact Info */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                  gap: "12px"
                }}
              >
                <div>
                  <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#3d2314", marginBottom: "5px" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      borderRadius: "10px",
                      border: "1px solid #ede5da",
                      color: "#3d2314",
                      fontSize: "13px"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#3d2314", marginBottom: "5px" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(214) 500-7825"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 12px",
                      borderRadius: "10px",
                      border: "1px solid #ede5da",
                      color: "#3d2314",
                      fontSize: "13px"
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#3d2314", marginBottom: "5px" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    borderRadius: "10px",
                    border: "1px solid #ede5da",
                    color: "#3d2314",
                    fontSize: "13px"
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #c4622d 0%, #a84e22 100%)",
                  color: "#ffffff",
                  padding: "14px",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  boxShadow: "0 4px 16px rgba(196, 98, 45, 0.3)",
                  marginTop: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}
              >
                <ShieldCheck size={17} color="#fdf8f3" />
                <span>Confirm & Reserve Consultation</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

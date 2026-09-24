import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Accordion } from '../ui/Accordion';
import { faqData } from '../../data/faqData';
import { useBooking } from '../../context/BookingContext';

export const FaqSection = () => {
  const { openBookingModal } = useBooking();

  return (
    <section id="faq" className="section-padding" style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #f8fafc 100%)" }}>
      <div className="container">
        <SectionHeader
          badge="EVERYTHING YOU NEED TO KNOW"
          title="Frequently Asked Questions"
          subtitle="Candor, science, and care. Explore detailed answers regarding clinical preparations, our sensory accommodations, and post-treatment results."
        />

        <Accordion items={faqData} />

        {/* Question Support Note */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "0.92rem", color: "#475569", marginBottom: "12px" }}>
            Have a specialized medical question or specific accommodation request?
          </p>
          <button
            onClick={() => openBookingModal()}
            style={{
              color: "#1e5aa8",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "underline",
              textUnderlineOffset: "4px"
            }}
          >
            Speak Directly with our Clinical Reception Team →
          </button>
        </div>
      </div>
    </section>
  );
};

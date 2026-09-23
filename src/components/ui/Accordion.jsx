import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "860px", margin: "0 auto" }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              border: isOpen ? "1px solid #c4622d" : "1px solid #ede5da",
              boxShadow: isOpen ? "0 8px 24px rgba(44, 24, 16, 0.08)" : "0 2px 8px rgba(0, 0, 0, 0.02)",
              overflow: "hidden",
              transition: "all 0.3s ease"
            }}
          >
            <button
              onClick={() => toggle(idx)}
              style={{
                width: "100%",
                padding: "22px 26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                textAlign: "left",
                background: "transparent",
                color: isOpen ? "#c4622d" : "#3d2314",
                fontWeight: 600,
                fontSize: "1.05rem",
                fontFamily: "var(--font-sans)",
                cursor: "pointer"
              }}
            >
              <span>{item.question}</span>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: isOpen ? "#fdf0e8" : "#f8f2eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)"
                }}
              >
                <ChevronDown size={18} color={isOpen ? "#c4622d" : "#8b5e3c"} />
              </div>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: "0 26px 24px 26px",
                  color: "#6b4c38",
                  fontSize: "0.96rem",
                  lineHeight: 1.7,
                  borderTop: "1px solid #ede5da",
                  paddingTop: "16px",
                  animation: "fadeIn 0.3s ease"
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

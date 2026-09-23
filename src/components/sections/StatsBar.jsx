import React from 'react';

export const StatsBar = () => {
  const stats = [
    { value: "12+", label: "Years Clinical Excellence" },
    { value: "18,000+", label: "Bespoke Client Results" },
    { value: "100%", label: "Medical-Grade Formulations" },
    { value: "99.8%", label: "Client Satisfaction Rating" }
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: "1px solid #ebf2ef",
        borderBottom: "1px solid #ebf2ef",
        padding: "36px 0"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            alignItems: "center"
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                textAlign: "center",
                position: "relative",
                padding: "0 16px"
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  fontWeight: 700,
                  color: "var(--color-primary-dark)",
                  fontFamily: "var(--font-serif-display)",
                  lineHeight: 1.1,
                  marginBottom: "6px"
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "12.5px",
                  color: "#6b827a",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em"
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

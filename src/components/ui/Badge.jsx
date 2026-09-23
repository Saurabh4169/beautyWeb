import React from 'react';

export const Badge = ({ children, variant = "emerald", className = "", icon = null }) => {
  const getStyles = () => {
    switch (variant) {
      case "emerald":
        return {
          background: "#e8f5f0",
          color: "#155e4c",
          border: "1px solid rgba(16, 185, 129, 0.25)"
        };
      case "gold":
        return {
          background: "#faf3e8",
          color: "#976d29",
          border: "1px solid rgba(194, 155, 100, 0.3)"
        };
      case "dark":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          color: "#c2e7dc",
          border: "1px solid rgba(255, 255, 255, 0.15)"
        };
      case "outline":
        return {
          background: "transparent",
          color: "#325c50",
          border: "1px solid #c2ded4"
        };
      default:
        return {
          background: "#e8f5f0",
          color: "#155e4c",
          border: "1px solid rgba(16, 185, 129, 0.25)"
        };
    }
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        borderRadius: "9999px",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        ...getStyles()
      }}
      className={className}
    >
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
};

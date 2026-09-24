import React from 'react';

export const Badge = ({ children, variant = "emerald", className = "", icon = null }) => {
  const getStyles = () => {
    switch (variant) {
      case "emerald":
        return {
          background: "#dcfce7",
          color: "#15803d",
          border: "1px solid #86efac"
        };
      case "gold":
      case "blue":
        return {
          background: "#f0f7ff",
          color: "#1e5aa8",
          border: "1px solid #bae6fd"
        };
      case "dark":
        return {
          background: "rgba(255, 255, 255, 0.12)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        };
      case "outline":
        return {
          background: "transparent",
          color: "#1e5aa8",
          border: "1px solid #bae6fd"
        };
      default:
        return {
          background: "#dcfce7",
          color: "#15803d",
          border: "1px solid #86efac"
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
        fontWeight: 700,
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

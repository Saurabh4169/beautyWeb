import React from 'react';

export const Badge = ({ children, variant = "emerald", className = "", icon = null }) => {
  const getStyles = () => {
    switch (variant) {
      case "emerald":
        return {
          background: "#fdf0e8",
          color: "#c4622d",
          border: "1px solid rgba(196, 98, 45, 0.3)"
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
          color: "#dfc8a4",
          border: "1px solid rgba(223, 200, 164, 0.25)"
        };
      case "outline":
        return {
          background: "transparent",
          color: "#8b5e3c",
          border: "1px solid #e4d8cc"
        };
      default:
        return {
          background: "#fdf0e8",
          color: "#c4622d",
          border: "1px solid rgba(196, 98, 45, 0.3)"
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

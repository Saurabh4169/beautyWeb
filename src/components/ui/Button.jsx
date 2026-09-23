import React from 'react';

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconPosition = "right",
  onClick,
  type = "button",
  className = "",
  disabled = false,
  fullWidth = false,
  style = {}
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          background: "linear-gradient(135deg, #163a31 0%, #0f2b24 100%)",
          color: "#ffffff",
          border: "1px solid #1f4f43",
          boxShadow: "0 4px 18px rgba(16, 38, 31, 0.25)"
        };
      case "secondary":
        return {
          background: "#ffffff",
          color: "#163a31",
          border: "1px solid #c8d8d2",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
        };
      case "emerald":
        return {
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          color: "#ffffff",
          border: "none",
          boxShadow: "0 4px 15px rgba(16, 185, 129, 0.35)"
        };
      case "outline":
        return {
          background: "transparent",
          color: "#163a31",
          border: "1px solid #234b40"
        };
      case "ghost":
        return {
          background: "transparent",
          color: "#163a31",
          border: "none"
        };
      case "dark-ghost":
        return {
          background: "rgba(255, 255, 255, 0.08)",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        };
      default:
        return {};
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return { padding: "8px 16px", fontSize: "12px", borderRadius: "9999px" };
      case "md":
        return { padding: "12px 24px", fontSize: "14px", borderRadius: "9999px" };
      case "lg":
        return { padding: "15px 32px", fontSize: "15px", borderRadius: "9999px" };
      default:
        return { padding: "12px 24px", fontSize: "14px", borderRadius: "9999px" };
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-luxury ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        letterSpacing: "0.02em",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "all 0.25s ease",
        width: fullWidth ? "100%" : "auto",
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {icon && iconPosition === "left" && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
    </button>
  );
};

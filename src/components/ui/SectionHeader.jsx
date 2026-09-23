import React from 'react';
import { Badge } from './Badge';

export const SectionHeader = ({
  badge = null,
  title,
  subtitle = null,
  alignment = "center",
  dark = false,
  className = ""
}) => {
  return (
    <div
      className={className}
      style={{
        textAlign: alignment,
        maxWidth: alignment === "center" ? "720px" : "100%",
        margin: alignment === "center" ? "0 auto 48px auto" : "0 0 36px 0",
      }}
    >
      {badge && (
        <div style={{ marginBottom: "14px" }}>
          <Badge variant={dark ? "dark" : "emerald"}>{badge}</Badge>
        </div>
      )}

      <h2
        style={{
          fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
          color: dark ? "#ffffff" : "var(--color-primary-dark)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: subtitle ? "14px" : "0",
          fontFamily: "var(--font-serif-display)"
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
            color: dark ? "var(--color-dark-subtext)" : "var(--color-text-muted)",
            lineHeight: 1.65,
            maxWidth: "640px",
            margin: alignment === "center" ? "0 auto" : "0"
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

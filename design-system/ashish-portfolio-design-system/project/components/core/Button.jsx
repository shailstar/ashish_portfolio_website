import React from "react";

/**
 * Button — the primary call-to-action for the Ashish portfolio.
 * Soft, pill-shaped, calm motion. Variants map to brand roles.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: "0.875rem", gap: "6px" },
    md: { padding: "12px 24px", fontSize: "1rem", gap: "8px" },
    lg: { padding: "16px 32px", fontSize: "1.125rem", gap: "10px" },
  };

  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "none",
      boxShadow: "var(--shadow-brand)",
    },
    secondary: {
      background: "var(--secondary)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-secondary)",
    },
    outline: {
      background: "transparent",
      color: "var(--brand-ink)",
      border: "2px solid var(--sage-300)",
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "2px solid transparent",
      boxShadow: "none",
    },
    ink: {
      background: "var(--ink-900)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-md)",
    },
  };

  const Tag = as;
  return (
    <Tag
      disabled={as === "button" ? disabled : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: sizes[size].gap,
        width: full ? "100%" : "auto",
        padding: sizes[size].padding,
        fontSize: sizes[size].fontSize,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: "-0.01em",
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
        textDecoration: "none",
        whiteSpace: "nowrap",
        ...variants[variant],
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = "brightness(1.04)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}

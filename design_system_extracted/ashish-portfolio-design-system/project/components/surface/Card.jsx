import React from "react";

/**
 * Card — soft elevated surface. The base container for content blocks.
 */
export function Card({ children, padding = "lg", elevation = "sm", tint = false, style = {}, ...rest }) {
  const pads = { none: "0", sm: "16px", md: "24px", lg: "32px" };
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  };
  return (
    <div
      style={{
        background: tint ? "var(--surface-tint)" : "var(--surface-card)",
        border: tint ? "none" : "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: pads[padding],
        boxShadow: shadows[elevation],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

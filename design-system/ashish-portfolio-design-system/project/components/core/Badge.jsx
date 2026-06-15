import React from "react";

/**
 * Badge — small status dot+label or count. Quieter than a Tag.
 */
export function Badge({ children, tone = "success", dot = true, style = {}, ...rest }) {
  const tones = {
    success: "var(--success)",
    warning: "var(--gold)",
    danger:  "var(--heart)",
    info:    "var(--peri-500)",
    neutral: "var(--warm-500)",
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        fontFamily: "var(--font-sans)",
        fontSize: "0.8125rem",
        fontWeight: 600,
        color: "var(--text-body)",
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "999px",
            background: tones[tone],
            flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}

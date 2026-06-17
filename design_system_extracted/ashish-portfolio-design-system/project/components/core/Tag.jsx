import React from "react";

/**
 * Tag — soft pill label for skills, categories, filters.
 */
export function Tag({ children, tone = "sage", size = "md", style = {}, ...rest }) {
  const tones = {
    sage:  { bg: "var(--sage-100)",  fg: "var(--sage-700)" },
    camel: { bg: "var(--camel-100)", fg: "var(--camel-700)" },
    clay:  { bg: "var(--clay-200)",  fg: "var(--clay-600)" },
    stone: { bg: "var(--stone-100)", fg: "var(--stone-700)" },
    ink:   { bg: "var(--ink-900)",   fg: "var(--stone-50)" },
  };
  const sizes = {
    sm: { padding: "3px 10px", fontSize: "0.75rem" },
    md: { padding: "5px 14px", fontSize: "0.8125rem" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        letterSpacing: "0.01em",
        borderRadius: "var(--radius-pill)",
        background: tones[tone].bg,
        color: tones[tone].fg,
        ...sizes[size],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

import React from "react";

/**
 * Tag — soft pill label for skills, categories, filters.
 */
export function Tag({ children, tone = "rose", size = "md", style = {}, ...rest }) {
  const tones = {
    rose:  { bg: "var(--rose-100)",  fg: "var(--rose-700)" },
    peri:  { bg: "var(--peri-100)",  fg: "var(--peri-700)" },
    coral: { bg: "var(--coral-200)", fg: "var(--coral-600)" },
    lav:   { bg: "var(--lav-100)",   fg: "var(--plum-800)" },
    sand:  { bg: "var(--sand-100)",  fg: "var(--warm-700)" },
    ink:   { bg: "var(--plum-900)",  fg: "var(--rose-100)" },
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

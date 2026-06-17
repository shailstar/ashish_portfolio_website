import React from "react";

/**
 * Avatar — round portrait with a soft brand ring. Falls back to initials.
 */
export function Avatar({ src = "", name = "", size = 48, ring = true, style = {}, ...rest }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "999px",
        background: "var(--sage-100)",
        color: "var(--sage-700)",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: `${Math.round(size * 0.36)}px`,
        overflow: "hidden",
        flex: "none",
        boxShadow: ring ? "0 0 0 3px var(--bg-page), 0 0 0 5px var(--sage-300)" : "none",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials
      )}
    </span>
  );
}

import React from "react";

/**
 * Textarea — multi-line companion to Input.
 */
export function Textarea({ label = "", hint = "", rows = 4, id, style = {}, ...rest }) {
  const taId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label
          htmlFor={taId}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--text-strong)",
          }}
        >
          {label}
        </label>
      )}
      <textarea
        id={taId}
        rows={rows}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1rem",
          color: "var(--text-strong)",
          padding: "12px 16px",
          background: "var(--surface-card)",
          border: "1.5px solid var(--border)",
          borderRadius: "var(--radius-md)",
          outline: "none",
          resize: "vertical",
          lineHeight: "1.5",
          transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
          width: "100%",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--focus-ring)";
          e.currentTarget.style.boxShadow = "0 0 0 3px var(--focus-ring-soft)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.boxShadow = "none";
        }}
        {...rest}
      />
      {hint && <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{hint}</span>}
    </div>
  );
}

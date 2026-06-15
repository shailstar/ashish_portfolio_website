import React from "react";

/**
 * Input — soft rounded text field with optional label & hint.
 */
export function Input({ label = "", hint = "", error = "", id, style = {}, ...rest }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label
          htmlFor={inputId}
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
      <input
        id={inputId}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1rem",
          color: "var(--text-strong)",
          padding: "12px 16px",
          background: "var(--surface-card)",
          border: `1.5px solid ${error ? "var(--heart)" : "var(--border)"}`,
          borderRadius: "var(--radius-md)",
          outline: "none",
          transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
          width: "100%",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--peri-400)";
          e.currentTarget.style.boxShadow = "0 0 0 3px var(--peri-100)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? "var(--heart)" : "var(--border)";
          e.currentTarget.style.boxShadow = "none";
        }}
        {...rest}
      />
      {(hint || error) && (
        <span
          style={{
            fontSize: "0.75rem",
            color: error ? "var(--heart)" : "var(--text-muted)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}

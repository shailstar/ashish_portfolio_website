import React from "react";
import { Tag } from "../core/Tag.jsx";

/**
 * ProjectCard — the portfolio's signature work tile: cover image,
 * title, year, and category tags. Lifts gently on hover.
 */
export function ProjectCard({
  image = "",
  title = "Untitled",
  category = "",
  year = "",
  tags = [],
  href = "#",
  style = {},
  ...rest
}) {
  return (
    <a
      href={href}
      style={{
        display: "block",
        textDecoration: "none",
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        transition: "transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
      {...rest}
    >
      <div style={{ aspectRatio: "16 / 10", overflow: "hidden", background: "var(--sage-100)" }}>
        {image && (
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
      </div>
      <div style={{ padding: "20px 22px 22px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--brand)",
            }}
          >
            {category}
          </span>
          {year && (
            <span style={{ fontSize: "0.8125rem", color: "var(--text-faint)" }}>{year}</span>
          )}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.15,
            color: "var(--text-strong)",
            margin: "8px 0 14px",
          }}
        >
          {title}
        </h3>
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tags.map((t) => (
              <Tag key={t} tone="stone" size="sm">
                {t}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

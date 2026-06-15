// Footer with wordmark, quick links and social.
function Footer({ setRoute }) {
  return (
    <footer style={{ background: "var(--bg-page)", borderTop: "1px solid var(--border)" }}>
      <div
        style={{
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "clamp(2.5rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 4rem)",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem", color: "var(--text-strong)" }}>
            Ashish<span style={{ color: "var(--brand)" }}>.</span>
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: "6px 0 0" }}>
            Designing for calm, clear minds. © 2026
          </p>
        </div>
        <nav style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {["home", "work", "about", "contact"].map((r) => (
            <button
              key={r}
              onClick={() => setRoute(r)}
              style={{
                border: "none", background: "none", cursor: "pointer",
                fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 500,
                color: "var(--text-body)", padding: "6px 10px", textTransform: "capitalize",
              }}
            >
              {r}
            </button>
          ))}
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          {["Dribbble", "LinkedIn", "Email"].map((s) => (
            <a
              key={s}
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600,
                color: "var(--brand-ink)", padding: "8px 14px",
                border: "1.5px solid var(--rose-200)", borderRadius: "var(--radius-pill)",
                textDecoration: "none",
              }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

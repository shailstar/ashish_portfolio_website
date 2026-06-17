// Portfolio navigation bar. Exports to window for the kit's other scripts.
function Nav({ route, setRoute }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px clamp(1.25rem, 5vw, 4rem)",
        background: "rgba(255,248,243,0.82)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        onClick={() => setRoute("home")}
        style={{
          border: "none",
          background: "none",
          cursor: "pointer",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.4rem",
          letterSpacing: "-0.01em",
          color: "var(--text-strong)",
        }}
      >
        Ashish<span style={{ color: "var(--brand)" }}>.</span>
      </button>

      <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => setRoute(l.id)}
            style={{
              border: "none",
              background: route === l.id ? "var(--sage-100)" : "transparent",
              color: route === l.id ? "var(--sage-700)" : "var(--text-body)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              padding: "8px 16px",
              borderRadius: "var(--radius-pill)",
              cursor: "pointer",
              transition: "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)",
            }}
          >
            {l.label}
          </button>
        ))}
        <span style={{ width: "8px" }}></span>
        <Button size="sm" variant="primary" onClick={() => setRoute("contact")}>
          Let's talk
        </Button>
      </nav>
    </header>
  );
}
window.Nav = Nav;

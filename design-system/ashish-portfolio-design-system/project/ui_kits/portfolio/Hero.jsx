// Hero section — full-bleed illustration wash + serif headline.
function Hero({ setRoute }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(120deg, var(--sage-100) 0%, var(--camel-100) 55%, var(--stone-100) 100%)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          alignItems: "center",
          gap: "clamp(1rem, 4vw, 3rem)",
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
          padding: "clamp(2.5rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: "18px" }}>
            Product &amp; Brand Designer
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "var(--text-strong)",
              margin: "0 0 22px",
            }}
          >
            Designing for{" "}
            <span style={{ fontStyle: "italic", color: "var(--brand)" }}>calm</span>,
            clear minds.
          </h1>
          <p
            style={{
              fontSize: "1.1875rem",
              lineHeight: 1.7,
              color: "var(--text-body)",
              maxWidth: "44ch",
              margin: "0 0 32px",
            }}
          >
            I'm Ashish — I help wellness and health teams turn complex,
            emotional problems into soft, trustworthy products and brands.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
            <Button variant="primary" size="lg" onClick={() => setRoute("work")}>
              View selected work
            </Button>
            <Button variant="outline" size="lg" onClick={() => setRoute("contact")}>
              Get in touch
            </Button>
          </div>
          <div style={{ marginTop: "30px" }}>
            <Badge tone="success">Available for projects · Summer 2026</Badge>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            borderRadius: "var(--radius-2xl)",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            aspectRatio: "4 / 5",
          }}
        >
          <img
            src="../../assets/illustrations/portrait-bloom-mind.jpeg"
            alt="Illustration of a blooming mind"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "72% center", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

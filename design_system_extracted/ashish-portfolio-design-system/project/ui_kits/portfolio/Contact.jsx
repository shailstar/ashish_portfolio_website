// Contact section with a working (fake) form using the form primitives.
function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--surface-ink)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-md)",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="eyebrow" style={{ marginBottom: "14px", color: "var(--sage-300)" }}>Contact</div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(2rem, 3.6vw, 3rem)",
            color: "#fff",
            margin: "0 0 14px",
            letterSpacing: "-0.015em",
          }}
        >
          Let's make something <span style={{ fontStyle: "italic", color: "var(--camel-300)" }}>gentle</span> together.
        </h2>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--stone-50)", margin: "0 0 34px", maxWidth: "48ch", opacity: 0.82 }}>
          Have a project in mind, or just want to say hello? Tell me a little
          about it and I'll get back to you within a day.
        </p>

        {sent ? (
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#fff", marginBottom: "8px" }}>
              Thank you — message sent.
            </div>
            <p style={{ color: "var(--stone-50)", opacity: 0.8, margin: 0 }}>
              I'll be in touch soon. ♥
            </p>
          </div>
        ) : (
          <div
            style={{
              background: "var(--surface-card)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
              <Input label="Your name" placeholder="Maya Kapoor" />
              <Input label="Email" type="email" placeholder="you@studio.com" />
            </div>
            <div style={{ marginBottom: "22px" }}>
              <Textarea label="About your project" rows={5} placeholder="A few sentences about what you're building…" />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "14px" }}>
              <Badge tone="success">Currently booking Summer 2026</Badge>
              <Button variant="primary" size="lg" onClick={() => setSent(true)}>Send message</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
window.Contact = Contact;

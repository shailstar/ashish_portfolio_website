// About section — portrait, bio, skill tags, simple stats.
function About() {
  const skills = ["Brand Identity", "Product Design", "UX Research", "Illustration", "Design Systems", "Motion"];
  return (
    <section style={{ background: "var(--bg-subtle)" }}>
      <div
        style={{
          maxWidth: "var(--container-lg)",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
            aspectRatio: "4 / 5",
          }}
        >
          <img
            src="../../assets/illustrations/profile-brain-heart.jpeg"
            alt="Portrait illustration"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: "14px" }}>About</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)",
              color: "var(--text-strong)",
              margin: "0 0 18px",
              letterSpacing: "-0.015em",
            }}
          >
            Warmth, clarity, and a little quiet.
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--text-body)", margin: "0 0 16px" }}>
            For eight years I've worked at the edge of health and design — at
            startups, studios, and on my own. I care about the human on the other
            side of the screen, especially on their hardest days.
          </p>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "var(--text-body)", margin: "0 0 26px" }}>
            My work leans soft and honest: gentle color, generous space, and
            hand-drawn illustration that makes heavy topics feel approachable.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "30px" }}>
            {skills.map((s, i) => (
              <Tag key={s} tone={["rose", "peri", "coral", "lav"][i % 4]}>{s}</Tag>
            ))}
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            {[["8+", "Years designing"], ["40+", "Projects shipped"], ["12", "Happy teams"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--brand)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "6px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;

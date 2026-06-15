// Selected-work grid built from ProjectCard tiles.
const PROJECTS = [
  {
    image: "../../assets/illustrations/brain-bloom-hands.jpeg",
    category: "Brand Identity",
    year: "2025",
    title: "Bloom — a calmer mental-health app",
    tags: ["Branding", "UX", "Illustration"],
  },
  {
    image: "../../assets/illustrations/meditation-lotus.jpeg",
    category: "Product Design",
    year: "2025",
    title: "Stillness — guided meditation, redesigned",
    tags: ["Mobile", "Motion"],
  },
  {
    image: "../../assets/illustrations/gratitude-pair.jpeg",
    category: "Illustration",
    year: "2024",
    title: "Gratitude — an illustration system",
    tags: ["Illustration", "System"],
  },
  {
    image: "../../assets/illustrations/profile-bloom-hearts.jpeg",
    category: "Web Design",
    year: "2024",
    title: "Mindful Co. — marketing site",
    tags: ["Web", "Branding"],
  },
  {
    image: "../../assets/illustrations/mindful-bloom-okay.jpeg",
    category: "Campaign",
    year: "2023",
    title: "It's okay to not be okay",
    tags: ["Campaign", "Social"],
  },
  {
    image: "../../assets/illustrations/profile-brain-heart.jpeg",
    category: "Research",
    year: "2023",
    title: "Heart & Mind — a wellbeing study",
    tags: ["Research", "Strategy"],
  },
];

function WorkGrid({ heading = "Selected work", blurb = "", limit = null }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section
      style={{
        maxWidth: "var(--container-xl)",
        margin: "0 auto",
        padding: "clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)",
      }}
    >
      <div style={{ marginBottom: "36px", maxWidth: "52ch" }}>
        <div className="eyebrow" style={{ marginBottom: "12px" }}>Portfolio</div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
            color: "var(--text-strong)",
            margin: "0 0 12px",
            letterSpacing: "-0.015em",
          }}
        >
          {heading}
        </h2>
        {blurb && (
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: "var(--text-body)", margin: 0 }}>
            {blurb}
          </p>
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
window.WorkGrid = WorkGrid;
window.PROJECTS = PROJECTS;

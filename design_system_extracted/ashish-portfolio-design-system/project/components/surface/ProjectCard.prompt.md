The portfolio's signature work tile — cover image, overline category, serif title, year, and tags. Lifts gently on hover.

```jsx
<ProjectCard
  image="/work/cover.jpg"
  category="Brand Identity"
  year="2025"
  title="Bloom — a calmer mental-health app"
  tags={["Branding", "UX", "Illustration"]}
  href="/work/bloom"
/>
```

Use in a responsive grid (`repeat(auto-fill, minmax(320px, 1fr))`). Composes the Tag primitive.

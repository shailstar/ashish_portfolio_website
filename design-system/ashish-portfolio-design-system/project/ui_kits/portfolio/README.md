# Portfolio UI Kit

An interactive, multi-page recreation of the Ashish portfolio website, built
entirely from the design system's primitives.

## Run
Open `index.html`. It loads `../../styles.css` and `../../_ds_bundle.js`, then
mounts the page. Navigation is client-side (Home / Work / About / Contact) with
the active route persisted to `localStorage`.

## Files
- `index.html` — app shell + routing (loads everything below)
- `Nav.jsx` — sticky, blurred top navigation + wordmark
- `Hero.jsx` — full-bleed gradient hero with serif headline + portrait
- `WorkGrid.jsx` — responsive grid of `ProjectCard` tiles (+ `PROJECTS` data)
- `About.jsx` — portrait, bio, skill tags, stats
- `Contact.jsx` — dark contact section with a working (fake) form
- `Footer.jsx` — wordmark, quick links, social pills

## Composition notes
- Components consume the bundle via bare globals — `index.html` runs
  `Object.assign(window, window.AshishPortfolioDesignSystem_48f8eb)` before the
  section scripts, so `Button`, `Tag`, `ProjectCard`, `Input`, etc. resolve.
- All imagery comes from `assets/illustrations/`.
- This is a cosmetic recreation: forms don't submit, links are inert.

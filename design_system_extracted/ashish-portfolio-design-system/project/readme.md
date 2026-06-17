# Ashish — Portfolio Design System

A warm, illustrative design system for **Ashish**, a product & brand designer
working at the intersection of **health, wellness, and the quieter corners of
tech**. The brand voice is calm, human, and reassuring; the visual world is
natural and editorial — soft **sage-green and warm-camel** tones grounded on
**black & white** with stone neutrals, hand-drawn line illustration (blooming
minds, butterflies, hearts), generous space, and an expressive serif paired
with a quiet sans.

> This system was generated from a set of brand illustrations supplied by the
> user (see `assets/illustrations/`). No codebase or Figma file was provided —
> if one exists, share it and the system can be tightened to match production.

---

## Sources

- **Brand illustrations** — supplied images, copied to
  `assets/illustrations/` (sage/camel line art: blooming minds, brain-in-hands,
  butterflies, gratitude figures on white). These are the visual heart of the
  brand and match the palette directly.
- **Fonts** — Inter + Playfair Display (requested), loaded from Google Fonts.
- No GitHub repo, Figma URL, codebase path, or slide deck was provided.

---

## CONTENT FUNDAMENTALS

**Voice.** Warm, direct, and gently confident — a real person, not a studio
press release. Speaks in **first person** ("I'm Ashish", "I help teams…") and
addresses the reader as **you**. Never corporate, never hype.

**Tone.** Calm and reassuring. Comfortable naming hard, emotional subjects
(mental health, hard days) plainly and kindly — never clinical, never cute about
it. Optimistic but grounded.

**Casing.** Sentence case everywhere — headlines, buttons, labels. The only
uppercase is the wide-tracked **eyebrow / overline** (e.g. `SELECTED WORK`).
Never Title Case Headlines. Never ALL-CAPS shouting.

**Punctuation & rhythm.** Short sentences. Em-dashes for warmth and asides.
Occasional one-italic-word emphasis inside serif headlines ("Designing for
*calm* minds"). Sparing, intentional.

**Emoji.** Essentially none in UI. A single ♥ may appear as a quiet human
sign-off in a confirmation ("I'll be in touch soon. ♥") — treat as rare
seasoning, not a system.

**Examples**
- Headline: *Designing for calm, clear minds.*
- Sub: *I help wellness and health teams turn complex, emotional problems into
  soft, trustworthy products and brands.*
- Button: *View selected work* · *Let's talk* · *Send message*
- Status: *Available for projects · Summer 2026*
- Eyebrow: *PORTFOLIO* · *ABOUT* · *CONTACT*

---

## VISUAL FOUNDATIONS

**Color.** A natural, editorial palette built from two brand seeds.
- **Sage** (`--brand`, seed `#A3B18A`, deepened to `sage-600 #6F7E57` for
  legible actions) is primary. **Camel** (`--secondary`, seed `#C2A46F`,
  deepened to `camel-600 #8A6F40`) is the warm counterpoint. **Clay**
  terracotta (`--accent`, `#B5663F`) bridges the two. **Ink** (`#121210`) plus
  true **black/white** anchor the system.
- Signal pops — **leaf** green, **amber**, and **rust** — appear only as small
  feedback accents, never as fields of color.
- Neutrals are **warm greige "stone"** (off-white paper `#FAF9F3`, stone grays),
  never cold gray. See `tokens/colors.css`.
- Primary/secondary identity tints (`-400`) match the exact seeds; the `-600`
  steps exist so white text stays legible on buttons.

**Type.** **Playfair Display** (serif) for display & headings — set at 600–700,
tight leading (1.04–1.15), slight negative tracking, with the occasional
*italic* accent word. **Inter** carries all body, UI, and labels. Big jump in
scale between headline and body creates the calm, editorial rhythm.

**Spacing.** 4px base scale, used generously — sections breathe at
`clamp(2.5rem, 6vw, 5.5rem)` of vertical padding. Containers cap at
640 / 880 / 1120 / 1320px with a fluid gutter.

**Backgrounds.** Three modes: (1) **soft multi-stop gradient washes**
(sage → camel → stone) behind heroes; (2) **plain warm paper**
(`--bg-page`) for content; (3) **near-black ink** for the contact / dark moment.
Full-bleed illustration imagery is a primary background device — framed in
soft, very-rounded cards rather than bled to the page edge.

**Imagery vibe.** Warm, soft, hand-drawn line art — sage-green and camel fills
with fine black outlines on white (blooming minds, butterflies, leaves, hearts,
gratitude figures). Gentle and optimistic; never photographic, never cold,
never high-contrast. The illustrations match the sage/camel palette directly
and are the visual heart of the brand — use full-bleed behind heroes or framed
in soft, very-rounded cards.

**Corner radii.** Soft and generous — cards `--radius-lg` (24px), hero panels
`--radius-2xl` (44px), all buttons & tags fully **pill** (999px). Nothing is
sharp-cornered.

**Cards.** White surface, 1px warm border, low diffuse shadow (`--shadow-sm`),
large radius. A **tinted** variant uses the sage wash with no border for quiet
callouts. Project tiles add a cover image and lift 6px on hover.

**Shadows.** Warm and low, tinted toward ink/sage — never neutral black.
`--shadow-sm/md/lg`, plus colored `--shadow-brand` / `--shadow-secondary` for
floating CTAs.

**Borders & lines.** Hairline warm `--border` for separation. The illustrations
carry a signature 2px hand-drawn black outline (`--line-ink`) — evoke it in art,
don't over-apply it to UI chrome.

**Motion.** Calm and soft — `--ease-soft` / `--ease-gentle`, 150–480ms. Buttons
press-scale to 0.97 and brighten slightly; cards translate up gently. **No**
bounce, no spring, no aggressive snapping. Respect reduced-motion.

**Hover / press states.** Hover = subtle brightness lift (or sage-tint
background on nav links); press = a small scale-down. Quiet, never flashy.

**Transparency & blur.** Used sparingly: the sticky nav is translucent cream
with a 12px backdrop blur; the dark contact confirmation uses faint white
overlays. Otherwise surfaces are solid.

**Layout rules.** Sticky translucent header. Generous single- or
two-column grids. Content left-aligned; headlines and supporting copy share a
narrow measure (44–52ch). Imagery balances type 50/50 in heroes & about.

---

## ICONOGRAPHY

The brand is **illustration-led, not icon-led** — its personality lives in the
hand-drawn line art (blooming brains, butterflies, hearts, leaves, flowers),
not in a UI icon set. Keep functional icons minimal and quiet.

- **No bundled icon font or SVG sprite** was supplied.
- **Recommended set: [Lucide](https://lucide.dev)** — its soft, rounded,
  even-stroke style matches the gentle brand. Load from CDN when a kit needs
  icons (`https://unpkg.com/lucide@latest`). *(Substitution — flagged: no
  original icon set existed, so Lucide is a recommendation, not a recreation.)*
- **Emoji / unicode** are not used as functional icons. The lone exception is a
  decorative ♥ as a human sign-off (see Content Fundamentals).
- For decorative flourishes (butterflies, blooms), prefer cropping from the
  illustration library over drawing new vector icons.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — the single entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front matter for download/use elsewhere.

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` — Inter + Playfair Display (Google Fonts)
- `colors.css` — base palette + semantic aliases
- `typography.css` — families, weights, scale, leading, tracking
- `spacing.css` — spacing, containers, radii, shadows, motion, z-index
- `base.css` — light resets + element defaults + text helpers

**Components** (`components/`, React primitives — namespace
`window.AshishPortfolioDesignSystem_48f8eb`)
- `core/` — `Button`, `Tag`, `Badge`, `Avatar`
- `forms/` — `Input`, `Textarea`
- `surface/` — `Card`, `ProjectCard`

**UI Kits** (`ui_kits/`)
- `portfolio/` — interactive multi-page portfolio site (Home / Work / About /
  Contact). See its `README.md`.

**Assets** (`assets/`)
- `illustrations/` — 7 brand illustrations (the visual heart of the system).

**Foundation cards** (`guidelines/cards/`) — specimen tiles shown in the Design
System tab (Colors, Type, Spacing, Brand).

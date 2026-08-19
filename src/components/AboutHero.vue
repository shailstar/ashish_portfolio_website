<template>
  <section class="about-hero">
    <!-- Carries the hero's wave language across the seam. The hero's bottom
         edge is sage nearly full-width, so starting sage here and tapering
         into paper reads as one continuous field rather than two sections. -->
    <svg class="about-wave" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path
        fill="var(--sage-100)"
        opacity="0.75"
        d="M0,0 H1440 V104 C1268,158 1092,80 892,118 C692,156 452,196 254,166 C154,151 70,122 0,100 Z"
      />
      <path
        fill="var(--sage-200)"
        opacity="0.62"
        d="M0,0 H1440 V56 C1250,110 1070,28 872,64 C676,102 456,146 258,118 C158,104 70,76 0,54 Z"
      />
    </svg>

    <div class="about-hero-wrapper">
      <!-- Media first: the hero puts its image right, so mirroring it here
           gives the page an alternating rhythm instead of two identical rows. -->
      <div class="about-media">
        <div class="portrait-container">
          <img src="/profile_about.png" alt="Dr. Ashish Yadav" />
        </div>
      </div>

      <div class="about-copy">
        <span class="section-eyebrow">
          About
          <i class="eyebrow-mark" aria-hidden="true"></i>
          The approach
        </span>

        <h2 class="about-headline">
          You&apos;re not a diagnosis. You&apos;re a person,
          <span class="italic-text">and your care should reflect that.</span>
        </h2>

        <p class="body-text">
          I work at the intersection of psychiatry and yogic science, focusing on personalised, outcome-driven mental health care. Most treatments focus on symptom control. My approach focuses on understanding the underlying patterns (biological, psychological, and behavioural) and addressing them in a structured, individualised way.
        </p>

        <p class="body-text">
          With a background in psychiatry, research in behavioural patterns such as procrastination and binge behaviour, and formal training in yoga, my work focuses on bridging science with practical, real-world application.
        </p>

        <p class="body-text">
          I primarily work with individuals who are looking for a deeper, structured approach, not just quick relief, but lasting change. Mental health care should be precise, personalised, and built to last.
        </p>

        <div class="about-footer-text">
          <p class="endline">
            Tum akele nahi ho dost. <span class="endline-accent">Healing starts here.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-hero {
  position: relative;
  overflow: hidden;
  /* Was flat white, which put a hard seam against the hero's warm paper. */
  background: var(--paper);
  padding: clamp(5rem, 11vw, 8rem) clamp(24px, 5vw, 56px) clamp(3rem, 8vw, 5.5rem);
}

.about-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: clamp(90px, 13vw, 170px);
  display: block;
  pointer-events: none;
}

.about-hero-wrapper {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 4.5rem);
  /* Matches the hero's inner width so the two sections' content edges line up
     — they were 1240 vs 1320 with different padding, a visible 92px jog. */
  max-width: 1240px;
  margin: 0 auto;
  align-items: center;
}

.about-copy {
  display: flex;
  flex-direction: column;
}

/* Same construction as the hero kicker, so the two sections read as a system. */
.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(11px, 1.05vw, 13px);
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--stone-500);
  margin-bottom: 1.25rem;
}

.eyebrow-mark {
  display: inline-block;
  width: 13px;
  height: 17px;
  flex: 0 0 auto;
  background: var(--sage-500);
  transform: skewX(-16deg);
}

.about-headline {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.6vw, 2.6rem);
  /* 700 to match TreatmentProcess, Services and Bookings — this was the only
     section heading at 600. */
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: -0.01em;
  color: var(--text-strong);
  margin: 0 0 1.5rem;
}

.italic-text {
  font-style: italic;
  color: var(--text-body);
}

.body-text {
  font-size: clamp(0.9375rem, 1.2vw, 1.0625rem);
  line-height: 1.8;
  color: var(--text-body);
  margin: 0 0 1.25rem;
}

.body-text:last-of-type {
  margin-bottom: 2rem;
}

.about-footer-text {
  margin-top: 1.5rem;
}

.endline {
  font-family: var(--font-display);
  font-size: clamp(1rem, 2vw, 1.375rem);
  font-weight: 600;
  color: var(--text-strong);
  margin: 0;
  line-height: 1.4;
}

.endline-accent {
  color: var(--brand);
}

.about-media {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Organic shape behind the portrait, echoing the blob under the hero's brain
   so both images sit in the same visual language. */
.about-media::before {
  content: '';
  position: absolute;
  z-index: 0;
  width: 112%;
  height: 92%;
  background: var(--sage-100);
  opacity: 0.85;
  border-radius: 58% 42% 46% 54% / 48% 52% 48% 52%;
}

.portrait-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  border-radius: clamp(1.5rem, 3vw, 2.5rem);
  overflow: hidden;
  aspect-ratio: 3 / 4;
  /* Was --shadow-lg, a purple-tinted leftover from an older palette. */
  box-shadow: 0 20px 46px rgba(82, 76, 54, 0.22);
}

.portrait-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Matches the hero's breakpoint — they were 768 vs 980, so between those
   widths the hero was stacked while this was still two columns. */
@media (max-width: 980px) {
  .about-hero {
    padding: clamp(3.5rem, 9vw, 5rem) clamp(24px, 5vw, 56px) clamp(2.5rem, 6vw, 3.5rem);
  }

  .about-hero-wrapper {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .about-copy {
    text-align: center;
    align-items: center;
  }

  .section-eyebrow {
    justify-content: center;
  }

  .portrait-container {
    max-width: 340px;
    aspect-ratio: 3 / 4;
  }

  .about-media::before {
    width: 104%;
    height: 88%;
  }
}

@media (max-width: 560px) {
  .portrait-container {
    max-width: 100%;
  }
}
</style>

<template>
  <section class="consult">
    <header class="consult-header">
      <div class="eyebrow">How a consultation works</div>
      <h2 class="consult-title">
        What happens in
        <em>your consultation.</em>
      </h2>
      <p class="consult-lead">
        No rush and no judgement. Here is what you can expect once the session begins.
      </p>
    </header>

    <ol class="consult-steps">
      <li v-for="(step, index) in steps" :key="step.title" class="consult-step">
        <span class="step-number">{{ String(index + 1).padStart(2, '0') }}</span>
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-text">{{ step.text }}</p>
      </li>
    </ol>

    <div class="consult-footnotes">
      <p class="consult-note">
        <strong>Good to know:</strong> a consultation is an honest clinical conversation. It does not promise a
        particular diagnosis, prescription or certificate, and sometimes a little more assessment is needed before
        the picture is clear.
      </p>
      <a href="/phq9.html" target="_blank" rel="noopener noreferrer" class="consult-prep">
        <span class="consult-prep-label">Optional, before your visit</span>
        <span class="consult-prep-title">Take the PHQ-9 self assessment &rarr;</span>
        <span class="consult-prep-sub">A short 9-question mood check that helps us start on the right foot. It does not book an appointment.</span>
      </a>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'We listen',
    text: 'You share what you are going through: how you feel, since when, and how it is affecting your sleep, work and relationships. We also go over your health history and any medicines you take.',
  },
  {
    title: 'We make sense of it',
    text: 'You get a clear explanation of what may be going on, in plain language, with room to ask every question on your mind.',
  },
  {
    title: 'We plan together',
    text: 'We agree on next steps that suit you. This may include lifestyle and sleep changes, yogic breathing practices, therapy guidance, medicines only where needed, and when to follow up.',
  },
]
</script>

<style scoped>
.consult {
  margin-top: clamp(3.5rem, 7vw, 5rem);
}

.consult-header {
  max-width: 680px;
  margin-bottom: 2rem;
}

.consult-header .eyebrow {
  margin-bottom: 0.75rem;
}

.consult-title {
  font-family: var(--font-display);
  font-size: var(--fs-h2);
  font-weight: 700;
  letter-spacing: var(--ls-tight);
  margin: 0 0 1rem;
}

.consult-title em {
  display: block;
  font-style: italic;
  font-weight: 500;
  color: var(--brand);
}

.consult-lead {
  font-size: var(--fs-md);
  margin: 0;
}

.consult-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  counter-reset: none;
}

.consult-step {
  position: relative;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2rem);
}

/* Arrow between cards on wide screens */
.consult-step:not(:last-child)::after {
  content: '→';
  position: absolute;
  top: 50%;
  right: -1.05rem;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sage-100);
  color: var(--brand-ink);
  border-radius: 50%;
  font-weight: 700;
  z-index: 1;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--brand);
  color: var(--text-on-brand);
  font-weight: 700;
  font-size: var(--fs-sm);
  margin-bottom: 1rem;
}

.step-title {
  font-family: var(--font-display);
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.step-text {
  font-size: 0.9375rem;
  margin: 0;
}

.consult-footnotes {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.consult-note {
  margin: 0;
  padding: 1.25rem 1.5rem;
  background: var(--camel-50);
  border-left: 4px solid var(--camel-400);
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
}

.consult-prep {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1.25rem 1.5rem;
  border: 1.5px dashed var(--border-brand);
  border-radius: var(--radius-md);
  background: var(--sage-50);
  text-decoration: none;
  transition: background var(--dur-fast) var(--ease-soft);
}

.consult-prep:hover {
  background: var(--sage-100);
}

.consult-prep-label {
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--text-muted);
}

.consult-prep-title {
  font-weight: 700;
  color: var(--brand-ink);
}

.consult-prep-sub {
  font-size: var(--fs-sm);
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .consult-steps,
  .consult-footnotes {
    grid-template-columns: 1fr;
  }

  .consult-step:not(:last-child)::after {
    content: '↓';
    top: auto;
    right: auto;
    bottom: -1.05rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

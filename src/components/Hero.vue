<template>
  <section ref="rootRef" class="hero">
    <!-- Background, rebuilt from the reference: sage wave bands framing the
         corners, two hairlines, and a light inner blob under the brain. The
         wave boundaries were sampled off the reference and refitted to a
         1440x760 box (the desktop hero's aspect) so "slice" crops as little
         of them as possible. -->
    <svg
      class="hero-bg"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path id="hero-blob" d="
          M977.0,450.5C997.6,488.2 1004.1,540.1 995.9,580.1C987.6,620.1 956.5,660.4 927.3,690.2C898.2,720.1
          853.6,735.9 821.0,759.4C788.3,782.8 764.4,812.4 731.6,830.7C698.8,849.0 660.9,864.0
          624.3,869.2C587.7,874.3 547.1,870.3 512.1,861.5C477.1,852.6 443.1,834.3 414.1,816.0C385.1,797.8
          362.9,771.7 338.0,752.0C313.2,732.2 296.2,713.0 265.1,697.4C234.0,681.9 188.6,678.9
          151.3,658.8C114.0,638.6 66.5,611.3 41.3,576.6C16.1,541.9 -0.4,492.4 0.0,450.5C0.4,408.5 17.6,359.3
          43.5,324.9C69.3,290.6 120.3,266.8 155.2,244.4C190.0,222.1 224.9,211.9 252.4,190.8C279.9,169.7
          295.1,143.1 320.0,117.9C345.0,92.6 369.9,58.6 401.9,39.4C433.9,20.1 474.2,6.7 512.1,2.4C550.0,-1.9
          593.1,1.2 629.2,13.3C665.3,25.4 702.8,47.7 728.8,75.1C754.8,102.4 771.0,143.9 785.2,177.3C799.5,210.8
          800.0,246.4 814.5,275.8C829.0,305.3 845.1,324.9 872.2,354.0C899.3,383.1 956.4,412.8 977.0,450.5Z" />
      </defs>

      <path class="wave" fill="var(--sage-200)" opacity="0.62" d="
          M0,0 H780 C770,0 740,-5 720,3C700,11 680,32 660,46C640,60 620,75 600,84C580,93 560,98 540,100C520,102
          500,100 480,98C460,96 440,88 420,85C400,82 380,79 360,79C340,79 320,81 300,86C280,91 260,108
          240,111C220,114 200,90 180,101C160,112 140,162 120,177C100,192 80,187 60,188C40,189 10,183 0,182 Z" />
      <path class="wave" fill="var(--sage-200)" opacity="0.62" d="
          M0,578C10,581 40,590 60,595C80,600 100,602 120,607C140,612 160,628 180,628C200,628 220,610
          240,604C260,598 280,596 300,593C320,590 340,586 360,585C380,584 400,584 420,585C440,586 460,584
          480,592C500,600 520,621 540,633C560,645 580,661 600,663C620,665 640,641 660,643C680,645 700,664
          720,673C740,682 760,692 780,699C800,706 820,711 840,715C860,719 880,720 900,721C920,722 940,722
          960,721C980,720 1000,717 1020,713C1040,709 1060,703 1080,696C1100,689 1120,681 1140,671C1160,661
          1180,650 1200,637C1220,624 1240,610 1260,596C1280,582 1300,567 1320,555C1340,543 1360,533
          1380,526C1400,519 1430,514 1440,511 L1440,760 L0,760 Z" />
      <path class="wave" fill="var(--sage-400)" opacity="0.22" d="
          M1440,470C1360,505 1300,556 1250,606C1200,656 1150,712 1096,760 L1440,760 Z" />

      <path class="hairline" d="M1452,232 C1360,224 1288,186 1276,142 C1264,96 1318,44 1404,14" />
      <path class="hairline" d="M446,776 C374,700 330,652 258,622 C176,588 78,578 -14,586" />

      <use class="blob-wide" href="#hero-blob" fill="var(--sage-100)" opacity="0.85" />
    </svg>

    <!-- drifting motes, plus the procedural brain if the image is unavailable -->
    <canvas ref="canvasRef" class="hero-canvas" aria-hidden="true"></canvas>

    <div class="hero-inner">
      <div class="hero-grid">
        <div class="hero-text">
          <p ref="introRef" class="hero-intro">
            <span class="intro-lead">Hello, I&apos;m</span>
            <strong class="intro-strong">Dr. Ashish Yadav, consultant neuro-psychiatrist.</strong>
            <span class="intro-tail">
              I treat the whole person — precision medicine and yogic science,
              woven around your story.
            </span>
          </p>

          <h1 ref="headlineRef" class="hero-headline">
            <span class="hero-kicker">
              Where Neuroscience
              <i class="kicker-mark" aria-hidden="true"></i>
              Meets
            </span>
            <span class="hero-statement">Ancient wisdom.</span>
          </h1>

          <div ref="ctaRef" class="hero-cta">
            <Button
              variant="primary"
              size="lg"
              as="a"
              :href="BOOKING_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>

        <div ref="visualRef" class="hero-visual">
          <div class="visual-stage">
            <svg class="blob-stage" viewBox="0 0 1000 871" aria-hidden="true" focusable="false">
              <use href="#hero-blob" fill="var(--sage-100)" opacity="0.85" />
            </svg>

            <img
              v-show="imageReady"
              class="brain-image"
              :src="BRAIN_SRC"
              alt="Sculpted model of a human brain, viewed from above"
              decoding="async"
              fetchpriority="high"
              @load="imageReady = true"
              @error="imageReady = false"
            />
            <span v-show="imageReady" class="brain-shadow" aria-hidden="true"></span>

            <button class="visual-pill" @click="handleAssessment">
              <span class="pill-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
              <span class="pill-text">Take the<br />2-min<br />assessment</span>
            </button>
          </div>
        </div>
      </div>

      <div ref="footnoteRef" class="hero-footnote">
        <!-- Credentials row goes here once they're confirmed: qualifications,
             years in practice, affiliation, languages. -->
        <a
          class="connect"
          href="https://wa.me/message/75HLOF6Q7MV4A1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.03.79.81-2.95-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.55.13-.16.24-.64.79-.78.95-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.13-.55-1.33-.76-1.82-.2-.47-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3c-.22.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69 1.56.67 2.17.73 2.95.61.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
          </svg>
          Talk on WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from './Button.vue'

defineEmits(['navigate'])

// Bound rather than a literal src so Vite treats it as a public-dir path
// instead of trying to resolve it at build time.
const BRAIN_SRC = '/brain.webp'

const BOOKING_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j'

const rootRef = ref(null)
const canvasRef = ref(null)
const visualRef = ref(null)
const introRef = ref(null)
const headlineRef = ref(null)
const ctaRef = ref(null)
const footnoteRef = ref(null)

const imageReady = ref(false)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const state = {
  animationFrame: null,
  resizeObserver: null,
  intersectionObserver: null,
  onVisibility: null,
  visible: true,
  running: false,
}

const handleAssessment = () => {
  // TODO: point at the real self-assessment once its URL exists.
  console.log('Assessment clicked')
}

/* ---------------------------------------------------------------- entrance */

const entrance = () => {
  const els = [
    introRef.value,
    headlineRef.value,
    ctaRef.value,
    visualRef.value,
    footnoteRef.value
  ]

  if (prefersReducedMotion()) {
    els.forEach((el) => {
      if (el) {
        el.style.opacity = '1'
        el.style.transform = 'none'
      }
    })
    return
  }

  els.forEach((el, i) => {
    if (!el) return
    const delay = 120 + i * 130
    let anim = null
    if (el.animate) {
      anim = el.animate(
        [
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 900, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both' }
      )
    }
    setTimeout(() => {
      try {
        if (anim) anim.cancel()
      } catch (e) {}
      el.style.opacity = '1'
      el.style.transform = 'none'
    }, delay + 1050)
  })
}

/* ------------------------------------------------------------------ canvas */

const initCanvas = () => {
  const cv = canvasRef.value
  const wrap = rootRef.value
  if (!cv || !wrap) return

  const ctx = cv.getContext('2d')
  const SAGE = [163, 177, 138]
  const GOLD = [194, 164, 111]

  let W = 0
  let H = 0
  let pts = []
  let t0 = null
  // Where the fallback brain gets drawn: the centre of the visual column.
  let stage = { cx: 0, cy: 0, w: 260 }

  const measure = () => {
    W = wrap.clientWidth
    H = wrap.clientHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    cv.width = W * dpr
    cv.height = H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const vis = visualRef.value
    if (vis) {
      const r = vis.getBoundingClientRect()
      const b = wrap.getBoundingClientRect()
      stage = {
        cx: r.left - b.left + r.width / 2,
        cy: r.top - b.top + r.height / 2,
        w: r.width
      }
    } else {
      stage = { cx: W * 0.72, cy: H * 0.48, w: W * 0.4 }
    }

    pts = Array.from({ length: 9 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.16,
      vy: -(Math.random() * 0.2 + 0.07),
      r: Math.random() * 1.5 + 1,
      a: Math.random() * 0.18 + 0.08,
      sage: Math.random() > 0.5
    }))
  }

  const lerp = (a, b, t) => [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t)
  ]
  const rc = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`

  // Fallback only — skipped entirely once the brain image loads.
  const drawBrain = (t) => {
    const cx = stage.cx
    const cy = stage.cy
    const breathe = 1 + 0.036 * Math.sin(t * 0.00145)
    const bW = Math.min(stage.w * 0.82, 360)
    const hw = bW / 2
    const hh = hw * 1.17
    const col = lerp(GOLD, SAGE, 0.5)

    ctx.save()
    ctx.translate(cx, cy)
    ctx.scale(breathe, breathe)
    ctx.translate(-cx, -cy)

    const outer = () => {
      ctx.beginPath()
      ctx.moveTo(cx, cy - hh * 0.9)
      ctx.bezierCurveTo(cx + hw * 0.28, cy - hh * 1.02, cx + hw * 0.6, cy - hh * 0.97, cx + hw * 0.8, cy - hh * 0.62)
      ctx.bezierCurveTo(cx + hw * 0.99, cy - hh * 0.28, cx + hw * 1.0, cy + hh * 0.18, cx + hw * 0.88, cy + hh * 0.54)
      ctx.bezierCurveTo(cx + hw * 0.72, cy + hh * 0.88, cx + hw * 0.42, cy + hh * 1.035, cx + hw * 0.18, cy + hh * 1.035)
      ctx.bezierCurveTo(cx + hw * 0.1, cy + hh * 1.03, cx + hw * 0.045, cy + hh * 1.012, cx, cy + hh * 1.0)
      ctx.bezierCurveTo(cx - hw * 0.045, cy + hh * 1.012, cx - hw * 0.1, cy + hh * 1.03, cx - hw * 0.18, cy + hh * 1.035)
      ctx.bezierCurveTo(cx - hw * 0.42, cy + hh * 1.035, cx - hw * 0.72, cy + hh * 0.88, cx - hw * 0.88, cy + hh * 0.54)
      ctx.bezierCurveTo(cx - hw * 1.0, cy + hh * 0.18, cx - hw * 0.99, cy - hh * 0.28, cx - hw * 0.8, cy - hh * 0.62)
      ctx.bezierCurveTo(cx - hw * 0.6, cy - hh * 0.97, cx - hw * 0.28, cy - hh * 1.02, cx, cy - hh * 0.9)
      ctx.closePath()
    }

    ctx.save()
    outer()
    ctx.shadowColor = 'rgba(82,76,54,0.26)'
    ctx.shadowBlur = 46
    ctx.shadowOffsetX = 14
    ctx.shadowOffsetY = 26
    ctx.fillStyle = '#FBFAF6'
    ctx.fill()
    ctx.restore()

    ctx.save()
    outer()
    ctx.clip()
    const shade = ctx.createLinearGradient(
      cx - hw * 0.8, cy - hh * 0.95,
      cx + hw * 0.85, cy + hh * 0.98
    )
    shade.addColorStop(0, 'rgba(255,255,255,0.85)')
    shade.addColorStop(0.45, 'rgba(255,255,255,0)')
    shade.addColorStop(1, rc(col, 0.22))
    ctx.fillStyle = shade
    outer()
    ctx.fill()
    ctx.restore()

    ;[[18, 0.05], [10, 0.085], [4.5, 0.14], [1.6, 0.3]].forEach(([lw, al]) => {
      outer()
      ctx.strokeStyle = rc(col, al)
      ctx.lineWidth = lw
      ctx.lineCap = 'round'
      ctx.stroke()
    })

    ctx.save()
    outer()
    ctx.clip()
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    ctx.beginPath()
    ctx.moveTo(cx, cy - hh * 0.9)
    ctx.bezierCurveTo(cx + hw * 0.085, cy - hh * 0.58, cx - hw * 0.075, cy - hh * 0.3, cx + hw * 0.03, cy - hh * 0.02)
    ctx.bezierCurveTo(cx + hw * 0.1, cy + hh * 0.24, cx - hw * 0.06, cy + hh * 0.5, cx + hw * 0.02, cy + hh * 0.72)
    ctx.bezierCurveTo(cx + hw * 0.06, cy + hh * 0.82, cx - hw * 0.02, cy + hh * 0.86, cx, cy + hh * 0.9)
    ctx.strokeStyle = rc(col, 0.4)
    ctx.lineWidth = 1.6
    ctx.stroke()

    const gyri = (side) => {
      const rows = 23
      for (let r = 0; r < rows; r++) {
        const yf = -0.86 + (r / (rows - 1)) * 1.76
        const edgeR = Math.sqrt(Math.max(0, 1 - yf * yf * 0.92))
        ctx.beginPath()
        let first = true
        for (let xf = 0.05; xf <= 1.05; xf += 0.025) {
          const xEdge = edgeR * (1 - 0.12 * Math.pow(xf, 3))
          const xx = cx + side * (hw * xf * xEdge)
          const wig =
            Math.sin(xf * 7.0 + r * 2.4 + side * 0.7) * hh * 0.044 +
            Math.sin(xf * 14.5 + r * 1.2 + side) * hh * 0.022 +
            Math.sin(xf * 27.0 + r * 0.6) * hh * 0.011
          const yy = cy + yf * hh + wig * edgeR
          if (first) {
            ctx.moveTo(xx, yy)
            first = false
          } else {
            ctx.lineTo(xx, yy)
          }
        }
        ctx.strokeStyle = rc(col, 0.28 + (r % 2) * 0.07)
        ctx.lineWidth = 1.15
        ctx.stroke()
      }
    }
    gyri(1)
    gyri(-1)

    ctx.restore()
    ctx.restore()
  }

  const render = (t) => {
    ctx.clearRect(0, 0, W, H)
    if (!imageReady.value) drawBrain(t)
    pts.forEach((p) => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = rc(p.sage ? SAGE : GOLD, p.a)
      ctx.fill()
    })
  }

  const frame = (ts) => {
    try {
      if (!t0) t0 = ts
      render(ts - t0)
      pts.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -8) {
          p.y = H + 8
          p.x = Math.random() * W
        }
        if (p.x < -8) p.x = W + 8
        if (p.x > W + 8) p.x = -8
      })
    } catch (e) {
      console.error('Hero animation error:', e)
    }
    state.animationFrame = requestAnimationFrame(frame)
  }

  const start = () => {
    if (state.running || prefersReducedMotion()) return
    state.running = true
    state.animationFrame = requestAnimationFrame(frame)
  }
  const stop = () => {
    state.running = false
    cancelAnimationFrame(state.animationFrame)
  }

  measure()
  if (prefersReducedMotion()) render(1200)
  else start()

  state.resizeObserver = new ResizeObserver(() => {
    measure()
    if (!state.running) render(1200)
  })
  state.resizeObserver.observe(wrap)

  // Don't burn frames on a hero that's scrolled past or a backgrounded tab.
  state.intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      state.visible = entry.isIntersecting
      if (state.visible && !document.hidden) start()
      else stop()
    },
    { threshold: 0.05 }
  )
  state.intersectionObserver.observe(wrap)

  state.onVisibility = () => {
    if (document.hidden || !state.visible) stop()
    else start()
  }
  document.addEventListener('visibilitychange', state.onVisibility)
}

/* ------------------------------------------------------------------ mount  */

onMounted(() => {
  entrance()
  initCanvas()
})

onUnmounted(() => {
  cancelAnimationFrame(state.animationFrame)
  if (state.resizeObserver) state.resizeObserver.disconnect()
  if (state.intersectionObserver) state.intersectionObserver.disconnect()
  if (state.onVisibility) document.removeEventListener('visibilitychange', state.onVisibility)
})
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: var(--paper);
  /* The sticky nav sits in normal flow, so its height has to come off the
     viewport or the hero overflows by exactly that much. --nav-h is measured
     and published by Nav.vue; the literal is the pre-hydration fallback.
     100vh first for browsers without svh (Safari < 15.4). */
  min-height: calc(100vh - var(--nav-h, 78px));
  min-height: calc(100svh - var(--nav-h, 78px));
  width: 100%;
  font-family: var(--font-sans);
}

.hero-bg,
.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
}

.hero-bg {
  z-index: 1;
}

.hero-canvas {
  z-index: 2;
}

.hairline {
  fill: none;
  stroke: var(--stone-600);
  stroke-width: 1.1;
  opacity: 0.45;
}

/* Transforms live in CSS, not as attributes, so the breakpoint can swap them.
   Units are SVG user units, which "slice" maps onto the viewport for us. */
.blob-wide {
  transform: translate(654px, 60px) scale(0.66);
}

.blob-stage {
  display: none;
}

.hero-inner {
  position: relative;
  z-index: 3;
  min-height: calc(100vh - var(--nav-h, 78px));
  min-height: calc(100svh - var(--nav-h, 78px));
  max-width: 1240px;
  margin: 0 auto;
  /* vh-based padding so the block shrinks with the viewport instead of
     pushing the footnote row past the fold on short screens. */
  padding: clamp(20px, 4.5vh, 72px) clamp(24px, 5vw, 56px) clamp(16px, 2.5vh, 32px);
  display: flex;
  flex-direction: column;
}

.hero-grid {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

/* ------------------------------------------------------------------ text   */

.hero-text {
  max-width: 460px;
}

/* Staggered weights inside one paragraph, as in the reference: a light sage
   opener, the identity in bold, then the detail dropping back to body weight. */
.hero-intro {
  font-size: clamp(15px, 1.15vw, 16.5px);
  line-height: 1.62;
  color: var(--stone-600);
  margin: 0 0 clamp(28px, 4.5vh, 52px);
  max-width: 26ch;
}

.intro-lead {
  display: block;
  color: var(--sage-600);
  font-weight: 500;
  margin-bottom: 2px;
}

.intro-strong {
  color: var(--ink-800);
  font-weight: 700;
}

.intro-tail {
  color: var(--stone-500);
}

.hero-headline {
  margin: 0 0 clamp(28px, 4.5vh, 48px);
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.2vh, 14px);
}

.hero-kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(11px, 1.05vw, 13px);
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--stone-500);
}

/* The reference marks the break with a solid skewed block, not a slash. */
.kicker-mark {
  display: inline-block;
  width: 13px;
  height: 17px;
  flex: 0 0 auto;
  background: var(--sage-500);
  transform: skewX(-16deg);
}

/* Heavy geometric-leaning sans at display size, the way the reference sets it.
   Inter 800 rather than a new family; tight tracking does most of the work. */
.hero-statement {
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: clamp(2.9rem, 6.9vw, 5.4rem);
  line-height: 0.94;
  letter-spacing: -0.045em;
  color: var(--ink-900);
}

.hero-cta {
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;
}

/* ----------------------------------------------------------------- visual  */

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(220px, 40vh, 520px);
}

.visual-stage {
  position: relative;
  width: 100%;
  max-width: min(540px, 56vh);
  aspect-ratio: 1 / 1.05;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Absolute, so the image's intrinsic size can't drive the stage's width —
   the stage is sized purely by CSS (aspect ratio + the row it stretches into). */
.brain-image {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* nudged warm — the reference brain is ivory, not pure white */
  filter: sepia(0.1) saturate(1.06) drop-shadow(14px 22px 34px rgba(82, 76, 54, 0.26));
}

/* Soft contact shadow so the object grounds instead of floating. */
.brain-shadow {
  position: absolute;
  z-index: 1;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 66%;
  height: 9%;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(82, 76, 54, 0.3), rgba(82, 76, 54, 0) 70%);
  filter: blur(7px);
}

/* Organic blob rather than a pill — the irregular radii are what make it read
   as part of the same shape language as the background. */
.visual-pill {
  position: absolute;
  z-index: 3;
  right: -7%;
  bottom: 14%;
  display: inline-flex;
  align-items: center;
  gap: 11px;
  padding: 20px 24px 20px 16px;
  background: var(--sage-600);
  color: var(--white);
  border: none;
  border-radius: 58% 42% 38% 62% / 46% 58% 42% 54%;
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.32;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(86, 98, 66, 0.28);
  transition: transform var(--dur-base) var(--ease-soft),
    background var(--dur-fast) var(--ease-soft);
}

.visual-pill:hover {
  background: var(--sage-700);
  transform: translateY(-2px);
}

.pill-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  border-radius: 50%;
  background: var(--white);
  color: var(--sage-700);
}

/* --------------------------------------------------------------- footnote  */

/* Centred cluster, as in the reference — not a full-width rule. */
.hero-footnote {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: clamp(12px, 2.5vh, 28px);
}

.connect {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 18px;
  border: 1px solid var(--sage-300);
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  font-weight: 600;
  color: var(--sage-700);
  text-decoration: none;
  transition: all var(--dur-fast) var(--ease-soft);
}

.connect:hover {
  color: var(--white);
  background: var(--sage-600);
  border-color: var(--sage-600);
}

/* ------------------------------------------------------------ responsive   */

@media (max-width: 980px) {
  .blob-wide,
  .hairline {
    display: none;
  }

  .blob-stage {
    display: block;
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 128%;
    height: 128%;
    overflow: visible;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    /* Text takes what it needs; the visual absorbs whatever height is left,
       so the section fits the viewport instead of running past it. */
    grid-template-rows: auto minmax(0, 1fr);
    /* stretch so the visual row actually claims its 1fr; with `center` the
       row collapses to the stage's content height, which is circular. */
    align-items: stretch;
    gap: clamp(16px, 2.5vh, 32px);
    text-align: center;
  }

  .hero-text {
    max-width: 560px;
    margin: 0 auto;
  }

  .hero-intro {
    max-width: 42ch;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-headline {
    align-items: center;
  }

  .hero-kicker {
    justify-content: center;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-visual {
    min-height: 0;
    /* stretch, not center — the stage needs a definite height to size from. */
    align-items: stretch;
  }

  /* Height-driven rather than width-driven: the stage stretches to the leftover
     row height and derives its width from the aspect ratio. */
  .visual-stage {
    width: auto;
    height: auto;
    align-self: stretch;
    margin: 0 auto;
    max-width: 100%;
  }

  .visual-pill {
    right: auto;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    padding: 12px 18px 12px 12px;
    font-size: 11.5px;
  }

  .visual-pill:hover {
    transform: translateX(-50%) translateY(-2px);
  }

  .hero-footnote {
    margin-top: clamp(10px, 2vh, 20px);
    gap: 12px;
  }
}

@media (max-width: 560px) {
  .hero-cta :deep(.button) {
    width: 100%;
  }

  .connect {
    padding: 7px 14px;
    font-size: 12px;
  }
}

/* Short viewports (landscape phones, 640px-tall handsets). Without this the
   text block alone eats the screen and the brain is squeezed to nothing. The
   footnote row is the one genuinely supplementary element, so it goes first. */
@media (max-height: 720px) and (max-width: 980px) {
  .hero-intro {
    font-size: 14.5px;
    line-height: 1.5;
    margin-bottom: 14px;
  }

  .hero-headline {
    margin-bottom: 18px;
    gap: 6px;
  }

  .hero-statement {
    font-size: clamp(2rem, 8.5vw, 2.8rem);
  }

  .hero-footnote {
    display: none;
  }

  .visual-stage {
    min-height: 150px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .visual-pill,
  .connect {
    transition: none;
  }
}
</style>

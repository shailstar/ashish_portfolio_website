<template>
  <section ref="rootRef" class="hero">
    <canvas ref="canvasRef" class="hero-canvas"></canvas>

    <div class="hero-content">
      <div class="hero-text">
        <span ref="eyebrowRef" class="eyebrow">Consultant Neuro-Psychiatrist</span>

        <div ref="textBlockRef" class="hero-text-block">
          <h1 ref="h1Ref" class="hero-headline">
            Where Neuroscience Meets <em class="italic-accent">Ancient Wisdom</em>
          </h1>

          <p ref="subRef" class="hero-subheading">
            Precision psychiatry and yogic science, woven around your story.
          </p>
        </div>

        <div ref="ctaRef" class="hero-cta">
          <Button
            variant="primary"
            size="lg"
            as="a"
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EcWQqsrJaMU3HgByy-P5yos7efdrTzNc_PKIKgwktz3nRWU9tcQt2Fy07M65Y7qcRMr902o9j"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Consultation
          </Button>
          <button class="cta-secondary" @click="handleAssessment">
            Not sure yet? Take a 2-Min Self Assessment →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from './Button.vue'

defineEmits(['navigate'])

const rootRef = ref(null)
const canvasRef = ref(null)
const eyebrowRef = ref(null)
const textBlockRef = ref(null)
const h1Ref = ref(null)
const subRef = ref(null)
const ctaRef = ref(null)

let animationState = {
  rotationInterval: null,
  animationFrame: null,
  resizeObserver: null,
  rotationGen: 0,
  pairIndex: 0,
  swapTimeout: null,
}

const PAIRS = [
  {
    h: 'Where Neuroscience Meets <em class="italic-accent">Ancient Wisdom</em>',
    s: 'Precision psychiatry and yogic science, woven around your story.'
  },
  {
    h: 'Understand Your Mind, <em class="italic-accent">Retrain Your Patterns</em>',
    s: 'Structured treatment integrating clinical psychiatry with yogic sciences.'
  },
  {
    h: 'Precision Psychiatry. <em class="italic-accent">Integrated Healing.</em>',
    s: 'Tailored care combining modern medicine and yogic frameworks.'
  }
]

const handleAssessment = () => {
  // Placeholder for assessment link
  console.log('Assessment clicked')
}

// Locks the headline+subheading block to the tallest of the rotating text
// pairs, so swapping between them never reflows the CTA row below it.
// At a given viewport width this only ever grows the lock, never shrinks it,
// since re-measuring can run while web fonts are still swapping in and
// under-report the true height. A genuine width change (real resize, not
// just the font-load re-measurements) resets the floor so it can shrink too.
let lockedWidth = null
const lockTextBlockHeight = () => {
  const block = textBlockRef.value
  const h1 = h1Ref.value
  const sub = subRef.value
  const wrap = rootRef.value
  if (!block || !h1 || !sub || !wrap) return

  const width = wrap.clientWidth
  const widthChanged = lockedWidth !== null && Math.abs(width - lockedWidth) > 1
  lockedWidth = width

  const current = widthChanged ? 0 : parseFloat(block.style.minHeight) || 0
  block.style.minHeight = ''
  const originalH1 = h1.innerHTML
  const originalSub = sub.innerHTML

  let max = current
  PAIRS.forEach((p) => {
    h1.innerHTML = p.h
    sub.innerHTML = p.s
    max = Math.max(max, block.offsetHeight)
  })

  h1.innerHTML = originalH1
  sub.innerHTML = originalSub
  block.style.minHeight = `${max}px`
}

const entrance = () => {
  const els = [eyebrowRef.value, h1Ref.value, subRef.value, ctaRef.value]
  els.forEach((el, i) => {
    if (!el) return
    const d = 120 + i * 150
    let a = null
    if (el.animate) {
      a = el.animate(
        [
          { opacity: 0, transform: 'translateY(16px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 950, delay: d, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both' }
      )
    }
    setTimeout(() => {
      try {
        if (a) a.cancel()
      } catch (e) {}
      el.style.opacity = '1'
      el.style.transform = 'none'
    }, d + 1100)
  })
}

const setPair = (idx) => {
  const h1 = h1Ref.value
  const sub = subRef.value
  if (!h1 || !sub) return

  const p = PAIRS[idx]
  ;[h1, sub].forEach((el) => {
    el.style.opacity = '1'
    if (el.animate) {
      el.animate(
        [
          { opacity: 1, transform: 'translateY(0)' },
          { opacity: 0, transform: 'translateY(6px)', offset: 0.42 },
          { opacity: 0, transform: 'translateY(6px)', offset: 0.5 },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 1300, easing: 'ease' }
      )
    }
  })

  clearTimeout(animationState.swapTimeout)
  animationState.swapTimeout = setTimeout(() => {
    h1.innerHTML = p.h
    sub.innerHTML = p.s
    // Safety net: grow the lock if this real render needs more room than
    // predicted (e.g. web fonts were still swapping in when first measured).
    // min-height only floors the box, so offsetHeight here already reflects
    // whichever is taller: the actual content or the current lock.
    const block = textBlockRef.value
    if (block) {
      const needed = block.offsetHeight
      const current = parseFloat(block.style.minHeight) || 0
      if (needed > current) block.style.minHeight = `${needed}px`
    }
  }, 600)
}

const startRotation = () => {
  clearInterval(animationState.rotationInterval)
  clearTimeout(animationState.swapTimeout)
  animationState.pairIndex = 0
  const gen = ++animationState.rotationGen

  animationState.rotationInterval = setInterval(() => {
    if (gen !== animationState.rotationGen) {
      clearInterval(animationState.rotationInterval)
      return
    }
    animationState.pairIndex = (animationState.pairIndex + 1) % PAIRS.length
    setPair(animationState.pairIndex)
  }, 6500)
}

const initCanvas = () => {
  const cv = canvasRef.value
  const wrap = rootRef.value
  if (!cv || !wrap) return

  const ctx = cv.getContext('2d')
  const S = [163, 177, 138]
  const G = [194, 164, 111]
  const CYCLE = 13000
  const DECAY = 8500
  const LO = 8

  let W = 0
  let H = 0
  let pts = []
  let t0 = null
  let HI = 22 + 18 * 0.35

  const rsz = () => {
    lockTextBlockHeight()
    W = wrap.clientWidth
    H = wrap.clientHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    cv.width = W * dpr
    cv.height = H * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    pts = Array.from({ length: 6 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.16,
      vy: -(Math.random() * 0.2 + 0.07),
      r: Math.random() * 1.5 + 1,
      a: Math.random() * 0.2 + 0.1,
      sage: Math.random() > 0.5
    }))
  }

  const lerp = (a, b, t) => [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t)
  ]
  const rc = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`

  const drawBrain = (t, ar) => {
    const cx = W / 2
    const cy = H * 0.45
    const breathe = 1 + (0.022 + 0.04 * 0.35) * Math.sin(t * 0.00145)
    const bW = Math.min(W * 0.4, 250)
    const hw = bW / 2
    const hh = hw * 1.17
    const col = lerp(G, S, 1 - ar)
    const VIS = 0.82
    const k = 1 * VIS

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
    ctx.shadowColor = 'rgba(82,76,54,0.30)'
    ctx.shadowBlur = 30
    ctx.shadowOffsetX = 19
    ctx.shadowOffsetY = 24
    ctx.fillStyle = '#F7F5F0'
    ctx.fill()
    ctx.restore()

    ;[[20, 0.026], [11, 0.044], [5, 0.078], [1.6, 0.18]].forEach(([lw, al]) => {
      outer()
      ctx.strokeStyle = rc(col, (al + ar * 0.028) * k)
      ctx.lineWidth = lw
      ctx.lineCap = 'round'
      ctx.stroke()
    })
    outer()
    ctx.fillStyle = rc(col, (0.035 + ar * 0.04) * k)
    ctx.fill()

    ctx.save()
    outer()
    ctx.clip()
    const vg = ctx.createLinearGradient(cx - hw * 0.7, cy - hh * 0.9, cx + hw * 0.7, cy + hh * 0.95)
    vg.addColorStop(0, 'rgba(255,255,255,0.11)')
    vg.addColorStop(0.5, 'rgba(255,255,255,0)')
    vg.addColorStop(1, rc(col, 0.055 * k))
    ctx.fillStyle = vg
    outer()
    ctx.fill()
    ctx.restore()

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
    ctx.strokeStyle = rc(col, 0.24 * k)
    ctx.lineWidth = 1.5
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
        ctx.strokeStyle = rc(col, (0.16 + ((r % 2) * 0.045)) * k)
        ctx.lineWidth = 1.05
        ctx.stroke()
      }
    }
    gyri(1)
    gyri(-1)

    ctx.restore()
    ctx.restore()
  }

  const buildPath = (a, ph, yc, echo) => {
    ctx.beginPath()
    let f = true
    for (let x = 0; x <= W; x += 2) {
      const xn = x / W
      const y = echo
        ? yc + a * 0.46 * (Math.sin(xn * Math.PI * 5.3 + ph * 0.77 - 0.75) + Math.sin(xn * Math.PI * 10.8 + ph) * 0.28)
        : yc + a * (Math.sin(xn * Math.PI * 7 + ph) + Math.sin(xn * Math.PI * 16.8 + ph * 1.38) * 0.35 + Math.sin(xn * Math.PI * 28.3 + ph * 0.67) * 0.17)
      f ? (ctx.moveTo(x, y), (f = false)) : ctx.lineTo(x, y)
    }
  }

  const drawWaves = (a, ph, yc) => {
    const ar = 1 - Math.max(0, Math.min(1, (a - LO) / (HI - LO)))
    const col = lerp(G, S, ar)
    const k = 1

    buildPath(a, ph, yc + 10, true)
    ctx.strokeStyle = rc(S, 0.085 * k)
    ctx.lineWidth = 1
    ctx.lineCap = ctx.lineJoin = 'round'
    ctx.stroke()

    ;[[10, 0.04], [4.4, 0.13], [1.5, 0.72]].forEach(([lw, al]) => {
      buildPath(a, ph, yc, false)
      ctx.strokeStyle = rc(col, al * k)
      ctx.lineWidth = lw
      ctx.lineCap = ctx.lineJoin = 'round'
      ctx.stroke()
    })
  }

  const frame = (ts) => {
    try {
      if (!t0) t0 = ts
      const t = ts - t0
      const cc = t % CYCLE
      const ATK = 1500
      let a
      if (cc < ATK) {
        const u = cc / ATK
        const e = u * u * (3 - 2 * u)
        a = LO + (HI - LO) * e
      } else {
        const dc = cc - ATK
        a = dc < DECAY ? LO + (HI - LO) * Math.exp(-2.8 * dc / DECAY) : LO
      }
      const ph = t * 0.00155
      const ar = (a - LO) / (HI - LO)

      let waveY = H * 0.62
      const subEl = subRef.value
      const ctaEl = ctaRef.value
      if (subEl && ctaEl) {
        const wt = wrap.getBoundingClientRect().top
        const sb = subEl.getBoundingClientRect().bottom - wt
        const ct = ctaEl.getBoundingClientRect().top - wt
        if (ct > sb + 20) waveY = (sb + ct) / 2
      }

      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#F7F5F0'
      ctx.fillRect(0, 0, W, H)
      drawBrain(t, ar)
      drawWaves(a, ph, waveY)

      pts.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -8) {
          p.y = H + 8
          p.x = Math.random() * W
        }
        if (p.x < -8) p.x = W + 8
        if (p.x > W + 8) p.x = -8
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = rc(p.sage ? S : G, p.a * 1)
        ctx.fill()
      })
    } catch (e) {
      console.error('Hero animation error:', e)
    }
    animationState.animationFrame = requestAnimationFrame(frame)
  }

  rsz()
  animationState.resizeObserver = new ResizeObserver(rsz)
  animationState.resizeObserver.observe(wrap)
  animationState.animationFrame = requestAnimationFrame(frame)
}

onMounted(() => {
  lockTextBlockHeight()
  entrance()
  startRotation()
  initCanvas()

  // Google Fonts load async (display=swap). `document.fonts.ready` can
  // resolve before the browser finishes relaying out already-painted text
  // with the swapped-in font, so re-measure again a little later too —
  // comfortably before the first text rotation at 6.5s. setPair()'s own
  // measurement is the final safety net if timing is ever still off.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => lockTextBlockHeight())
  }
  setTimeout(lockTextBlockHeight, 2000)
})

onUnmounted(() => {
  clearInterval(animationState.rotationInterval)
  clearTimeout(animationState.swapTimeout)
  cancelAnimationFrame(animationState.animationFrame)
  if (animationState.resizeObserver) {
    animationState.resizeObserver.disconnect()
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: #F7F5F0;
  min-height: 100vh;
  width: 100%;
  font-family: var(--font-sans);
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 96px;
  pointer-events: none;
}

.hero-text {
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
}

.hero-text-block {
  display: flow-root;
}

.eyebrow {
  display: block;
  font-size: 11px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #C2A46F;
  font-weight: 500;
  margin-bottom: 26px;
}

.hero-headline {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.15rem, 4.6vw, 3.5rem);
  line-height: 1.16;
  letter-spacing: -0.012em;
  color: #1a1a1a;
  margin: 0 0 20px;
}

.italic-accent {
  font-style: italic;
  color: #A3B18A;
  font-weight: inherit;
}

.hero-subheading {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.8;
  color: #5a5a5a;
  margin: 0 0 128px;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  gap: 22px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  pointer-events: auto;
}

.cta-secondary {
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 400;
  color: #8a877f;
  letter-spacing: 0.02em;
  border-bottom: 1px solid #d0cdc8;
  padding: 0 0 3px;
  cursor: pointer;
  transition: color 200ms ease;
}

.cta-secondary:hover {
  color: #1a1a1a;
}

@media (max-width: 768px) {
  .hero-cta {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
}
</style>

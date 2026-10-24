<template>
  <header ref="headerEl" class="header">
    <div class="nav-container">
      <a href="/" class="logo" @click.prevent="go('home')">
        Dr. Ashish Yadav<span class="logo-dot">.</span>
      </a>

      <!-- Desktop menu -->
      <nav class="nav-desktop" aria-label="Main">
        <template v-for="item in menu" :key="item.label">
          <div
            v-if="item.children"
            class="nav-dropdown"
            @mouseenter="openMenu = item.label"
            @mouseleave="openMenu = null"
          >
            <button
              :class="['nav-link', { active: isActive(item) }]"
              :aria-expanded="openMenu === item.label"
              aria-haspopup="true"
              @click="openMenu = item.label"
            >
              {{ item.label }}
              <span class="chevron" aria-hidden="true"></span>
            </button>
            <transition name="drop">
              <div v-show="openMenu === item.label" class="dropdown-panel">
                <a
                  v-for="child in item.children"
                  :key="child.label"
                  :href="hrefFor(child)"
                  :target="child.url ? '_blank' : null"
                  :rel="child.url ? 'noopener noreferrer' : null"
                  :class="['dropdown-link', { active: route === child.id }]"
                  @click="onLinkClick($event, child)"
                >
                  <span class="dropdown-label">{{ child.label }}</span>
                  <span v-if="child.hint" class="dropdown-hint">{{ child.hint }}</span>
                </a>
              </div>
            </transition>
          </div>
          <a
            v-else
            :href="hrefFor(item)"
            :class="['nav-link', { active: route === item.id }]"
            @click="onLinkClick($event, item)"
          >
            {{ item.label }}
          </a>
        </template>

        <a href="/" class="nav-cta" @click.prevent="go('contact')">Book a consultation</a>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="nav-toggle"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <span :class="['burger', { open: mobileOpen }]" aria-hidden="true"><span></span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="slide">
      <nav v-show="mobileOpen" id="mobile-menu" class="nav-mobile" aria-label="Main">
        <template v-for="item in menu" :key="item.label">
          <div v-if="item.children" class="mobile-group">
            <div class="mobile-group-title">{{ item.label }}</div>
            <a
              v-for="child in item.children"
              :key="child.label"
              :href="hrefFor(child)"
              :target="child.url ? '_blank' : null"
              :rel="child.url ? 'noopener noreferrer' : null"
              :class="['mobile-link', 'mobile-sublink', { active: route === child.id }]"
              @click="onLinkClick($event, child)"
            >
              {{ child.label }}
            </a>
          </div>
          <a
            v-else
            :href="hrefFor(item)"
            :class="['mobile-link', { active: route === item.id }]"
            @click="onLinkClick($event, item)"
          >
            {{ item.label }}
          </a>
        </template>
        <a href="/" class="nav-cta mobile-cta" @click.prevent="go('contact')">Book a consultation</a>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  route: String,
})

const emit = defineEmits(['navigate'])

// Paths must match PATHS in App.vue
const menu = [
  { id: 'adhd', label: 'ADHD Assessment', path: '/adult-adhd-assessment' },
  {
    label: 'Resources',
    children: [
      { id: 'resources', label: 'Free guides & videos', hint: 'Downloadable PDFs, blogs and videos' },
      { label: 'PHQ-9 mood check', hint: 'Opens in a new tab', url: '/phq9.html' },
      { label: 'ASRS ADHD self-check', hint: 'Opens in a new tab', url: '/asrs.html' },
      { label: '2-minute self assessment', hint: 'Opens in a new tab', url: '/assessment.html' },
    ],
  },
  { id: 'fees', label: 'Fees & Booking', path: '/fees' },
  {
    label: 'Location',
    children: [
      { id: 'jaipur', label: 'Psychiatrist in Jaipur', hint: 'All clinics, home visits & online', path: '/psychiatrist-in-jaipur' },
      { id: 'jhotwara', label: 'Jhotwara clinic', hint: 'Shri Ram Hospital, Tara Nagar', path: '/psychiatrist-in-jhotwara' },
      { id: 'vaishali', label: 'Vaishali Nagar clinic', hint: 'Asha Clinic, Sirsi Road', path: '/psychiatrist-in-vaishali-nagar' },
    ],
  },
  { id: 'about', label: 'About', path: '/about' },
]

const openMenu = ref(null)
const mobileOpen = ref(false)
const headerEl = ref(null)

const hrefFor = (item) => item.url || item.path || '/'

const isActive = (item) => item.children?.some((child) => child.id && child.id === props.route)

const go = (id) => {
  openMenu.value = null
  mobileOpen.value = false
  emit('navigate', id)
}

// Internal links navigate in-app; external tool pages open normally in a new tab
const onLinkClick = (event, item) => {
  if (item.url) {
    openMenu.value = null
    mobileOpen.value = false
    return
  }
  event.preventDefault()
  go(item.id)
}

// Stop the page scrolling behind the open mobile menu
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const onKeydown = (event) => {
  if (event.key === 'Escape') {
    openMenu.value = null
    mobileOpen.value = false
  }
}

const onClickOutside = (event) => {
  if (headerEl.value && !headerEl.value.contains(event.target)) {
    openMenu.value = null
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onClickOutside)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(243, 245, 238, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 14px clamp(1.25rem, 5vw, 4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.15rem, 2.2vw, 1.4rem);
  letter-spacing: -0.01em;
  color: var(--text-strong);
  white-space: nowrap;
}

.logo:hover {
  color: var(--text-strong);
}

.logo-dot {
  color: var(--brand);
}

/* ---- Desktop ---- */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  color: var(--text-body);
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft);
}

.nav-link:hover,
.nav-link.active,
.nav-link[aria-expanded='true'] {
  background: var(--sage-100);
  color: var(--sage-700);
}

.chevron {
  width: 7px;
  height: 7px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translateY(-2px) rotate(45deg);
  transition: transform var(--dur-fast) var(--ease-soft);
}

.nav-link[aria-expanded='true'] .chevron {
  transform: translateY(1px) rotate(-135deg);
}

.nav-dropdown {
  position: relative;
}

/* Invisible bridge so the panel doesn't close while moving the mouse down */
.nav-dropdown::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 12px;
}

.dropdown-panel {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 280px;
  padding: 8px;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
}

.dropdown-link {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  transition: background var(--dur-fast) var(--ease-soft);
}

.dropdown-link:hover,
.dropdown-link.active {
  background: var(--sage-50);
}

.dropdown-label {
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--text-strong);
}

.dropdown-hint {
  font-size: var(--fs-xs);
  color: var(--text-muted);
}

.drop-enter-active,
.drop-leave-active {
  transition: opacity var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft);
}

.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translate(-50%, -6px);
}

.nav-cta {
  margin-left: 10px;
  padding: 10px 20px;
  background: var(--brand);
  color: var(--text-on-brand);
  border-radius: var(--radius-pill);
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background var(--dur-fast) var(--ease-soft);
}

.nav-cta:hover {
  background: var(--brand-hover);
  color: var(--text-on-brand);
}

/* ---- Mobile ---- */
.nav-toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.nav-toggle:hover {
  background: var(--sage-100);
}

.burger,
.burger::before,
.burger::after,
.burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-strong);
  border-radius: 2px;
  transition: transform var(--dur-base) var(--ease-soft), opacity var(--dur-fast) var(--ease-soft);
}

.burger {
  position: relative;
  background: transparent;
}

.burger::before,
.burger::after {
  content: '';
  position: absolute;
  left: 0;
}

.burger::before {
  top: -7px;
}

.burger::after {
  top: 7px;
}

.burger.open span {
  opacity: 0;
}

.burger.open::before {
  transform: translateY(7px) rotate(45deg);
}

.burger.open::after {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: calc(100vh - 72px);
  max-height: calc(100dvh - 72px);
  overflow-y: auto;
  padding: 0.5rem clamp(1.25rem, 5vw, 4rem) 1.5rem;
  border-top: 1px solid var(--border);
  background: var(--sage-50);
}

.mobile-link {
  display: block;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-strong);
}

.mobile-link:hover,
.mobile-link.active {
  background: var(--sage-100);
  color: var(--sage-700);
}

.mobile-group {
  margin-top: 0.5rem;
}

.mobile-group-title {
  padding: 8px 14px 4px;
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--text-muted);
}

.mobile-sublink {
  font-weight: 500;
  padding-left: 24px;
}

.mobile-cta {
  margin: 1rem 0 0;
  text-align: center;
  padding: 14px 20px;
  font-size: 1rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 1140px) {
  .nav-desktop {
    display: none;
  }

  .nav-toggle {
    display: inline-flex;
  }
}

@media (min-width: 1141px) {
  .nav-mobile {
    display: none !important;
  }
}
</style>

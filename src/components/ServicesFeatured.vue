<template>
  <div class="services-featured">
    <ServiceFeatureCard v-for="service in services" :key="service.id" :service="service" />
  </div>
</template>

<script setup>
import ServiceFeatureCard from './ServiceFeatureCard.vue'

defineProps({
  services: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/*
  This is the arrangement/orientation for the featured service cards —
  currently a simple vertical stack. Swap this block (e.g. for a
  horizontal scroll-snap swiper, or an overlapping card deck) without
  touching ServiceFeatureCard.vue at all.
*/
.services-featured {
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: clamp(3rem, 6vw, 4rem);
}
</style>

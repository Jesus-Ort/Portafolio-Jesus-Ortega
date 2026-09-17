<template>
  <div
    ref="dividerRef"
    class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-hidden pointer-events-none select-none"
    aria-hidden="true"
  >
    <div
      class="relative flex items-center justify-center transition-all duration-1000 ease-out"
      :class="isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-75'"
    >
      <!-- Subtle Technical Divider Line -->
      <div class="h-px w-full bg-gradient-to-r from-transparent via-slate-200/90 dark:via-slate-800/90 to-transparent" />

      <!-- Center Ambient Technical Marker -->
      <div class="absolute flex items-center justify-center gap-1.5 px-3 bg-[#F8FAFC] dark:bg-[#090D16] transition-colors duration-300">
        <span class="w-1 h-1 rounded-full bg-blue-500/60 dark:bg-blue-400/60" />
        <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
        <span class="w-1 h-1 rounded-full bg-blue-500/60 dark:bg-blue-400/60" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Componente SectionDivider (components/SectionDivider.vue)
 *
 * Separador sutil y técnico entre secciones que se ilumina y expande progresivamente
 * al entrar en el campo de visión del usuario mediante IntersectionObserver.
 */
import { ref } from 'vue';
import { useScrollReveal } from '~/composables/useScrollReveal';

const dividerRef = ref<HTMLElement | null>(null);
const { isVisible } = useScrollReveal(dividerRef, {
  threshold: 0.2,
  rootMargin: '0px 0px -40px 0px',
  once: true,
});
</script>

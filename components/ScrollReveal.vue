<template>
  <component
    :is="as"
    ref="containerRef"
    :class="[
      'scroll-reveal-container',
      `reveal-direction-${direction}`,
      isVisible ? 'reveal-active' : 'reveal-hidden',
      customClass
    ]"
    :style="customStyles"
  >
    <slot :is-visible="isVisible" />
  </component>
</template>

<script setup lang="ts">
/**
 * Componente ScrollReveal (components/ScrollReveal.vue)
 *
 * Envoltorio reactivo que activa transiciones visuales mediante IntersectionObserver
 * a medida que el usuario se desplaza por las distintas secciones del portfolio.
 *
 * Props:
 * - as: Elemento HTML a renderizar (div, section, article, etc.)
 * - direction: Dirección del movimiento ('up', 'down', 'left', 'right', 'fade', 'zoom')
 * - delay: Retardo en milisegundos antes de activar la animación
 * - duration: Duración total de la transición en milisegundos
 * - distance: Distancia de desplazamiento inicial (ej. '24px', '32px')
 * - threshold: Porcentaje visible necesario para activar la animación (0 a 1)
 * - rootMargin: Margen de activación respecto a la ventana del navegador
 * - once: Si la animación solo debe ejecutarse una vez al entrar
 */
import { ref, computed, type CSSProperties } from 'vue';
import { useScrollReveal } from '~/composables/useScrollReveal';

const props = withDefaults(
  defineProps<{
    as?: string;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
    delay?: number;
    duration?: number;
    distance?: string;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    customClass?: string;
  }>(),
  {
    as: 'div',
    direction: 'up',
    delay: 0,
    duration: 650,
    distance: '28px',
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    once: true,
    customClass: '',
  }
);

const containerRef = ref<HTMLElement | null>(null);

const { isVisible } = useScrollReveal(containerRef, {
  threshold: props.threshold,
  rootMargin: props.rootMargin,
  once: props.once,
  delay: props.delay,
});

const customStyles = computed<CSSProperties>(() => ({
  '--reveal-duration': `${props.duration}ms`,
  '--reveal-distance': props.distance,
}));
</script>

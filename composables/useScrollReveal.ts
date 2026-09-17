/**
 * Composable de Animación por Desplazamiento basado en IntersectionObserver
 *
 * Proporciona detección reactiva y de alto rendimiento cuando un elemento
 * entra en el viewport del navegador, permitiendo transiciones fluidas
 * entre secciones con soporte para reducción de movimiento y SSR.
 */
import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export interface ScrollRevealOptions {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  distance?: string;
  duration?: number;
}

export function useScrollReveal(
  targetRef: Ref<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const isVisible = ref(false);
  const hasAnimated = ref(false);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    delay = 0,
  } = options;

  let observer: IntersectionObserver | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  onMounted(() => {
    // Si el usuario prefiere movimiento reducido, mostrar inmediatamente
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isVisible.value = true;
      hasAnimated.value = true;
      return;
    }

    // Fallback defensivo si IntersectionObserver no está disponible
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      isVisible.value = true;
      hasAnimated.value = true;
      return;
    }

    if (!targetRef.value) return;

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          if (delay > 0) {
            timeoutId = setTimeout(() => {
              isVisible.value = true;
              hasAnimated.value = true;
            }, delay);
          } else {
            isVisible.value = true;
            hasAnimated.value = true;
          }

          if (once && observer && targetRef.value) {
            observer.unobserve(targetRef.value);
            observer.disconnect();
          }
        } else if (!once) {
          if (timeoutId) clearTimeout(timeoutId);
          isVisible.value = false;
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(targetRef.value);
  });

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId);
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });

  return {
    isVisible,
    hasAnimated,
  };
}

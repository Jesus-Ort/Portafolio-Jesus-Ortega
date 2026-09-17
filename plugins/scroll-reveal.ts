/**
 * Directiva Global de Nuxt para Animaciones al Hacer Scroll (v-reveal)
 *
 * Permite anotar cualquier elemento directamente con v-reveal o con opciones:
 * v-reveal="{ delay: 150, direction: 'up', distance: '24px', duration: 700 }"
 *
 * Basado en IntersectionObserver nativo para máximo rendimiento a 60fps+ sin coste de CPU.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (typeof window === 'undefined') return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('reveal-active');
        return;
      }

      const options = binding.value || {};
      const direction = options.direction || 'up';
      const delay = Number(options.delay) || 0;
      const duration = Number(options.duration) || 650;
      const distance = options.distance || '28px';
      const once = options.once !== false;

      el.classList.add('scroll-reveal-container', `reveal-direction-${direction}`, 'reveal-hidden');
      el.style.setProperty('--reveal-duration', `${duration}ms`);
      el.style.setProperty('--reveal-distance', distance);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (delay > 0) {
                setTimeout(() => {
                  el.classList.remove('reveal-hidden');
                  el.classList.add('reveal-active');
                }, delay);
              } else {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-active');
              }

              if (once) {
                observer.unobserve(el);
              }
            } else if (!once) {
              el.classList.remove('reveal-active');
              el.classList.add('reveal-hidden');
            }
          });
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px 0px -50px 0px',
        }
      );

      observer.observe(el);
      (el as any)._revealObserver = observer;
    },
    unmounted(el: HTMLElement) {
      if ((el as any)._revealObserver) {
        (el as any)._revealObserver.disconnect();
      }
    },
    getSSRProps() {
      // Directiva pasante en SSR para evitar errores de hidratación y renderizado estático
      return {};
    },
  });
});

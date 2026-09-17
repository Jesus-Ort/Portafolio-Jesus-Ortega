/**
 * Composable de Gestión de Tema Visual (useTheme)
 *
 * Administra el modo visual (Oscuro / Claro) de forma persistente y reactiva:
 * - Compatible con SSR gracias a useState de Nuxt
 * - Sincroniza la clase CSS `.dark` en el elemento raíz `<html>`
 * - Integra soporte nativo con Nuxt UI (`useColorMode`)
 * - Respeta las preferencias del sistema operativo (`prefers-color-scheme`)
 * - Persiste la elección del usuario en `localStorage`
 */
import { ref, onMounted } from 'vue';

export const useTheme = () => {
  // SSR-safe shared state, defaults to dark mode
  const isDark = useState<boolean>('portfolio_is_dark', () => true);

  const applyTheme = (dark: boolean) => {
    isDark.value = dark;
    if (import.meta.client) {
      const root = document.documentElement;
      if (dark) {
        root.classList.add('dark');
        root.classList.remove('light');
        localStorage.setItem('jo_theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        localStorage.setItem('jo_theme', 'light');
      }

      try {
        const colorMode = useColorMode();
        colorMode.preference = dark ? 'dark' : 'light';
      } catch {
        // colorMode not yet initialized
      }
    }
  };

  const toggleTheme = () => {
    applyTheme(!isDark.value);
  };

  const initTheme = () => {
    if (import.meta.client) {
      try {
        const saved = localStorage.getItem('jo_theme');
        if (saved === 'dark') {
          applyTheme(true);
        } else if (saved === 'light') {
          applyTheme(false);
        } else {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          applyTheme(prefersDark);
        }
      } catch {
        applyTheme(true);
      }
    }
  };

  return {
    isDark,
    toggleTheme,
    applyTheme,
    initTheme,
  };
};

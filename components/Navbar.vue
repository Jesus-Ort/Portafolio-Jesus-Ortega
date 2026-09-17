<template>
  <header
    class="sticky top-0 z-50 w-full transition-all duration-500 ease-in-out border-b"
    :class="[
      isScrolled || mobileMenuOpen
        ? 'bg-white/90 dark:bg-[#090D16]/90 backdrop-blur-md border-slate-200/80 dark:border-white/10 shadow-md shadow-slate-900/5 dark:shadow-black/40'
        : 'bg-transparent backdrop-blur-none border-transparent shadow-none'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="flex items-center justify-between transition-all duration-500 ease-in-out"
        :class="[isScrolled ? 'h-16 sm:h-18' : 'h-18 sm:h-22']"
      >
        <!-- Brand Logo with Console Emblem -->
        <a 
          href="#hero" 
          @click="scrollToSection('#hero', $event)"
          class="flex items-center gap-3 group cursor-pointer transform transition-transform duration-200 hover:scale-105 active:scale-95" 
          aria-label="Jesús Ortega - Portfolio"
        >
          <div class="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 dark:bg-slate-900 border border-slate-700/60 dark:border-blue-500/30 shadow-sm shadow-blue-900/10 group-hover:border-blue-500 group-hover:shadow-md group-hover:shadow-blue-500/20 group-hover:scale-105 transition-all duration-200 shrink-0 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-transparent pointer-events-none" />
            <svg class="w-4.5 h-4.5 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 6 13 12 6 18" />
              <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
              {{ personalInfo.name }}
            </span>
            <span class="text-[10px] tracking-widest text-blue-600 dark:text-blue-400 font-semibold uppercase mt-0.5">
              {{ t.nav.role }}
            </span>
          </div>
        </a>

        <!-- Desktop Navigation (>= 1024px) -->
        <nav class="hidden lg:flex items-center gap-6 text-sm font-medium" aria-label="Main Navigation">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="scrollToSection(link.href, $event)"
            class="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all duration-200 py-1 hover:border-b-2 hover:border-[#4169E1] transform hover:scale-110 active:scale-95 cursor-pointer inline-block"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Right Action Controls (Desktop >= 1024px) -->
        <div class="hidden lg:flex items-center gap-2.5">
          <!-- Language Switcher Pill -->
          <div 
            class="flex items-center p-0.5 rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-xs font-semibold"
            role="group"
            aria-label="Language selector"
          >
            <button
              type="button"
              @click="setLanguage('en')"
              class="px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer transform hover:scale-110 active:scale-95"
              :class="[
                language === 'en'
                  ? 'bg-[#4169E1] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              ]"
              title="English version"
              :aria-pressed="language === 'en'"
            >
              EN
            </button>
            <button
              type="button"
              @click="setLanguage('es')"
              class="px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer transform hover:scale-110 active:scale-95"
              :class="[
                language === 'es'
                  ? 'bg-[#4169E1] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              ]"
              title="Versión en Español"
              :aria-pressed="language === 'es'"
            >
              ES
            </button>
          </div>

          <!-- Social Profiles -->
          <a
            :href="personalInfo.github"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            class="p-2.5 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-200 transition-all duration-200 transform hover:scale-115 active:scale-95 hover:text-[#4169E1]"
          >
            <Github class="w-4 h-4" />
          </a>
          <a
            :href="personalInfo.linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            class="p-2.5 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-200 transition-all duration-200 transform hover:scale-115 active:scale-95 hover:text-[#4169E1]"
          >
            <Linkedin class="w-4 h-4" />
          </a>

          <!-- Dark Mode Toggle -->
          <button
            type="button"
            @click="toggleTheme"
            :title="isDark ? (language === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (language === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')"
            :aria-label="isDark ? (language === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (language === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')"
            class="p-2.5 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-full border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-200 transition-all duration-200 transform hover:scale-115 active:scale-95 cursor-pointer"
          >
            <Sun v-if="isDark" class="w-4 h-4 text-amber-300 transition-transform hover:rotate-45 duration-200" />
            <Moon v-else class="w-4 h-4 text-[#4169E1] transition-transform hover:-rotate-12 duration-200" />
          </button>

          <!-- Resume CTA using NuxtUI UButton styling -->
          <UButton
            color="primary"
            class="rounded-xl font-semibold px-4 py-2 text-xs sm:text-sm bg-[#4169E1] hover:bg-blue-600 text-white shadow-lg shadow-blue-900/40 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2 hover:shadow-blue-500/30"
            @click="$emit('open-resume')"
          >
            <FileText class="w-4 h-4" />
            <span>{{ t.nav.resumeBtn }}</span>
          </UButton>
        </div>

        <!-- Mobile & Tablet Header Controls (< 1024px) -->
        <div class="flex lg:hidden items-center gap-2">
          <!-- Tablet & Mobile Language Switcher -->
          <button
            type="button"
            @click="toggleLanguage"
            :aria-label="language === 'en' ? 'Cambiar a Español' : 'Switch to English'"
            class="px-2.5 py-2 min-h-[40px] bg-black/5 dark:bg-white/5 rounded-xl border border-slate-200/60 dark:border-white/10 text-xs font-bold text-[#4169E1] dark:text-blue-300 flex items-center justify-center cursor-pointer transition-all duration-200 transform hover:scale-110 active:scale-95"
          >
            {{ language === 'en' ? 'ES' : 'EN' }}
          </button>

          <button
            type="button"
            @click="toggleTheme"
            :title="isDark ? (language === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (language === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')"
            :aria-label="isDark ? (language === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (language === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')"
            class="p-2.5 min-h-[40px] min-w-[40px] bg-black/5 dark:bg-white/5 rounded-xl border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-200 flex items-center justify-center cursor-pointer transition-all duration-200 transform hover:scale-110 active:scale-95"
          >
            <Sun v-if="isDark" class="w-4 h-4 text-amber-300 transition-transform hover:rotate-45 duration-200" />
            <Moon v-else class="w-4 h-4 text-[#4169E1] transition-transform hover:-rotate-12 duration-200" />
          </button>

          <!-- Tablet direct Resume Button -->
          <button
            type="button"
            @click="$emit('open-resume')"
            class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-semibold bg-[#4169E1] hover:bg-blue-600 text-white shadow-md cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            <FileText class="w-3.5 h-3.5" />
            <span>{{ t.nav.resumeBtn }}</span>
          </button>

          <button
            type="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
            :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
            class="p-2.5 min-h-[40px] min-w-[40px] bg-black/5 dark:bg-white/5 rounded-xl border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-200 flex items-center justify-center cursor-pointer transition-all duration-200 transform hover:scale-110 active:scale-95"
          >
            <X v-if="mobileMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Drawer Menu (Tablets in portrait & Mobile phones) -->
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden mt-2 bg-white/95 dark:bg-[#020c1b]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
      >
        <div class="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
          <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {{ language === 'es' ? 'Idioma / Language' : 'Language / Idioma' }}
          </span>
          <div class="flex items-center gap-1.5">
            <button
              type="button"
              @click="setLanguage('en')"
              class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              :class="[
                language === 'en'
                  ? 'bg-[#4169E1] text-white'
                  : 'bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300'
              ]"
            >
              English
            </button>
            <button
              type="button"
              @click="setLanguage('es')"
              class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              :class="[
                language === 'es'
                  ? 'bg-[#4169E1] text-white'
                  : 'bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300'
              ]"
            >
              Español
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="mobileMenuOpen = false; scrollToSection(link.href, $event)"
            class="flex items-center justify-center sm:justify-start px-3.5 py-2.5 min-h-[44px] text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-[#4169E1]/15 rounded-xl hover:text-[#4169E1] transition-all duration-200 transform hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            {{ link.name }}
          </a>
        </div>

        <div class="pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <a
              :href="personalInfo.github"
              target="_blank"
              rel="noreferrer"
              class="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#4169E1] transition-all duration-200 transform hover:scale-115 active:scale-95"
              aria-label="GitHub"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noreferrer"
              class="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#4169E1] transition-all duration-200 transform hover:scale-115 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a
              :href="`mailto:${personalInfo.email}`"
              class="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#4169E1] transition-all duration-200 transform hover:scale-115 active:scale-95"
              aria-label="Email"
            >
              <Mail class="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            @click="mobileMenuOpen = false; $emit('open-resume')"
            class="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold bg-[#4169E1] hover:bg-blue-600 text-white shadow-md cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            <FileText class="w-4 h-4" />
            <span>{{ t.nav.resumeBtn }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
/**
 * Componente Navbar (components/Navbar.vue)
 *
 * Barra de navegación superior fija con soporte responsivo:
 * - Detección de scroll para aplicar elevación y desenfoque (backdrop-blur)
 * - Conmutador interactivo de idioma (ES / EN) sincronizado globalmente
 * - Conmutador de tema visual (Modo Oscuro / Modo Claro)
 * - Enlaces de anclaje a las secciones principales (#about, #projects, #skills, #contact)
 * - Menú desplegable optimizado para dispositivos móviles y tablets
 */
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Moon, Sun, Menu, X, FileText, Mail } from '@lucide/vue';
import { Github, Linkedin } from '~/utils/brand-icons';
import { useLanguage } from '~/composables/useLanguage';
import { useTheme } from '~/composables/useTheme';

defineEmits<{
  (e: 'open-resume'): void;
}>();

const { language, setLanguage, toggleLanguage, t, personalInfo } = useLanguage();
const { isDark, toggleTheme } = useTheme();

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const navLinks = computed(() => [
  { name: t.value.nav.about, href: '#about' },
  { name: t.value.nav.projects, href: '#projects' },
  { name: t.value.nav.skills, href: '#skills' },
  { name: t.value.nav.contact, href: '#contact' },
]);

const scrollToSection = (href: string, e?: Event) => {
  if (href.startsWith('#')) {
    e?.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      history.pushState(null, '', href);
    }
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

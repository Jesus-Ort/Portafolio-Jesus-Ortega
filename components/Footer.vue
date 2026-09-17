<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
        <!-- Brand Info -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <div class="flex items-center gap-2.5 mb-2">
            <div class="relative flex items-center justify-center w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-900 border border-slate-700/60 dark:border-blue-500/30 shadow-xs shrink-0 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-transparent pointer-events-none" />
              <svg class="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 6 13 12 6 18" />
                <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <span class="font-display font-bold text-slate-900 dark:text-white text-base tracking-tight">
              {{ personalInfo.name }}
            </span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              {{ language === 'es' ? 'EN LÍNEA // ACTIVO' : 'SYS.LIVE' }}
            </span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
            {{ personalInfo.title }} • {{ language === 'es' ? 'Disponible para nuevos proyectos y oportunidades de ingeniería.' : 'Open to new projects and engineering opportunities.' }}
          </p>
        </div>

        <!-- Social Profiles & Quick Resume -->
        <div class="flex flex-wrap items-center justify-center gap-2.5">
          <a
            :href="personalInfo.github"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
          >
            <Github class="w-4 h-4" />
          </a>

          <a
            :href="personalInfo.linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
          >
            <Linkedin class="w-4 h-4" />
          </a>

          <a
            :href="`mailto:${personalInfo.email}`"
            :aria-label="`Email ${personalInfo.name}`"
            class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
          >
            <Mail class="w-4 h-4" />
          </a>

          <button
            type="button"
            @click="$emit('download-resume')"
            class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer shadow-sm"
          >
            <FileText class="w-3.5 h-3.5" />
            <span>{{ t.hero.downloadResume }}</span>
          </button>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
        <div class="text-center sm:text-left">
          © {{ currentYear }} {{ personalInfo.name }}. {{ t.footer.rights }}
        </div>

        <div class="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2.5">
          <button
            type="button"
            @click="$emit('open-resume')"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            {{ t.hero.previewCV }}
          </button>
          <a
            href="#about"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {{ t.nav.about }}
          </a>
          <a
            href="#projects"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {{ t.nav.projects }}
          </a>
          <a
            href="#contact"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {{ t.nav.contact }}
          </a>

          <button
            type="button"
            @click="scrollToTop"
            :aria-label="t.footer.backToTop"
            class="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer ml-1"
          >
            <ArrowUp class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/**
 * Componente Footer (components/Footer.vue)
 *
 * Pie de página institucional y técnico:
 * - Enlaces rápidos a perfiles profesionales (GitHub, LinkedIn, Email)
 * - Botón de regreso al inicio suave (scrollToTop)
 * - Año dinámico de copyright y créditos técnicos
 */
import { computed } from 'vue';
import { ArrowUp, Mail, FileText } from '@lucide/vue';
import { Github, Linkedin } from '~/utils/brand-icons';
import { useLanguage } from '~/composables/useLanguage';

defineEmits<{
  (e: 'download-resume'): void;
  (e: 'open-resume'): void;
}>();

const { t, personalInfo, language } = useLanguage();
const currentYear = computed(() => new Date().getFullYear());

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>

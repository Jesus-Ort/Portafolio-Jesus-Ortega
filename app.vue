<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 dark:bg-[#090D16] dark:text-slate-200 flex flex-col font-sans transition-colors duration-300 relative overflow-x-clip selection:bg-[#2563EB] selection:text-white">
    <!-- Technical Blueprint Canvas Background -->
    <div class="fixed inset-0 z-0 pointer-events-none bg-grid-technical opacity-70 dark:opacity-40" />

    <!-- Ambient Subtle Top Highlight -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/10 dark:from-blue-600/15 to-transparent blur-3xl" />
    </div>

    <!-- Toast Notification Alert with Clean Technical Panel -->
    <aside
      v-if="toastMessage"
      aria-live="polite"
      aria-label="Notification Alert"
      class="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-black/40 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
      <span>{{ toastMessage }}</span>
      <button
        type="button"
        @click="toastMessage = null"
        aria-label="Dismiss notification"
        class="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 ml-1 text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white cursor-pointer transition-colors"
      >
        <X class="w-3.5 h-3.5" />
      </button>
    </aside>

    <!-- Top Sticky Navigation -->
    <Navbar
      @open-resume="isResumeModalOpen = true"
      @download-resume="handleDownloadResume"
    />

    <!-- Main Content Sections -->
    <main class="flex-1 relative z-10">
      <Hero
        @download-resume="handleDownloadResume"
        @open-resume="isResumeModalOpen = true"
      />

      <!-- Transition to About Section -->
      <SectionDivider />

      <AboutBio
        @download-resume="handleDownloadResume"
        @open-resume="isResumeModalOpen = true"
      />

      <!-- Transition to Projects Section -->
      <SectionDivider />

      <ProjectsShowcase />

      <!-- Transition to Skills Section -->
      <SectionDivider />

      <SkillsSection @download-resume="handleDownloadResume" />

      <!-- Transition to Contact Section -->
      <SectionDivider />

      <ContactLeadForm />
    </main>

    <!-- Footer -->
    <Footer
      @download-resume="handleDownloadResume"
      @open-resume="isResumeModalOpen = true"
    />

    <!-- Interactive In-App Resume Modal -->
    <ResumeModal
      :is-open="isResumeModalOpen"
      @close="isResumeModalOpen = false"
      @download-pdf="handleDownloadResume"
    />
  </div>
</template>

<script setup lang="ts">
/**
 * Componente Raíz de la Aplicación Nuxt 4 (app.vue)
 *
 * Estructura la aplicación en capas:
 * - Lienzo con rejilla técnica de fondo y gradiente ambiental
 * - Barra de navegación fija (Navbar) con selector de idioma y tema oscuro/claro
 * - Secciones principales: Hero, AboutBio, ProjectsShowcase, SkillsSection, ContactLeadForm
 * - Modales interactivos: ResumeModal (con generador de PDF) y ProjectModal
 * - Metaetiquetas SEO dinámicas (Open Graph, Twitter Cards, Schema.org JSON-LD, Canónicas, Hreflang)
 */
import { ref, computed, onMounted } from 'vue';
import { CheckCircle2, X } from '@lucide/vue';
import { useLanguage } from '~/composables/useLanguage';
import { useTheme } from '~/composables/useTheme';
import { generateResumePDF } from '~/utils/resumeGenerator';

const { language } = useLanguage();
const { isDark, initTheme } = useTheme();

const isResumeModalOpen = ref(false);
const toastMessage = ref<string | null>(null);

// Dynamic SEO & Meta descriptions based on current locale
const pageTitle = computed(() =>
  language.value === 'es'
    ? 'Jesús Ortega — Desarrollador Web Full-Stack e Ingeniero en Informática'
    : 'Jesús Ortega — Junior Full-Stack Web Developer & Computer Engineer'
);

const pageDescription = computed(() =>
  language.value === 'es'
    ? 'Portfolio profesional de Jesús Ortega, Ingeniero en Informática y Desarrollador Web Full-Stack (Junior) especializado en Vue.js, Nuxt 4, Node.js, Express y Supabase. Proyectos en producción, APIs REST y código limpio.'
    : 'Professional software engineering portfolio of Jesús Ortega, Junior Full-Stack Developer and Computer Engineer specializing in Vue.js, Nuxt 4, Node.js, Express, and Supabase. Production projects and clean code.'
);

useHead(() => ({
  htmlAttrs: {
    lang: language.value,
    dir: 'ltr'
  },
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDescription.value },
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: pageDescription.value },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: 'https://jesusortega.xyz/' },
    { property: 'og:site_name', content: 'Jesús Ortega — Portfolio Profesional' },
    { property: 'og:image', content: 'https://jesusortega.xyz/og-image.png' },
    { property: 'og:image:secure_url', content: 'https://jesusortega.xyz/og-image.png' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Jesús Ortega — Full-Stack Developer & Software Engineer' },
    { property: 'og:locale', content: language.value === 'es' ? 'es_ES' : 'en_US' },
    { name: 'twitter:title', content: pageTitle.value },
    { name: 'twitter:description', content: pageDescription.value },
    { name: 'twitter:image', content: 'https://jesusortega.xyz/og-image.png' },
    { name: 'twitter:image:alt', content: 'Jesús Ortega — Full-Stack Developer & Software Engineer' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://jesusortega.xyz/' },
    { rel: 'alternate', hreflang: 'es', href: 'https://jesusortega.xyz/?lang=es' },
    { rel: 'alternate', hreflang: 'en', href: 'https://jesusortega.xyz/?lang=en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://jesusortega.xyz/' },
    { rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' },
    { rel: 'llms.txt' as any, href: '/llms.txt' }
  ]
}));

onMounted(() => {
  initTheme();
});

const handleDownloadResume = () => {
  try {
    generateResumePDF(language.value);
    toastMessage.value =
      language.value === 'es'
        ? '¡Currículum PDF en español generado y descargado con éxito!'
        : 'Resume PDF generated & downloaded successfully!';
    setTimeout(() => {
      toastMessage.value = null;
    }, 4000);
  } catch (err) {
    console.error('Failed to generate PDF resume', err);
    toastMessage.value =
      language.value === 'es'
        ? 'Generando currículum... por favor espera.'
        : 'Generating resume... please wait.';
    setTimeout(() => {
      toastMessage.value = null;
    }, 3000);
  }
};
</script>

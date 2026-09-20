<template>
  <section id="hero" class="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Technical Dossier Metadata Bar -->
      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-8 pb-3 border-b border-slate-200/80 dark:border-white/10">
        <div class="flex items-center gap-2.5">
          <span class="tracking-wider uppercase font-semibold text-slate-800 dark:text-slate-200">
            {{ language === 'es' ? 'ING. INFORMÁTICA' : 'COM. ENG' }}
          </span>
          <span class="text-slate-300 dark:text-slate-700 select-none">|</span>
          <span class="text-slate-600 dark:text-slate-400">
            {{ language === 'es' ? 'LATAM [UTC-4] • DISPONIBLE REMOTO / HÍBRIDO' : 'LATAM [UTC-4] • REMOTE / HYBRID READY' }}
          </span>
        </div>
        <div class="hidden sm:flex items-center gap-3">
          <span class="text-emerald-600 dark:text-emerald-400 font-medium">
            {{ language === 'es' ? 'RESPUESTA: < 24H' : 'SLA: < 24H RESPONSE' }}
          </span>
        </div>
      </div>

      <!-- Main Hero Grid: Left Narrative + Right Interactive Terminal -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <!-- Left Column: Typographic Presentation & Direct Actions -->
        <div v-reveal="{ direction: 'up', delay: 0 }" class="lg:col-span-7">
          <!-- Headline with Distinctive Editorial Display Typography -->
          <h1 class="font-display text-3.5xl sm:text-5xl md:text-5.5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6">
            {{ t.hero.headlinePrefix }}<span class="text-blue-600 dark:text-blue-400 underline decoration-blue-500/30 underline-offset-4">{{ t.hero.headlineHighlight }}</span>{{ t.hero.headlineSuffix }}
          </h1>

          <!-- Subtitle / Positioning -->
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {{ t.hero.bioTextPrefix }}
            <strong class="font-bold text-slate-900 dark:text-white">{{ personalInfo.name }}</strong>{{ t.hero.bioTextSuffix }}
          </p>

          <!-- Primary Action CTAs -->
          <div class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-8">
            <a
              href="#projects"
              class="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all hover:translate-y-[-1px] text-center"
            >
              {{ t.hero.exploreProjects }}
            </a>

            <!-- Download ATS Resume Button -->
            <button
              id="hero-download-cv-btn"
              type="button"
              @click="$emit('download-resume')"
              class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold leading-none bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/15 text-white border border-slate-700/50 dark:border-white/10 transition-all cursor-pointer group text-center"
            >
              <span class="inline-flex items-center justify-center shrink-0 w-4 h-4">
                <Download class="w-4 h-4 text-blue-400 group-hover:translate-y-[1px] transition-transform" />
              </span>
              <span class="inline-flex items-center leading-none">{{ t.hero.downloadCV || (language === 'es' ? 'Descargar CV' : 'Download CV') }}</span>
            </button>

            <button
              id="hero-preview-cv-btn"
              type="button"
              @click="$emit('open-resume')"
              class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold leading-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500/50 transition-colors cursor-pointer group"
            >
              <span class="inline-flex items-center justify-center shrink-0 w-4 h-4">
                <Eye class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </span>
              <span class="inline-flex items-center leading-none">{{ t.hero.previewCV }}</span>
            </button>

            <a
              href="#contact"
              class="inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors text-center"
            >
              {{ t.hero.hireMe }}
            </a>
          </div>

          <!-- Quick Interactive Contacts Line with One-Click Copy -->
          <div class="flex flex-wrap items-center gap-3 sm:gap-4 pt-5 border-t border-slate-200/80 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400">
            <!-- Copy Email Button -->
            <button
              type="button"
              @click="copyEmail"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
              :title="copied ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? 'Clic para copiar correo' : 'Click to copy email')"
            >
              <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-500" />
              <Copy v-else class="w-3.5 h-3.5 text-blue-500" />
              <span class="font-mono text-[11px]">{{ personalInfo.email }}</span>
              <span v-if="copied" class="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold ml-1">
                {{ language === 'es' ? '✓ ¡Copiado!' : '✓ Copied!' }}
              </span>
            </button>

            <a
              :href="personalInfo.github"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono"
            >
              <Github class="w-3.5 h-3.5" />
              <span>Jesus-Ort</span>
              <ExternalLink class="w-2.5 h-2.5 opacity-60" />
            </a>

            <span class="text-slate-300 dark:text-slate-700">•</span>

            <a
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono"
            >
              <Linkedin class="w-3.5 h-3.5" />
              <span>in/jesusortegasq</span>
              <ExternalLink class="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Developer Console / Engineering Radar -->
        <div v-reveal="{ direction: 'up', delay: 140 }" class="lg:col-span-5 w-full">
          <div class="rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-2xl shadow-blue-950/20 overflow-hidden font-mono text-xs">
            <!-- Terminal Header -->
            <div class="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span class="text-[11px] text-slate-400 ml-2">ortega@system:~$</span>
              </div>
              <span class="text-[10px] text-slate-500">v4.2-eng</span>
            </div>

            <!-- Interactive Command Tabs -->
            <div class="flex items-center gap-1 p-2 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto">
              <button
                v-for="tab in terminalTabs"
                :key="tab.id"
                type="button"
                @click="activeTerminalTab = tab.id"
                class="px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer whitespace-nowrap"
                :class="[
                  activeTerminalTab === tab.id
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                ]"
              >
                {{ tab.command }}
              </button>
            </div>

            <!-- Active Command Output Viewport -->
            <div class="p-4 sm:p-5 min-h-[220px] max-h-[300px] overflow-y-auto leading-relaxed space-y-3">
              <!-- Tab 1: Architecture Spec -->
              <div v-if="activeTerminalTab === 'stack'" class="space-y-2.5 animate-in fade-in duration-200">
                <div class="text-slate-400">
                  {{ language === 'es' ? '// Stack Principal de Producción' : '// Primary Production Stack' }}
                </div>
                <div class="grid grid-cols-1 gap-2 text-[11px]">
                  <div class="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                    <span class="text-blue-400">client_tier:</span>
                    <span class="text-slate-300">Vue 3, Nuxt 4, Nuxt UI, Tailwind CSS, Pinia</span>
                  </div>
                  <div class="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                    <span class="text-emerald-400">server_tier:</span>
                    <span class="text-slate-300">Node.js, Express.js, REST APIs</span>
                  </div>
                  <div class="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                    <span class="text-amber-400">persistence:</span>
                    <span class="text-slate-300">Supabase, PostgreSQL, LocalStorage</span>
                  </div>
                  <div class="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                    <span class="text-purple-400">automation:</span>
                    <span class="text-slate-300">Python 3.13, Pillow (PIL), GitHub Actions</span>
                  </div>
                </div>
              </div>

              <!-- Tab 2: System Credentials -->
              <div v-else-if="activeTerminalTab === 'credentials'" class="space-y-2 text-[11px] animate-in fade-in duration-200">
                <div class="text-slate-400">
                  {{ language === 'es' ? '// Título Universitario y Credenciales' : '// Academic & Engineering Credentials' }}
                </div>
                <div class="text-emerald-400 font-semibold">
                  ● {{ language === 'es' ? 'Ingeniero en Informática (Titulado)' : 'Computer Engineer (Graduated)' }}
                </div>
                <p class="text-slate-300 text-[11px] leading-relaxed">
                  {{ language === 'es'
                    ? 'Sólida formación en ingeniería de software, diseño de bases de datos relacionales, estructuras de datos, algoritmos y ciclo de vida de desarrollo de software.'
                    : 'Solid foundation in software engineering, relational database design, data structures, discrete algorithms, and enterprise software lifecycle.' }}
                </p>
                <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span>{{ language === 'es' ? 'Especialización: Sistemas Web y Automatización' : 'Specialization: Web Systems & Automation' }}</span>
                  <span class="text-blue-400">{{ language === 'es' ? 'Título IUTEPI' : 'IUTEPI Degree' }}</span>
                </div>
              </div>

              <!-- Tab 3: Highlights & Real Deployments -->
              <div v-else-if="activeTerminalTab === 'deployments'" class="space-y-2 text-[11px] animate-in fade-in duration-200">
                <div class="text-slate-400">
                  {{ language === 'es' ? '// Soluciones Reales en Producción' : '// Verified Real-World Solutions' }}
                </div>
                <div class="space-y-1.5">
                  <div class="flex items-baseline justify-between p-1.5 rounded hover:bg-slate-900 transition-colors">
                    <span class="text-blue-300 font-medium">RandomCards</span>
                    <span class="text-[10px] text-emerald-400">{{ language === 'es' ? 'Motor Python 3.13 + Bot para X' : 'Python 3.13 + X Bot' }}</span>
                  </div>
                  <div class="flex items-baseline justify-between p-1.5 rounded hover:bg-slate-900 transition-colors">
                    <span class="text-blue-300 font-medium">Fluxora</span>
                    <span class="text-[10px] text-purple-400">Nuxt 4 + Supabase</span>
                  </div>
                  <div class="flex items-baseline justify-between p-1.5 rounded hover:bg-slate-900 transition-colors">
                    <span class="text-blue-300 font-medium">Academia Expresarte</span>
                    <span class="text-[10px] text-sky-400">{{ language === 'es' ? 'Portal Web Educativo (Nuxt 4)' : 'Educational Portal (Nuxt 4)' }}</span>
                  </div>
                  <div class="flex items-baseline justify-between p-1.5 rounded hover:bg-slate-900 transition-colors">
                    <span class="text-blue-300 font-medium">Fondo de Ayuda Mutua</span>
                    <span class="text-[10px] text-amber-400">{{ language === 'es' ? 'Sistema para Rodanol S.A.' : 'Rodanol S.A. System' }}</span>
                  </div>
                </div>
              </div>

              <!-- Tab 4: Direct Ping -->
              <div v-else class="space-y-2 text-[11px] animate-in fade-in duration-200">
                <div class="text-slate-400">
                  {{ language === 'es' ? '// Contacto y Disponibilidad Inmediata' : '// Dispatch Instant Inquiry' }}
                </div>
                <div class="p-2 rounded bg-slate-900 border border-slate-800 space-y-1">
                  <div><span class="text-blue-400">{{ language === 'es' ? 'correo:' : 'recipient:' }}</span> jesusortech@gmail.com</div>
                  <div><span class="text-emerald-400">{{ language === 'es' ? 'zona_horaria:' : 'timezone:' }}</span> UTC-4 (Caracas / Remoto)</div>
                  <div><span class="text-purple-400">{{ language === 'es' ? 'estado:' : 'status:' }}</span> {{ language === 'es' ? 'Disponible para roles Web Junior / Full-Stack' : 'Available for Junior Web / Full-Stack Roles' }}</div>
                </div>
                <div class="pt-2">
                  <a
                    href="#contact"
                    class="inline-block w-full text-center py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
                  >
                    {{ language === 'es' ? 'Abrir Formulario de Contacto &rarr;' : 'Open Lead Dispatch Form &rarr;' }}
                  </a>
                </div>
              </div>
            </div>

            <!-- Terminal Footer Status Bar -->
            <div class="px-4 py-2 bg-slate-900/90 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
              <span>{{ language === 'es' ? 'estado: LISTO // 0 ERRORES' : 'status: READY // 0 ERRORS' }}</span>
              <span class="text-emerald-400 font-medium">{{ language === 'es' ? '100% RESPONSIVO' : '100% RESPONSIVE' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Architectural Track Record Metrics with Precision Numbering -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-slate-200/80 dark:border-white/10">
        <div
          v-for="(stat, idx) in personalInfo.stats"
          :key="stat.label"
          class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-500/40 transition-all group"
        >
          <div class="text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-1">
            0{{ idx + 1 }} // {{ language === 'es' ? 'MÉTRICA' : 'METRIC' }}
          </div>
          <div
            class="font-display font-extrabold text-blue-600 dark:text-blue-400 tracking-tight group-hover:scale-105 transition-transform origin-left"
            :class="stat.value.length > 12 ? 'text-base sm:text-lg md:text-xl leading-snug my-0.5' : 'text-xl sm:text-2xl md:text-3xl'"
          >
            {{ stat.value }}
          </div>
          <div class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1 leading-snug">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Componente Hero (components/Hero.vue)
 *
 * Sección principal de introducción y presentación profesional:
 * - Titular editorial con tipografía distintiva y estado de disponibilidad laboral
 * - Botones de acción directa: explorar proyectos, descargar CV en PDF y ver CV en modal
 * - Terminal interactiva con pestañas (stack tecnológico, credenciales académicas, despliegues y contacto)
 * - Copiado rápido al portapapeles del correo oficial
 */
import { ref } from 'vue';
import { Download, Eye, ExternalLink, Copy, Check } from '@lucide/vue';
import { Github, Linkedin } from '~/utils/brand-icons';
import { useLanguage } from '~/composables/useLanguage';

defineEmits<{
  (e: 'download-resume'): void;
  (e: 'open-resume'): void;
}>();

const { t, personalInfo, language } = useLanguage();

const copied = ref(false);
const activeTerminalTab = ref<'stack' | 'credentials' | 'deployments' | 'contact'>('stack');

const terminalTabs = [
  { id: 'stack' as const, command: 'cat stack.sys' },
  { id: 'credentials' as const, command: 'cat degree.info' },
  { id: 'deployments' as const, command: 'ls deployments/' },
  { id: 'contact' as const, command: 'ping contact' }
];

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(personalInfo.value.email);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch {
    // Fallback if clipboard fails
    window.location.href = `mailto:${personalInfo.value.email}`;
  }
};
</script>

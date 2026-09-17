<template>
  <section id="about" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header with Fluid Reveal -->
      <div v-reveal="{ direction: 'up', delay: 0 }" class="max-w-2xl mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-medium uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
          <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
          {{ t.about.badge }} // {{ language === 'es' ? 'ARQUITECTURA DE SISTEMAS Y PERFIL' : 'SYSTEM ARCHITECTURE & PROFILE' }}
        </div>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t.about.heading }}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <!-- Biography Narrative (Left 7 Columns) -->
        <div v-reveal="{ direction: 'up', delay: 100 }" class="lg:col-span-7 space-y-6">
          <div class="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-xs text-slate-600 dark:text-slate-300 text-base leading-relaxed space-y-4">
            <p v-for="(paragraph, idx) in personalInfo.bioLong" :key="idx" class="leading-relaxed">
              {{ paragraph }}
            </p>
          </div>

          <!-- Core Pillars / Engineering Focus -->
          <div class="pt-2">
            <h3 class="font-display text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              {{ t.about.tenetsTitle }}
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div
                v-for="(tenet, tIdx) in t.about.tenets"
                :key="tenet.title"
                v-reveal="{ direction: 'up', delay: 150 + tIdx * 50 }"
                class="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                <div class="font-semibold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-1.5">
                  <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  {{ tenet.title }}
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {{ tenet.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Quick Resume Actions -->
          <div class="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              @click="$emit('download-resume')"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all cursor-pointer"
            >
              <Download class="w-4 h-4" />
              <span>{{ t.about.downloadATS }}</span>
            </button>

            <button
              type="button"
              @click="$emit('open-resume')"
              class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            >
              <FileText class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{{ t.about.viewOnline }}</span>
            </button>
          </div>
        </div>

        <!-- Experience & Credentials Timeline (Right 5 Columns) -->
        <div v-reveal="{ direction: 'up', delay: 180 }" class="lg:col-span-5 space-y-6">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                {{ t.about.workExpTitle }}
              </h3>
              <span class="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {{ t.about.workExpBadge }}
              </span>
            </div>

            <div class="space-y-4 relative before:absolute before:inset-0 before:left-2.5 sm:before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              <div v-for="job in workExperience" :key="job.company" class="relative pl-6 sm:pl-8 group">
                <div class="absolute left-0.5 sm:left-1.5 top-2 w-4 h-4 rounded-full border-2 border-blue-600 bg-white dark:bg-slate-950 group-hover:scale-125 transition-transform shadow-xs" />

                <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-500/40 transition-all">
                  <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-2 mb-1">
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm">
                      {{ job.role }}
                    </h4>
                    <span class="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 shrink-0">
                      {{ job.period }}
                    </span>
                  </div>

                  <div class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2.5 font-mono">
                    {{ job.company }} • {{ job.location }}
                  </div>

                  <ul class="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 mb-3">
                    <li v-for="(bullet, bIdx) in job.description" :key="bIdx" class="flex items-start gap-1.5">
                      <span class="text-blue-600 dark:text-blue-400 font-bold shrink-0">•</span>
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>

                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="s in job.skills"
                      :key="s"
                      class="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education Block -->
          <div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 class="font-display text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              {{ t.about.eduTitle }}
            </h3>
            <div
              v-for="(edu, idx) in education"
              :key="edu.degree"
              :class="idx > 0 ? 'mt-4 pt-4 border-t border-slate-200 dark:border-slate-800' : ''"
            >
              <div class="text-sm font-semibold text-slate-900 dark:text-white">
                {{ edu.degree }}
              </div>
              <div class="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                {{ edu.school }} — {{ edu.year }}
              </div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-2">
                {{ t.about.eduTopics }} {{ edu.highlights.join(' • ') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Componente AboutBio (components/AboutBio.vue)
 *
 * Sección biográfica e historial profesional de Jesús Ortega:
 * - Resumen ejecutivo y trayectoria en ingeniería de software
 * - Línea de tiempo de experiencia laboral con logros medibles y tecnologías aplicadas
 * - Formación académica (Ingeniería en Informática)
 * - Puntos fuertes (Vue/Nuxt, APIs REST en Node/Express, bases de datos Supabase/PostgreSQL)
 */
import { CheckCircle2, Download, FileText } from '@lucide/vue';
import { useLanguage } from '~/composables/useLanguage';

defineEmits<{
  (e: 'download-resume'): void;
  (e: 'open-resume'): void;
}>();

const { t, personalInfo, workExperience, education, language } = useLanguage();
</script>

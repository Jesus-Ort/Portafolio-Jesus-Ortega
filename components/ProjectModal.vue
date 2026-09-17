<template>
  <div
    v-if="project"
    role="dialog"
    aria-modal="true"
    aria-labelledby="project-modal-title"
    class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    @click="$emit('close')"
  >
    <div
      class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl"
      @click.stop
    >
      <!-- Close Button -->
      <button
        type="button"
        @click="$emit('close')"
        aria-label="Close Project Details Modal"
        class="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Header -->
      <div class="mb-6 pr-8">
        <div class="flex items-center gap-2 mb-3 flex-wrap">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Layers class="w-3.5 h-3.5" />
            <span>{{ (t.projects.categories as Record<string, string>)[project.category] || project.category }}</span>
          </div>
          <div v-if="project.year" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
            <Calendar class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{{ project.year }}</span>
          </div>
        </div>
        <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
          {{ language === 'es' ? 'ESPECIFICACIÓN TÉCNICA // ARQUITECTURA DEL SISTEMA' : 'SYSTEM BLUEPRINT // ARCHITECTURE DOSSIER' }}
        </div>
        <h3 id="project-modal-title" class="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ project.title }}
        </h3>
        <div v-if="project.metrics" class="mt-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
          <Activity class="w-3.5 h-3.5" />
          <span>{{ project.metrics }}</span>
        </div>
      </div>

      <!-- Live Web Route Banner for Complete Web Systems -->
      <div
        v-if="project.liveUrl"
        class="mb-6 p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
      >
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
          <span class="font-mono text-slate-700 dark:text-slate-300">
            {{ language === 'es' ? 'Subdominio / Enlace Activo:' : 'Live Subdomain / URL:' }}
            <a
              :href="project.liveUrl"
              target="_blank"
              rel="noreferrer"
              class="text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-1"
            >
              {{ project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') }}
            </a>
          </span>
        </div>
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-colors shrink-0"
        >
          <span>{{ language === 'es' ? 'Ver Página Demo' : 'Open Live Demo' }}</span>
          <ExternalLink class="w-3.5 h-3.5" />
        </a>
      </div>

      <!-- Full Description -->
      <div class="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
        <p>{{ project.fullDescription }}</p>
      </div>

      <!-- Architectural Highlights -->
      <div class="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
        <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-1.5">
          <Cpu class="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>{{ language === 'es' ? 'Aspectos de Ingeniería y Arquitectura' : 'System Architecture & Engineering Highlights' }}</span>
        </h4>
        <ul class="space-y-2">
          <li v-for="(h, i) in project.highlights" :key="i" class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
            <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <span>{{ h }}</span>
          </li>
        </ul>
      </div>

      <!-- Technologies Stack -->
      <div class="mb-8">
        <h4 class="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
          {{ language === 'es' ? 'TECNOLOGÍAS Y MÓDULOS' : 'TECHNOLOGY STACK & MODULES' }}
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2.5 py-1 text-xs font-mono font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- External Links & Footer Actions -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 border-t border-slate-200 dark:border-slate-800">
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <a
            :href="project.githubUrl"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 transition-colors text-center"
          >
            <Github class="w-4 h-4" />
            <span>{{ language === 'es' ? 'Ver Repositorio' : 'View Source Repository' }}</span>
          </a>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all text-center shadow-sm cursor-pointer"
          >
            <ExternalLink class="w-4 h-4" />
            <span>{{ language === 'es' ? 'Ver Página Demo' : 'Live Demo' }}</span>
          </a>
        </div>

        <button
          type="button"
          @click="$emit('close')"
          class="w-full sm:w-auto px-4 py-2 text-xs font-mono font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer text-center"
        >
          {{ language === 'es' ? '[ Cerrar ]' : '[ Close ]' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Componente ProjectModal (components/ProjectModal.vue)
 *
 * Ventana modal accesible y responsiva para inspección profunda de un proyecto:
 * - Título, año de desarrollo, métricas de rendimiento y categoría
 * - Descripción técnica detallada y puntos clave de arquitectura (highlights)
 * - Píldoras con las tecnologías utilizadas
 * - Acceso directo al repositorio de código fuente en GitHub y al despliegue en vivo (si aplica)
 */
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Activity, Calendar } from '@lucide/vue';
import { Github } from '~/utils/brand-icons';
import { useLanguage } from '~/composables/useLanguage';
import type { Project } from '~/types';

defineProps<{
  project: Project | null;
}>();

defineEmits<{
  (e: 'close'): void;
}>();

const { language, t } = useLanguage();
</script>

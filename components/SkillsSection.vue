<template>
  <section id="skills" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header with Fluid Entrance -->
      <div v-reveal="{ direction: 'up', delay: 0 }" class="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 mb-10 sm:mb-12">
        <div class="flex-1 min-w-0 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-medium uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            {{ t.skills.badge }} // {{ language === 'es' ? 'STACK PRINCIPAL' : 'CORE STACK' }}
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t.skills.heading }}
          </h2>
          <p class="text-slate-600 dark:text-slate-400 mt-2 text-base">
            {{ t.skills.subtitle }}
          </p>
        </div>

        <!-- Search Skill Bar -->
        <div class="relative w-full md:w-72 shrink-0">
          <Search class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
          <input
            v-model="filterQuery"
            type="text"
            :placeholder="t.skills.filterPlaceholder"
            class="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors font-mono"
          />
        </div>
      </div>

      <!-- Categories Grid with Architectural Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-for="(cat, cIdx) in skillCategories" :key="cat.category">
          <div
            v-if="!filterQuery || getFilteredSkills(cat.skills).length > 0"
            v-reveal="{ direction: 'up', delay: (cIdx % 3) * 80 }"
            class="p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-blue-500/40 transition-all"
          >
            <div>
              <!-- Header with Technical Index -->
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400">
                    <component :is="getCategoryIcon(cat.category)" class="w-4 h-4" />
                  </div>
                  <div>
                    <h3 class="font-display font-bold text-base text-slate-900 dark:text-white leading-tight">
                      {{ cat.category }}
                    </h3>
                  </div>
                </div>
                <span class="text-[10px] font-mono text-slate-400">CAT-0{{ cIdx + 1 }}</span>
              </div>

              <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                {{ cat.description }}
              </p>

              <!-- Competencies List -->
              <div class="space-y-2">
                <div
                  v-for="skill in getFilteredSkills(cat.skills)"
                  :key="skill.name"
                  class="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/30 transition-colors"
                >
                  <span class="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate pr-1 min-w-0 font-mono">
                    {{ skill.name }}
                  </span>

                  <div class="flex items-center gap-1.5 shrink-0">
                    <span class="text-[10px] text-slate-400 font-mono">
                      {{ skill.years }}
                    </span>
                    <span
                      class="text-[10px] font-mono font-medium px-2 py-0.5 rounded border whitespace-nowrap"
                      :class="getBadgeStyle(skill.level)"
                    >
                      {{ getTranslatedLevel(skill.level) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Footer Specs -->
            <div class="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span>
                {{ getFilteredSkills(cat.skills).length }} {{ language === 'es' ? 'TECNOLOGÍAS' : 'TECHNOLOGIES' }}
              </span>
              <span class="text-emerald-600 dark:text-emerald-400 font-medium">
                ● {{ language === 'es' ? 'PRODUCCIÓN VERIFICADA' : 'PRODUCTION VERIFIED' }}
              </span>
            </div>
          </div>
        </template>
      </div>

      <!-- Architectural ATS Resume Dispatch Banner -->
      <div v-reveal="{ direction: 'up', delay: 120 }" class="mt-10 sm:mt-12 p-6 sm:p-8 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl shadow-blue-950/20">
        <div>
          <div class="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1">
            {{ language === 'es' ? 'CREDENCIALES VERIFICADAS // FORMATO ATS' : 'VERIFIED CREDENTIALS // ATS COMPLIANT' }}
          </div>
          <h3 class="font-display text-base sm:text-lg font-bold">
            {{ language === 'es' ? '¿Deseas el inventario técnico y arquitectónico completo?' : 'Need a complete technical and system inventory?' }}
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            {{ language === 'es'
              ? 'Descarga el currículum vítae estructurado con detalles de bases de datos, APIs REST y proyectos desplegados.'
              : 'Download the comprehensive ATS-formatted resume with system architecture and verified deployments.' }}
          </p>
        </div>
        <button
          type="button"
          @click="$emit('download-resume')"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all shrink-0 cursor-pointer shadow-md shadow-blue-600/30"
        >
          <Download class="w-4 h-4 text-white" />
          <span>{{ t.skills.downloadFullCV }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Componente SkillsSection (components/SkillsSection.vue)
 *
 * Muestra las competencias y stack tecnológico categorizado:
 * - Frontend e Interfaces Reactivas (Vue 3, Nuxt 4, Pinia, TypeScript, Tailwind)
 * - Backend y Arquitectura de APIs (Node.js, Express, REST APIs)
 * - Bases de Datos y Persistencia (Supabase, PostgreSQL, SQL)
 * - DevOps, Automatización y Herramientas (Git, GitHub Actions, Python, Docker)
 * - Buscador en vivo de tecnologías con niveles de dominio (Avanzado, Intermedio, etc.)
 */
import { ref } from 'vue';
import { Search, Code, Server, Database, Cloud, ShieldCheck, Download } from '@lucide/vue';
import { useLanguage } from '~/composables/useLanguage';

defineEmits<{
  (e: 'download-resume'): void;
}>();

const { t, skillCategories, language } = useLanguage();
const filterQuery = ref('');

const getCategoryIcon = (category: string) => {
  const catLower = category.toLowerCase();
  if (catLower.includes('front') || catLower.includes('interfaz')) return Code;
  if (catLower.includes('back') || catLower.includes('sistemas')) return Server;
  if (catLower.includes('database') || catLower.includes('base') || catLower.includes('almacenamiento')) return Database;
  if (catLower.includes('cloud') || catLower.includes('devops') || catLower.includes('infraestructura')) return Cloud;
  return ShieldCheck;
};

const getBadgeStyle = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'bg-[#4169E1]/20 text-[#4169E1] dark:text-blue-300 border-[#4169E1]/30';
    case 'Advanced':
      return 'bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-200 border-slate-200/60 dark:border-white/10';
    case 'Proficient':
    default:
      return 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-white/5';
  }
};

const getTranslatedLevel = (level: string) => {
  return (t.value.skills.levels as Record<string, string>)[level] || level;
};

const getFilteredSkills = (skills: { name: string; level: string; years: string }[]) => {
  if (!filterQuery.value) return skills;
  return skills.filter((s) => s.name.toLowerCase().includes(filterQuery.value.toLowerCase()));
};
</script>

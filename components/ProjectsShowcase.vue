<template>
  <section id="projects" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title with Technical Identifier and Fluid Entrance -->
      <div v-reveal="{ direction: 'up', delay: 0 }" class="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 mb-10 sm:mb-12">
        <div class="flex-1 min-w-0 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-medium uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            {{ t.projects.badge }} // {{ language === 'es' ? 'REPOSITORIOS VERIFICADOS' : 'VERIFIED REPOSITORIES' }}
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t.projects.heading }}
          </h2>
          <p class="text-slate-600 dark:text-slate-400 mt-2 text-base">
            {{ t.projects.subtitle }}
          </p>
        </div>

        <!-- Search Bar with Technical Aesthetic -->
        <div class="relative w-full md:w-72 lg:w-80 shrink-0">
          <Search class="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="t.projects.searchPlaceholder"
            class="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors font-mono"
          />
          <button
            v-if="searchQuery"
            type="button"
            @click="searchQuery = ''"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
          >
            ×
          </button>
        </div>
      </div>

      <!-- Category Filter Pills + Active Filter Feedback -->
      <div v-reveal="{ direction: 'up', delay: 100 }" class="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10">
        <div class="flex items-center gap-2 overflow-x-auto lg:flex-wrap pb-2 lg:pb-0 w-full lg:w-auto">
          <button
            v-for="key in categoryKeys"
            :key="key"
            type="button"
            @click="setCategory(key)"
            class="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
            :class="[
              selectedCategoryKey === key && !selectedTechFilter
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40'
            ]"
          >
            {{ (t.projects.categories as Record<string, string>)[key] || key }}
          </button>
        </div>

        <!-- Active Tech Filter Indicator -->
        <div v-if="selectedTechFilter" class="flex items-center gap-2 text-xs font-mono bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 px-3 py-1.5 rounded-lg text-blue-700 dark:text-blue-300">
          <span>{{ language === 'es' ? 'Filtrando por:' : 'Filtering by:' }} <strong>{{ selectedTechFilter }}</strong></span>
          <button
            type="button"
            @click="selectedTechFilter = null"
            class="ml-1 text-blue-500 hover:text-blue-700 dark:hover:text-white font-bold cursor-pointer"
          >
            ✕ {{ language === 'es' ? 'Restablecer' : 'Reset' }}
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-16 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800"
      >
        <Layers class="w-10 h-10 text-slate-400 mx-auto mb-3 opacity-60" />
        <p class="text-slate-600 dark:text-slate-400 text-sm font-mono">
          {{ t.projects.noProjectsFound }} &ldquo;{{ searchQuery || selectedTechFilter }}&rdquo;.
        </p>
        <button
          type="button"
          @click="resetAllFilters"
          class="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
        >
          {{ t.projects.resetFilters }}
        </button>
      </div>

      <!-- Projects Grid with Architectural Layout -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, pIdx) in filteredProjects"
          :key="project.id"
          v-reveal="{ direction: 'up', delay: (pIdx % 3) * 80 }"
          class="flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs hover:border-blue-500/50 hover:shadow-md transition-all group"
        >
          <div>
            <!-- Custom Architectural Schematic Visual Header -->
            <div class="h-28 rounded-lg mb-4 bg-slate-950 border border-slate-800 relative flex flex-col justify-between p-3 overflow-hidden font-mono text-[10px]">
              <!-- Schematic Corner Identifiers -->
              <div class="flex items-center justify-between text-slate-500 z-10">
                <span class="text-blue-400 font-semibold">PRJ-0{{ pIdx + 1 }} // {{ project.id.toUpperCase() }}</span>
                <span class="text-slate-400">{{ project.year || '2026' }}</span>
              </div>

              <!-- Visual Mini Schematic Representation based on project id -->
              <div class="z-10 my-auto">
                <!-- RandomCards schematic: Playing Card Preview -->
                <div v-if="project.id === 'randomcards'" class="flex items-center justify-between px-2">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-10 rounded bg-white text-slate-900 font-bold flex flex-col items-center justify-center shadow-xs text-xs">
                      <span>A</span>
                      <span class="text-rose-600 text-[10px]">♥</span>
                    </div>
                    <div class="text-[10px] text-slate-300">
                      <div class="text-emerald-400 font-semibold">PIL Engine</div>
                      <div class="text-slate-400">Cron ➔ X API v2</div>
                    </div>
                  </div>
                  <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    {{ language === 'es' ? 'AUTÓNOMO' : 'AUTONOMOUS' }}
                  </span>
                </div>

                <!-- Fluxora schematic: 50/30/20 Budget Bar -->
                <div v-else-if="project.id === 'fluxora'" class="space-y-1 px-1">
                  <div class="flex justify-between text-[9px] text-slate-400">
                    <span class="text-blue-400">{{ language === 'es' ? '50% Necesidades' : '50% Needs' }}</span>
                    <span class="text-emerald-400">{{ language === 'es' ? '30% Deseos' : '30% Wants' }}</span>
                    <span class="text-purple-400">{{ language === 'es' ? '20% Ahorro' : '20% Save' }}</span>
                  </div>
                  <div class="w-full h-2 rounded bg-slate-800 flex overflow-hidden">
                    <div class="w-1/2 bg-blue-500"></div>
                    <div class="w-[30%] bg-emerald-500"></div>
                    <div class="w-[20%] bg-purple-500"></div>
                  </div>
                  <div class="text-[9px] text-slate-400 text-center">
                    {{ language === 'es' ? 'CÁLCULO DE GASTO SEGURO' : 'SAFE-TO-SPEND CALC' }}
                  </div>
                </div>

                <!-- DolarBase schematic: FX Rates -->
                <div v-else-if="project.id === 'dolarbase'" class="space-y-1 px-1">
                  <div class="flex justify-between text-[10px]">
                    <span class="text-slate-400">{{ language === 'es' ? 'TASA BCV:' : 'BCV RATE:' }}</span>
                    <span class="text-emerald-400 font-semibold">{{ language === 'es' ? 'API EN VIVO' : 'LIVE API' }}</span>
                  </div>
                  <div class="flex justify-between text-[10px]">
                    <span class="text-slate-400">{{ language === 'es' ? 'PARALELO:' : 'PARALLEL:' }}</span>
                    <span class="text-amber-400 font-semibold">{{ language === 'es' ? 'SINCRONIZADO' : 'SYNCED' }}</span>
                  </div>
                </div>

                <!-- Fondo Rodanol schematic: Mutual Fund Ledger -->
                <div v-else-if="project.id === 'fondo-ayuda-mutua' || project.id === 'fondo-de-ayuda-mutua'" class="text-[10px] space-y-1">
                  <div class="text-amber-400 font-semibold">
                    {{ language === 'es' ? 'DEDUCCIONES DE NÓMINA EMPRESARIAL' : 'ENTERPRISE PAYROLL DEDUCTIONS' }}
                  </div>
                  <div class="text-slate-400 text-[9px]">
                    {{ language === 'es' ? 'Préstamos • Amortización • Rodanol S.A.' : 'Loans • Amortization • Rodanol S.A.' }}
                  </div>
                </div>

                <!-- Sistema NH schematic: Clinical Vaccination -->
                <div v-else-if="project.id === 'sistema-nh'" class="text-[10px] space-y-1">
                  <div class="text-sky-400 font-semibold">
                    {{ language === 'es' ? 'REGISTRO CLÍNICO DE VACUNACIÓN' : 'CLINICAL IMMUNIZATION REGISTRY' }}
                  </div>
                  <div class="text-slate-400 text-[9px]">
                    {{ language === 'es' ? 'Dosis de Pacientes • CDI Negra Hipólita' : 'Patient Doses • CDI Negra Hipólita' }}
                  </div>
                </div>

                <!-- Academia Expresarte schematic -->
                <div v-else-if="project.id === 'academia-expresarte'" class="text-[10px] space-y-1">
                  <div class="text-purple-400 font-semibold">
                    {{ language === 'es' ? 'CATÁLOGO DE CURSOS Y TALLERES' : 'COURSE CATALOG & WORKSHOPS' }}
                  </div>
                  <div class="text-slate-400 text-[9px]">
                    {{ language === 'es' ? 'Inscripciones • Estudiantes • Nuxt 4 + Supabase' : 'Enrollments • Students • Nuxt 4 + Supabase' }}
                  </div>
                </div>

                <!-- Clima-APP schematic -->
                <div v-else-if="project.id === 'clima-app'" class="text-[10px] space-y-1">
                  <div class="text-sky-400 font-semibold">
                    {{ language === 'es' ? 'METEOROLOGÍA EN TIEMPO REAL' : 'REAL-TIME WEATHER METRICS' }}
                  </div>
                  <div class="text-slate-400 text-[9px]">
                    {{ language === 'es' ? 'OpenWeather API • Vue 3 + Tailwind CSS' : 'OpenWeather API • Vue 3 + Tailwind CSS' }}
                  </div>
                </div>

                <!-- Default schematic: Architecture Flow -->
                <div v-else class="text-[10px] text-center text-slate-300">
                  <span class="text-blue-400">{{ language === 'es' ? 'CLIENTE' : 'CLIENT' }}</span> ➔ <span class="text-emerald-400">API</span> ➔ <span class="text-amber-400">{{ language === 'es' ? 'BD' : 'DB' }}</span>
                </div>
              </div>

              <!-- Schematic Footer Pipeline Status -->
              <div class="flex items-center justify-between text-[9px] text-slate-500 z-10 pt-1 border-t border-slate-900">
                <span>STACK: {{ project.technologies[0] }}</span>
                <span class="text-slate-400">{{ language === 'es' ? 'CÓDIGO VERIFICADO' : 'VERIFIED CODE' }}</span>
              </div>
            </div>

            <!-- Category, Featured & Live Demo Badges -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-[10px] font-mono font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                {{ (t.projects.categories as Record<string, string>)[project.category] || project.category }}
              </span>
              <div class="flex items-center gap-1.5">
                <span
                  v-if="project.featured"
                  class="flex items-center gap-1 text-[10px] font-mono font-medium text-amber-600 dark:text-amber-400"
                >
                  <Sparkles class="w-3 h-3" /> {{ language === 'es' ? 'DESTACADO' : 'FEATURED' }}
                </span>
                <span
                  v-if="project.liveUrl"
                  class="inline-flex items-center gap-1 text-[9px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20"
                  :title="`Desplegado en ${project.liveUrl}`"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {{ language === 'es' ? 'SISTEMA WEB' : 'LIVE DEMO' }}
                </span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- URL Route on jesusortega.xyz for complete web systems -->
            <div
              v-if="project.liveUrl"
              class="mb-3 px-2.5 py-1.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-center justify-between gap-2 text-[11px] font-mono"
            >
              <div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 truncate">
                <Globe class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span class="truncate">{{ project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') }}</span>
              </div>
              <span class="text-[9px] uppercase px-1 py-0.2 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold shrink-0">
                demo
              </span>
            </div>

            <!-- Key Metric Highlight -->
            <div
              v-if="project.metrics"
              class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
              <span class="line-clamp-1">{{ project.metrics }}</span>
            </div>
          </div>

          <div>
            <!-- Clickable Tech Stack Filter Tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <button
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                type="button"
                @click="filterByTech(tech)"
                class="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-blue-950/60 border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300 transition-colors cursor-pointer"
                :title="language === 'es' ? `Filtrar por ${tech}` : `Filter by ${tech}`"
              >
                {{ tech }}
              </button>
              <span
                v-if="project.technologies.length > 4"
                class="px-1.5 py-0.5 text-[10px] font-mono text-slate-400"
              >
                +{{ project.technologies.length - 4 }}
              </span>
            </div>

            <!-- Action Links with Direct Demo Button -->
            <div class="flex items-center justify-between gap-2 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
              <button
                type="button"
                @click="activeProject = project"
                class="font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                {{ t.projects.details }} <ArrowUpRight class="w-3.5 h-3.5" />
              </button>

              <div class="flex items-center gap-2">
                <a
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  :aria-label="`Source repository for ${project.title}`"
                  :title="language === 'es' ? 'Ver código en GitHub' : 'View source on GitHub'"
                >
                  <Github class="w-4 h-4" />
                </a>

                <!-- Botón directo de Ver Demo para sistemas web con URL jesusortega.xyz -->
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xs hover:shadow-sm transition-all cursor-pointer group/demobtn shrink-0"
                  :aria-label="`${language === 'es' ? 'Ver página demo de' : 'View live demo of'} ${project.title}`"
                  :title="`Abrir demo: ${project.liveUrl}`"
                >
                  <span>{{ language === 'es' ? 'Ver Demo' : 'Live Demo' }}</span>
                  <ExternalLink class="w-3.5 h-3.5 transition-transform group-hover/demobtn:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Deep-Dive Modal -->
    <ProjectModal :project="activeProject" @close="activeProject = null" />
  </section>
</template>

<script setup lang="ts">
/**
 * Componente ProjectsShowcase (components/ProjectsShowcase.vue)
 *
 * Catálogo interactivo de proyectos y soluciones técnicas:
 * - Filtrado multidimensional: por categoría (Full-Stack, Frontend, Cloud/Backend, Open Source)
 * - Filtro por chip tecnológico (Vue 3, Nuxt 4, Express, Supabase, Python, Discord.js, etc.)
 * - Búsqueda en tiempo real por título, descripción y stack
 * - Apertura de modal con detalles completos del proyecto, métricas y enlaces (GitHub / Demo en vivo)
 */
import { ref, computed } from 'vue';
import { ExternalLink, Layers, ArrowUpRight, Search, Sparkles, Globe } from '@lucide/vue';
import { Github } from '~/utils/brand-icons';
import { useLanguage } from '~/composables/useLanguage';
import type { Project } from '~/types';

const { t, projects, language } = useLanguage();
const selectedCategoryKey = ref('All');
const selectedTechFilter = ref<string | null>(null);
const searchQuery = ref('');
const activeProject = ref<Project | null>(null);

const categoryKeys = ['All', 'Full-Stack', 'Frontend', 'Cloud & Backend', 'Open Source'];

const setCategory = (key: string) => {
  selectedCategoryKey.value = key;
  selectedTechFilter.value = null;
};

const filterByTech = (tech: string) => {
  selectedTechFilter.value = tech;
};

const resetAllFilters = () => {
  selectedCategoryKey.value = 'All';
  selectedTechFilter.value = null;
  searchQuery.value = '';
};

const filteredProjects = computed(() => {
  return projects.value.filter((project) => {
    const matchesCategory =
      selectedCategoryKey.value === 'All' || project.category === selectedCategoryKey.value;

    const matchesTech =
      !selectedTechFilter.value ||
      project.technologies.some(
        (tech) => tech.toLowerCase() === selectedTechFilter.value?.toLowerCase()
      );

    const q = searchQuery.value.toLowerCase();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesTech && matchesSearch;
  });
});
</script>

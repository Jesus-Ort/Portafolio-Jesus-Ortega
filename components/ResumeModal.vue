<template>
  <div
    v-if="isOpen"
    role="dialog"
    aria-modal="true"
    aria-labelledby="resume-modal-title"
    class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    @click="$emit('close')"
  >
    <div
      class="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
      @click.stop
    >
      <!-- Top Action Toolbar -->
      <div class="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90">
        <!-- Title & ATS Status -->
        <div class="flex items-center justify-between sm:justify-start gap-3">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <FileText class="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-modal-title" class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="font-display">{{ personalInfo.name }} — CV</span>
                <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {{ language === 'es' ? 'FORMATO ATS / VERIFICADO' : 'ATS FORMAT / VERIFIED' }}
                </span>
              </h3>
              <p class="text-[11px] font-mono text-slate-500 dark:text-slate-400 hidden sm:block">
                {{ language === 'es'
                  ? 'Estructura centralizada y optimizada para evaluación técnica y RRHH.'
                  : 'Centralized structure optimized for technical and HR engineering evaluation.' }}
              </p>
            </div>
          </div>

          <!-- Mobile close button -->
          <button
            type="button"
            @click="$emit('close')"
            aria-label="Cerrar modal"
            class="sm:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2 justify-end">
          <!-- Copy plain text -->
          <button
            type="button"
            @click="handleCopyText"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-blue-500/50 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            :title="language === 'es' ? 'Copiar contenido en texto plano' : 'Copy plain text resume'"
          >
            <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-500" />
            <Copy v-else class="w-3.5 h-3.5" />
            <span class="hidden md:inline">{{ copied ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? 'Copiar Texto' : 'Copy Text') }}</span>
          </button>

          <!-- Print button -->
          <button
            type="button"
            @click="handlePrint"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-blue-500/50 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            :title="language === 'es' ? 'Imprimir currículum' : 'Print resume'"
          >
            <Printer class="w-3.5 h-3.5" />
            <span class="hidden md:inline">{{ language === 'es' ? 'Imprimir' : 'Print' }}</span>
          </button>

          <!-- Download PDF -->
          <button
            type="button"
            @click="$emit('download-pdf')"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer shadow-sm shadow-blue-600/20"
          >
            <Download class="w-3.5 h-3.5" />
            <span>{{ language === 'es' ? 'Descargar PDF' : 'Download PDF' }}</span>
          </button>

          <!-- Desktop close button -->
          <button
            type="button"
            @click="$emit('close')"
            aria-label="Cerrar modal"
            class="hidden sm:inline-flex p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 ml-1 cursor-pointer transition-colors"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Quick Section Navigator Tabs (Centralized filters) -->
      <div class="shrink-0 px-4 sm:px-6 py-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-x-auto flex items-center gap-1.5 text-xs font-mono">
        <span class="text-slate-400 text-[11px] pr-1 uppercase tracking-wider shrink-0">
          {{ language === 'es' ? 'SECCIÓN:' : 'SECTION:' }}
        </span>
        <button
          v-for="tab in filterTabs"
          :key="tab.id"
          type="button"
          @click="activeSection = tab.id"
          class="px-2.5 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer text-xs"
          :class="activeSection === tab.id
            ? 'bg-blue-600 text-white font-semibold shadow-xs'
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Centralized Printable Resume Sheet -->
      <div class="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-slate-100 dark:bg-slate-950/50">
        <!-- Centralized Paper Document Wrapper -->
        <div class="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 md:p-10 shadow-sm space-y-7">
          
          <!-- 1. Centralized Executive Header -->
          <div class="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
              <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              {{ language === 'es' ? 'CURRÍCULUM VÍTAE PROFESIONAL' : 'PROFESSIONAL CURRICULUM VITAE' }}
            </div>

            <h1 class="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {{ personalInfo.name.toUpperCase() }}
            </h1>

            <p class="font-display text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">
              {{ personalInfo.title }}
            </p>

            <!-- Centralized Contact Information Pills -->
            <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-600 dark:text-slate-300 mt-4 font-mono">
              <a
                :href="`mailto:${personalInfo.email}`"
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{{ personalInfo.email }}</span>
              </a>

              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">
                <MapPin class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{{ personalInfo.location }} ({{ language === 'es' ? 'Remoto / Híbrido' : 'Remote / Hybrid' }})</span>
              </span>

              <a
                :href="personalInfo.github"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>github.com/Jesus-Ort</span>
              </a>

              <a
                :href="personalInfo.linkedin"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>linkedin.com/in/jesusortegasq</span>
              </a>

              <a
                href="https://jesusortega.xyz"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Globe class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>jesusortega.xyz</span>
              </a>
            </div>

            <!-- Executive Highlights Bar -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-left">
              <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {{ language === 'es' ? 'EXPERIENCIA' : 'EXPERIENCE' }}
                </div>
                <div class="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  +2 {{ language === 'es' ? 'Años en Producción' : 'Years Production' }}
                </div>
              </div>

              <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {{ language === 'es' ? 'STACK PRINCIPAL' : 'CORE STACK' }}
                </div>
                <div class="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  Vue, Nuxt 4, Node, SQL
                </div>
              </div>

              <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {{ language === 'es' ? 'TITULACIÓN' : 'CREDENTIAL' }}
                </div>
                <div class="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                  {{ language === 'es' ? 'Ing. en Informática' : 'Computer Engineer' }}
                </div>
              </div>

              <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <div class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {{ language === 'es' ? 'ESTADO' : 'STATUS' }}
                </div>
                <div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {{ language === 'es' ? 'Disponible Inmediato' : 'Open to Roles' }}
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Executive Professional Summary -->
          <div v-show="activeSection === 'all' || activeSection === 'summary'" class="space-y-2">
            <div class="flex items-center gap-2 pb-1 border-b border-slate-200 dark:border-slate-800">
              <Sparkles class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h2 class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider">
                {{ language === 'es' ? 'Resumen Ejecutivo' : 'Executive Summary' }}
              </h2>
            </div>
            <div class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
              <p>
                {{ personalInfo.bioShort }}
              </p>
              <p class="text-slate-500 dark:text-slate-400 text-xs">
                {{ language === 'es'
                  ? 'Comprometido con código limpio, arquitectura desacoplada, diseño accesible y desarrollo modular con TypeScript y Vue/Nuxt.'
                  : 'Committed to clean code, decoupled architecture, accessible design, and modular development with TypeScript and Vue/Nuxt.' }}
              </p>
            </div>
          </div>

          <!-- 3. Professional Work Experience -->
          <div v-show="activeSection === 'all' || activeSection === 'experience'" class="space-y-4">
            <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
              <div class="flex items-center gap-2">
                <Briefcase class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h2 class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider">
                  {{ language === 'es' ? 'Experiencia Laboral' : 'Professional Work Experience' }}
                </h2>
              </div>
              <span class="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
                {{ language === 'es' ? 'VERIFICADA' : 'VERIFIED' }}
              </span>
            </div>

            <div class="space-y-4">
              <div
                v-for="job in workExperience"
                :key="job.company"
                class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-3 hover:border-blue-500/40 transition-colors"
              >
                <!-- Role and Period Header -->
                <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 class="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {{ job.role }}
                    </h3>
                    <div class="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      {{ job.company }} • {{ job.location }}
                    </div>
                  </div>
                  <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0 self-start sm:self-auto">
                    {{ job.period }}
                  </span>
                </div>

                <!-- Description Bullets -->
                <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li v-for="(bullet, bIdx) in job.description" :key="bIdx" class="flex items-start gap-2">
                    <span class="text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>

                <!-- Technologies Used -->
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-2 flex-wrap text-xs">
                  <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {{ language === 'es' ? 'TECNOLOGÍAS:' : 'STACK:' }}
                  </span>
                  <span
                    v-for="skill in job.skills"
                    :key="skill"
                    class="px-2 py-0.5 text-[10px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. Centralized Technical Core Competencies -->
          <div v-show="activeSection === 'all' || activeSection === 'skills'" class="space-y-4">
            <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
              <div class="flex items-center gap-2">
                <Code2 class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h2 class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider">
                  {{ language === 'es' ? 'Matriz de Habilidades Técnicas' : 'Technical Competency Matrix' }}
                </h2>
              </div>
              <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                {{ skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0) }} {{ language === 'es' ? 'TECNOLOGÍAS' : 'TECHNOLOGIES' }}
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div
                v-for="cat in skillCategories"
                :key="cat.category"
                class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800"
              >
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {{ cat.category }}
                  </h3>
                  <span class="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">
                    {{ cat.skills.length }}
                  </span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="s in cat.skills"
                    :key="s.name"
                    class="px-2 py-1 text-[11px] font-mono rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex items-center gap-1.5"
                  >
                    <span>{{ s.name }}</span>
                    <span class="text-[9px] px-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {{ s.years }}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. Key Production Deployments / Featured Engineering -->
          <div v-show="activeSection === 'all' || activeSection === 'projects'" class="space-y-4">
            <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
              <div class="flex items-center gap-2">
                <Layers class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h2 class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider">
                  {{ language === 'es' ? 'Proyectos Clave en Producción' : 'Key Production Deployments' }}
                </h2>
              </div>
              <span class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                {{ language === 'es' ? '100% CÓDIGO VERIFICABLE' : '100% VERIFIABLE CODE' }}
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div
                v-for="project in projects.slice(0, 4)"
                :key="project.id"
                class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-2"
              >
                <div class="flex items-baseline justify-between gap-1">
                  <h3 class="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {{ project.title }}
                  </h3>
                  <span class="text-[10px] font-mono text-slate-400">
                    {{ project.year || '2026' }}
                  </span>
                </div>

                <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {{ project.description }}
                </p>

                <div v-if="project.metrics" class="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400">
                  {{ project.metrics }}
                </div>

                <div class="pt-1 flex items-center justify-between text-[11px] font-mono">
                  <span class="text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                    {{ project.technologies.slice(0, 3).join(', ') }}
                  </span>
                  <a
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>{{ language === 'es' ? 'Código' : 'Code' }}</span>
                    <ExternalLink class="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. Education & Academic Credentials -->
          <div v-show="activeSection === 'all' || activeSection === 'education'" class="space-y-4">
            <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
              <div class="flex items-center gap-2">
                <GraduationCap class="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h2 class="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider">
                  {{ language === 'es' ? 'Educación y Títulos Universitarios' : 'Education & Credentials' }}
                </h2>
              </div>
              <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                {{ language === 'es' ? 'GRADO UNIVERSITARIO' : 'UNIVERSITY DEGREE' }}
              </span>
            </div>

            <div class="space-y-3">
              <div
                v-for="edu in education"
                :key="edu.degree"
                class="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 space-y-2"
              >
                <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 class="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {{ edu.degree }}
                    </h3>
                    <div class="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                      {{ edu.school }}
                    </div>
                  </div>
                  <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0 self-start sm:self-auto">
                    {{ edu.year }}
                  </span>
                </div>

                <div class="text-xs text-slate-600 dark:text-slate-300">
                  <strong class="text-slate-800 dark:text-slate-200 font-mono">
                    {{ language === 'es' ? 'Especialización y Hitos:' : 'Core Topics & Highlights:' }}
                  </strong>
                  {{ edu.highlights.join(' • ') }}
                </div>
              </div>
            </div>
          </div>

          <!-- 7. Languages & Agile Methodologies (Centralized Footer Grid) -->
          <div v-show="activeSection === 'all' || activeSection === 'skills'" class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
            <!-- Languages -->
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
              <div class="font-display font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs">
                <Globe class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{{ language === 'es' ? 'Idiomas' : 'Languages' }}</span>
              </div>
              <p class="text-slate-600 dark:text-slate-400">
                • <strong>{{ language === 'es' ? 'Español' : 'Spanish' }}:</strong> {{ language === 'es' ? 'Nativo' : 'Native' }}<br />
                • <strong>{{ language === 'es' ? 'Inglés' : 'English' }}:</strong> {{ language === 'es' ? 'Lectura técnica y documentación (B2)' : 'Technical reading & documentation (B2)' }}
              </p>
            </div>

            <!-- Engineering Practices -->
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
              <div class="font-display font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs">
                <Award class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{{ language === 'es' ? 'Metodologías y Principios' : 'Methodologies & Principles' }}</span>
              </div>
              <p class="text-slate-600 dark:text-slate-400">
                {{ language === 'es'
                  ? 'Desarrollo Ágil (Scrum), GitFlow, Arquitectura Basada en Componentes, Principios SOLID, API RESTful y Mobile-First.'
                  : 'Agile Development (Scrum), GitFlow, Component-Driven Architecture, SOLID Principles, RESTful APIs, Mobile-First.' }}
              </p>
            </div>
          </div>

          <!-- Document Signature -->
          <div class="text-center pt-4 border-t border-slate-100 dark:border-slate-800/60 text-[11px] font-mono text-slate-400">
            {{ language === 'es'
              ? 'Documento curricular oficial generado desde el portafolio web de Jesús Ortega.'
              : 'Official CV dossier generated from Jesús Ortega’s web portfolio.' }}
          </div>
        </div>
      </div>

      <!-- Bottom Status Bar -->
      <div class="shrink-0 px-4 sm:px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-mono">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>{{ language === 'es' ? 'Documento sincronizado con los datos de producción' : 'Document synced with production metrics' }}</span>
        </div>
        <div class="flex items-center gap-4">
          <button
            type="button"
            @click="handleCopyText"
            class="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer font-semibold"
          >
            {{ copied ? (language === 'es' ? '¡Copiado!' : 'Copied!') : (language === 'es' ? 'Copiar CV completo' : 'Copy Full CV') }}
          </button>
          <span class="text-slate-300 dark:text-slate-700">•</span>
          <button
            type="button"
            @click="$emit('download-pdf')"
            class="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer font-semibold"
          >
            {{ language === 'es' ? 'Descargar PDF Oficial' : 'Download Official PDF' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Componente ResumeModal (components/ResumeModal.vue)
 *
 * Visor interactivo y completo de currículum vitae dentro de la aplicación:
 * - Filtro interactivo por secciones (Resumen, Experiencia, Habilidades, Proyectos, Educación)
 * - Botón de impresión limpia compatible con diálogo de impresión de navegadores (window.print)
 * - Botón de descarga de PDF vectorizado de alta fidelidad generado dinámicamente con jsPDF
 * - Botón de copia directa en formato texto plano estructurado ATS
 * - Soporte bilingüe automático y diseño optimizado para modo oscuro/claro
 */
import { ref, computed } from 'vue';
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  Mail,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Globe,
  FileText,
  Layers,
  Sparkles,
} from '@lucide/vue';
import { Github, Linkedin } from '~/utils/brand-icons';
import { useLanguage } from '~/composables/useLanguage';

defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (e: 'close'): void;
  (e: 'download-pdf'): void;
}>();

const copied = ref(false);
const activeSection = ref<'all' | 'summary' | 'experience' | 'skills' | 'projects' | 'education'>('all');

const { personalInfo, workExperience, education, skillCategories, projects, language } = useLanguage();

const filterTabs = computed(() => [
  { id: 'all' as const, label: language.value === 'es' ? 'Todo el CV' : 'Full Resume' },
  { id: 'summary' as const, label: language.value === 'es' ? 'Resumen' : 'Summary' },
  { id: 'experience' as const, label: language.value === 'es' ? 'Experiencia' : 'Experience' },
  { id: 'skills' as const, label: language.value === 'es' ? 'Habilidades' : 'Skills' },
  { id: 'projects' as const, label: language.value === 'es' ? 'Proyectos' : 'Projects' },
  { id: 'education' as const, label: language.value === 'es' ? 'Educación' : 'Education' },
]);

const handleCopyText = () => {
  const textResume = `
================================================================================
${personalInfo.value.name.toUpperCase()}
${personalInfo.value.title}
================================================================================
Email: ${personalInfo.value.email}
Website: https://jesusortega.xyz
Ubicación / Location: ${personalInfo.value.location}
GitHub: ${personalInfo.value.github}
LinkedIn: ${personalInfo.value.linkedin}

--------------------------------------------------------------------------------
${language.value === 'es' ? 'RESUMEN EJECUTIVO / PROFESSIONAL SUMMARY:' : 'EXECUTIVE SUMMARY:'}
--------------------------------------------------------------------------------
${personalInfo.value.bioShort}

--------------------------------------------------------------------------------
${language.value === 'es' ? 'EXPERIENCIA LABORAL / WORK EXPERIENCE:' : 'WORK EXPERIENCE:'}
--------------------------------------------------------------------------------
${workExperience.value
  .map(
    (j) =>
      `• ${j.role.toUpperCase()} | ${j.company} (${j.period}) - ${j.location}\n` +
      j.description.map((d) => `  - ${d}`).join('\n') +
      `\n  Stack: ${j.skills.join(', ')}`
  )
  .join('\n\n')}

--------------------------------------------------------------------------------
${language.value === 'es' ? 'HABILIDADES TÉCNICAS Y COMPETENCIAS:' : 'TECHNICAL SKILLS MATRIX:'}
--------------------------------------------------------------------------------
${skillCategories.value
  .map((c) => `• ${c.category}: ${c.skills.map((s) => `${s.name} (${s.years})`).join(', ')}`)
  .join('\n')}

--------------------------------------------------------------------------------
${language.value === 'es' ? 'PROYECTOS DESTACADOS EN PRODUCCIÓN:' : 'FEATURED PRODUCTION PROJECTS:'}
--------------------------------------------------------------------------------
${projects.value
  .slice(0, 5)
  .map((p) => `• ${p.title} (${p.year || '2026'}): ${p.description}\n  Métricas: ${p.metrics || 'Producción'}\n  Repositorio: ${p.githubUrl}`)
  .join('\n\n')}

--------------------------------------------------------------------------------
${language.value === 'es' ? 'EDUCACIÓN Y TÍTULOS:' : 'EDUCATION & CREDENTIALS:'}
--------------------------------------------------------------------------------
${education.value
  .map((e) => `• ${e.degree} — ${e.school} (${e.year})\n  Especialidad: ${e.highlights.join(', ')}`)
  .join('\n')}

--------------------------------------------------------------------------------
${language.value === 'es' ? 'IDIOMAS Y METODOLOGÍAS:' : 'LANGUAGES & PRACTICES:'}
--------------------------------------------------------------------------------
• ${language.value === 'es' ? 'Español: Nativo | Inglés: Técnico (B2)' : 'Spanish: Native | English: Technical (B2)'}
• ${language.value === 'es' ? 'Metodologías: Scrum, GitFlow, Clean Code, RESTful APIs, Mobile-First' : 'Practices: Scrum, GitFlow, Clean Code, RESTful APIs, Mobile-First'}
================================================================================
`.trim();

  try {
    navigator.clipboard?.writeText(textResume);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch {
    // fallback
  }
};

const handlePrint = () => {
  if (typeof window !== 'undefined') {
    window.print();
  }
};
</script>

<template>
  <section id="contact" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header with Fluid Entrance -->
      <div v-reveal="{ direction: 'up', delay: 0 }" class="max-w-2xl mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-medium uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3">
          <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
          {{ t.contact.badge }} // {{ language === 'es' ? 'CANAL DE TRANSMISIÓN DIRECTA' : 'TRANSMISSION GATEWAY' }}
        </div>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t.contact.heading }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 mt-2 text-base">
          {{ t.contact.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <!-- Direct Channels & Availability (Left 5 Columns on desktop, 2 columns on tablet) -->
        <div v-reveal="{ direction: 'up', delay: 100 }" class="lg:col-span-5 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:block lg:space-y-6">
          <!-- Direct Information Card -->
          <div class="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
            <div>
              <div class="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                {{ language === 'es' ? 'CANAL 01 // CONTACTO DIRECTO' : 'ENDPOINT 01 // DIRECT REACH' }}
              </div>
              <h3 class="font-display text-base font-bold text-slate-900 dark:text-white mb-1">
                {{ t.contact.directChannels }}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                {{ t.contact.directSubtitle }}
              </p>
            </div>

            <div class="space-y-3 text-sm">
              <!-- Email -->
              <div class="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all group">
                <a
                  :href="`mailto:${personalInfo.email}`"
                  class="flex items-center gap-3 min-w-0 flex-1"
                >
                  <div class="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                    <Mail class="w-4 h-4" />
                  </div>
                  <div class="flex flex-col min-w-0">
                    <span class="text-[10px] font-mono uppercase text-slate-400">
                      {{ language === 'es' ? 'CORREO PROFESIONAL' : 'PRIMARY EMAIL' }}
                    </span>
                    <span class="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {{ personalInfo.email }}
                    </span>
                  </div>
                </a>
                <button
                  type="button"
                  @click="copyEmailToClipboard"
                  title="Copy email to clipboard"
                  class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer shrink-0"
                >
                  <Check v-if="emailCopied" class="w-4 h-4 text-emerald-500" />
                  <Copy v-else class="w-4 h-4" />
                </button>
              </div>

              <!-- LinkedIn -->
              <a
                :href="personalInfo.linkedin"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 hover:border-blue-500/40 border border-slate-200 dark:border-slate-800 transition-all group min-w-0"
              >
                <div class="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                  <Linkedin class="w-4 h-4" />
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-[10px] font-mono uppercase text-slate-400">
                    {{ language === 'es' ? 'RED PROFESIONAL' : 'NETWORK PROFILE' }}
                  </span>
                  <span class="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    linkedin.com/in/jesusortegasq
                  </span>
                </div>
              </a>

              <!-- GitHub -->
              <a
                :href="personalInfo.github"
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 hover:border-blue-500/40 border border-slate-200 dark:border-slate-800 transition-all group min-w-0"
              >
                <div class="p-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                  <Github class="w-4 h-4" />
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="text-[10px] font-mono uppercase text-slate-400">
                    {{ language === 'es' ? 'CÓDIGO FUENTE' : 'SOURCE REPOSITORIES' }}
                  </span>
                  <span class="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    github.com/Jesus-Ort
                  </span>
                </div>
              </a>
            </div>

            <!-- Recruiter SLA / Response Guarantee -->
            <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
              <Clock class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong class="text-slate-800 dark:text-slate-200 font-mono">{{ t.contact.slaGuarantee }}</strong> {{ t.contact.slaText }}
              </span>
            </div>
          </div>

          <!-- Candidate Quick Preferences -->
          <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2.5">
            <div class="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              {{ language === 'es' ? 'ESTADO // DISPONIBILIDAD' : 'STATUS // AVAILABILITY' }}
            </div>
            <h4 class="font-display font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <Building class="w-4 h-4 text-blue-600 dark:text-blue-400" />
              {{ t.contact.preferencesTitle }}
            </h4>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              • <strong>{{ t.contact.prefRoles.split(':')[0] }}:</strong> {{ t.contact.prefRoles.split(':')[1] }}
            </p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              • <strong>{{ t.contact.prefWorkModel.split(':')[0] }}:</strong> {{ t.contact.prefWorkModel.split(':')[1] }}
            </p>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              • <strong>{{ t.contact.prefStacks.split(':')[0] }}:</strong> {{ t.contact.prefStacks.split(':')[1] }}
            </p>
          </div>
        </div>

        <!-- Job Lead Intake Form (Right 7 Columns) -->
        <div v-reveal="{ direction: 'up', delay: 180 }" class="lg:col-span-7">
          <div class="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
            <!-- Success & Recruiter Notification Dispatch Confirmation -->
            <div v-if="submittedLead" class="space-y-6 animate-in fade-in duration-300">
              <div class="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 class="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div class="space-y-1">
                  <h4 class="font-bold text-sm font-mono">{{ t.contact.leadSuccessTitle }}</h4>
                  <p class="text-xs text-emerald-600 dark:text-emerald-400">
                    {{ t.contact.dispatchSuccessText }}
                  </p>
                </div>
              </div>

              <!-- Notification Preview Card -->
              <div class="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono">
                <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
                  <span class="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Mail class="w-3.5 h-3.5" />
                    {{ t.contact.emailPreview }}
                  </span>
                  <span class="text-slate-400 text-[11px]">{{ submittedLead.id }}</span>
                </div>

                <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div>
                    <strong class="text-slate-900 dark:text-white">{{ t.contact.toLabel }}</strong> {{ personalInfo.email }}
                  </div>
                  <div>
                    <strong class="text-slate-900 dark:text-white">{{ t.contact.subjectLabel }}</strong> [LEAD] {{ submittedLead.leadType }} — {{ submittedLead.name }} ({{ submittedLead.company }})
                  </div>
                  <div>
                    <strong class="text-slate-900 dark:text-white">{{ t.contact.timelineLabel }}</strong> {{ submittedLead.timeline }}
                  </div>
                  <div class="p-3.5 mt-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 font-sans">
                    &ldquo;{{ submittedLead.message }}&rdquo;
                  </div>
                </div>

                <!-- Direct Actions: Gmail, Mailto, Copy -->
                <div class="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                    {{ t.contact.fallbackText }}
                  </p>

                  <div class="flex flex-wrap items-center gap-2.5">
                    <!-- Primary: Open pre-filled in Gmail Web -->
                    <a
                      :href="gmailComposeUrl"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all cursor-pointer font-sans"
                    >
                      <Mail class="w-3.5 h-3.5" />
                      <span>{{ t.contact.openGmail }}</span>
                      <ExternalLink class="w-3 h-3 opacity-70" />
                    </a>

                    <!-- Secondary: Open Native Email Client -->
                    <a
                      :href="mailtoUrl"
                      class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300/50 dark:border-slate-700 transition-colors font-sans"
                    >
                      <Send class="w-3 h-3 text-blue-500" />
                      <span>{{ t.contact.openEmailClient }}</span>
                    </a>

                    <!-- Copy Message Brief Button -->
                    <button
                      type="button"
                      @click="handleCopyLeadBrief"
                      class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer font-sans"
                    >
                      <Check v-if="copiedSummary" class="w-3.5 h-3.5 text-emerald-500" />
                      <Copy v-else class="w-3.5 h-3.5" />
                      <span>{{ copiedSummary ? t.contact.copied : t.contact.copyBrief }}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  @click="handleResetForm"
                  class="px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 text-white border border-slate-700 dark:border-white/10 transition-all cursor-pointer"
                >
                  {{ t.contact.submitAnother }}
                </button>
              </div>
            </div>

            <!-- Contact & Lead Intake Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-4">
              <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-2">
                <div>
                  <div class="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {{ language === 'es' ? 'PORTAL DE TRANSMISIÓN' : 'TRANSMISSION PORTAL' }}
                  </div>
                  <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">
                    {{ t.contact.formTitle }}
                  </h3>
                </div>
                <div class="flex items-center gap-2">
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    <ShieldCheck class="w-3 h-3 text-blue-500" />
                    <span>{{ t.contact.antiBotActive }}</span>
                  </span>
                  <span class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium hidden sm:flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {{ t.contact.alertTriggered }}
                  </span>
                </div>
              </div>

              <!-- Quick Direct Contact Helper Banner -->
              <div class="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-xs">
                <span class="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <Mail class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{{ t.contact.directMailHint }}</span>
                </span>
                <div class="flex items-center gap-2 font-mono">
                  <a
                    :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${encodeURIComponent(language === 'es' ? '[Consulta Profesional] Jesús Ortega' : '[Professional Inquiry] Jesús Ortega')}`"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Gmail</span>
                    <ExternalLink class="w-2.5 h-2.5 opacity-70" />
                  </a>
                  <span class="text-slate-300 dark:text-slate-700">•</span>
                  <a
                    :href="`mailto:${personalInfo.email}`"
                    class="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {{ language === 'es' ? 'Gestor de Correo' : 'Mail App' }}
                  </a>
                </div>
              </div>

              <div
                v-if="errorMessage"
                class="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2"
              >
                <AlertCircle class="w-4 h-4 shrink-0" />
                <span>{{ errorMessage }}</span>
              </div>

              <!-- Name & Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {{ t.contact.yourName }} <span class="text-blue-600">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    :placeholder="t.contact.namePlaceholder"
                    class="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label for="email" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {{ t.contact.yourEmail }} <span class="text-blue-600">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    :placeholder="t.contact.emailPlaceholder"
                    class="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                  />
                </div>
              </div>

              <!-- Company & Role Type -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="company" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {{ t.contact.company }}
                  </label>
                  <input
                    id="company"
                    v-model="formData.company"
                    type="text"
                    :placeholder="t.contact.companyPlaceholder"
                    class="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label for="leadType" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {{ t.contact.leadType }}
                  </label>
                  <select
                    id="leadType"
                    v-model="formData.leadType"
                    class="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white transition-colors cursor-pointer"
                  >
                    <option v-for="type in leadTypes" :key="type" :value="type" class="bg-slate-900 text-white">
                      {{ type }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Timeline & Budget / Range -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="timeline" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {{ t.contact.timeline }}
                  </label>
                  <select
                    id="timeline"
                    v-model="formData.timeline"
                    class="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white transition-colors cursor-pointer"
                  >
                    <option v-for="tl in timelines" :key="tl" :value="tl" class="bg-slate-900 text-white">
                      {{ tl }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="budget" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    {{ t.contact.budget }}
                  </label>
                  <input
                    id="budget"
                    v-model="formData.budget"
                    type="text"
                    :placeholder="t.contact.budgetPlaceholder"
                    class="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors"
                  />
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  {{ t.contact.message }} <span class="text-blue-600">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  required
                  :placeholder="t.contact.messagePlaceholder"
                  class="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors resize-none font-sans"
                ></textarea>
              </div>

              <!-- BOT PROTECTION: Invisible Honeypot Trap (Hidden from real users via off-screen absolute positioning & tabindex -1) -->
              <div class="absolute -left-[9999px] top-auto w-1 h-1 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true" tabindex="-1">
                <label for="website_url">Leave this field blank</label>
                <input
                  id="website_url"
                  type="text"
                  name="website_url"
                  v-model="honeypotValue"
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>

              <!-- BOT PROTECTION: Interactive Human Math Verification Challenge -->
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex items-center gap-2">
                  <div class="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <ShieldCheck class="w-4 h-4" />
                  </div>
                  <div>
                    <label for="math-captcha" class="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                      {{ t.contact.botVerificationQuestion }}
                      <span class="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800 font-mono text-xs">
                        {{ mathNum1 }} + {{ mathNum2 }} = ?
                      </span>
                    </label>
                    <span class="text-[10px] text-slate-400 block font-mono">
                      {{ t.contact.antiBotActive }}
                    </span>
                  </div>
                </div>

                <div class="flex items-center gap-2 self-end sm:self-auto">
                  <input
                    id="math-captcha"
                    type="number"
                    v-model.number="userMathAnswer"
                    required
                    :placeholder="t.contact.botVerificationPlaceholder"
                    class="w-24 px-3 py-1.5 text-xs text-center font-mono rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                  />
                  <button
                    type="button"
                    @click="refreshMathCaptcha"
                    title="Refresh question"
                    class="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    <RefreshCw class="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all disabled:opacity-60 cursor-pointer"
                >
                  <template v-if="isSubmitting">
                    <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{{ t.contact.submitting }}</span>
                  </template>
                  <template v-else>
                    <Send class="w-4 h-4" />
                    <span>{{ t.contact.submitBtn }}</span>
                  </template>
                </button>
                <p class="text-[11px] font-mono text-slate-400 text-center mt-2.5">
                  {{ t.contact.securedNote }} <span class="text-slate-600 dark:text-slate-300">{{ personalInfo.email }}</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Componente ContactLeadForm (components/ContactLeadForm.vue)
 *
 * Formulario de contacto profesional y calificación de oportunidades laborales:
 * - Sistema multicapa de protección antispam y antibots:
 *   1. Campo señuelo honeypot invisible para rastreadores automatizados
 *   2. Desafío aritmético interactivo para verificación humana con botón de refresco
 *   3. Detección de envíos instantáneos (time-to-submit < 2.5s)
 *   4. Límite de frecuencia por sesión (rate-limiting: max 3 envíos cada 10 min)
 * - Despacho automático de correo vía servicio formsubmit.co con plantilla estructurada
 * - Enlaces directos preconfigurados a Gmail Compose, LinkedIn y GitHub
 * - Persistencia local del historial de mensajes enviados en sessionStorage
 */
import { ref, computed, watch, onMounted } from 'vue';
import { Mail, Send, CheckCircle2, Building, Clock, AlertCircle, Copy, Check, ExternalLink, ShieldCheck, RefreshCw } from '@lucide/vue';
import { Linkedin, Github } from '~/utils/brand-icons';
import { useLanguage } from '~/composables/useLanguage';
import type { JobLead } from '~/types';

const { t, personalInfo, language } = useLanguage();

const leadTypes = computed(() => {
  return language.value === 'es'
    ? [
        'Puesto a Tiempo Completo (Junior / Full-Stack)',
        'Desarrollo Web / Frontend / Backend',
        'Contrato / Proyecto Freelance',
        'Consultoría o Asesoría Técnica',
        'Consulta General / Saludo',
      ]
    : [
        'Full-time Role (Junior / Full-Stack)',
        'Web Development / Frontend / Backend',
        'Freelance / Project-Based',
        'Technical Consulting / Advisory',
        'General Inquiry / Introduction',
      ];
});

const timelines = computed(() => {
  return language.value === 'es'
    ? [
        'Inmediata (En 2-4 semanas)',
        'Corto Plazo (1-2 meses)',
        'Próximo Trimestre / En Planificación',
        'Flexible / Exploratoria',
      ]
    : [
        'Immediate (Within 2-4 weeks)',
        'Short-term (1-2 months)',
        'Next Quarter / Planning Ahead',
        'Flexible / Exploratory',
      ];
});

const formData = ref({
  name: '',
  email: '',
  company: '',
  leadType: leadTypes.value[0] ?? '',
  timeline: timelines.value[0] ?? '',
  budget: '',
  message: '',
});

watch(leadTypes, (newTypes) => {
  const first = newTypes[0];
  if (first && !newTypes.includes(formData.value.leadType)) {
    formData.value.leadType = first;
  }
});

watch(timelines, (newTimelines) => {
  const first = newTimelines[0];
  if (first && !newTimelines.includes(formData.value.timeline)) {
    formData.value.timeline = first;
  }
});

const isSubmitting = ref(false);
const submittedLead = ref<JobLead | null>(null);
const errorMessage = ref<string | null>(null);
const copiedSummary = ref(false);
const emailCopied = ref(false);

// Anti-Bot Protection Mechanisms
// 1. Honeypot Trap: Invisible input for crawler bots
const honeypotValue = ref('');

// 2. Human Math Captcha Verification Challenge
const mathNum1 = ref(3);
const mathNum2 = ref(4);
const userMathAnswer = ref<number | null>(null);

const refreshMathCaptcha = () => {
  mathNum1.value = Math.floor(Math.random() * 8) + 2;
  mathNum2.value = Math.floor(Math.random() * 7) + 1;
  userMathAnswer.value = null;
};

// 3. Time-to-Submit Protection: Detect instant automated bot submissions (< 2.5 seconds)
const formLoadedAt = ref(Date.now());

onMounted(() => {
  refreshMathCaptcha();
  formLoadedAt.value = Date.now();
});

const gmailComposeUrl = computed(() => {
  const lead = submittedLead.value || formData.value;
  const targetEmail = personalInfo.value.email || 'jesusortech@gmail.com';
  const subj = encodeURIComponent(`[Propuesta Laboral] ${lead.leadType || 'Desarrollo Web'} — ${lead.name || 'Contacto'}`);
  const bodyText = encodeURIComponent(
`Hola Jesús Ortega,

Me comunico a través de tu portafolio web para conversar sobre la siguiente oportunidad:

• Nombre de Contacto: ${lead.name}
• Correo Electrónico: ${lead.email}
• Empresa / Organización: ${lead.company || 'No especificado'}
• Tipo de Oportunidad: ${lead.leadType}
• Plazo Estimado: ${lead.timeline}
• Presupuesto Estimado: ${lead.budget || 'No especificado'}

Mensaje / Alcance:
${lead.message}

Quedo a la espera de tus comentarios.

Saludos cordiales,
${lead.name}`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subj}&body=${bodyText}`;
});

const mailtoUrl = computed(() => {
  const lead = submittedLead.value || formData.value;
  const targetEmail = personalInfo.value.email || 'jesusortech@gmail.com';
  const subj = encodeURIComponent(`[Propuesta] ${lead.leadType || 'Desarrollo Web'} — ${lead.name || 'Contacto'}`);
  const bodyText = encodeURIComponent(
`Hola Jesús Ortega,

• Nombre: ${lead.name}
• Correo: ${lead.email}
• Empresa: ${lead.company || 'N/A'}
• Tipo de Oportunidad: ${lead.leadType}
• Plazo Estimado: ${lead.timeline}
• Presupuesto: ${lead.budget || 'N/A'}

Mensaje:
${lead.message}`
  );
  return `mailto:${targetEmail}?subject=${subj}&body=${bodyText}`;
});

const copyEmailToClipboard = () => {
  try {
    navigator.clipboard?.writeText(personalInfo.value.email);
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  } catch {
    // fallback
  }
};

const handleSubmit = async () => {
  errorMessage.value = null;

  // 1. Honeypot check: If the hidden input was filled, it's an automated spam bot
  if (honeypotValue.value.trim() !== '') {
    // Silently reject or simulate success to trap bot without alerting scraper
    console.warn('Bot detected via honeypot trap.');
    submittedLead.value = {
      id: `LEAD-${Date.now().toString().slice(-6)}`,
      name: formData.value.name || 'Visitor',
      email: formData.value.email || 'contact@example.com',
      company: 'External',
      leadType: formData.value.leadType as any,
      timeline: formData.value.timeline,
      message: formData.value.message,
      createdAt: new Date().toISOString(),
    };
    return;
  }

  // 2. Time-to-Submit check: Humans take more than 2.5 seconds to fill out this form
  const timeElapsed = Date.now() - formLoadedAt.value;
  if (timeElapsed < 2500) {
    errorMessage.value = t.value.contact.botTooFastError;
    return;
  }

  // 3. Human Math Challenge Verification
  const expectedAnswer = mathNum1.value + mathNum2.value;
  if (userMathAnswer.value === null || Number(userMathAnswer.value) !== expectedAnswer) {
    errorMessage.value = t.value.contact.botVerificationError;
    refreshMathCaptcha();
    return;
  }

  // 4. Rate Limiting Check: Max 3 submissions per 10 minutes in current browser session
  try {
    const recentSubmissions: number[] = JSON.parse(sessionStorage.getItem('jo_submission_timestamps') || '[]');
    const now = Date.now();
    const tenMinutesAgo = now - 10 * 60 * 1000;
    const filtered = recentSubmissions.filter((ts) => ts > tenMinutesAgo);
    if (filtered.length >= 3) {
      errorMessage.value = t.value.contact.botRateLimitError;
      return;
    }
  } catch {
    // sessionStorage disabled/unsupported fallback
  }

  // 5. Standard field validations
  if (!formData.value.name.trim() || !formData.value.email.trim() || !formData.value.message.trim()) {
    errorMessage.value =
      language.value === 'es'
        ? 'Por favor completa los campos obligatorios: Nombre, Correo y Mensaje.'
        : 'Please complete all required fields: Name, Email, and Message.';
    return;
  }

  // Basic email pattern test
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.email.trim())) {
    errorMessage.value = t.value.contact.validationEmail;
    return;
  }

  isSubmitting.value = true;

  const newLead: JobLead = {
    id: `LEAD-${Date.now().toString().slice(-6)}`,
    name: formData.value.name,
    email: formData.value.email,
    company: formData.value.company || (language.value === 'es' ? 'Confidencial / Individual' : 'Confidential / Individual'),
    leadType: formData.value.leadType as any,
    timeline: formData.value.timeline,
    budget: formData.value.budget || undefined,
    message: formData.value.message,
    createdAt: new Date().toISOString(),
  };

  const targetEmail = personalInfo.value.email || 'jesusortech@gmail.com';
  const subject = `[Portafolio Jesús Ortega] ${formData.value.leadType} de ${formData.value.name} (${formData.value.company || 'Contacto Web'})`;

  try {
    await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        _replyto: formData.value.email,
        _subject: subject,
        empresa_o_organizacion: formData.value.company || (language.value === 'es' ? 'Individual / Directo' : 'Direct / Individual'),
        tipo_de_oportunidad: formData.value.leadType,
        plazo_estimado: formData.value.timeline,
        presupuesto_estimado: formData.value.budget || (language.value === 'es' ? 'No especificado' : 'Not specified'),
        mensaje: formData.value.message,
        _cc: 'yizuh1173@gmail.com',
        _captcha: 'false',
        _template: 'table',
        _honey: honeypotValue.value,
      }),
    });
  } catch (err) {
    console.warn('FormSubmit dispatch notice:', err);
  } finally {
    submittedLead.value = newLead;
    isSubmitting.value = false;

    try {
      const existing = JSON.parse(sessionStorage.getItem('jo_job_leads') || '[]');
      existing.push(newLead);
      sessionStorage.setItem('jo_job_leads', JSON.stringify(existing));

      // Record timestamp for client-side rate limiting
      const recentSubmissions: number[] = JSON.parse(sessionStorage.getItem('jo_submission_timestamps') || '[]');
      recentSubmissions.push(Date.now());
      sessionStorage.setItem('jo_submission_timestamps', JSON.stringify(recentSubmissions));
    } catch {
      // ignore
    }
  }
};

const handleCopyLeadBrief = () => {
  if (!submittedLead.value) return;
  const brief = language.value === 'es'
    ? `RESUMEN DE PROPUESTA O CONSULTA LABORAL:
Referencia: ${submittedLead.value.id}
Contacto: ${submittedLead.value.name} (${submittedLead.value.email})
Empresa: ${submittedLead.value.company}
Tipo de Oportunidad: ${submittedLead.value.leadType}
Plazo Estimado: ${submittedLead.value.timeline}
Mensaje: ${submittedLead.value.message}
Alerta Notificación: Enviada a ${personalInfo.value.email}`.trim()
    : `PROSPECTIVE JOB LEAD SUMMARY:
Reference: ${submittedLead.value.id}
Contact: ${submittedLead.value.name} (${submittedLead.value.email})
Company: ${submittedLead.value.company}
Role Type: ${submittedLead.value.leadType}
Target Timeline: ${submittedLead.value.timeline}
Message: ${submittedLead.value.message}
Notification Alert: Sent to ${personalInfo.value.email}`.trim();

  try {
    navigator.clipboard?.writeText(brief);
    copiedSummary.value = true;
    setTimeout(() => {
      copiedSummary.value = false;
    }, 2500);
  } catch {
    // ignore
  }
};

const handleResetForm = () => {
  submittedLead.value = null;
  honeypotValue.value = '';
  refreshMathCaptcha();
  formLoadedAt.value = Date.now();
  formData.value = {
    name: '',
    email: '',
    company: '',
    leadType: leadTypes.value[0] ?? '',
    timeline: timelines.value[0] ?? '',
    budget: '',
    message: '',
  };
};
</script>

<style scoped>
/* Elimina las flechas/spinners del input numérico en todos los navegadores */
input#math-captcha::-webkit-outer-spin-button,
input#math-captcha::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input#math-captcha {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>

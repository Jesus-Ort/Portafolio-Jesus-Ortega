/**
 * Composable de Gestión de Idioma e Internacionalización (useLanguage)
 *
 * Proporciona estado reactivo global con useState de Nuxt para conmutar
 * fluidamente entre Español e Inglés, persistiendo la preferencia en localStorage
 * y sincronizando los atributos de accesibilidad e indexación del documento HTML.
 */
import { computed, onMounted } from 'vue';
import {
  type Language,
  PERSONAL_INFO_EN,
  PERSONAL_INFO_ES,
  WORK_EXPERIENCE_EN,
  WORK_EXPERIENCE_ES,
  EDUCATION_EN,
  EDUCATION_ES,
  PROJECTS_EN,
  PROJECTS_ES,
  SKILL_CATEGORIES_EN,
  SKILL_CATEGORIES_ES,
  UI_TRANSLATIONS,
} from '~/i18n/translations';

export const useLanguage = () => {
  const language = useState<Language>('portfolio_lang', () => 'en');

  onMounted(() => {
    try {
      const saved = localStorage.getItem('jo_lang') as Language | null;
      if (saved === 'en' || saved === 'es') {
        language.value = saved;
      } else if (navigator.language && navigator.language.toLowerCase().startsWith('es')) {
        language.value = 'es';
      }
      document.documentElement.lang = language.value;
    } catch {
      // ignore SSR or local storage disabled
    }
  });

  const setLanguage = (lang: Language) => {
    language.value = lang;
    try {
      localStorage.setItem('jo_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language.value === 'en' ? 'es' : 'en');
  };

  const t = computed(() => UI_TRANSLATIONS[language.value]);
  const personalInfo = computed(() => language.value === 'es' ? PERSONAL_INFO_ES : PERSONAL_INFO_EN);
  const workExperience = computed(() => language.value === 'es' ? WORK_EXPERIENCE_ES : WORK_EXPERIENCE_EN);
  const education = computed(() => language.value === 'es' ? EDUCATION_ES : EDUCATION_EN);
  const projects = computed(() => language.value === 'es' ? PROJECTS_ES : PROJECTS_EN);
  const skillCategories = computed(() => language.value === 'es' ? SKILL_CATEGORIES_ES : SKILL_CATEGORIES_EN);

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
    personalInfo,
    workExperience,
    education,
    projects,
    skillCategories
  };
};

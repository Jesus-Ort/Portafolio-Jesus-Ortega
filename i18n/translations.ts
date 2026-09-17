/**
 * Diccionario Central de Traducciones e Internacionalización (i18n)
 *
 * Contiene todo el contenido bilingüe (Español / Inglés) del portfolio:
 * - Información personal y biografía técnica de Jesús Ortega
 * - Proyectos destacados y repositorios de software
 * - Categorías de habilidades (Frontend, Backend, DevOps, etc.)
 * - Experiencia laboral e historial profesional
 * - Textos del formulario de contacto y textos de validación antispam
 */
import type { Project, SkillCategory, WorkExperience } from '~/types';

export type Language = 'en' | 'es';

export const PERSONAL_INFO_EN = {
  name: "Jesús Ortega",
  title: "Junior Full-Stack Web Developer | Computer Engineer",
  tagline: "Building clean, scalable web applications with Vue, Nuxt, Node.js, Express, and Supabase.",
  email: "jesusortech@gmail.com",
  website: "https://jesusortega.xyz",
  location: "Remote / Venezuela",
  github: "https://github.com/Jesus-Ort",
  linkedin: "https://www.linkedin.com/in/jesusortegasq/",
  bioShort: "Junior Full-Stack Developer and Computer Engineer passionate about building modern web solutions, robust REST APIs, and intuitive user interfaces with Vue.js, Nuxt, Express, and Supabase.",
  bioLong: [
    "I am a Junior Full-Stack Web Developer and Computer Engineer with a strong foundation in modern web architectures, component-driven development, and database systems.",
    "My primary focus is developing responsive and user-centered web applications using Vue.js, Nuxt (including Nuxt 4), Node.js, Express, and Supabase (PostgreSQL). I have developed enterprise and community software such as 'Fondo de Ayuda Mutua' (a financial mutual aid management system for Industrias Rodanol S.A.), 'Sistema-NH' (a healthcare and vaccination registry system for CDI Negra Hipólita), and platforms like 'Fluxora' and 'DolarBase'.",
    "I take pride in writing clean, maintainable code, implementing structured API integrations, and designing accessible, polished user experiences. I am constantly expanding my technical capabilities and looking forward to collaborating on impactful engineering challenges."
  ],
  stats: [
    { label: "Repositories & Projects", value: "16+" },
    { label: "Production & Web Solutions", value: "8+" },
    { label: "Core Stack & Technologies", value: "Vue / Nuxt / Nuxt UI / Python" },
    { label: "Degree", value: "Ing. Informática" }
  ],
  highlights: [
    "Proficient in Vue.js (Vue 3, Nuxt 3 & Nuxt 4), Nuxt UI, Composition API, and Pinia",
    "Backend development with Node.js, Express.js, RESTful APIs, and Supabase / PostgreSQL",
    "Automation & bots with Python 3, Pillow (PIL), GitHub Actions, and Discord.js",
    "Modern UI design with Nuxt UI, Tailwind CSS, and Vuetify",
    "Computer Engineering graduate with solid fundamentals in software architecture and algorithms"
  ]
};

export const PERSONAL_INFO_ES = {
  name: "Jesús Ortega",
  title: "Desarrollador Web Full-Stack Junior | Ingeniero en Informática",
  tagline: "Desarrollando aplicaciones web limpias y escalables con Vue, Nuxt, Node.js, Express y Supabase.",
  email: "jesusortech@gmail.com",
  website: "https://jesusortega.xyz",
  location: "Remoto / Venezuela",
  github: "https://github.com/Jesus-Ort",
  linkedin: "https://www.linkedin.com/in/jesusortegasq/",
  bioShort: "Desarrollador Full-Stack Junior e Ingeniero en Informática apasionado por construir soluciones web modernas, APIs REST robustas e interfaces de usuario intuitivas con Vue.js, Nuxt, Express y Supabase.",
  bioLong: [
    "Soy un Desarrollador Web Full-Stack Junior e Ingeniero en Informática con una sólida base en arquitecturas web modernas, desarrollo basado en componentes y sistemas de bases de datos.",
    "Mi enfoque principal es el desarrollo de aplicaciones web responsivas y centradas en el usuario utilizando Vue.js, Nuxt (incluyendo Nuxt 4), Node.js, Express y Supabase (PostgreSQL). He desarrollado software empresarial y comunitario como el 'Fondo de Ayuda Mutua' (sistema de gestión financiera para Industrias Rodanol S.A.), 'Sistema-NH' (sistema de registro de vacunación y salud para el CDI Negra Hipólita), así como plataformas como 'Fluxora', 'DolarBase' y bots de automatización como 'RandomCards'.",
    "Me esfuerzo por escribir código limpio, mantenible y escalable, implementando integraciones de API estructuradas y diseñando interfaces fluidas y accesibles. Continuamente continúo expandiendo mis habilidades técnicas y estoy listo para aportar valor en proyectos de desarrollo desafiantes."
  ],
  stats: [
    { label: "Repositorios y Proyectos", value: "16+" },
    { label: "Soluciones Desarrolladas", value: "8+" },
    { label: "Stack y Tecnologías Core", value: "Vue / Nuxt / Nuxt UI / Python" },
    { label: "Título Académico", value: "Ing. Informática" }
  ],
  highlights: [
    "Dominio de Vue.js (Vue 3, Nuxt 3 y Nuxt 4), Nuxt UI, Composition API y Pinia",
    "Desarrollo Backend con Node.js, Express.js, APIs REST y Supabase / PostgreSQL",
    "Automatización y bots con Python 3, Pillow (PIL), GitHub Actions y Discord.js",
    "Diseño de interfaces modernas con Nuxt UI, Tailwind CSS y Vuetify",
    "Graduado en Ingeniería en Informática con sólidos fundamentos en arquitectura de software y algoritmos"
  ]
};

export const WORK_EXPERIENCE_EN: WorkExperience[] = [
  {
    role: "Junior Full-Stack & Automation Web Developer",
    company: "Web Solutions, Systems & Automation",
    location: "Remote / Venezuela",
    period: "2024 - Present",
    description: [
      "Engineered and deployed 'Fondo de Ayuda Mutua', a comprehensive mutual aid fund and financial administration system for Industrias Rodanol S.A. using Nuxt, Vuetify, Express, and Supabase.",
      "Architected 'Fluxora' and 'Academia Expresarte', modern full-stack web applications leveraging Nuxt 4, Vue 3, @nuxt/ui, Tailwind CSS, Express, and Supabase real-time database.",
      "Built specialized financial and utility web apps including 'DolarBase' (live currency monitoring and conversion with Pinia) and 'Clima-APP' (live meteorological REST APIs with Tailwind CSS).",
      "Engineered autonomous bots and CI/CD automation pipelines in Python 3 and Node.js, notably 'RandomCards' (cron workflows with GitHub Actions, Pillow, and X API v2) and 'RandomDuel' (interactive Discord.js bot).",
      "Maintained modular code architectures, RESTful API endpoints, GitFlow version control, and continuous component refactoring across all production and open-source systems."
    ],
    skills: ["Vue.js", "Nuxt (3 & 4)", "Node.js", "Express", "Supabase", "PostgreSQL", "Python 3", "GitHub Actions", "Tailwind CSS", "REST APIs", "Git"]
  },
  {
    role: "Software Developer — Healthcare Systems",
    company: "CDI Negra Hipólita",
    location: "Venezuela",
    period: "2025",
    description: [
      "Engineered 'Sistema-NH', a specialized administrative platform for managing vaccine biological stock, patient immunization histories, and dose schedules at CDI Negra Hipólita.",
      "Built responsive, high-contrast dashboards using Vue 3, Vite, and Vuetify to streamline fast clinical record entry for medical personnel.",
      "Implemented rigorous form validation using Vee-Validate and custom rules to eliminate data entry errors in patient documentation.",
      "Structured statistical reporting views for vaccination coverage metrics across demographics."
    ],
    skills: ["Vue 3", "Vite", "Vuetify", "Pinia", "JavaScript", "Vee-Validate"]
  }
];

export const WORK_EXPERIENCE_ES: WorkExperience[] = [
  {
    role: "Desarrollador Web Full-Stack y Automatización Junior",
    company: "Desarrollo Web, Soluciones y Automatización",
    location: "Remoto / Venezuela",
    period: "2024 - Presente",
    description: [
      "Diseñó e implementó el 'Fondo de Ayuda Mutua', un sistema integral de administración financiera y fondos de auxilio para Industrias Rodanol S.A. utilizando Nuxt, Vuetify, Express y Supabase.",
      "Arquitectó 'Fluxora' y 'Academia Expresarte', plataformas web full-stack modernas con Nuxt 4, Vue 3, @nuxt/ui, Tailwind CSS, Express y bases de datos reactivas en Supabase.",
      "Construyó aplicaciones web financieras y utilitarias como 'DolarBase' (monitoreo de tasas de cambio en tiempo real con Pinia) y 'Clima-APP' (consumo de APIs REST meteorológicas con Tailwind CSS).",
      "Desarrolló bots y flujos de automatización autónomos en Python 3 y Node.js, destacando 'RandomCards' (cron workflows con GitHub Actions, Pillow y API v2 de X) y 'RandomDuel' (bot interactivo de Discord.js con slash commands).",
      "Estructuró arquitecturas modulares, endpoints RESTful, control de versiones con Git/GitFlow y buenas prácticas de desarrollo ágil."
    ],
    skills: ["Vue.js", "Nuxt (3 y 4)", "Node.js", "Express", "Supabase", "PostgreSQL", "Python 3", "GitHub Actions", "Tailwind CSS", "APIs REST", "Git"]
  },
  {
    role: "Desarrollador de Software — Sistemas de Salud",
    company: "CDI Negra Hipólita",
    location: "Venezuela",
    period: "2025",
    description: [
      "Desarrolló 'Sistema-NH', una plataforma administrativa especializada para la gestión de inventario de vacunas, historial de inmunización de pacientes y control de dosis en el CDI Negra Hipólita.",
      "Construyó dashboards responsivos con Vue 3, Vite y Vuetify para agilizar la entrada de expedientes por parte del personal de salud.",
      "Implementó validación rigurosa de formularios en el cliente con Vee-Validate y reglas personalizadas para evitar inconsistencias en la documentación clínica.",
      "Estructuró vistas de reportería estadística para métricas de cobertura de vacunación por grupos demográficos."
    ],
    skills: ["Vue 3", "Vite", "Vuetify", "Pinia", "JavaScript", "Vee-Validate"]
  }
];

export const EDUCATION_EN = [
  {
    degree: "Degree in Computer Engineering (Ingeniería en Informática)",
    school: "Universidad",
    year: "Graduated",
    highlights: ["Software Engineering", "Database Systems & Design", "Web Architecture", "Algorithms & Data Structures"]
  },
  {
    degree: "Universidad Desarrollo Web — FrontEnd Web Developer",
    school: "Udemy (Global Mentoring)",
    year: "Completed",
    highlights: ["HTML5 & Semantic Structure", "CSS3, Flexbox & CSS Grid", "JavaScript Moderno (ES6+) & DOM Manipulation", "Responsive Web Design"]
  }
];

export const EDUCATION_ES = [
  {
    degree: "Ingeniería en Informática",
    school: "Universidad",
    year: "Graduado",
    highlights: ["Ingeniería de Software", "Sistemas y Diseño de Bases de Datos", "Arquitectura Web", "Algoritmos y Estructuras de Datos"]
  },
  {
    degree: "Universidad Desarrollo Web — FrontEnd Web Developer",
    school: "Udemy (Global Mentoring)",
    year: "Completado",
    highlights: ["HTML5 y Maquetación Semántica", "CSS3, Flexbox y CSS Grid", "JavaScript Moderno (ES6+) y Manipulación del DOM", "Diseño Web Responsivo"]
  }
];

export const PROJECTS_EN: Project[] = [
  {
    id: "randomcards",
    title: "RandomCards (Automated X / Twitter Bot)",
    description: "Automated daily playing card generator and social publishing bot built with Python 3, GitHub Actions, Pillow, and the X / Twitter API.",
    fullDescription: "RandomCards is an autonomous publishing bot developed in Python 3.13 that generates a completely random playing card from a standard 52-card deck, renders a high-definition card graphic using Pillow (PIL), and publishes it to X (Twitter) once a day using scheduled GitHub Actions workflows. The system records daily publication records in a persistent CSV log without requiring a dedicated server.",
    category: "Open Source",
    technologies: ["Python 3", "GitHub Actions", "Pillow (PIL)", "Twitter API / X", "CSV", "Automation"],
    githubUrl: "https://github.com/Jesus-Ort/RandomCards",
    featured: true,
    year: "2026",
    metrics: "Autonomous daily card generation and social publishing pipeline",
    highlights: [
      "Scheduled serverless execution pipeline powered by GitHub Actions cron workflows",
      "Dynamic procedural card graphic generation and image synthesis using Pillow (PIL)",
      "Automated media upload and tweet publication via the X / Twitter API v2",
      "Persistent execution history and publication metrics logging in CSV format"
    ]
  },
  {
    id: "fluxora",
    title: "Fluxora — Personal Finance & Savings Tracker",
    description: "Modern full-stack web application designed to track income, expenses, and savings rules (50/30/20) with Nuxt 4, Vue 3, @nuxt/ui, and Supabase.",
    fullDescription: "Fluxora is a smart personal finance platform that helps users monitor income, categorized expenses, and automated savings targets (such as the 50/30/20 rule) so they always know how much they can safely spend. Built with the cutting-edge Nuxt 4 architecture, Nuxt UI, Tailwind CSS, Express backend services, and real-time Supabase database persistence.",
    category: "Full-Stack",
    technologies: ["Nuxt 4", "Vue 3", "Nuxt UI", "Tailwind CSS", "Express.js", "Supabase"],
    githubUrl: "https://github.com/Jesus-Ort/Fluxora",
    liveUrl: "https://fluxora.jesusortega.xyz/",
    featured: true,
    year: "2026",
    metrics: "Personal finance and 50/30/20 savings rule budget tracker with Nuxt 4 and Supabase",
    highlights: [
      "Cutting-edge Nuxt 4 project setup with Vue 3 Composition API",
      "Income and expense tracking with safe-to-spend calculation algorithms",
      "Sleek component architecture styled with Nuxt UI and Tailwind CSS",
      "Supabase authentication and real-time database integration"
    ]
  },
  {
    id: "academia-expresarte",
    title: "Academia Expresarte",
    description: "Educational academy web portal featuring online course catalogs, artistic workshop registration, and student inquiry management.",
    fullDescription: "Academia Expresarte is a modern educational website designed to showcase artistic academy courses, masterclasses, and workshops. Developed with Nuxt 4 and Tailwind CSS with an Express and Supabase backend to handle student registrations.",
    category: "Full-Stack",
    technologies: ["Nuxt 4", "Vue 3", "Nuxt UI", "Tailwind CSS", "Express.js", "Supabase"],
    githubUrl: "https://github.com/Jesus-Ort/Academia-Expresarte",
    liveUrl: "https://academia-expresarte.jesusortega.xyz/",
    featured: true,
    year: "2026",
    metrics: "Online course catalog and student registration portal",
    highlights: [
      "Dynamic course catalog with workshop schedules and instructor profiles",
      "Student registration forms with instant validation",
      "Modern, responsive aesthetic utilizing Nuxt UI and Tailwind CSS",
      "Backend integration with Express and Supabase database"
    ]
  },
  {
    id: "fondo-de-ayuda-mutua",
    title: "Fondo de Ayuda Mutua",
    description: "Comprehensive mutual aid fund management system developed for Industrias Rodanol S.A., handling employee contributions, loan applications, and financial balance sheets.",
    fullDescription: "Fondo de Ayuda Mutua is a full-stack financial management platform designed and engineered for the workers of Industrias Rodanol S.A. It provides centralized management for member contributions, loan requests, emergency assistance funds, balance calculation, and administrative accounting reports.",
    category: "Full-Stack",
    technologies: ["Nuxt.js", "Vue.js", "Vuetify", "Express.js", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/Jesus-Ort/Fondo-de-Ayuda-Mutua",
    liveUrl: "https://fdam.jesusortega.xyz/",
    featured: true,
    year: "2025 - 2026",
    metrics: "Production financial management system for Industrias Rodanol S.A.",
    highlights: [
      "Complete payroll contribution accounting and automated balance calculation",
      "Role-based authentication and secure member balance queries",
      "Express backend with Supabase/PostgreSQL database and REST endpoints",
      "Clean UI built with Nuxt and Vuetify components"
    ]
  },
  {
    id: "dolarbase",
    title: "DolarBase",
    description: "Fast currency converter and exchange rate monitor between US Dollars and Venezuelan Bolivars using official BCV rates.",
    fullDescription: "DolarBase is a responsive web utility designed for fast, accurate tracking and conversion between US Dollars and Venezuelan Bolivars using official Banco Central de Venezuela (BCV) rates. Built with Nuxt and Pinia, it offers instant bi-directional currency conversion and persistent user preference caching.",
    category: "Frontend",
    technologies: ["Nuxt", "Vue 3", "Vuetify", "Pinia", "Axios", "REST APIs"],
    githubUrl: "https://github.com/Jesus-Ort/DolarBase",
    liveUrl: "https://dolarbase.jesusortega.xyz/",
    featured: false,
    year: "2025 - 2026",
    metrics: "Fast Venezuelan exchange rate converter based on official BCV rates",
    highlights: [
      "Real-time API ingestion of official BCV exchange rates",
      "Bi-directional currency converter (USD <-> VES / Bolivars)",
      "Clean Vuetify interface optimized for both mobile and desktop screens",
      "Persistent user preference caching with Pinia"
    ]
  },
  {
    id: "sistema-nh",
    title: "Sistema-NH (CDI Negra Hipólita)",
    description: "Healthcare administrative system developed for CDI Negra Hipólita managing patient vaccination registries, dose administration, and vaccine stock inventory.",
    fullDescription: "Sistema-NH is a specialized healthcare management platform created for the CDI Negra Hipólita medical staff. It tracks pharmaceutical biological supplies, schedules multi-dose vaccination programs, validates patient records, and generates official immunization coverage reports.",
    category: "Frontend",
    technologies: ["Vue 3", "Vite", "Vuetify", "Pinia", "Vee-Validate", "JavaScript"],
    githubUrl: "https://github.com/Jesus-Ort/Sistema-NH",
    liveUrl: "https://convit.jesusortega.xyz/",
    featured: true,
    year: "2025",
    metrics: "Healthcare management & vaccine inventory system for CDI Negra Hipólita",
    highlights: [
      "Complete patient medical card and vaccination dose scheduling",
      "Real-time stock deduction and low-inventory warning alerts",
      "Robust form validation via Vee-Validate preventing clinic record errors",
      "Centralized client state with Pinia for fast record lookup"
    ]
  },
  {
    id: "randomduel",
    title: "RandomDuel (Discord Bot)",
    description: "Interactive Discord entertainment bot engineered with Node.js and Discord.js, featuring turn-based PvP duels and server automation.",
    fullDescription: "RandomDuel is a community entertainment bot for Discord developed in Node.js. It features interactive turn-based combat between server members, randomized equipment drops, leaderboard tracking, and slash command integration.",
    category: "Open Source",
    technologies: ["Node.js", "Discord.js", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/Jesus-Ort/RandomDuel",
    featured: false,
    year: "2025",
    metrics: "Interactive Discord entertainment bot with turn-based duels and commands",
    highlights: [
      "Interactive turn-based combat mechanics with custom embed message rendering",
      "Discord slash command handlers and event-driven architecture",
      "Player profile and score tracking logic"
    ]
  },
  {
    id: "clima-app",
    title: "Clima-APP",
    description: "Interactive weather forecasting application built with Vue 3 consuming live meteorological APIs to provide real-time weather metrics and forecasts.",
    fullDescription: "Clima-APP is a fast, responsive weather dashboard built with Vue 3, Vite, and Tailwind CSS. It connects to meteorological REST APIs to retrieve real-time temperatures, wind speed, humidity, atmospheric pressure, and multi-day weather forecasts.",
    category: "Frontend",
    technologies: ["Vue 3", "JavaScript", "OpenWeather API", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Jesus-Ort/Clima-APP",
    featured: false,
    year: "2025",
    metrics: "Interactive weather dashboard with live meteorological API data",
    highlights: [
      "Instant city search with dynamic weather icon mapping",
      "Key meteorological indicators: humidity, wind speed, pressure, and visibility",
      "Fast, lightweight bundle with Vue 3 and Vite"
    ]
  }
];

export const PROJECTS_ES: Project[] = [
  {
    id: "randomcards",
    title: "RandomCards (Bot Automatizado para X / Twitter)",
    description: "Bot automatizado de generación diaria de cartas de baraja y publicación en X (Twitter) desarrollado con Python 3, GitHub Actions, Pillow y la API de X.",
    fullDescription: "RandomCards es un bot de publicación autónoma programado en Python 3.13 que selecciona una carta aleatoria de una baraja estándar de 52 naipes, genera una representación gráfica en alta resolución mediante la biblioteca Pillow (PIL) y la publica diariamente en X (Twitter) a través de flujos programados en GitHub Actions. Registra cada publicación en un archivo CSV persistente sin requerir servidores dedicados.",
    category: "Open Source",
    technologies: ["Python 3", "GitHub Actions", "Pillow (PIL)", "Twitter API / X", "CSV", "Automatización"],
    githubUrl: "https://github.com/Jesus-Ort/RandomCards",
    featured: true,
    year: "2026",
    metrics: "Pipeline autónomo de generación gráfica y publicación diaria en X",
    highlights: [
      "Pipeline de ejecución automatizada sin servidor mediante GitHub Actions (cron workflows)",
      "Motor de generación gráfica procedural y síntesis de imágenes de cartas con Pillow (PIL)",
      "Integración de carga de imágenes y publicación programada con la API de X / Twitter v2",
      "Trazabilidad e historial de publicaciones persistente en formato CSV estructurado"
    ]
  },
  {
    id: "fluxora",
    title: "Fluxora — Control Financiero y Regla de Ahorro",
    description: "Aplicación web full-stack para el control inteligente de ingresos, gastos y reglas de ahorro (50/30/20) con Nuxt 4, Vue 3, @nuxt/ui y Supabase.",
    fullDescription: "Fluxora es una plataforma de finanzas personales diseñada para ayudar a los usuarios a registrar ingresos, clasificar gastos y aplicar reglas de ahorro personalizadas (como la regla 50/30/20) para conocer en todo momento su presupuesto seguro de gasto. Desarrollada con la arquitectura de vanguardia de Nuxt 4, Nuxt UI, Tailwind CSS, servicios backend en Express y base de datos reactiva en Supabase.",
    category: "Full-Stack",
    technologies: ["Nuxt 4", "Vue 3", "Nuxt UI", "Tailwind CSS", "Express.js", "Supabase"],
    githubUrl: "https://github.com/Jesus-Ort/Fluxora",
    liveUrl: "https://fluxora.jesusortega.xyz/",
    featured: true,
    year: "2026",
    metrics: "Control de finanzas personales y regla de ahorro 50/30/20 con Nuxt 4 y Supabase",
    highlights: [
      "Configuración moderna en Nuxt 4 con Composition API de Vue 3",
      "Cálculo automatizado de presupuesto disponible y gastos categorizados",
      "Arquitectura de componentes estilizada con Nuxt UI y Tailwind CSS",
      "Autenticación e integración de base de datos en tiempo real con Supabase"
    ]
  },
  {
    id: "academia-expresarte",
    title: "Academia Expresarte",
    description: "Portal web para la Academia Expresarte con catálogo de cursos y talleres artísticos, inscripciones en línea y gestión de consultas.",
    fullDescription: "Academia Expresarte es un portal web moderno diseñado para la difusión de cursos, talleres y clases maestras de arte. Desarrollado con Nuxt 4 y Tailwind CSS junto a un backend con Express y Supabase para registrar y gestionar a los estudiantes.",
    category: "Full-Stack",
    technologies: ["Nuxt 4", "Vue 3", "Nuxt UI", "Tailwind CSS", "Express.js", "Supabase"],
    githubUrl: "https://github.com/Jesus-Ort/Academia-Expresarte",
    liveUrl: "https://academia-expresarte.jesusortega.xyz/",
    featured: true,
    year: "2026",
    metrics: "Catálogo de cursos en línea y portal de inscripción estudiantil",
    highlights: [
      "Catálogo dinámico de cursos con horarios de talleres y perfiles de instructores",
      "Formularios de inscripción para alumnos con validación inmediata",
      "Diseño moderno y responsivo utilizando Nuxt UI y Tailwind CSS",
      "Integración backend con Express y base de datos Supabase"
    ]
  },
  {
    id: "fondo-de-ayuda-mutua",
    title: "Fondo de Ayuda Mutua",
    description: "Sistema integral de gestión de fondo de ayuda mutua desarrollado para Industrias Rodanol S.A., administrando aportes de nómina, solicitudes de préstamos y balances contables.",
    fullDescription: "Fondo de Ayuda Mutua es una plataforma de gestión financiera full-stack diseñada y construida para los trabajadores de Industrias Rodanol S.A. Centraliza la administración de aportes mensuales, solicitudes de préstamos, fondos de auxilio ante emergencias, balances contables y reportería administrativa.",
    category: "Full-Stack",
    technologies: ["Nuxt.js", "Vue.js", "Vuetify", "Express.js", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/Jesus-Ort/Fondo-de-Ayuda-Mutua",
    liveUrl: "https://fdam.jesusortega.xyz/",
    featured: true,
    year: "2025 - 2026",
    metrics: "Sistema de gestión financiera en producción para Industrias Rodanol S.A.",
    highlights: [
      "Contabilidad de aportes de nómina y cálculo automatizado de intereses y saldos",
      "Autenticación basada en roles y consultas seguras de balance por miembro",
      "Backend en Express con base de datos en Supabase/PostgreSQL y endpoints REST",
      "Interfaz fluida construida con componentes Nuxt y Vuetify"
    ]
  },
  {
    id: "dolarbase",
    title: "DolarBase",
    description: "Conversor ágil de divisas y monitor cambiario entre dólares y bolívares venezolanos basado en la tasa oficial del BCV.",
    fullDescription: "DolarBase es una utilidad web desarrollada para la conversión rápida y exacta entre dólares estadounidenses y bolívares tomando como referencia la tasa oficial del Banco Central de Venezuela (BCV). Construida con Nuxt y Pinia, ofrece conversor bidireccional instantáneo y caché de preferencias en el cliente.",
    category: "Frontend",
    technologies: ["Nuxt", "Vue 3", "Vuetify", "Pinia", "Axios", "REST APIs"],
    githubUrl: "https://github.com/Jesus-Ort/DolarBase",
    liveUrl: "https://dolarbase.jesusortega.xyz/",
    featured: false,
    year: "2025 - 2026",
    metrics: "Conversor ágil de dólares a bolívares con tasa oficial del BCV",
    highlights: [
      "Consumo en tiempo real de la tasa oficial del Banco Central de Venezuela (BCV)",
      "Calculadora de conversión bidireccional inmediata (USD <-> VES / Bolívares)",
      "Interfaz con Vuetify optimizada para visualización móvil y de escritorio",
      "Persistencia de preferencias del usuario con Pinia"
    ]
  },
  {
    id: "sistema-nh",
    title: "Sistema-NH (CDI Negra Hipólita)",
    description: "Sistema administrativo de salud desarrollado para el CDI Negra Hipólita que gestiona el registro de vacunación de pacientes y el inventario de biológicos.",
    fullDescription: "Sistema-NH es una plataforma de gestión clínica especializada creada para el personal médico del CDI Negra Hipólita. Permite controlar el inventario de vacunas e insumos, agendar y registrar dosis aplicadas a pacientes, validar expedientes y emitir estadísticas de cobertura sanitaria.",
    category: "Frontend",
    technologies: ["Vue 3", "Vite", "Vuetify", "Pinia", "Vee-Validate", "JavaScript"],
    githubUrl: "https://github.com/Jesus-Ort/Sistema-NH",
    liveUrl: "https://convit.jesusortega.xyz/",
    featured: true,
    year: "2025",
    metrics: "Sistema administrativo e inventario de vacunas para el CDI Negra Hipólita",
    highlights: [
      "Ficha clínica de pacientes y control cronológico de esquema de vacunación",
      "Descuento automático de stock y alertas preventivas de bajo inventario",
      "Validación exhaustiva de formularios con Vee-Validate evitando errores clínicos",
      "Gestión de estado centralizada con Pinia para búsquedas instantáneas"
    ]
  },
  {
    id: "randomduel",
    title: "RandomDuel (Bot de Discord)",
    description: "Bot interactivo de entretenimiento para Discord programado en Node.js y Discord.js, con duelos PvP por turnos y automatización de comandos.",
    fullDescription: "RandomDuel es un bot de entretenimiento comunitario para servidores de Discord desarrollado en Node.js. Ofrece mecánicas de combate por turnos entre usuarios del servidor, botín aleatorio de armas, tabla de posiciones y comandos de barra (slash commands).",
    category: "Open Source",
    technologies: ["Node.js", "Discord.js", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/Jesus-Ort/RandomDuel",
    featured: false,
    year: "2025",
    metrics: "Bot interactivo de entretenimiento para Discord con duelos por turnos y comandos",
    highlights: [
      "Mecánicas de combate por turnos interactivas mediante mensajes embebidos",
      "Manejadores de slash commands y arquitectura orientada a eventos en Discord.js",
      "Lógica de estadísticas de jugadores y registro de victorias"
    ]
  },
  {
    id: "clima-app",
    title: "Clima-APP",
    description: "Aplicación interactiva de pronóstico del clima construida con Vue 3 consumiendo APIs meteorológicas en vivo para brindar métricas y predicciones.",
    fullDescription: "Clima-APP es un tablero meteorológico ágil desarrollado con Vue 3, Vite y Tailwind CSS. Se conecta a APIs REST del clima para consultar temperaturas actuales, velocidad del viento, humedad atmosférica, presión barométrica y previsiones para los próximos días.",
    category: "Frontend",
    technologies: ["Vue 3", "JavaScript", "OpenWeather API", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Jesus-Ort/Clima-APP",
    featured: false,
    year: "2025",
    metrics: "Dashboard meteorológico interactivo con datos de API climática en vivo",
    highlights: [
      "Búsqueda instantánea por ciudad con mapeo dinámico de iconos climáticos",
      "Indicadores meteorológicos clave: humedad, velocidad del viento y sensación térmica",
      "Bundle ultraligero y de carga rápida desarrollado con Vue 3 y Vite"
    ]
  }
];

export const SKILL_CATEGORIES_EN: SkillCategory[] = [
  {
    category: "Frontend & UI",
    description: "Modern, reactive web interfaces built with Vue, Nuxt, TypeScript, and utility-first styling.",
    skills: [
      { name: "Vue.js (Vue 3, Composition API)", level: "Expert", years: "3+ yrs" },
      { name: "Nuxt.js (Nuxt 3 & Nuxt 4)", level: "Advanced", years: "2+ yrs" },
      { name: "Nuxt UI (@nuxt/ui)", level: "Advanced", years: "2+ yrs" },
      { name: "JavaScript (ES6+)", level: "Expert", years: "4+ yrs" },
      { name: "TypeScript", level: "Advanced", years: "2+ yrs" },
      { name: "Tailwind CSS", level: "Expert", years: "3+ yrs" },
      { name: "Vuetify", level: "Advanced", years: "2+ yrs" },
      { name: "Pinia (State Management)", level: "Advanced", years: "2+ yrs" },
      { name: "HTML5 & Responsive Layouts", level: "Expert", years: "4+ yrs" }
    ]
  },
  {
    category: "Backend & Systems",
    description: "Server-side services, RESTful APIs, and backend integrations.",
    skills: [
      { name: "Node.js", level: "Advanced", years: "3+ yrs" },
      { name: "Express.js", level: "Advanced", years: "3+ yrs" },
      { name: "RESTful API Design", level: "Advanced", years: "3+ yrs" },
      { name: "Supabase (Auth, RLS, Storage)", level: "Advanced", years: "2+ yrs" },
      { name: "Python", level: "Proficient", years: "2+ yrs" },
      { name: "Discord.js (Bot Architecture)", level: "Advanced", years: "2+ yrs" }
    ]
  },
  {
    category: "Databases & Tools",
    description: "Data persistence, relational databases, tooling, and developer workflows.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", years: "2+ yrs" },
      { name: "MySQL", level: "Advanced", years: "2+ yrs" },
      { name: "Supabase Database", level: "Advanced", years: "2+ yrs" },
      { name: "Git & GitHub", level: "Advanced", years: "4+ yrs" },
      { name: "Vite", level: "Advanced", years: "2+ yrs" },
      { name: "Postman & API Testing", level: "Advanced", years: "3+ yrs" },
      { name: "Linux & Bash", level: "Proficient", years: "2+ yrs" }
    ]
  },
  {
    category: "Engineering Practices",
    description: "Software engineering methodologies and architectural discipline.",
    skills: [
      { name: "Component Architecture", level: "Advanced", years: "3+ yrs" },
      { name: "Clean Code & Refactoring", level: "Advanced", years: "3+ yrs" },
      { name: "Form Validation (Vee-Validate)", level: "Advanced", years: "2+ yrs" },
      { name: "Relational Database Modeling", level: "Advanced", years: "2+ yrs" }
    ]
  }
];

export const SKILL_CATEGORIES_ES: SkillCategory[] = [
  {
    category: "Frontend e Interfaz",
    description: "Interfaces web modernas y reactivas desarrolladas con Vue, Nuxt, TypeScript y diseño basado en utilidades.",
    skills: [
      { name: "Vue.js (Vue 3, Composition API)", level: "Expert", years: "3+ años" },
      { name: "Nuxt.js (Nuxt 3 y Nuxt 4)", level: "Advanced", years: "2+ años" },
      { name: "Nuxt UI (@nuxt/ui)", level: "Advanced", years: "2+ años" },
      { name: "JavaScript (ES6+)", level: "Expert", years: "4+ años" },
      { name: "TypeScript", level: "Advanced", years: "2+ años" },
      { name: "Tailwind CSS", level: "Expert", years: "3+ años" },
      { name: "Vuetify", level: "Advanced", years: "2+ años" },
      { name: "Pinia (Gestión de Estado)", level: "Advanced", years: "2+ años" },
      { name: "HTML5 y Diseño Responsivo", level: "Expert", years: "4+ años" }
    ]
  },
  {
    category: "Backend y APIs",
    description: "Servicios del lado del servidor, APIs RESTful e integraciones de backend.",
    skills: [
      { name: "Node.js", level: "Advanced", years: "3+ años" },
      { name: "Express.js", level: "Advanced", years: "3+ años" },
      { name: "Diseño de APIs RESTful", level: "Advanced", years: "3+ años" },
      { name: "Supabase (Auth, RLS, Storage)", level: "Advanced", years: "2+ años" },
      { name: "Python", level: "Proficient", years: "2+ años" },
      { name: "Discord.js (Arquitectura de Bots)", level: "Advanced", years: "2+ años" }
    ]
  },
  {
    category: "Bases de Datos y Herramientas",
    description: "Persistencia de datos, bases relacionales, herramientas y flujos de desarrollo.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", years: "2+ años" },
      { name: "MySQL", level: "Advanced", years: "2+ años" },
      { name: "Base de Datos Supabase", level: "Advanced", years: "2+ años" },
      { name: "Git y GitHub", level: "Advanced", years: "4+ años" },
      { name: "Vite", level: "Advanced", years: "2+ años" },
      { name: "Postman y Pruebas de API", level: "Advanced", years: "3+ años" },
      { name: "Linux y Bash", level: "Proficient", years: "2+ años" }
    ]
  },
  {
    category: "Prácticas de Ingeniería",
    description: "Metodologías de ingeniería de software y buenas prácticas de desarrollo.",
    skills: [
      { name: "Arquitectura de Componentes", level: "Advanced", years: "3+ años" },
      { name: "Código Limpio y Refactorización", level: "Advanced", years: "3+ años" },
      { name: "Validación de Formularios (Vee-Validate)", level: "Advanced", years: "2+ años" },
      { name: "Modelado Relacional de Datos", level: "Advanced", years: "2+ años" }
    ]
  }
];

export const UI_TRANSLATIONS = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      role: "Full-Stack Developer",
      resumeBtn: "Resume.pdf",
      toggleLangAria: "Cambiar a Español",
      langLabel: "ES",
    },
    hero: {
      statusChip: "Available for Junior Roles, Full-Stack Development & Projects",
      headlinePrefix: "Building clean, resilient web platforms with ",
      headlineHighlight: "Vue, Nuxt & Node.js",
      headlineSuffix: ".",
      bioTextPrefix: "Hello, I am ",
      bioTextSuffix: ", a Junior Full-Stack Web Developer and Computer Engineer specializing in Vue.js, Nuxt (including Nuxt 4), Node.js, Express, and Supabase.",
      exploreProjects: "Explore Projects",
      downloadResume: "Download Resume (PDF)",
      downloadCV: "Download CV",
      previewCV: "Preview CV",
      hireMe: "Contact Me",
      connectLabel: "Connect:",
    },
    about: {
      badge: "Biography & Background",
      heading: "Building modern web software with clarity and precision.",
      tenetsTitle: "Core Engineering Principles",
      tenets: [
        {
          title: "Modern Component Architecture",
          desc: "Clean, modular Vue 3 & Nuxt components leveraging Composition API and reactive stores."
        },
        {
          title: "Fluid UX with Nuxt UI & Tailwind",
          desc: "Accessible, responsive interfaces using Nuxt UI, Tailwind CSS, and Vuetify tailored for web & mobile."
        },
        {
          title: "Structured APIs & State",
          desc: "Robust REST endpoints with Express, type-safe data modeling, and centralized Pinia stores."
        },
        {
          title: "Cloud Database & Security",
          desc: "Relational PostgreSQL database schemas with Supabase, row-level security, and authentication."
        }
      ],
      downloadATS: "Download PDF Resume (ATS-Friendly)",
      viewOnline: "View Full Resume Online",
      workExpTitle: "Work Experience",
      workExpBadge: "Full-Stack & Systems",
      eduTitle: "Education & Credentials",
      eduTopics: "Key Topics:",
    },
    projects: {
      badge: "Portfolio & Repositories",
      heading: "Featured Web Development Projects",
      subtitle: "Production web applications, management systems, and developer projects from my GitHub.",
      searchPlaceholder: "Search tech or project (e.g. Nuxt, Supabase)...",
      categories: {
        'All': 'All',
        'Full-Stack': 'Full-Stack',
        'Frontend': 'Frontend',
        'Cloud & Backend': 'Backend & Data',
        'Open Source': 'Open Source',
      },
      clearSearch: "Clear search",
      noProjectsFound: "No projects found matching",
      resetFilters: "Try another term or reset filters.",
      viewCode: "Source Code",
      details: "Details & Specs",
      liveDemo: "Live Demo",
    },
    skills: {
      badge: "Technical Competencies",
      heading: "Skills & Technology Matrix",
      subtitle: "A detailed breakdown of technical competencies, frameworks, and developer workflows.",
      filterPlaceholder: "Filter skill (e.g. Vue, Nuxt, Express)...",
      levels: {
        Expert: "Expert",
        Advanced: "Advanced",
        Proficient: "Proficient",
      },
      downloadFullCV: "Download Full Technical CV",
    },
    contact: {
      badge: "Direct Contact & Inquiries",
      heading: "Let's Build Something Great Together",
      subtitle: "Whether you have an open Full-Stack engineering opportunity, freelance project, or want to discuss technical collaboration, feel free to reach out.",
      responseSla: "Response Guarantee: Within 24 business hours",
      slaGuarantee: "Response Guarantee:",
      slaText: "Within 24 business hours. Automated receipt acknowledgment dispatched instantly.",
      preferencesTitle: "Candidate Quick Overview",
      prefRoles: "Target Roles: Junior Full-Stack Developer, Frontend Engineer (Vue/Nuxt), Junior Backend Developer",
      prefWorkModel: "Work Models: Remote (Global/LATAM) or Hybrid",
      prefStacks: "Primary Stacks: Vue.js, Nuxt 3/4, Node.js, Express, Supabase, PostgreSQL, Tailwind CSS",
      directChannels: "Direct Channels & Contact Details",
      directSubtitle: "Reach out directly through email, GitHub, or LinkedIn, or send a brief message below.",
      directEmail: "Direct Email",
      location: "Location",
      formTitle: "Project & Collaboration Inquiry",
      formSubtitle: "Fill out the details below to initiate contact or schedule a conversation.",
      fullName: "Full Name *",
      fullNamePlaceholder: "e.g. Sarah Connor / Alex Rivera",
      yourName: "Your Name",
      namePlaceholder: "e.g. Sarah Connor / Alex Rivera",
      emailAddress: "Contact Email Address *",
      emailPlaceholder: "e.g. s.connor@example.com",
      yourEmail: "Your Email",
      company: "Company / Organization",
      companyPlaceholder: "e.g. Tech Studio or Independent Project",
      opportunityType: "Opportunity Type *",
      leadType: "Opportunity Type",
      timeline: "Target Start Timeline *",
      budget: "Estimated Budget / Rate (Optional)",
      budgetPlaceholder: "e.g. Competitive market rate / project budget",
      message: "Message / Project Scope *",
      messagePlaceholder: "Briefly detail the project requirements, technical scope, or role details...",
      sendBtn: "Send Message",
      submitBtn: "Submit Inquiry",
      sending: "Sending message...",
      submitting: "Dispatching inquiry...",
      successHeading: "Message Successfully Dispatched!",
      successText: "Thank you for reaching out. Your inquiry has been received and I will reply shortly.",
      leadSuccessTitle: "Inquiry Dispatched!",
      leadSuccessText: "Your inquiry has been received and indexed. A confirmation summary is generated below.",
      emailPreview: "Dispatch & Email Summary",
      toLabel: "To:",
      subjectLabel: "Subject:",
      timelineLabel: "Timeline:",
      sendBackup: "Send via Email Client (Backup)",
      copyBrief: "Copy Message Brief",
      submitAnother: "Submit Another Message",
      alertTriggered: "Direct Notification Active",
      securedNote: "Guaranteed confidential delivery directly to Jesús Ortega:",
      ticketId: "Reference Ticket:",
      timeReceived: "Recorded At:",
      copySummary: "Copy Summary",
      copied: "Copied!",
      openEmailClient: "Open in Email Client",
      openGmail: "Open in Gmail (Draft Ready)",
      directMailHint: "Prefer writing directly from your preferred email app?",
      dispatchSuccessText: "Email successfully transmitted to Jesús Ortega's inbox!",
      activationNoticeText: "FormSubmit has dispatched a first-time activation link to your inbox to enable automated delivery.",
      fallbackText: "You can also dispatch directly through Gmail or your native email client with all fields pre-filled below:",
      sendAnother: "Send Another Message",
      validationRequired: "Please fill in all required fields (Name, Email, and Message).",
      validationEmail: "Please enter a valid email address.",
      botVerificationTitle: "Anti-Spam Verification",
      botVerificationQuestion: "Security question:",
      botVerificationPlaceholder: "Type number...",
      botVerificationError: "Anti-spam verification failed. Please check the answer to the security question.",
      botRateLimitError: "Too many messages sent. Please wait a moment before trying again.",
      botTooFastError: "Submission was too fast. Please take a moment to review your message before sending.",
      antiBotActive: "Anti-Bot Protection Active",
      leadTypes: {
        'Full-time Role (Junior / Full-Stack)': 'Full-time Role (Junior / Full-Stack)',
        'Web Development / Frontend / Backend': 'Web Development / Frontend / Backend',
        'Freelance / Project-Based': 'Freelance / Project-Based',
        'Technical Consulting / Advisory': 'Technical Consulting / Advisory',
        'General Inquiry / Introduction': 'General Inquiry / Introduction',
      },
      timelines: {
        'Immediate (Within 2-4 weeks)': 'Immediate (Within 2-4 weeks)',
        'Short-term (1-2 months)': 'Short-term (1-2 months)',
        'Next Quarter / Planning Ahead': 'Next Quarter / Planning Ahead',
        'Flexible / Exploratory': 'Flexible / Exploratory',
      }
    },
    footer: {
      brandSub: "Junior Full-Stack Web Developer and Computer Engineer specializing in Vue, Nuxt, Node.js, Express, and Supabase.",
      downloadResume: "Download Resume (PDF)",
      viewCV: "View CV",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      scrollUp: "Scroll back to top",
      backToTop: "Scroll back to top",
      copyright: "All rights reserved.",
      rights: "All rights reserved.",
    },
    resumeModal: {
      atsBadge: "ATS Optimized",
      title: "Jesús Ortega — Curriculum Vitae",
      copyText: "Copy Text",
      copied: "Copied!",
      print: "Print",
      downloadPDF: "Download PDF",
      profSummary: "Professional Summary",
      techCompetencies: "Technical Core Competencies",
      frontendArch: "Frontend & UI:",
      backendApis: "Backend & Systems:",
      databasesStorage: "Databases & Tools:",
      cloudDevOps: "Engineering Practices:",
      workExp: "Professional Work Experience",
      eduHonors: "Education & Credentials",
      docFooter: "Official candidate documentation for Jesús Ortega",
      downloadPdfFile: "Download PDF File (.pdf)",
    },
    projectModal: {
      highlights: "Key Engineering Highlights",
      technologies: "Technology Stack & Tooling",
      viewSource: "View Source Repository",
      liveDemo: "Live Demo",
      close: "Close",
    },
    toast: {
      pdfDownloaded: "Resume PDF generated & downloaded successfully!",
      pdfGenerating: "Generating resume... please wait.",
    }
  },
  es: {
    nav: {
      about: "Acerca de",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      role: "Desarrollador Full-Stack",
      resumeBtn: "Curriculum.pdf",
      toggleLangAria: "Switch to English",
      langLabel: "EN",
    },
    hero: {
      statusChip: "Disponible para Roles Junior, Desarrollo Full-Stack y Proyectos",
      headlinePrefix: "Construyendo aplicaciones web limpias y escalables con ",
      headlineHighlight: "Vue, Nuxt y Node.js",
      headlineSuffix: ".",
      bioTextPrefix: "Hola, soy ",
      bioTextSuffix: ", desarrollador web full-stack junior e ingeniero en informática especializado en Vue.js, Nuxt (incluyendo Nuxt 4), Node.js, Express y Supabase.",
      exploreProjects: "Explorar Proyectos",
      downloadResume: "Descargar CV (PDF)",
      downloadCV: "Descargar CV",
      previewCV: "Ver CV en Línea",
      hireMe: "Contactar",
      connectLabel: "Conectar:",
    },
    about: {
      badge: "Biografía y Perfil",
      heading: "Construyendo software web moderno con claridad y rigor técnico.",
      tenetsTitle: "Principios Clave de Desarrollo",
      tenets: [
        {
          title: "Arquitectura de Componentes Moderna",
          desc: "Componentes limpios y modulares en Vue 3 y Nuxt utilizando Composition API y almacenes reactivos."
        },
        {
          title: "UX Fluida con Nuxt UI y Tailwind",
          desc: "Interfaces accesibles y adaptativas con Nuxt UI, Tailwind CSS y Vuetify optimizadas para web y móvil."
        },
        {
          title: "APIs y Estado Estructurados",
          desc: "Endpoints REST robustos con Express, modelado de datos seguro y gestión de estado centralizada con Pinia."
        },
        {
          title: "Bases de Datos Cloud y Seguridad",
          desc: "Esquemas relacionales en PostgreSQL con Supabase, políticas de seguridad por fila (RLS) y autenticación."
        }
      ],
      downloadATS: "Descargar CV en PDF (Optimizado para ATS)",
      viewOnline: "Ver CV Completo en Línea",
      workExpTitle: "Experiencia Laboral",
      workExpBadge: "Full-Stack y Sistemas",
      eduTitle: "Educación y Títulos",
      eduTopics: "Temas Clave:",
    },
    projects: {
      badge: "Portafolio y Repositorios",
      heading: "Proyectos Destacados de Desarrollo Web",
      subtitle: "Aplicaciones web en producción, sistemas de gestión y proyectos de mi autoría en GitHub.",
      searchPlaceholder: "Buscar tecnología o proyecto (ej. Nuxt, Supabase)...",
      categories: {
        'All': 'Todos',
        'Full-Stack': 'Full-Stack',
        'Frontend': 'Frontend',
        'Cloud & Backend': 'Backend y Datos',
        'Open Source': 'Código Abierto',
      },
      clearSearch: "Limpiar búsqueda",
      noProjectsFound: "No se encontraron proyectos que coincidan con",
      resetFilters: "Prueba con otro término o reinicia los filtros.",
      viewCode: "Código Fuente",
      details: "Detalles y Arquitectura",
      liveDemo: "Demostración en Vivo",
    },
    skills: {
      badge: "Competencias Técnicas",
      heading: "Matriz de Habilidades y Tecnologías",
      subtitle: "Un desglose detallado de competencias técnicas, frameworks y flujos de trabajo de desarrollo.",
      filterPlaceholder: "Filtrar habilidad (ej. Vue, Nuxt, Express)...",
      levels: {
        Expert: "Experto",
        Advanced: "Avanzado",
        Proficient: "Competente",
      },
      downloadFullCV: "Descargar CV Técnico Completo",
    },
    contact: {
      badge: "Contacto Directo y Oportunidades",
      heading: "¿Construimos una solución de software juntos?",
      subtitle: "Ya sea para una oportunidad laboral full-stack, desarrollo de proyecto web o consultoría técnica, estaré encantado de conversar.",
      responseSla: "Garantía de Respuesta: Dentro de 24 horas hábiles",
      slaGuarantee: "Garantía de Respuesta:",
      slaText: "Dentro de 24 horas hábiles. Acuse de recibo automático enviado al instante.",
      preferencesTitle: "Resumen Rápido del Perfil",
      prefRoles: "Roles Objetivo: Desarrollador Web Full-Stack Junior, Frontend (Vue/Nuxt), Desarrollador Backend Junior",
      prefWorkModel: "Modalidad: Remoto (Global/LATAM) o Híbrido",
      prefStacks: "Stacks Principales: Vue.js, Nuxt 3/4, Node.js, Express, Supabase, PostgreSQL, Tailwind CSS",
      directChannels: "Canales Directos y Datos de Contacto",
      directSubtitle: "Comuníquese directamente a través de correo electrónico, GitHub o LinkedIn, o envíe un mensaje abajo.",
      directEmail: "Correo Directo",
      location: "Ubicación",
      formTitle: "Formulario de Contacto y Proyectos",
      formSubtitle: "Complete los detalles para iniciar contacto o coordinar una conversación técnica.",
      fullName: "Nombre Completo *",
      fullNamePlaceholder: "ej. Laura Sánchez / Carlos Méndez",
      yourName: "Tu Nombre",
      namePlaceholder: "ej. Laura Sánchez / Carlos Méndez",
      emailAddress: "Correo Electrónico de Contacto *",
      emailPlaceholder: "ej. contacto@ejemplo.com",
      yourEmail: "Tu Correo",
      company: "Empresa / Organización",
      companyPlaceholder: "ej. Agencia Web o Proyecto Independiente",
      opportunityType: "Tipo de Oportunidad *",
      leadType: "Tipo de Oportunidad",
      timeline: "Plazo de Inicio Deseado *",
      budget: "Presupuesto o Rango Estimado (Opcional)",
      budgetPlaceholder: "ej. Tarifa de mercado / presupuesto por proyecto",
      message: "Mensaje o Alcance del Proyecto *",
      messagePlaceholder: "Describe brevemente los requerimientos, alcance técnico o expectativas del puesto...",
      sendBtn: "Enviar Mensaje Directo",
      submitBtn: "Enviar Consulta",
      sending: "Enviando mensaje...",
      submitting: "Despachando consulta...",
      successHeading: "¡Mensaje Enviado con Éxito!",
      successText: "Gracias por comunicarse. Su mensaje ha sido recibido y responderé a la brevedad posible.",
      leadSuccessTitle: "¡Consulta Recibida con Éxito!",
      leadSuccessText: "Su consulta ha sido registrada. A continuación se muestra un resumen de la información enviada.",
      emailPreview: "Resumen del Envío y Correo",
      toLabel: "Para:",
      subjectLabel: "Asunto:",
      timelineLabel: "Plazo:",
      sendBackup: "Enviar por Cliente de Correo (Alternativa)",
      copyBrief: "Copiar Resumen del Mensaje",
      submitAnother: "Enviar Otro Mensaje",
      alertTriggered: "Notificación Directa Activa",
      securedNote: "Entrega confidencial garantizada directamente a Jesús Ortega:",
      ticketId: "Ticket de Referencia:",
      timeReceived: "Registrado el:",
      copySummary: "Copiar Resumen",
      copied: "¡Copiado!",
      openEmailClient: "Abrir en Cliente de Correo",
      openGmail: "Abrir en Gmail (Borrador Listo)",
      directMailHint: "¿Prefieres escribir directamente desde tu gestor de correo?",
      dispatchSuccessText: "¡Correo transmitido exitosamente al buzón de Jesús Ortega!",
      activationNoticeText: "FormSubmit ha enviado un correo con enlace de activación a la bandeja de entrada para autorizar entregas automáticas futuras.",
      fallbackText: "También puedes enviar tu mensaje al instante con el borrador redactado mediante Gmail o tu gestor de correo:",
      sendAnother: "Enviar Otro Mensaje",
      validationRequired: "Por favor complete todos los campos requeridos (Nombre, Correo y Mensaje).",
      validationEmail: "Por favor ingrese una dirección de correo válida.",
      botVerificationTitle: "Verificación Antispam",
      botVerificationQuestion: "Pregunta de seguridad:",
      botVerificationPlaceholder: "Escribe el número...",
      botVerificationError: "Verificación antispam incorrecta. Por favor responde la pregunta de seguridad.",
      botRateLimitError: "Has enviado varios mensajes recientemente. Por favor espera un momento antes de reintentar.",
      botTooFastError: "El formulario se envió demasiado rápido. Por favor tómate un momento antes de enviar.",
      antiBotActive: "Protección Antispam Activa",
      leadTypes: {
        'Puesto a Tiempo Completo (Junior / Full-Stack)': 'Puesto a Tiempo Completo (Junior / Full-Stack)',
        'Desarrollo Web / Frontend / Backend': 'Desarrollo Web / Frontend / Backend',
        'Contrato / Proyecto Freelance': 'Contrato / Proyecto Freelance',
        'Consultoría o Asesoría Técnica': 'Consultoría o Asesoría Técnica',
        'Consulta General / Saludo': 'Consulta General / Saludo',
      },
      timelines: {
        'Inmediata (En 2-4 semanas)': 'Inmediata (En 2-4 semanas)',
        'Corto Plazo (1-2 meses)': 'Corto Plazo (1-2 meses)',
        'Próximo Trimestre / En Planificación': 'Próximo Trimestre / En Planificación',
        'Flexible / Exploratoria': 'Flexible / Exploratoria',
      }
    },
    footer: {
      brandSub: "Desarrollador Web Full-Stack Junior e Ingeniero en Informática especializado en Vue, Nuxt, Node.js, Express y Supabase.",
      downloadResume: "Descargar CV (PDF)",
      viewCV: "Ver CV",
      about: "Acerca de",
      projects: "Proyectos",
      contact: "Contacto",
      scrollUp: "Volver arriba",
      backToTop: "Volver arriba",
      copyright: "Todos los derechos reservados.",
      rights: "Todos los derechos reservados.",
    },
    resumeModal: {
      atsBadge: "Optimizado ATS",
      title: "Jesús Ortega — Curriculum Vitae",
      copyText: "Copiar Texto",
      copied: "¡Copiado!",
      print: "Imprimir",
      downloadPDF: "Descargar PDF",
      profSummary: "Resumen Profesional",
      techCompetencies: "Competencias Técnicas Clave",
      frontendArch: "Frontend e Interfaz:",
      backendApis: "Backend y APIs:",
      databasesStorage: "Bases de Datos y Herramientas:",
      cloudDevOps: "Prácticas de Ingeniería:",
      workExp: "Experiencia Laboral Profesional",
      eduHonors: "Educación y Títulos",
      docFooter: "Documento oficial del candidato Jesús Ortega",
      downloadPdfFile: "Descargar Archivo PDF (.pdf)",
    },
    projectModal: {
      highlights: "Aspectos Destacados de Ingeniería",
      technologies: "Tecnologías y Herramientas",
      viewSource: "Ver Código Fuente",
      liveDemo: "Demostración en Vivo",
      close: "Cerrar",
    },
    toast: {
      pdfDownloaded: "¡Currículum PDF generado y descargado con éxito!",
      pdfGenerating: "Generando currículum... por favor espera.",
    }
  }
};

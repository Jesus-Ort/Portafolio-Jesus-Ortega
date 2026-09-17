# 🚀 Portfolio Profesional — Jesús Ortega

> **Ingeniero en Informática & Desarrollador Web Full-Stack (Junior)**  
> Especializado en el ecosistema **Vue.js**, **Nuxt 4**, **Node.js**, **Express**, **Supabase** y **PostgreSQL**.

---

## 📋 Descripción del Proyecto

Este proyecto es el portfolio profesional y plataforma web técnica de **Jesús Ortega**. Diseñado y desarrollado bajo una arquitectura 100% limpia y moderna basada exclusivamente en **Nuxt 4**, **Nuxt UI**, **Vue 3 (Composition API)** y **Tailwind CSS**.

El sitio web está optimizado para alto rendimiento, accesibilidad, indexación en motores de búsqueda (SEO técnico avanzado) y experiencia de usuario fluida tanto en dispositivos móviles como en pantallas de escritorio.

---

## ✨ Características Principales

### 🌐 1. Internacionalización Bilingüe (i18n)
- Conmutador en tiempo real entre **Español (`es`)** e **Inglés (`en`)**.
- Persistencia de la preferencia del visitante en `localStorage`.
- Detección automática del idioma configurado en el navegador del usuario.
- Sincronización dinámica de los atributos `lang`, `dir` y metadatos SEO en el elemento raíz `<html>`.

### 🌓 2. Tema Visual Reactivo (Modo Oscuro / Modo Claro)
- Modo oscuro de alto contraste y modo claro con paleta neutral sofisticada.
- Detección automática de la preferencia del sistema operativo (`prefers-color-scheme`).
- Integración nativa con el sistema de temas y paletas de `@nuxt/ui`.

### 📂 3. Catálogo de Proyectos & Filtrado Inteligente
- **Filtrado por Categorías**: *Full-Stack*, *Frontend*, *Cloud & Backend*, *Open Source*.
- **Filtro por Tecnologías**: Chips interactivos para filtrar por Vue, Nuxt, Express, Supabase, Python, etc.
- **Buscador en Tiempo Real**: Búsqueda textual instantánea por nombre, descripción o stack.
- **Modal de Detalle Técnico**: Vista detallada con métricas de rendimiento, puntos clave de arquitectura y enlaces a repositorios de GitHub y despliegues en producción.

### 📄 4. Generador Dinámico de Currículum en PDF (ATS-Friendly)
- Generación en el cliente mediante **jsPDF** vectorizado en formato estándar A4.
- Descarga instantánea en el idioma actualmente seleccionado (Español o Inglés).
- Estructura optimizada para sistemas de seguimiento de candidatos (*Applicant Tracking Systems*).
- Visor de CV interactivo en pantalla (`ResumeModal.vue`) con opción de copia en texto plano y compatibilidad para impresión directa (`window.print`).

### 🛡️ 5. Formulario de Contacto con Protección Antispam Multicapa
- **Trampa Honeypot Invisible**: Campo oculto (`website_url` / `_honey`) para desviar y neutralizar rastreadores y bots automáticos.
- **Desafío Matemático Humano**: Reto aritmético aleatorio interactivo con botón de refresco y sin flechas invasivas en el input numérico.
- **Protección por Tiempo de Envío (*Time-to-Submit*)**: Bloqueo de envíos automatizados que se ejecuten en menos de 2.5 segundos desde la carga del formulario.
- **Control de Frecuencia (*Rate Limiting*)**: Límite de 3 envíos cada 10 minutos por sesión de usuario para prevenir saturación de correo.
- **Despacho Automatizado**: Envío estructurado hacia `formsubmit.co` con copia de respaldo y enlaces rápidos directos a **Gmail Compose**, **LinkedIn** y **GitHub**.

### 🔍 6. SEO Técnico y Metadatos Avanzados
- Estructura de metadatos completa: `Open Graph`, `Twitter Cards`, etiquetas `canonical` y `hreflang`.
- Datos estructurados Schema.org mediante **JSON-LD**: esquemas `Person`, `WebSite` y `ProfilePage`.
- Archivos estáticos de rastreo: `public/robots.txt` y `public/sitemap.xml`.

### 🎬 7. Animaciones de Scroll Fluidas (IntersectionObserver)
- **Directiva declarativa `v-reveal`** y componente `<ScrollReveal>`: Transiciones sutiles y profesionales activadas al entrar al viewport.
- **Divisores de Sección Cinemáticos (`<SectionDivider>`):** Gradientes luminosos con puntos focales de acento que suavizan el paso entre secciones.
- **Cascada Escalonada (*Staggered Reveal*):** Retardos progresivos en tarjetas de proyectos, bloques de habilidades e insignias de estado.
- **Accesibilidad Nativa (`prefers-reduced-motion`):** Desactiva automáticamente los desplazamientos y transiciones si el usuario tiene activada la reducción de movimiento en el sistema operativo.
- **Cero Dependencias Pesadas:** Implementado mediante `IntersectionObserver` nativo del navegador con aceleración por GPU (`transform`, `opacity`, `filter`).

---

## 📁 Estructura del Proyecto

```text
├── assets/
│   └── css/
│       └── main.css           # Configuración de estilos globales, temas y keyframes
├── components/                # Componentes modulares de Vue 3 (Nuxt auto-import)
│   ├── AboutBio.vue           # Biografía profesional, trayectoria y educación
│   ├── ContactLeadForm.vue    # Formulario de contacto con defensas antibot
│   ├── Footer.vue             # Pie de página y accesos rápidos
│   ├── Hero.vue               # Cabecera editorial y terminal interactiva
│   ├── Navbar.vue             # Navegación fija, selector de idioma y tema
│   ├── ProjectModal.vue       # Modal con ficha técnica de cada proyecto
│   ├── ProjectsShowcase.vue   # Catálogo y buscador interactivo de proyectos
│   ├── ResumeModal.vue        # Visor de currículum en pantalla
│   ├── ScrollReveal.vue       # Contenedor de animación de entrada reactivo
│   ├── SectionDivider.vue     # Divisor cinemático con punto focal luminoso
│   └── SkillsSection.vue      # Matriz de habilidades y tecnologías clasificadas
├── composables/               # Composables reactivos globales
│   ├── useLanguage.ts         # Estado y funciones de cambio de idioma (i18n)
│   ├── useScrollReveal.ts     # Lógica central del IntersectionObserver y detección de movimiento
│   └── useTheme.ts            # Control de modo oscuro/claro y persistencia
├── plugins/
│   └── scroll-reveal.ts       # Directiva global v-reveal con soporte SSR/SSG
├── i18n/
│   └── translations.ts        # Textos y datos bilingües de proyectos y experiencia
├── public/                    # Recursos estáticos públicos
│   ├── favicon.svg            # Favicon del sitio
│   ├── robots.txt             # Instrucciones para motores de búsqueda
│   └── sitemap.xml            # Mapa del sitio para indexación web
├── types/
│   └── index.ts               # Modelos e interfaces TypeScript del proyecto
├── utils/
│   └── resumeGenerator.ts     # Generador de CV en PDF mediante jsPDF
├── app.vue                    # Componente raíz de la aplicación Nuxt
├── nuxt.config.ts             # Configuración central de Nuxt 4 y módulos
├── package.json               # Dependencias y scripts de ejecución
└── tsconfig.json              # Configuración de TypeScript vinculada a Nuxt
```

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework Web** | [Nuxt 4](https://nuxt.com/) / [Vue 3](https://vuejs.org/) (Composition API, Script Setup) |
| **Componentes & UI** | [@nuxt/ui](https://ui.nuxt.com/) + [Tailwind CSS](https://tailwindcss.com/) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) (Tipado estricto) |
| **Iconografía** | [Lucide Vue Next](https://lucide.dev/) |
| **Generación de PDF** | [jsPDF](https://github.com/parallax/jsPDF) |
| **Tipografías** | *Plus Jakarta Sans*, *Outfit* y *JetBrains Mono* vía Google Fonts |

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- **Node.js**: versión 18.x o superior (recomendado Node.js 20+)
- Gestor de paquetes: **npm**, **pnpm**, **yarn** o **bun**

### 1. Clonar el repositorio
```bash
git clone https://github.com/Jesus-Ort/jesus-ortega-portfolio.git
cd jesus-ortega-portfolio
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible localmente en `http://localhost:3000`.

### 4. Generar el sitio estático para producción
```bash
npm run build
```
Los archivos optimizados y listos para despliegue se generarán dentro del directorio `dist/`.

### 5. Previsualizar la compilación de producción
```bash
npm run preview
```

---

## 📬 Contacto y Redes

- **Desarrollador**: Jesús Ortega
- **Email**: [jesusortech@gmail.com](mailto:jesusortech@gmail.com)
- **GitHub**: [@Jesus-Ort](https://github.com/Jesus-Ort)
- **LinkedIn**: [/in/jesusortegasq](https://www.linkedin.com/in/jesusortegasq/)

---
*Desarrollado con pasión por el código limpio y la arquitectura web moderna.*

/**
 * Configuración Principal de Nuxt 4 (nuxt.config.ts)
 *
 * Configura la aplicación web:
 * - Módulo oficial `@nuxt/ui` para componentes visuales y utilidades
 * - Estilos globales Tailwind CSS v4 (`~/assets/css/main.css`)
 * - Metadatos SEO completos: Open Graph, Twitter Cards, Schema.org JSON-LD
 * - Servidor de desarrollo en host 0.0.0.0 y puerto 3000
 * - Modo SSR (nuxt build) para despliegue con el preset nativo de Vercel
 */
export default defineNuxtConfig({
  compatibilityDate: '2026-09-10',
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Jesús Ortega — Full-Stack Developer & Software Engineer Portfolio',
      htmlAttrs: {
        lang: 'es',
        dir: 'ltr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content: 'Portfolio profesional de Jesús Ortega, Ingeniero en Informática y Desarrollador Web Full-Stack (Junior) especializado en Vue.js, Nuxt 4, Node.js, Express y Supabase. Proyectos en producción y arquitectura web limpia.'
        },
        {
          name: 'keywords',
          content: 'Jesús Ortega, Jesus Ortega, Desarrollador Web, Full-Stack Developer, Junior Developer, Vue.js, Nuxt 4, Nuxt 3, Node.js, Express, Supabase, PostgreSQL, Tailwind CSS, Ingeniero en Informática, Web Developer Portfolio, Software Engineer'
        },
        { name: 'author', content: 'Jesús Ortega' },
        { name: 'creator', content: 'Jesús Ortega' },
        { name: 'publisher', content: 'Jesús Ortega' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
        { name: 'theme-color', content: '#090D16', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#F8FAFC', media: '(prefers-color-scheme: light)' },
        { name: 'format-detection', content: 'telephone=no, address=no, email=no' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'profile' },
        { property: 'og:profile:first_name', content: 'Jesús' },
        { property: 'og:profile:last_name', content: 'Ortega' },
        { property: 'og:profile:username', content: 'Jesus-Ort' },
        { property: 'og:site_name', content: 'Jesús Ortega Portfolio' },
        { property: 'og:title', content: 'Jesús Ortega — Full-Stack Developer & Software Engineer' },
        {
          property: 'og:description',
          content: 'Portfolio profesional de Jesús Ortega, Desarrollador Web Full-Stack especializado en Vue, Nuxt 4, Node.js y Supabase.'
        },
        { property: 'og:image', content: 'https://jesusortega.xyz/og-image.png' },
        { property: 'og:image:secure_url', content: 'https://jesusortega.xyz/og-image.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Jesús Ortega — Full-Stack Developer & Software Engineer' },
        { property: 'og:locale', content: 'es_ES' },
        { property: 'og:locale:alternate', content: 'en_US' },
        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Jesús Ortega — Full-Stack Developer & Software Engineer' },
        {
          name: 'twitter:description',
          content: 'Desarrollador Web Full-Stack especializado en Vue.js, Nuxt 4, Express y Supabase. Descubre mis proyectos y experiencia.'
        },
        { name: 'twitter:image', content: 'https://jesusortega.xyz/og-image.png' },
        { name: 'twitter:image:alt', content: 'Jesús Ortega — Full-Stack Developer & Software Engineer' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://jesusortega.xyz/' },
        { rel: 'alternate', hreflang: 'es', href: 'https://jesusortega.xyz/?lang=es' },
        { rel: 'alternate', hreflang: 'en', href: 'https://jesusortega.xyz/?lang=en' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://jesusortega.xyz/' },
        { rel: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap.xml' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          textContent: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://jesusortega.xyz/#person',
                name: 'Jesús Ortega',
                jobTitle: 'Junior Full-Stack Web Developer & Computer Engineer',
                description: 'Junior Full-Stack Web Developer and Computer Engineer specializing in Vue.js, Nuxt 4, Node.js, Express, and Supabase.',
                email: 'mailto:jesusortech@gmail.com',
                url: 'https://jesusortega.xyz/',
                sameAs: [
                  'https://github.com/Jesus-Ort',
                  'https://www.linkedin.com/in/jesusortegasq/'
                ],
                knowsAbout: [
                  'Vue.js',
                  'Nuxt.js',
                  'Nuxt 4',
                  'Node.js',
                  'Express.js',
                  'Supabase',
                  'PostgreSQL',
                  'TypeScript',
                  'JavaScript',
                  'Tailwind CSS',
                  'REST APIs',
                  'Python',
                  'Software Engineering'
                ]
              },
              {
                '@type': 'WebSite',
                '@id': 'https://jesusortega.xyz/#website',
                url: 'https://jesusortega.xyz/',
                name: 'Jesús Ortega — Portfolio Profesional',
                description: 'Portfolio profesional de Jesús Ortega, Desarrollador Web Full-Stack e Ingeniero en Informática.',
                publisher: {
                  '@id': 'https://jesusortega.xyz/#person'
                },
                inLanguage: ['es', 'en']
              },
              {
                '@type': 'ProfilePage',
                '@id': 'https://jesusortega.xyz/#profilepage',
                url: 'https://jesusortega.xyz/',
                name: 'Jesús Ortega — Full-Stack Developer Portfolio',
                isPartOf: {
                  '@id': 'https://jesusortega.xyz/#website'
                },
                mainEntity: {
                  '@id': 'https://jesusortega.xyz/#person'
                }
              }
            ]
          })
        }
      ]
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/llms.txt']
    }
  }
})

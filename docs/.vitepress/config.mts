<<<<<<< HEAD
import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/LegacyOfCLTT/',
  cleanUrls: false,
  title: 'Legacy of CLT Wiki',
  description: 'Regulament și informații pentru comunitatea Legacy of CLT',
  lang: 'ro-RO',
  themeConfig: {
    logo: 'legacyofclttt.png',
    nav: [
      { text: 'Acasă', link: '/' },
      { text: 'Cod Penal', link: '/cod-penal.html' },
      { text: 'Regulamente', link: '/regulament-general.html' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Regulamente',
        items: [
          { text: 'Cod Penal', link: '/cod-penal.html' },
          { text: 'Regulament General', link: '/regulament-general.html' },
          { text: 'Regulament Poliție', link: '/regulament-politie.html' },
          { text: 'Regulament Civili', link: '/regulament-civili.html' },
          { text: 'Regulament Mafii', link: '/regulament-mafii.html' },
          { text: 'Regulament Jafuri', link: '/regulament-jafuri.html' },
          { text: 'Regulament Penitenciar', link: '/regulament-anp.html' },
          { text: 'Regulament EMS', link: '/regulament-ems.html' },
          { text: 'Regulament PC Check', link: '/regulament-pc-check.html' },
          { text: 'Regulament Server', link: '/regulament-server.html' }
        ]
      }
    ]
  },
  appearance: 'dark',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/LegacyOfCLTT/legacyofclttt.png?v=2' }],
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/LegacyOfCLTT/legacyofclttt.png?v=2' }],
    ['link', { rel: 'apple-touch-icon', href: '/LegacyOfCLTT/legacyofclttt.png?v=2' }]
  ],
  vite: {
    css: {
      postcss: {}
    }
  },
  markdown: {
    html: true,
    theme: 'github-dark-dimmed'
  }
});
=======
import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/LegacyOfCLTT/',
  title: 'Legacy of CLT Wiki',
  description: 'Regulament și informații pentru comunitatea Legacy of CLT',
  lang: 'ro-RO',
  themeConfig: {
logo: '/LegacyOfCLT/legacyofclttt.png',    nav: [
      { text: 'Acasă', link: '/' },
      { text: 'Cod Penal', link: '/cod-penal' },
      { text: 'Regulamente', link: '/regulament-general' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Regulamente',
        items: [
          { text: 'Cod Penal', link: '/cod-penal' },
          { text: 'Regulament General', link: '/regulament-general' },
          { text: 'Regulament Poliție', link: '/regulament-politie' },
          { text: 'Regulament Civili', link: '/regulament-civili' },
          { text: 'Regulament Mafii', link: '/regulament-mafii' },
          { text: 'Regulament Jafuri', link: '/regulament-jafuri' },
          { text: 'Regulament Penitenciar', link: '/regulament-anp' },
          { text: 'Regulament EMS', link: '/regulament-ems' },
          { text: 'Regulament PC Check', link: '/regulament-pc-check' },
          { text: 'Regulament Server', link: '/regulament-server' }
        ]
      }
    ]
  },
  appearance: 'dark',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/LegacyOfCLT/legacyofclttt.png?v=2' }],
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/LegacyOfCLT/legacyofclttt.png?v=2' }],
    ['link', { rel: 'apple-touch-icon', href: '/LegacyOfCLT/legacyofclttt.png?v=2' }]
  ],
  vite: {
    css: {
      postcss: {}
    }
  },
  markdown: {
    html: true,
    theme: 'github-dark-dimmed'
  }
});
>>>>>>> c7ae85b43954df5ca4064afa58cd3a248dff1476

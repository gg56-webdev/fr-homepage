import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://www.fingerate.world',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    astroI18next(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ko: 'ko',
        },
      },
    }),
  ],
  experimental: {
    assets: true,
  },
})

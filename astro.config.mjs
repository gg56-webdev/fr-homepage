import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fingerate.world',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    astroI18next(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],
  experimental: {
    assets: true,
  },
})

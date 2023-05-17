/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        intelligentBlue: `rgb(var(--intelligent-blue) / <alpha-value>)`,
        softFire: `rgb(var(--soft-fire) / <alpha-value>)`,
        neonBlue: `rgb(var(--neon-blue) / <alpha-value>)`,
        deepSpace: `rgb(var(--deep-space) / <alpha-value>)`,
        cyberLilac: `rgb(var(--cyber-lilac) / <alpha-value>)`,
      },
      boxShadow: {
        center: `0 0 32px 2px rgb(var(--neon-blue) / <alpha-value>)`,
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 1 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/container-queries')],
};

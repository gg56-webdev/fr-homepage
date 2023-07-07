/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        brandGradient: 'var(--brand-gradient)',
      },
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
        bob: 'bob 2s ease-in-out infinite',
        blob: 'blob 8s ease-in-out infinite',
        stack: 'stack 15s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        bob: {
          '50%': { transform: 'translateY(-5%)' },
        },
        blob: {
          '33%': { scale: '1.1', translate: '30px -50px' },
          '66%': { scale: '0.85', translate: '-20px 20px' },
        },
        stack: {
          '6.25%': {
            translate: '0 0%',
          },
          '12.5%,18.75%': {
            translate: '0 -12.5%',
          },
          '25%,31.25%': {
            translate: '0 -25%',
          },
          '37.5%,43.75%': {
            translate: '0 -37.5%',
          },
          '50%,56.25%': {
            translate: '0 -50%',
          },
          '62.5%,68.75%': {
            translate: '0 -62.5%',
          },
          '75%,81.25%': {
            translate: '0 -75%',
          },
          '87.5%,100%': {
            translate: '0 -87.5%',
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
};

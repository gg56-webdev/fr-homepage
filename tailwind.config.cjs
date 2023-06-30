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
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        bob: {
          '50%': {transform: 'translateY(-5%)'}
        },
        blob: {
          '33%': {scale: '1.1', translate: '30px -50px'},
          '66%': {scale: '0.85', translate: '-20px 20px'},
        }
      },
    },
  },
  plugins: [require('flowbite/plugin'),  require('@tailwindcss/typography')],
};

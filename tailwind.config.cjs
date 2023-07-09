/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        brandGradient: `linear-gradient(
          -5deg,
          ${theme('colors.intelligentBlue/50')},
          ${theme('colors.intelligentBlue/0')} 50%
        ),
        linear-gradient(225deg,${theme('colors.neonBlue')}, ${theme('colors.neonBlue/0')} 50%),
        linear-gradient(100deg, ${theme('colors.softFire')} 35%, ${theme('colors.intelligentBlue')});`,
      }),
      colors: {
        intelligentBlue: '#502FC6',
        softFire: '#CA4450',
        neonBlue: '#2697C2',
        deepSpace: '#222134',
        cyberLilac: '#D8C9D5',
      },
      boxShadow: ({ theme }) => ({
        center: `0 0 32px 2px ${theme('colors.neonBlue')}`,
      }),
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
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    function ({ addComponents, theme }) {
      addComponents({
        '.brand-text': {
          display: ' inline',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'background-image': theme('backgroundImage.brandGradient'),
          color: ' transparent',
        },
      });
    },
  ],
};

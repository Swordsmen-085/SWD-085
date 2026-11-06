/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        swd: {
          bg: '#050505',
          surface: '#111111',
          primary: '#d4af37',
          text: '#f5f5f5',
          muted: '#a0a0a0',
        },
      },
      fontFamily: {
        heading: ['Barlow Condensed', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        // Can add motion later
      },
    },
  },
  plugins: [],
};

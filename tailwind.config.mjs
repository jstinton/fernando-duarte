/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fd-black': '#0A0A0A',
        'fd-cream': '#F5F0E8',
        'fd-red': '#C8102E',
        'fd-gold': '#D4A827',
        'fd-gray': '#1A1A1A',
      },
      fontFamily: {
        display: ['\'Anton\'', '\'Impact\'', 'sans-serif'],
        body: ['\'DM Sans\'', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

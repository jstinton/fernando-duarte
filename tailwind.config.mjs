/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'fd-black': '#FFFFFF',
        'fd-cream': '#000000',
        'fd-red': '#000000',
        'fd-gold': '#555555',
        'fd-gray': '#F0F0F0',
        'fd-off': '#F7F7F7',
      },
      fontFamily: {
        display: ["'Syne'", 'sans-serif'],
        body: ["'DM Sans'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

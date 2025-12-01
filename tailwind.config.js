// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // This is CRITICAL: it tells Tailwind where to find your utility classes
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
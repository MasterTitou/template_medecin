/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html",
  ],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      colors: {
        // Medical Royal Blue theme
        "medical-blue": "#2563eb",
        "medical-blue-dark": "#1e40af",
        "medical-blue-light": "#eff6ff",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

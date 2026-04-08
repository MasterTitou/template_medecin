/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html",
  ],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      colors: {
        // Belgian teal and Liège orange
        "belgian-teal": "#006A71",
        "liege-orange": "#E67300",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          gold: "#fbbf24", // Tailwind amber-400, matches the warm accents
          dark: "#0b0b0a", // Background tone for the site
        },
      },
    },
  },
  plugins: [],
};

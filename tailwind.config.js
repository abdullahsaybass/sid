/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto_Mono: ["Roboto Mono", "monospace"],
        Radio_Canada_Big: ["Radio Canada Big", "sans-serif"],
      },
    },
  },
  plugins: [],
}


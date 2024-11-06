/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgold: '#E8C547', // A light gold color
      },
      fontFamily: {
        mukta: ['Mukta', 'sans-serif'], // Add Mukta font here
      },
    },
  },
  plugins: [],
}

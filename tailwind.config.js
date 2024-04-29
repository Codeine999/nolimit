/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1600px',
        '3xl': '1800px',
      },
      fontFamily: {
        Mitr: ['Mitr', 'sans-serif'],
        IBM: ['IBM Plex Sans Thai', 'sans-serif'],
        Athiti: ['Athiti', 'sans-serif'],
      
      },
    },
  },
  plugins: [],
}
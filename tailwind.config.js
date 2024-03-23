/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
        Mitr: ['Mitr', 'sans-serif'],
        Noto: ['Noto Sans Thai', 'sans-serif'],
        CH: ['Chonburi', 'sans-serif'],
        Chonburi: ['Chonburi', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        IBM: ['IBM Plex Sans Thai', 'sans-serif'],
        Kanit2: ['Kanit', 'sans-serif'],
        Athiti: ['Athiti', 'sans-serif'],
        
        
      },

    },
  },
  plugins: [],
}
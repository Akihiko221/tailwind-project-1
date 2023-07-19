/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        light: '#e0f2fe',
        dark: '#020617'
      },
      fontFamily: {
        quicksand: "'Quicksand', sans-serif"
      }
    },
  },
  plugins: [],
}


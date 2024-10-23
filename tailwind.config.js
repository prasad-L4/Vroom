/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        Rajdhani: ['"Rajdhani"', 'sans-serif'], 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #adb0be 0%, #0d0c0d 100%)',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'scroll-left': 'scrollLeft 10s linear infinite',
      },
    },
  },
  plugins: [],
}
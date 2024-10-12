/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu"', 'sans-serif'], // Add the font here
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #adb0be 0%, #0d0c0d 100%)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        'top-0': 0,
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


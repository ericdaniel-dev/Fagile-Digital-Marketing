/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./component/**/*.jsx",
    ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}


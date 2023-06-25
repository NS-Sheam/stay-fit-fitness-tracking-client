/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "band-primary": '#03045E', 
        "band-secondary": '#0077B6', 
        "band-ternery": '#00B4D8',
        "sky-blue": "#90E0EF",
        "lignt-blue": "#CAF0F8"
      }
    },
  },
  plugins: [require("daisyui")],
}


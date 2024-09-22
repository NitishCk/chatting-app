/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#00abed",
        secondary : "#1e83b8"
      },
    },
  },
  plugins: [],
}


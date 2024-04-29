/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          "warna-1" : "#4793AF",
          "warna-2" : "#FFC470",
          "warna-3" : "#DD5746",
          "warna-4" : "#8B322C",
        }
    },
    fontFamily : {
      "Honk" : "Honk",
      "Pixelify-Sans" : "Pixelify Sans",
      "Plus-Jakarta-Sans" : "Plus Jakarta Sans",
      "Short-Stack" : "Short Stack"

    }
  },
  plugins: [],
}


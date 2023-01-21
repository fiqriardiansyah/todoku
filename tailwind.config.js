/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: {
          '5': "rgba(0, 0, 0, 0.05)",
          '10': "rgba(0, 0, 0, 0.1)",
          '20': "rgba(0, 0, 0, 0.2)",
          '30': "rgba(0, 0, 0, 0.3)",
          '40': "rgba(0, 0, 0, 0.4)",
          '50': "rgba(0, 0, 0, 0.5)",
          '60': "rgba(0, 0, 0, 0.6)",
          '70': "rgba(0, 0, 0, 0.7)",
          '80': "rgba(0, 0, 0, 0.8)",
          '90': "rgba(0, 0, 0, 0.9)",
        },
        primary: "#69665C",
        secondary: "#B2AFA1",
        cream: "#FFF9DE",
        blue: {
          light: "#D1E5F7",
        },
        green: {
          light: "#DAF2D6",
        },
        red: {
          light: "#FFCECE",
        },
        purple: {
          light: "#D2CEFF",
        },
      }
    },
  },
  plugins: [],
}

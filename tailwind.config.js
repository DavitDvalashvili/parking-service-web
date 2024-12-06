/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firago: ["Firago", "sans-serif"],
      },
      colors: {
        primary: "#063776",
        secondary: "#FFD547",
        white: "#FFFEFE",
        black: "#1C1C1C",
        dark: {
          brown: "#1C1C1C",
        },
      },
      screens: {
        lg: "1440px",
      },
      borderRadius: {},
      backgroundImage: {},
      boxShadow: {},
    },
  },
  plugins: [],
};

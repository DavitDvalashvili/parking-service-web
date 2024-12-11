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
      backgroundImage: {
        "mobile-light": "url('/images/cover/coverMobileLight.svg')",
        "mobile-dark": "url('/images/cover/coverMobileDark.svg')",
        "desktop-light": "url('/images/cover/coverDesktopLight.svg')",
        "desktop-dark": "url('/images/cover/coverDesktopDark.svg')",
        "benefit-card": "url(./images/benefits/parkingBg.svg)",
      },
      boxShadow: {
        customShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

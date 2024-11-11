const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      white: "#FFF",
      black: "#000",
      primary: "#ff9500",
      "primary-2": "#ffbf66",
      "primary-3": "#ffca80",
      "primary-4": "#ffd499",
      "primary-light": "#ffeacc",
      "primary-light-2": "#fff4e5",
      "primary-light-3": "#fff9f0",
      "primary-light-4": "#fffdfa",
      "ligth-gray": "#e4e4e7",
      "light-2": "#f1f1f3",
      "light-3": "#f7f7f8",
      "light-4": "#fcfcfd",
      dark: "#191919",
      "dark-2": "#282828",
      "dark-3": "#333333",
      "dark-4": "#4c4c4d",
      gray: "#59595a",
      "gray-2": "#656567",
      "gray-3": "#98989a",
      "gray-4": "#b3b3b3",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};

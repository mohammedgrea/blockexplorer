/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    colors: {
      "be-navy-blue-50": "#F8FAFB",
      "be-navy-blue-100": "#DEE4ED",
      "be-navy-blue-300": "#8FA4C2",
      "be-navy-blue-500": "#435A7A",
      "be-navy-blue-700": "#283649",
    },
    extend: {
      colors: {
        "blue-600": "#1D4C90",
        "blue-500": "#4884DA",
        "blue-200": "#DDE8F8",
        "blue-50": "#F2F6FC",

        "red-700": "#891F2D",
        "red-500": "#D5485A",
        "red-300": "#EAA4AD",
        "red-100": "#F8E2E5",
        "red-50": "#FDF7F8",

        "grey-700": "#505762",
        "grey-500": "#8E96A3",
        "grey-300": "#C8CCD2",
        "grey-100": "#F0F1F3",
        "grey-50": "#F9F9FA",

        "green-700": "#03543F",
        "green-500": "#0E9F6E",
        "green-300": "#84E1BC",
        "green-100": "#BCF0DA",
        "green-50": "#F3FAF7",

        "orange-700": "#B43403",
        "orange-500": "#FF5A1F",
        "orange-300": "#FDBA8C",
        "orange-100": "#FEECDC",
        "orange-50": "#FFF8F1",
      },
      fontFamily: {
        sans: ['"Lato"', "sans-serif"],
        serif: ['"Inter"', "sans-serif"],
        source: ['"Source Code Pro"', "sans-serif"],
      },
      height: {
        0.5: "2px",
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        light: "0 5px 8px -3px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        back: "#5C7A84",
        hover: "#99c8d8",
      },
      fontFamily: {
        title: ["Roboto Mono", "serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

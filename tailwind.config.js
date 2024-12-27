/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto Mono", "serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}


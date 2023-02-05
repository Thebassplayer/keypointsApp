/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        VT323: ["VT323", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-all"), require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-box-table-body-color": "#f5dcb1",
        "custom-yellow-color": "#FFD700",
      },
    },
  },
  plugins: [],
});

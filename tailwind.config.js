/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ccdcfe",
        secondary: "#cf2139",
        accent: "#2c2d42",
        neutral: "#fbf9f9",
      },
      fontFamily: {
        berkshire: ["Berkshire Swash", "cursive"],
      },
    },
  },
  plugins: [],
};

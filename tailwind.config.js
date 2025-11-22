/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#007EDD",
        customOrange: "#ED6827",
      },
      fontFamily: {
        engagement: ["Engagement", "cursive"],
      },
    },
  },
  plugins: [],
};

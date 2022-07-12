/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "40px",
    },
    extend: {
      colors: {
        darkbrown: "#5a3939",
        mediumbrown: "#8f6964",
        lightbrown: "#ece3dd",
      },
    },
  },
  plugins: [],
};

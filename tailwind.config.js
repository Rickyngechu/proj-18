/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "Soft-orange": "hsl(35, 77%, 62%)",
      "Soft-red": "hsl(5, 85%, 63%)",

      "Off-white": "hsl(36, 100%, 99%)",
      "Grayish-blue": "hsl(233, 8%, 79%)",
      "Dark-grayish-blue": "hsl(236, 13%, 42%)",
      "Very-dark-blue": "hsl(240, 100%, 5%)",
    },
    extend: {
      gridTemplateColumns: {
        // Custom grids
        main: "1fr 1fr 1fr",
        item: "repeat(auto-fit, minmax(18rem, 1fr))",
      },
    },
  },
  plugins: [],
};

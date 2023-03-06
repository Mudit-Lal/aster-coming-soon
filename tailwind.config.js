/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#924EFF",
      white: "#FFFFFF",
      gray: "#A8A8A8",
    },
    fontFamily: {
      butler: ["Butler", "sans-serif"],
      visbyCF: ["Visby CF", "serif"],
    },
    fontSize: {
      sm: '17 px',
      base: '18 px',
      lg: '22 px',
      xl: '25 px',
      '2xl': '200 px',
    },
    borderRadius: {
      none: "0",
      small: "5px",
    },
    extend: {
      width: {
        normal: "170 px",
        extended: "510 px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#924EFF",
      'primary-hover': "#6F3BC2",
      'primary-alt': "#BE95FF",
      white: "#FFFFFF",
      'off-white': "#F6EFFF",
      black: "#000000",
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
    borderWidth: {
      '1': '1px',
      '2': '2px',
    },
    minWidth: {
      'normal': '170px',
      'extended': '510px',
    },
    minHeight: {
      'sm': "34 px",
      'normal': "44 px",
    },
    extend: {
      width: {
        sm: "130 px",
        normal: "170 px",
        extended: "510 px",
      },
      height: {
        sm: "34 px",
        normal: "44 px",
      },
    },
  },
  plugins: [],
};

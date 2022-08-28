/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#3E4858",
        main: "#28eb9b",
        text: "#3e4246",
      },
    },
  },
  plugins: [],
};

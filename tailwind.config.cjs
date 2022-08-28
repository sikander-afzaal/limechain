/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        head: "#181e27",
        btn: "#3E4858",
        main: "#28eb9b",
        text: "#3e4246",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/hero-bg.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};

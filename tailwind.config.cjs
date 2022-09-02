/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        head: "white",
        btn: "#3E4858",
        main: "#6d2de7",
        text: "white",
      },
      screens: {
        "3xl": "1920px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/hero-bg.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
        "gradient-black": "linear-gradient(to top, black,transparent)",
      },

      boxShadow: {
        service: "0 8px 64px 5px rgb(17 17 17 / 4%)",
      },
    },
  },
  plugins: [],
};

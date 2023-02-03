/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      chivo: "Chivo",
      monoton: "Monoton",
      monument: "Monument",
    },
    extend: {
      colors: {
        head: "white",
        btn: "#3E4858",
        main: "#6d2de7",
        text: "white",
        metaPara: "#ADADAD",
      },
      screens: {
        "3xl": "2000px",
      },
      backgroundImage: {
        footerMeta:
          "linear-gradient(120.83deg, #2D541B -3.98%, #000002 33.48%)",
        metaverse: "linear-gradient(133.79deg, #150A27 10.22%, #000002 35.17%)",
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

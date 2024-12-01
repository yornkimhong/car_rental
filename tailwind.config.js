export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        red: "#E82026",
        redHover: "#CC1D22",
        lightBlack: "#1A1A1A",
        black: "#000000",
        white: "#FFFFFF",
        gray: "#ECECEC",
        bgBlack: "#2B2929",
        bgGray: "#F3F3F3",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      // fontWeight: {
      //   semibold: 600,
      //   bold: 700,
      // },
    },
  },
  plugins: [],
};

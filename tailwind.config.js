/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },
      screens: {
        // res: "768px",
        res: "1024px",
      },
      colors: {
        accent: "#EEFF25",
        "acc-text": "#D99904",
      },
    },
  },
  plugins: [],
};

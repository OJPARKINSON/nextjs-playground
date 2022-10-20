/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        darkBlue: "#34476D",
        lightBlue: "#7A97C5",
      },
      dropShadow: {
        react: "0 0 2em #61dafbaa",
        vite: "0 0 2em #646cffaa",
      },
      margin: {
        auto: "0 auto",
      },
      animation: {
        spin: "logoSpin infinite 20s linear",
      },
      keyframes: {
        logoSpin: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

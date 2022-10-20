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
      shadow: {
        lg: "--tw-shadow: 0 1px 1px 3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);	",
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

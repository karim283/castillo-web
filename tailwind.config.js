/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        harmond: ["Harmond", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        texture: "url('/src/assets/bg-texture.png')",
      },
    },
  },
  plugins: [],
};

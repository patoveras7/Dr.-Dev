/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary:"#450a0a",
        secondary: "#1F2937",
        clearIce: "#b4ceda",
        clearYellow: "#eab308"
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        caveat: ["Caveat", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

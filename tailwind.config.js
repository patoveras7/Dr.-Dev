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
        clearIceFullLight: "#d6eaf4",
        clearYellow: "#eab308",
        
        // Colores grises utilizados en el proyecto
        gray500: "#6b7280",
        gray600: "#4b5563", 
        gray700: "#374151",
        gray800: "#1f2937",
        gray900: "#111827",
        gray300: "#d1d5db",
        gray200: "#e5e7eb",
        
        // Colores adicionales
        red900: "#7f1d1d",
        black: "#000000",
        pureBlack: "#000000"
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

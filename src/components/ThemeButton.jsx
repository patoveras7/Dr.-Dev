"use client";
import { motion } from "framer-motion";

const ThemeButton = () => {
  return (
    <motion.button
      className="bg-red900 text-clearIce border-2 border-clearIce rounded-[7px] px-3 py-1 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-red900 transition-all duration-200 shadow-lg flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-base lg:text-lg xl:text-xl">☀️</span>
      <span className="text-base lg:text-lg xl:text-xl">🌙</span>
    </motion.button>
  );
};

export default ThemeButton;

"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="flex items-center justify-center w-[50px] h-8 sm:w-[55px] sm:h-8 lg:w-[60px] lg:h-9 xl:w-[65px] xl:h-10 bg-primary rounded-full border-[2px] border-clearIceFullLight p-1 transition-colors duration-300 hover:bg-red900 mx-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Bolita que se mueve */}
      <motion.div
        className="absolute w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-clearYellow rounded-full shadow-lg"
        initial={{ x: isDarkMode ? 12 : -12 }}
        animate={{
          x: isDarkMode ? 12 : -12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
      
      {/* Iconos en los extremos */}
      <div className="flex justify-between z-10 gap-3 items-center h-full px-1">
        <span className="text-[10px] sm:text-xs font-bold text-clearIceFullLight">☀️</span>
        <span className="text-[10px] sm:text-xs font-bold text-clearIceFullLight">🌙</span>
      </div>
    </motion.button>
  );
};

export default ThemeButton;

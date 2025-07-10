"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const TranslationButton = () => {
  const { language, toggleLanguage } = useTranslation();

  return (
    <motion.div
      className="fixed z-50 top-3 right-3 sm:top-4 sm:right-5 md:top-6 md:right-7 lg:top-8 lg:right-10 xl:top-10 xl:right-12"
      initial={{ opacity: 0, y: -10, x: 10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.button
        onClick={toggleLanguage}
        className="flex items-center justify-center w-[50px] h-7 sm:w-[55px] sm:h-8 bg-primary rounded-full border-[2px] border-clearIceFullLight p-1 transition-colors duration-300 hover:bg-red-900"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Bolita que se mueve */}
        <motion.div
          className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-clearYellow rounded-full shadow-lg"
          initial={{ x: language === 'en' ? -12 : 12 }}
          animate={{
            x: language === 'en' ? -12 : 12,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
        
        {/* Banderas en los extremos */}
        <div className="flex justify-between z-10 gap-3 items-center h-full px-1">
          <span className="text-[10px] sm:text-xs font-bold text-clearIceFullLight">EN</span>
          <span className="text-[10px] sm:text-xs font-bold text-clearIceFullLight">ES</span>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default TranslationButton; 
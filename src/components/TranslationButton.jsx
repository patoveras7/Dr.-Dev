"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const TranslationButton = () => {
  const { language, toggleLanguage } = useTranslation();

  return (
    <motion.div
      className="fixed top-4 right-5 z-50 sm:right-7 md:right-9 lg:top-10 lg:right-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={toggleLanguage}
        className="flex items-center justify-center w-[65px] h-8 bg-primary rounded-full border-[2px] border-clearIceFullLight p-1 transition-colors duration-300 hover:bg-red-900"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Bolita que se mueve */}
        <motion.div
          className="absolute w-6 h-6 bg-clearYellow rounded-full shadow-lg"
          initial={{ x: language === 'en' ? -14 : 14 }}
          animate={{
            x: language === 'en' ? -14 : 14,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
        
        {/* Banderas en los extremos */}
        <div className="flex justify-between z-10 gap-3 items-center h-full px-1">
          <span className="text-xs font-bold text-clearIceFullLight">EN</span>
          <span className="text-xs font-bold text-clearIceFullLight">ES</span>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default TranslationButton; 
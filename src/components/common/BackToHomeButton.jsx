import React from 'react';
import { motion } from 'framer-motion';

const BackToHomeButton = ({ 
  className = "fixed z-50 right-16 top-2.5 sm:top-4 sm:right-[78px] md:top-6 md:right-[88px] lg:top-8 lg:right-[102px] xl:top-10 xl:right-[115px] bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-3 py-1 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
}) => {
  return (
    <motion.button
      onClick={() => window.location.href = '/PortfolioDrDev/home'}
      className={className}
      initial={{ opacity: 0, y: -10, x: -10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      inicio
    </motion.button>
  );
};

export default BackToHomeButton;

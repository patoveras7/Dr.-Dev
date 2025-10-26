import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ 
  children, 
  className = "text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left",
  initial = { opacity: 0, y: -50 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.8, ease: "easeOut" },
  viewport = { once: true }
}) => {
  return (
    <motion.h1
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.h1>
  );
};

export default AnimatedTitle;

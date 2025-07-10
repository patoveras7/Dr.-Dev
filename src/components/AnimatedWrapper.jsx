"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedWrapper = ({ 
  children, 
  initial, 
  animate, 
  transition = {}, 
  className = "",
  ...props 
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Si no está montado, mostrar el estado inicial
  const currentAnimate = isMounted ? animate : initial;

  return (
    <motion.div
      initial={initial}
      animate={currentAnimate}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper; 
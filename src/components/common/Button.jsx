import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  type = 'button',
  href,
  target,
  rel,
  ...props 
}) => {
  const baseClasses = "font-medium transition-all duration-200 shadow-lg border-2 rounded-[7px]";
  
  const variants = {
    primary: "bg-primary text-clearIce border-clearIce hover:bg-clearIce hover:text-primary",
    secondary: "bg-secondary text-clearIceFullLight border-clearIceFullLight hover:bg-clearIceFullLight hover:text-secondary",
    outline: "bg-transparent text-primary border-primary hover:bg-primary hover:text-clearIce"
  };
  
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm lg:text-base xl:text-lg",
    lg: "px-6 py-3 text-lg xl:text-xl"
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

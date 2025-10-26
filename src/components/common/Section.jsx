import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = "flex items-start justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-[45px] md:py-[55px] lg:py-[70px]",
  background = "bg-clearIceFullLight",
  containerClassName = "container mx-auto"
}) => {
  return (
    <section className={`${className} ${background}`}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
};

export default Section;

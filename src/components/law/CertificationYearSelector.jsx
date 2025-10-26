import React from 'react';
import { motion } from 'framer-motion';

const CertificationYearSelector = ({ 
  selectedYear, 
  onYearSelect, 
  years = [2021, 2022, 2023, 2024, 2025],
  showAllCertifications,
  onToggleShowAll
}) => {
  return (
    <motion.div
      className="flex flex-wrap pb-10 gap-3 px-4 lg:px-7 justify-center sm:justify-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      {/* Botón Reset */}
      <button
        onClick={() => onYearSelect("reset")}
        className="bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-bold hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
      >
        Reset
      </button>

      {/* Botones de años */}
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearSelect(year)}
          className={`border-2 rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-bold transition-all duration-200 shadow-lg ${
            selectedYear === year
              ? "bg-clearIce text-primary border-clearIce"
              : "bg-primary text-clearIce border-clearIce hover:bg-clearIce hover:text-primary"
          }`}
        >
          {year}
        </button>
      ))}

      {/* Botón Destacadas */}
      <button
        onClick={() => onYearSelect("destacadas")}
        className={`border-2 rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-bold transition-all duration-200 shadow-lg flex items-center gap-2 ${
          selectedYear === "destacadas"
            ? "bg-clearIce border-clearIce"
            : "bg-primary border-clearIce hover:bg-clearIce"
        }`}
      >
        <svg className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-clearYellow" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-clearYellow">Destacadas</span>
      </button>
    </motion.div>
  );
};

export default CertificationYearSelector;

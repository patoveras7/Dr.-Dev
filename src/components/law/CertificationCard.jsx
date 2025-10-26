import React from 'react';
import { motion } from 'framer-motion';

const CertificationCard = ({ 
  pdfFile, 
  index, 
  selectedYear, 
  onImageClick,
  getCertificationDescription 
}) => {
  return (
    <motion.div
      className="flex w-[98%] h-[110px] bg-clearIceFullLight rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
      onClick={() => onImageClick(pdfFile)}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Miniatura (38% del ancho) */}
      <div className={`w-[48%] sm:w-[37%] lg:w-[30%] xl:w-[25%] flex items-center justify-center p-2 ${
        selectedYear === "destacadas" ? "bg-clearYellow" : "bg-primary"
      }`}>
        <div className="w-full h-full bg-clearIceFullLight rounded-lg overflow-hidden shadow-sm">
          <img
            src={`/certificaciones/${selectedYear === "destacadas" ? "Destacadas" : selectedYear}/${pdfFile}`}
            alt="Certificación"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Contenido (62% del ancho) */}
      <div className="w-[52%] sm:w-[63%] lg:w-[70%] xl:w-[75%] flex items-center justify-center">
        <p className="text-gray600 text-[12px] text-center pr-2 pl-2">
          {getCertificationDescription(pdfFile)}
        </p>
      </div>
    </motion.div>
  );
};

export default CertificationCard;

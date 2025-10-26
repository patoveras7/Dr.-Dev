import React from 'react';
import { motion } from 'framer-motion';
import CertificationCard from './CertificationCard';

const CertificationList = ({ 
  certifications, 
  selectedYear, 
  showAllCertifications, 
  onImageClick, 
  getCertificationDescription,
  isBlinking,
  onToggleShowAll
}) => {
  const displayedCertifications = showAllCertifications 
    ? certifications 
    : certifications.slice(0, 4);

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-6 justify-center items-center md:px-[30px] lg:px-[40px] xl:px-[50px] pb-10">
        {displayedCertifications.map((pdfFile, index) => (
          <CertificationCard
            key={index}
            pdfFile={pdfFile}
            index={index}
            selectedYear={selectedYear}
            onImageClick={onImageClick}
            getCertificationDescription={getCertificationDescription}
          />
        ))}

        {/* Botón "Ver más" cuando hay más de 4 certificaciones */}
        {certifications.length > 4 && !showAllCertifications && (
          <motion.div
            className="w-[98%] flex justify-center items-center mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={onToggleShowAll}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 min-w-[200px] ${
                isBlinking 
                  ? "bg-primary border-primary" 
                  : "bg-clearIceFullLight border-gray200 hover:border-primary"
              }`}
            >
              <div className="w-full h-0.5 bg-gray300 flex-1"></div>
              <svg className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-all duration-300 ${
                isBlinking ? "text-clearIceFullLight" : "text-primary"
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="w-full h-0.5 bg-gray300 flex-1"></div>
            </button>
          </motion.div>
        )}

        {/* Botón "Ver menos" cuando están todas las certificaciones mostradas */}
        {certifications.length > 4 && showAllCertifications && (
          <motion.div
            className="w-[98%] flex justify-center items-center mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={onToggleShowAll}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-clearIceFullLight rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray200 hover:border-primary min-w-[200px]"
            >
              <div className="w-full h-0.5 bg-gray300 flex-1"></div>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="w-full h-0.5 bg-gray300 flex-1"></div>
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationList;

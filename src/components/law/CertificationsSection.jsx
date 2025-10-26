import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "../common";
import { CertificationYearSelector, CertificationList } from "./";

const CertificationsSection = ({ certificationsData, onImageClick }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  const years = [2021, 2022, 2023, 2024, 2025];

  const handleYearSelect = (year) => {
    if (year === "reset") {
      setSelectedYear(null);
    } else {
      setSelectedYear(year);
    }
    setShowAllCertifications(false);
  };

  const toggleShowAllCertifications = () => {
    setShowAllCertifications(!showAllCertifications);
  };

  const handleImageClick = (imagePath) => {
    onImageClick(imagePath, selectedYear);
  };

  const getCertificationDescription = (filename) => {
    return "Certificación oficial. Clickear para visualizar.";
  };

  // Timer para parpadeo del botón "ver más"
  React.useEffect(() => {
    if (selectedYear && certificationsData[selectedYear] && certificationsData[selectedYear].length > 4 && !showAllCertifications) {
      const blinkInterval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 1000);
      return () => clearInterval(blinkInterval);
    } else {
      setIsBlinking(false);
    }
  }, [selectedYear, showAllCertifications, certificationsData]);

  return (
    <section className="flex items-start justify-center px-1">
      <div className="container mx-auto">
        <AnimatedTitle
          className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left ml-[10px] sm:ml-[18px] lg:ml-[25px]"
        >
          Certificaciones por año calendario
        </AnimatedTitle>

        <CertificationYearSelector
          selectedYear={selectedYear}
          onYearSelect={handleYearSelect}
          years={years}
          showAllCertifications={showAllCertifications}
          onToggleShowAll={toggleShowAllCertifications}
        />

        {selectedYear && certificationsData[selectedYear] && (
          <CertificationList
            certifications={certificationsData[selectedYear]}
            selectedYear={selectedYear}
            showAllCertifications={showAllCertifications}
            onImageClick={handleImageClick}
            getCertificationDescription={getCertificationDescription}
            isBlinking={isBlinking}
            onToggleShowAll={toggleShowAllCertifications}
          />
        )}

        {selectedYear && (!certificationsData[selectedYear] || certificationsData[selectedYear].length === 0) && (
          <motion.div
            className="text-center py-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray500 text-lg">No hay certificaciones disponibles para el año {selectedYear}.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;

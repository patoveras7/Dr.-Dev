"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LawPage = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Datos de certificaciones por año (JPG)
  const certificationsData = {
    2021: [],
    2022: [
      "20221214_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20221226_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20221227_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20221227_JusticiaCordoba_Certificado_veras14584_page-0001.jpg"
    ],
    2023: [
      "20230321_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20230404_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20230411_JusticiaCordoba_Certificado_veras14584_page-0001.jpg"
    ],
    2024: [
      "20240930_JusticiaCordoba_Certificado_veras14584_page-0001.jpg"
    ],
    2025: [
      "20250701_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20250701_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20250701_JusticiaCordoba_Certificado_veras14584 (2)_page-0001.jpg",
      "20250701_JusticiaCordoba_Certificado_veras14584 (3)_page-0001.jpg",
      "20250701_JusticiaCordoba_Certificado_veras14584 (4)_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (2)_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (3)_page-0001.jpg"
    ]
  };

  const years = [2021, 2022, 2023, 2024, 2025];

  const handleYearSelect = (year) => {
    if (year === "reset") {
      setSelectedYear(null);
    } else {
      setSelectedYear(year);
    }
  };

  const handleImageClick = (imagePath) => {
    // Para mostrar la imagen JPG en el modal
    setCurrentImage(`/certificaciones/${selectedYear}/${imagePath}`);
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
    setCurrentImage("");
  };

  // Cerrar modal con Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowImageModal(false);
        setCurrentImage("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Manejar resize de ventana para ajustar minWidth
  useEffect(() => {
    const handleResize = () => {
      const imgElement = document.querySelector('.certification-image');
      if (imgElement) {
        if (window.innerWidth >= 640) {
          imgElement.style.minWidth = '1000px';
        } else {
          imgElement.style.minWidth = '700px';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecutar al montar

    return () => window.removeEventListener('resize', handleResize);
  }, [showImageModal]);


  const getCertificationDescription = (filename) => {
    // Descripción de ejemplo basada en el archivo
    return "Certificación oficial emitida por la Justicia de Córdoba.";
  };

  return (
    <div className="min-h-screen bg-clearIceFullLight">
      {/* SECCIÓN 1: Presentación inicial */}
      <section className="flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-10 sm:pb-[45px] md:pb-[55px] lg:pb-[70px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-[10px]">
            <motion.div
              className="flex-1 text-left lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-primary mb-6 leading-tight">
                LAW
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Especialización en derecho y certificaciones legales que complementan mi formación profesional integral.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Comprometido con la excelencia legal y la actualización constante en materia jurídica, manteniendo los más altos estándares de profesionalismo y ética.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                Las certificaciones obtenidas reflejan mi dedicación al estudio del derecho y mi compromiso con la justicia y el ordenamiento legal vigente.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center lg:w-[45%]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="/images/FotoLawyer.jpeg"
                  alt="Patricio Veras - Abogado"
                  className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-cover object-top rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Certificaciones por año */}
      <section className="flex items-start justify-center px-1">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left ml-[10px] sm:ml-[18px] lg:ml-[25px] xl:ml-0"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Certificaciones por año calendario
          </motion.h2>

          {/* Panel de selección de año */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8 px-4 sm:px-6 lg:px-8 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Botón Reset */}
            <button
              onClick={() => handleYearSelect("reset")}
              className="bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-bold hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
            >
              Reset
            </button>

            {/* Botones de años */}
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearSelect(year)}
                className={`border-2 rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-bold transition-all duration-200 shadow-lg ${
                  selectedYear === year
                    ? "bg-clearIce text-primary border-clearIce"
                    : "bg-primary text-clearIce border-clearIce hover:bg-clearIce hover:text-primary"
                }`}
              >
                {year}
              </button>
            ))}
          </motion.div>

          {/* Contenedores por año (render condicional) */}
          {selectedYear && certificationsData[selectedYear] && (
            <motion.div
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-6 justify-center items-center">
                {certificationsData[selectedYear].map((pdfFile, index) => (
                  <motion.div
                    key={index}
                    className="flex w-[98%] h-[110px] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                    onClick={() => handleImageClick(pdfFile)}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Miniatura (38% del ancho) */}
                    <div className="w-[48%] sm:w-[37%] bg-primary flex items-center justify-center p-2">
                      <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-sm">
                        <img
                          src={`/certificaciones/${selectedYear}/${pdfFile}`}
                          alt="Certificación"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Contenido (62% del ancho) */}
                    <div className="w-[52%] sm:w-[63%] flex items-center justify-center">
                      <p className="text-gray-600 text-[12px] text-center">
                        {getCertificationDescription(pdfFile)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Mensaje cuando no hay certificaciones */}
          {selectedYear && (!certificationsData[selectedYear] || certificationsData[selectedYear].length === 0) && (
            <motion.div
              className="text-center py-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">No hay certificaciones disponibles para el año {selectedYear}.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal de visualización de imagen */}
      {showImageModal && (
        <>
          {/* Overlay con blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={handleCloseModal}
          />

          {/* Modal centrado */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-h-[90vh] overflow-y-auto overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen de la certificación */}
              <img
                src={currentImage}
                alt="Certificación"
                className="certification-image w-[700px] h-[500px] sm:w-[800px] sm:h-[600px] md:w-[650px] md:h-[365px] lg:w-[750px] lg:h-[420px] xl:w-[900px] xl:h-[505px] object-fill sm:object-fill md:object-contain"
                style={{ minWidth: '700px' }}
                onLoad={(e) => {
                  if (window.innerWidth >= 640) {
                    e.target.style.minWidth = '1000px';
                  }
                }}
              />
              {/* Botón de cerrar fijo sobre la imagen */}
              <button
                onClick={handleCloseModal}
                className="fixed z-50 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg top-[173px] sm:top-[125px] right-6"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LawPage; 
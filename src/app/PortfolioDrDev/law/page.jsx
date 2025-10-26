"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeWrapper from "../../../components/ThemeWrapper";
import { 
  Button, 
  Modal, 
  ImageModal, 
  Section, 
  AnimatedTitle, 
  BackToHomeButton 
} from "../../../components/common";
import {
  CertificationYearSelector,
  CertificationList,
  SoftwareDevelopmentSection,
  WorkExperienceTimeline
} from "../../../components/law";

const LawPage = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [expandedItems, setExpandedItems] = useState({
    iaGenerativa: false,
    maratonIdeas: false,
    proyectosInvestigacion: false
  });
  const [showIaModal, setShowIaModal] = useState(false);
  const [showMaratonModal, setShowMaratonModal] = useState(false);
  const [showInvestigacionModal, setShowInvestigacionModal] = useState(false);
  const [showSolucionSoftwareModal, setShowSolucionSoftwareModal] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({
    escribano: false,
    procurador: false,
    abogado: false
  });
  const [textTruncated, setTextTruncated] = useState({
    escribano: false,
    procurador: false,
    abogado: false
  });
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [lineHeight, setLineHeight] = useState('calc(100% - 12rem)');

  // Datos de certificaciones por año (JPG)
  const certificationsData = {
    2021: [
      "TITULO ANVERSO Y REVERSO._page-0001.jpg",
      "WhatsApp Image 2025-07-31 at 16.31.44.jpeg"
    ],
    2022: [
      "TITULO ESCRIBANO.-_page-0001.jpg",
      "20221214_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20221226_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20221227_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20221227_JusticiaCordoba_Certificado_veras14584_page-0001.jpg"
    ],
    2023: [
      "20230321_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20230404_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20230411_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "PROGRAMA DE TUTORÍAS 30.11.2023.png",
      "Taller sobre declaración testimonial de víctimas - 2023.png"
    ],
    2024: [
      "20240930_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "PROGRAMA DE TUTORÍAS 19.12.2024.png",
      "Certificación de antecedentes, declaración de persona imputada y declaración de la víctima - 2024.png",
      "Hacia la construcción de un Sistema Integral de Flagrancia - 2024.png",
      "Solicitud de informes al Registro Nacional de Reincidencia 2024.png"
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
      "20250702_JusticiaCordoba_Certificado_veras14584 (3)_page-0001.jpg",
      "Tratamiento de la evidencia digital - 2025.png"
    ],
    destacadas: [
      "TITULO ESCRIBANO.-_page-0001.jpg",
      "TITULO ANVERSO Y REVERSO._page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (2)_page-0001.jpg"
    ]
  };

  const years = [2021, 2022, 2023, 2024, 2025];

  const handleYearSelect = (year) => {
    if (year === "reset") {
      setSelectedYear(null);
    } else {
      setSelectedYear(year);
    }
    setShowAllCertifications(false);
  };

  const handleImageClick = (imagePath) => {
    // Para mostrar la imagen JPG en el modal
    const folder = selectedYear === "destacadas" ? "Destacadas" : selectedYear;
    setCurrentImage(`/certificaciones/${folder}/${imagePath}`);
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
        setShowIaModal(false);
        setShowMaratonModal(false);
        setShowInvestigacionModal(false);
        setShowSolucionSoftwareModal(false);
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
        if (window.innerWidth >= 640 && window.innerWidth < 768) {
          imgElement.style.minWidth = '1000px';
        } else if (window.innerWidth >= 768) {
          imgElement.style.minWidth = 'auto';
        } else {
          imgElement.style.minWidth = '700px';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecutar al montar

    return () => window.removeEventListener('resize', handleResize);
  }, [showImageModal]);

  // Timer para parpadeo del botón "ver más"
  useEffect(() => {
    if (selectedYear && certificationsData[selectedYear] && certificationsData[selectedYear].length > 4 && !showAllCertifications) {
      const blinkInterval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 1000); // Parpadea cada 1 segundo

      return () => clearInterval(blinkInterval);
    } else {
      setIsBlinking(false);
    }
  }, [selectedYear, showAllCertifications]);

  // Actualizar altura de la línea según el tamaño de pantalla
  useEffect(() => {
    const updateLineHeight = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setLineHeight('calc(100% - 9rem)'); // XL
      } else if (width >= 1024) {
        setLineHeight('calc(100% - 9rem)'); // LG
      } else if (width >= 768) {
        setLineHeight('calc(100% - 11rem)'); // MD
      } else if (width >= 640) {
        setLineHeight('calc(100% - 11rem)'); // SM
      } else {
        setLineHeight('calc(100% - 12rem)'); // XS
      }
    };

    updateLineHeight();
    window.addEventListener('resize', updateLineHeight);
    return () => window.removeEventListener('resize', updateLineHeight);
  }, []);


  const getCertificationDescription = (filename) => {
    // Descripción de ejemplo basada en el archivo
    return "Certificación oficial. Clickear para visualizar.";
  };

  const toggleExpandedItem = (itemKey) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const handleShowIaModal = () => {
    setShowIaModal(true);
  };

  const handleCloseIaModal = () => {
    setShowIaModal(false);
  };

  const handleShowMaratonModal = () => {
    setShowMaratonModal(true);
  };

  const handleCloseMaratonModal = () => {
    setShowMaratonModal(false);
  };

  const handleShowInvestigacionModal = () => {
    setShowInvestigacionModal(true);
  };

  const handleCloseInvestigacionModal = () => {
    setShowInvestigacionModal(false);
  };

  const handleShowSolucionSoftwareModal = () => {
    setShowSolucionSoftwareModal(true);
  };

  const handleCloseSolucionSoftwareModal = () => {
    setShowSolucionSoftwareModal(false);
  };

  const toggleDescription = (descriptionKey) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [descriptionKey]: !prev[descriptionKey]
    }));
  };

  const checkTextTruncation = (element, key) => {
    if (element) {
      const isTruncated = element.scrollHeight > element.clientHeight;
      setTextTruncated(prev => ({
        ...prev,
        [key]: isTruncated
      }));
    }
  };

  useEffect(() => {
    const checkAllTruncations = () => {
      const elements = {
        escribano: document.querySelector('.escribano-text'),
        procurador: document.querySelector('.procurador-text'),
        abogado: document.querySelector('.abogado-text')
      };

      Object.entries(elements).forEach(([key, element]) => {
        if (element) {
          checkTextTruncation(element, key);
        }
      });
    };

    // Check on mount and resize
    checkAllTruncations();
    window.addEventListener('resize', checkAllTruncations);
    
    return () => window.removeEventListener('resize', checkAllTruncations);
  }, []);

  const toggleShowAllCertifications = () => {
    setShowAllCertifications(!showAllCertifications);
  };

  return (
    <ThemeWrapper>
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
              <p className="text-lg sm:text-xl md:text-2xl text-gray700 mb-4 leading-relaxed">
                Amplio conocedor del marco legal argentino con una sólida trayectoria en el fuero penal.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray600 mb-6 leading-relaxed">
                Habiendo obtenido el título de escribano y demás reconocimientos, me encuentro comprometido con un servicio de excelencia y la actualización constante en materia jurídica, lo cual me permite lograr una integración robusta de conocimientos legales con el desarrollo de software y aplicación de IA.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray500 leading-relaxed">
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
          <AnimatedTitle
            className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left ml-[10px] sm:ml-[18px] lg:ml-[25px]"
          >
            Certificaciones por año calendario
          </AnimatedTitle>

          {/* Panel de selección de año */}
          <CertificationYearSelector
            selectedYear={selectedYear}
            onYearSelect={handleYearSelect}
            years={years}
            showAllCertifications={showAllCertifications}
            onToggleShowAll={toggleShowAllCertifications}
          />

                    {/* Contenedores por año (render condicional) */}
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

          {/* Mensaje cuando no hay certificaciones */}
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

      {/* SECCIÓN 3: Relacionado al Desarrollo de Software */}
      <SoftwareDevelopmentSection
        expandedItems={expandedItems}
        onToggleExpandedItem={toggleExpandedItem}
        onShowIaModal={handleShowIaModal}
        onShowMaratonModal={handleShowMaratonModal}
        onShowInvestigacionModal={handleShowInvestigacionModal}
        onShowSolucionSoftwareModal={handleShowSolucionSoftwareModal}
      />

      {/* Modal de visualización de imagen */}
      <ImageModal
        isOpen={showImageModal}
        onClose={handleCloseModal}
        imageSrc={currentImage}
        imageAlt="Certificación"
      />

      {/* Modal de visualización de imagen de IA */}
      <ImageModal
        isOpen={showIaModal}
        onClose={handleCloseIaModal}
        imageSrc="/certificaciones/Relacionados/IA generativa en la justicia.jpg"
        imageAlt="Certificación IA Generativa"
      />

      {/* Modal de Maratón de Ideas */}
      <Modal
        isOpen={showMaratonModal}
        onClose={handleCloseMaratonModal}
              className="relative bg-clearIceFullLight rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Certificación en curso
                </h3>
                <p className="text-gray700 text-lg leading-relaxed">
                  La certificación para el proyecto "Maratón de ideas justicIA" se encuentra actualmente en proceso de evaluación.
                </p>
              </div>
              
              <button
                onClick={handleCloseMaratonModal}
                className="absolute top-4 right-4 text-gray500 hover:text-gray700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
      </Modal>

      {/* Modal de Investigación Aplicada */}
      <Modal
        isOpen={showInvestigacionModal}
        onClose={handleCloseInvestigacionModal}
              className="relative bg-clearIceFullLight rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Proyecto pendiente de aprobación por comité evaluador
                </h3>
                <p className="text-gray700 text-lg leading-relaxed">
                  El proyecto de investigación aplicada se encuentra actualmente en revisión por el comité evaluador correspondiente.
                </p>
              </div>
              
              <button
                onClick={handleCloseInvestigacionModal}
                className="absolute top-4 right-4 text-gray500 hover:text-gray700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
      </Modal>

      {/* Modal de Solución Software */}
      <ImageModal
        isOpen={showSolucionSoftwareModal}
        onClose={handleCloseSolucionSoftwareModal}
        imageSrc="/justicIA.jpeg"
        imageAlt="Solución Software justicIA"
        className="w-[800px] h-[400px] sm:h-[600px] md:w-[750px] md:h-[650px] md:object-contain lg:w-[850px] lg:h-[750px] xl:w-[980px] xl:h-[880px] object-fill sm:object-fill"
        closeButtonClassName="fixed z-50 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg top-44 sm:top-20 right-1/2 md:top-40 lg:top-32 xl:top-20"
      />

     {/* SECCIÓN 4: De interés */}
     <Section 
       className="flex items-start justify-start px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-10 pb-20"
       background="bg-clearIceFullLight"
     >
  <div className="container mx-auto">
    {/* Título de la sección */}
         <AnimatedTitle
      className="text-3xl sm:text-3xl lg:text-[40px] font-bold text-primary mb-8 text-left"
    >
      De interés
         </AnimatedTitle>

    {/* Contenido principal */}
    <div className="max-w-4xl">
      {/* Header de la empresa */}
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/images/PODER JUDICIAL.png"
          alt="Poder Judicial"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain self-start"
        />
        <div className="flex flex-col">
                        <h2 className="text-[18px] sm:text-2xl lg:text-3xl font-bold text-gray800">
            Poder Judicial de la Provincia de Córdoba
          </h2>
                      <p className="text-sm sm:text-base text-gray600">
              Jornada Completa - 5 años
            </p>
            <p className="text-sm sm:text-base text-gray600">
              Argentina - Presencial
            </p>
        </div>
      </motion.div>

      {/* Timeline de experiencia laboral */}
           <WorkExperienceTimeline
             lineHeight={lineHeight}
             expandedDescriptions={expandedDescriptions}
             textTruncated={textTruncated}
             onToggleDescription={toggleDescription}
              />
            </div>
            </div>
     </Section>

                                                                                   {/* Botón Inicio */}
      <BackToHomeButton />


      </div>
    </ThemeWrapper>
  );
};

export default LawPage; 
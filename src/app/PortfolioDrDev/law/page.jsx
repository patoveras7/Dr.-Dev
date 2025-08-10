"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  const toggleShowAllCertifications = () => {
    setShowAllCertifications(!showAllCertifications);
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
                Amplio conocedor del marco legal argentino con una sólida trayectoria en el fuero penal.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Habiendo obtenido el título de escribano y demás reconocimientos, me encuentro comprometido con un servicio de excelencia y la actualización constante en materia jurídica, lo cual me permite lograr una integración robusta de conocimientos legales con el desarrollo de software y aplicación de IA.
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
            className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left ml-[10px] sm:ml-[18px] lg:ml-[25px]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Certificaciones por año calendario
          </motion.h2>

          {/* Panel de selección de año */}
          <motion.div
            className="flex flex-wrap pb-10 gap-3 px-4 lg:px-7 justify-center sm:justify-start"
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

            {/* Botón Destacadas */}
            <button
              onClick={() => handleYearSelect("destacadas")}
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

                    {/* Contenedores por año (render condicional) */}
          {selectedYear && certificationsData[selectedYear] && (
            <motion.div
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-6 justify-center items-center md:px-[30px] lg:px-[40px] xl:px-[50px] pb-10">
                {certificationsData[selectedYear]
                  .slice(0, showAllCertifications ? certificationsData[selectedYear].length : 4)
                  .map((pdfFile, index) => (
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
                     <div className={`w-[48%] sm:w-[37%] lg:w-[30%] xl:w-[25%] flex items-center justify-center p-2 ${
                       selectedYear === "destacadas" ? "bg-clearYellow" : "bg-primary"
                     }`}>
                       <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-sm">
                       <img
                           src={`/certificaciones/${selectedYear === "destacadas" ? "Destacadas" : selectedYear}/${pdfFile}`}
                           alt="Certificación"
                           className="w-full h-full object-contain"
                         />
                       </div>
                     </div>

                    {/* Contenido (62% del ancho) */}
                    <div className="w-[52%] sm:w-[63%] lg:w-[70%] xl:w-[75%] flex items-center justify-center">
                      <p className="text-gray-600 text-[12px] text-center pr-2 pl-2">
                        {getCertificationDescription(pdfFile)}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Botón "Ver más" cuando hay más de 4 certificaciones */}
                {certificationsData[selectedYear].length > 4 && !showAllCertifications && (
                  <motion.div
                    className="w-[98%] flex justify-center items-center mt-4 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <button
                      onClick={toggleShowAllCertifications}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 min-w-[200px] ${
                        isBlinking 
                          ? "bg-primary border-primary" 
                          : "bg-white border-gray-200 hover:border-primary"
                      }`}
                    >
                      <div className="w-full h-0.5 bg-gray-300 flex-1"></div>
                      <svg className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-all duration-300 ${
                        isBlinking ? "text-clearIceFullLight" : "text-primary"
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <div className="w-full h-0.5 bg-gray-300 flex-1"></div>
                    </button>
                  </motion.div>
                )}

                {/* Botón "Ver menos" cuando están todas las certificaciones mostradas */}
                {certificationsData[selectedYear].length > 4 && showAllCertifications && (
                  <motion.div
                    className="w-[98%] flex justify-center items-center mt-4 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <button
                      onClick={toggleShowAllCertifications}
                      className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-primary min-w-[200px]"
                    >
                      <div className="w-full h-0.5 bg-gray-300 flex-1"></div>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <div className="w-full h-0.5 bg-gray-300 flex-1"></div>
                    </button>
                  </motion.div>
                )}
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

      {/* SECCIÓN 3: Relacionado al Desarrollo de Software */}
      <section className="flex flex-col gap-12 items-center w-full bg-secondary py-12 px-1 pb-20">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header con título */}
          <div className="flex justify-center mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-clearIceFullLight text-center">
              Relacionado al Desarrollo de Software
            </h1>
          </div>

          {/* Elementos desplegables */}
          <div className="flex flex-col gap-4 w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
            
            {/* Elemento 1: IA generativa en la Justicia */}
            <div className="bg-clearIceFullLight rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpandedItem('iaGenerativa')}
                className="w-full p-2 flex items-center gap-3 hover:bg-clearIceFullLight/90 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-secondary font-medium">IA generativa en la Justicia</span>
              </button>
              
              {expandedItems.iaGenerativa && (
                <div className="border-l-4 border-clearIceFullLight p-4 bg-clearIceFullLight/50 flex flex-col justify-center items-center">
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    Durante el año 2024 se llevó a cabo un proyecto a nivel nacional para concientizar el uso responsable y estratégico de la IA en el marco de los procedimientos judiciales en general. Se plantearon muchas razonables e inevitables automatizaciones en aras de la prestación de un mejor servicio de justicia.
                    </p>
                  </div>
                  <button 
                    onClick={handleShowIaModal}
                    className="bg-primary sm:w-[250px] text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
                  >
                    ver certificación
                  </button>
                </div>
              )}
            </div>

            {/* Elemento 2: Maratón de ideas justicIA */}
            <div className="bg-clearIceFullLight rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpandedItem('maratonIdeas')}
                className="w-full p-2 flex items-center gap-3 hover:bg-clearIceFullLight/90 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-secondary font-medium">Maratón de ideas justicIA</span>
              </button>
              
              {expandedItems.maratonIdeas && (
                <div className="border-l-4 border-clearIceFullLight p-4 bg-clearIceFullLight/50 flex flex-col justify-center items-center">
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    El 2 de Agosto del año 2025 el Poder Judicial de la Provincia de Córdoba organizó y desplegó una Maratón de ideas con el fin de que pequeños grupos de empleados, funcionarios y magistrados judiciales plantearan soluciones con integración de IA a problemas existentes en la labor judicial diaria. Junto con grupo del que formé parte plateamos una solución de software que, mediante el uso de los servicios de Azure AI Language que proporcionan un análisis semántico y vectorial de texto, permite la notificación automática de resoluciones inmediatamente luego de la firma digital de las mismas. Conocé mas haciendo <a href="https://www.instagram.com/reel/DNB1HZVS0W-/?utm_source=ig_web_copy_link&igsh=NGdhNG80NmF6cm5l" className="text-primary font-bold underline hover:text-primary/80 transition-colors">click aquí</a>.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={handleShowMaratonModal}
                      className="bg-primary sm:w-[250px] text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
                    >
                      ver certificación
                    </button>
                    <button 
                      onClick={handleShowSolucionSoftwareModal}
                      className="bg-primary sm:w-[250px] text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
                    >
                      Solución Software
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Elemento 3: Proyectos de Investigación Aplicada */}
            <div className="bg-clearIceFullLight rounded-lg overflow-hidden">
              <button
                onClick={() => toggleExpandedItem('proyectosInvestigacion')}
                className="w-full p-2 flex items-center gap-3 hover:bg-clearIceFullLight/90 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                                 <span className="text-secondary font-medium sm:hidden">Investigación Aplicada</span>
                 <span className="text-secondary font-medium hidden sm:block">Proyectos de Investigación Aplicada (PIA)</span>
              </button>
              
              {expandedItems.proyectosInvestigacion && (
                <div className="border-l-4 border-clearIceFullLight p-4 bg-clearIceFullLight/50 flex flex-col justify-center items-center">
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed text-justify">
                    El Ministerio Público Fiscal de la Provincia de Córdoba abrió convocatoria a la presentación de proyectos de investigación aplicada que puedan contribuir tanto a la construcción de capacidades institucionales como a la resolución de problemas en los distintos ámbitos de intervención. Dr. Dev junto a otros colaboradores está en vías de presentación de un proyecto con integración de IA que mejora procesos de trabajo institucionales y el servicio de justicia.
                    </p>
                  </div>
                  <button 
                    onClick={handleShowInvestigacionModal}
                    className="bg-primary sm:w-[250px] text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
                  >
                    ver certificación
                  </button>
                </div>
              )}
            </div>
          </div>
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
              className="relative overflow-y-auto overflow-x-auto md:overflow-hidden md:max-h-none md:max-w-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen de la certificación */}
              <img
                src={currentImage}
                alt="Certificación"
                className="certification-image w-[700px] h-[500px] sm:w-[800px] sm:h-[600px] md:w-[730px] md:h-[530px] md:object-contain lg:w-[850px] lg:h-[750px] xl:w-[980px] xl:h-[880px] object-fill sm:object-fill"
                style={{ minWidth: '700px' }}
                onLoad={(e) => {
                  if (window.innerWidth >= 640 && window.innerWidth < 768) {
                    e.target.style.minWidth = '1000px';
                  } else if (window.innerWidth >= 768) {
                    e.target.style.minWidth = 'auto';
                  }
                }}
              />
              {/* Botón de cerrar fijo sobre la imagen */}
              <button
                onClick={handleCloseModal}
                className="fixed z-50 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg top-32 sm:top-16 right-1/2 md:top-28 lg:top-20 xl:top-9"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Modal de visualización de imagen de IA */}
      {showIaModal && (
        <>
          {/* Overlay con blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={handleCloseIaModal}
          />

          {/* Modal centrado */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseIaModal}
          >
            <div
              className="relative overflow-y-auto overflow-x-auto md:overflow-hidden md:max-h-none md:max-w-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen de la certificación de IA */}
              <img
                src="/certificaciones/Relacionados/IA generativa en la justicia.jpg"
                alt="Certificación IA Generativa"
                className="certification-image w-[700px] h-[500px] sm:w-[800px] sm:h-[600px] md:w-[730px] md:h-[530px] md:object-contain lg:w-[850px] lg:h-[750px] xl:w-[980px] xl:h-[880px] object-fill sm:object-fill"
                style={{ minWidth: '700px' }}
                onLoad={(e) => {
                  if (window.innerWidth >= 640 && window.innerWidth < 768) {
                    e.target.style.minWidth = '1000px';
                  } else if (window.innerWidth >= 768) {
                    e.target.style.minWidth = 'auto';
                  }
                }}
              />
              {/* Botón de cerrar fijo sobre la imagen */}
              <button
                onClick={handleCloseIaModal}
                className="fixed z-50 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg top-32 sm:top-16 right-1/2 md:top-28 lg:top-20 xl:top-9"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Modal de Maratón de Ideas */}
      {showMaratonModal && (
        <>
          {/* Overlay con blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={handleCloseMaratonModal}
          />

          {/* Modal centrado */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseMaratonModal}
          >
            <div
              className="relative bg-clearIceFullLight rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenido del modal */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Certificación en curso
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  La certificación para el proyecto "Maratón de ideas justicIA" se encuentra actualmente en proceso de evaluación.
                </p>
              </div>
              
              {/* Botón de cerrar */}
              <button
                onClick={handleCloseMaratonModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Modal de Investigación Aplicada */}
      {showInvestigacionModal && (
        <>
          {/* Overlay con blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={handleCloseInvestigacionModal}
          />

          {/* Modal centrado */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseInvestigacionModal}
          >
            <div
              className="relative bg-clearIceFullLight rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenido del modal */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Proyecto pendiente de aprobación por comité evaluador
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  El proyecto de investigación aplicada se encuentra actualmente en revisión por el comité evaluador correspondiente.
                </p>
              </div>
              
              {/* Botón de cerrar */}
              <button
                onClick={handleCloseInvestigacionModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Modal de Solución Software */}
      {showSolucionSoftwareModal && (
        <>
          {/* Overlay con blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={handleCloseSolucionSoftwareModal}
          />

          {/* Modal centrado */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseSolucionSoftwareModal}
          >
            <div
              className="relative overflow-y-auto overflow-x-auto md:overflow-hidden md:max-h-none md:max-w-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen de la solución software */}
              <img
                src="/justicIA.jpeg"
                alt="Solución Software justicIA"
                className="certification-image w-[800px] h-[400px] sm:h-[600px] md:w-[750px] md:h-[650px] md:object-contain lg:w-[850px] lg:h-[750px] xl:w-[980px] xl:h-[880px] object-fill sm:object-fill"
                style={{ minWidth: '700px' }}
                onLoad={(e) => {
                  if (window.innerWidth >= 640 && window.innerWidth < 768) {
                    e.target.style.minWidth = '1000px';
                  } else if (window.innerWidth >= 768) {
                    e.target.style.minWidth = 'auto';
                  }
                }}
              />
              {/* Botón de cerrar fijo sobre la imagen */}
              <button
                onClick={handleCloseSolucionSoftwareModal}
                className="fixed z-50 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg top-44 sm:top-20 right-1/2 md:top-40 lg:top-32 xl:top-20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}

     {/* SECCIÓN 4: De interés */}
<section className="flex items-start justify-start px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-10 pb-20 bg-clearIceFullLight">
  <div className="container mx-auto">
    {/* Título de la sección */}
    <motion.h1
      className="text-3xl sm:text-3xl lg:text-[40px] font-bold text-primary mb-8 text-left"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      De interés
    </motion.h1>

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
          <h2 className="text-[18px] sm:text-2xl lg:text-3xl font-bold text-gray-800">
            Poder Judicial de la Provincia de Córdoba
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Jornada Completa - 5 años
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Argentina - Presencial
          </p>
        </div>
      </motion.div>

      {/* Timeline de experiencia laboral */}
      <div className="relative">
        {/* Línea vertical */}
                  <motion.div
            className="absolute left-4 sm:left-6 top-0 w-0.5 bg-gray-300"
            style={{ height: lineHeight }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

        {/* === Puesto 1: Escribano Público === */}
        <motion.div
          className="relative flex items-start gap-6 sm:gap-8 mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Punto en la línea */}
          <div className="absolute left-2 sm:left-4 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />
          
          {/* Contenido */}
          <div className="ml-12 sm:ml-16 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                CRPPA - Tribunales II
              </h3>
              <img
                src="/images/MPF.png"
                alt="MPF"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain mt-1"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              dic. 2021 - actualidad · 3 años 9 meses
            </p>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <p className={expandedDescriptions.escribano ? "" : "line-clamp-4 sm:line-clamp-3"}>
                Centro de Recepción de Procedimientos con Personas Aprehendidas (CRPPA) - Recepción e instrucción de procedimientos judiciales con aprehendidos en flagrancia por la supuesta comisión de hechos delictivos. Desarrollo de los actos iniciales de la IPP (instrucción penal preparatoria) recabando la prueba inmediata e inicial a hechos de la naturaleza mencionada.
              </p>
              {!expandedDescriptions.escribano && (
                <button 
                  onClick={() => toggleDescription('escribano')}
                  className="text-secondary font-bold hover:underline mt-1 block"
                >
                  ... ver más
                </button>
              )}
              {expandedDescriptions.escribano && (
                <button 
                  onClick={() => toggleDescription('escribano')}
                  className="text-secondary font-bold hover:underline mt-1 block"
                >
                  ... ver menos
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* === Puesto 2: Procurador === */}
        <motion.div
          className="relative flex items-start gap-6 sm:gap-8 mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {/* Punto */}
          <div className="absolute left-2 sm:left-4 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />
          
          <div className="ml-12 sm:ml-16 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                Fiscalía de Instrucción
              </h3>
              <img
                src="/images/MPF.png"
                alt="MPF"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain mt-1"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              dic. 2020 - dic. 2021 · 1 año
            </p>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <p className={expandedDescriptions.procurador ? "" : "line-clamp-4 sm:line-clamp-3"}>
                Fiscalia de Instrucción del Primer Turno (Rio Tercero) - Instrucción de causas penales en general abarcando todos los actos procesales hasta la elevación a juicio. Incluye la recepción de testimonios, recepción de indagatoria, realización de diligencias probatorias de segundo grado como ruedas de reconocimiento y cámara gesell, redacción de prisiones preventivas, redacción de elevaciones a juicio y cierre de juicios abreviados.
              </p>
              {!expandedDescriptions.procurador && (
                <button 
                  onClick={() => toggleDescription('procurador')}
                  className="text-secondary font-bold hover:underline mt-1 block"
                >
                  ... ver más
                </button>
              )}
              {expandedDescriptions.procurador && (
                <button 
                  onClick={() => toggleDescription('procurador')}
                  className="text-secondary font-bold hover:underline mt-1 block"
                >
                  ... ver menos
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* === Puesto 3: Abogado === */}
        <motion.div
          className="relative flex items-start gap-6 sm:gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          {/* Punto */}
          <div className="absolute left-2 sm:left-4 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />
          
          <div className="ml-12 sm:ml-16 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                Unidad Judicial
              </h3>
              <img
                src="/images/MPF.png"
                alt="MPF"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain mt-1"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-3">
              ago. 2020 - dic. 2021 · 5 meses
            </p>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <p className={expandedDescriptions.abogado ? "" : "line-clamp-4 sm:line-clamp-3"}>
              Unidad Judicial de Rio Tercero – Dependencia judicial multifuero donde se receptaron denuncias de todo tipo v. gr: abusos sexuales, estafas, hechos de violencia familiar, robos, procedimientos con aprehendidos en flagrancia, etc. Se cumplimentó con la recepción inicial de prueba hasta la elevación del sumario en definitivo a la Fiscalía de Instrucción pertinente.
              </p>
              {!expandedDescriptions.abogado && (
                <button 
                  onClick={() => toggleDescription('abogado')}
                  className="text-secondary font-bold hover:underline mt-1 block"
                >
                  ... ver más
                </button>
              )}
              {expandedDescriptions.abogado && (
                <button 
                  onClick={() => toggleDescription('abogado')}
                  className="text-secondary font-bold hover:underline mt-1 block"
                >
                  ... ver menos
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* Botón Home */}
      <button
        onClick={() => window.location.href = '/PortfolioDrDev/home'}
        className="fixed z-50 right-16 top-2.5 sm:top-4 sm:right-20 md:top-6 md:right-[85px] lg:top-8 lg:right-[100px] xl:top-10 xl:right-[120px] bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-2 py-1 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
      >
        home
      </button>


    </div>
  );
};

export default LawPage; 
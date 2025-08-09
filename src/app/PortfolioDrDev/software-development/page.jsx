"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectImagesCarousel from "../../../components/carouselComponents/ProjectImagesCarousel";

const SoftwareDevelopmentPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [showTechModal, setShowTechModal] = useState(false);
  const [currentTechImage, setCurrentTechImage] = useState("");
  const [fullnessCurrentSlide, setFullnessCurrentSlide] = useState(0);

  const mdTrackRef = useRef(null);
  const slideWidth = 300; // 280px + gap
  const transitionTime = 500; // ms

  const projects = [
    {
      id: 1,
      title: "ALKEMY POCKET",
      image: "/images/Proyectos/AlkemyPocketLogo.png",
      description: "Billetera virtual es bolsillo digital."
    },
    {
      id: 2,
      title: "APPLE BE",
      image: "/images/Proyectos/Apple2.jpg",
      description: "Compra rápida y segura de productos Apple."
    },
    {
      id: 3,
      title: "ROMPIENDO BARRERAS",
      image: "/images/Proyectos/RB2.jpeg",
      description: "Accede a la puerta que abre infinidad de puertas, el idioma."
    }
  ];

  // Duplicamos para un efecto continuo (como el ejemplo que me diste)
  const mdSlides = [...projects, ...projects];

  // Timer autoplay (3 segundos)
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const fullnessImages = [
    "/images/Proyectos/Fullness1.jpg",
    "/images/Proyectos/Fullness2.jpg", 
    "/images/Proyectos/Fullness3.jpg",
    "/images/Proyectos/Fullness4.jpg",
    "/images/Proyectos/Fullness5.jpg"
  ];

  // Duplicamos las imágenes para crear un carousel infinito
  const fullnessSlides = [...fullnessImages, ...fullnessImages];

  const nextFullnessSlide = () => {
    setFullnessCurrentSlide((prev) => (prev + 1) % fullnessImages.length);
  };

  const prevFullnessSlide = () => {
    setFullnessCurrentSlide((prev) => (prev - 1 + fullnessImages.length) % fullnessImages.length);
  };

  const scrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (element) {
      const targetPosition = element.offsetTop - 100; // 100px de offset para mejor vista
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 2000; // 2 segundos de duración
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      // Función de easing para scroll suave
      const easeInOutCubic = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  // Animación continua para MD (basada en keyframes del ejemplo)
  useEffect(() => {
    if (!mdTrackRef.current) return;
    const totalWidth = slideWidth * mdSlides.length;
    const duration = (mdSlides.length * 3); // velocidad proporcional
    mdTrackRef.current.style.animation = `scrollLeft ${duration}s linear infinite`;

    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth / 2}px); }
      }
    `;
    document.head.appendChild(styleTag);
    return () => {
      if (document.head.contains(styleTag)) document.head.removeChild(styleTag);
    };
  }, [mdSlides.length]);

  const ProjectCard = ({ project, width, height }) => {
    const getProjectId = (title) => {
      switch (title) {
        case "ALKEMY POCKET":
          return "alkemy-pocket";
        case "APPLE BE":
          return "apple-be";
        case "ROMPIENDO BARRERAS":
          return "rompiendo-barreras";
        default:
          return "";
      }
    };

    return (
      <div
        className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
          width ? width : "xl:w-[490px] xl:h-[370px] lg:w-[300px] lg:h-[400px] w-[325px] h-[360px] sm:w-[500px] sm:h-[380px]"
        } mx-auto`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => {
          const projectId = getProjectId(project.title);
          if (projectId) {
            scrollToProject(projectId);
          }
        }}
      >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={height ? { height: height.replace("h-[", "").replace("]", "") } : {}}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2">
        <div className="inline-block bg-primary xl:bg-primary/70 rounded-[7px] px-2 mb-1">
          <h1 className="text-[17px] xl:text-[25px] font-bold text-clearIceFullLight">
            {project.title}
          </h1>
        </div>
        <div className="text-clearIceFullLight text-[12px] sm:text-base xl:text-[16px] pl-1 font-bold font-['Manrope',sans-serif] leading-relaxed w-[250px] sm:w-full whitespace-normal break-words">
          <p className="m-0 w-full">{project.description}</p>
          <span className="block h-0.5 bg-clearIceFullLight w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
        </div>
      </div>
    </div>
    );
  };

  const handleShowTechs = (projectName) => {
    let techImage = "";
    switch (projectName) {
      case "AlkemyPocket":
        techImage = "/images/Proyectos/AlkemyPocketTechs.png";
        break;
      case "AppleBe":
        techImage = "/images/Proyectos/AppleTechs.jpg";
        break;
      case "RompiendoBarreras":
        techImage = "/images/Proyectos/RBTechs.png";
        break;
      default:
        techImage = "";
    }
    setCurrentTechImage(techImage);
    setShowTechModal(true);
  };

  const handleCloseModal = () => {
    setShowTechModal(false);
    setCurrentTechImage("");
  };

// --- ESCAPE PARA CERRAR MODAL ---
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [handleCloseModal]);

  return (
    <div className="min-h-screen bg-clearIceFullLight">
      {/* SECCIÓN 1 */}
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
                Software Development
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Desarrollando soluciones innovadoras y aplicaciones web modernas que transforman ideas en realidad digital.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Dr. Dev está especializado en tecnologías frontend y backend, creando experiencias de usuario excepcionales y sistemas robustos que escalan con tu negocio. Desde aplicaciones web responsivas hasta sistemas complejos de gestión, cada proyecto es una oportunidad para innovar y superar expectativas.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed italic font-semibold">
              "Sólo aquellos que se atreven a desafiar lo establecido pueden crear lo imposible"
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
                  src="/images/fotoPato.jpeg"
                  alt="Patricio Veras - Software Developer"
                  className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section className="flex items-start justify-center px-1">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left ml-[10px] sm:ml-[18px] lg:ml-[25px] xl:ml-0"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Proyectos personales
          </motion.h2>

          {/* XS/SM */}
<div className="md:hidden lg:hidden">
  <div className="relative overflow-hidden rounded-2xl">
    <div
      className="flex gap-3 transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 0.75}rem))`
      }}
    >
      {projects.concat(projects).map((p, idx) => (
        <motion.div 
          key={idx} 
          className="w-full flex-shrink-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut", 
            delay: idx * 0.2 
          }}
        >
          <ProjectCard project={p} />
        </motion.div>
      ))}
    </div>
  </div>
  {/* Botones */}
  <div className="flex justify-center gap-4 mt-6">
    <button
      onClick={prevSlide}
      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-200"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      onClick={nextSlide}
      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-200"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>


          {/* MD */}
          <div className="hidden md:block lg:hidden">
            <div className="relative overflow-hidden rounded-2xl w-full" style={{ maxWidth: 900 }}>
              <div ref={mdTrackRef} className="flex gap-4">
                {mdSlides.map((p, idx) => (
                  <div key={idx} className="flex-shrink-0">
                    <ProjectCard project={p} width="w-[280px] h-[280px]" height="h-[280px]" />
                  </div>
                ))}
              </div>
            </div>
            {/* Botones eliminados en MD */}
          </div>

          {/* LG/XL */}
          <div className="hidden lg:block">
            <div className="flex gap-[10px] xl:gap-[45px] justify-start">
              {projects.map((p, index) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut", 
                    delay: index * 0.3 
                  }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Proyectos individuales */}
      <section className="flex flex-col gap-12 items-center w-full mt-3 bg-clearIceFullLight pb-[48px] pt-[15px]">
        {/* PARTE 1: Alkemy Pocket */}
        <div id="alkemy-pocket" className="flex flex-col items-center w-full sm:max-w-[550px] md:max-w-[680px] lg:max-w-[830px] xl:max-w-[1150px] mx-auto mt-[30px] lg:mt-[50px] xl:mt-[70px]">
          {/* Header unificado */}
          <div className="mb-4 w-full">
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 text-justify px-3 leading-tight">
              <span className="font-extrabold underline text-primary">AlkemyPocket</span>: Desarrollo de billetera virtual "digitalizando" el bolsillo del consumidor. La aplicación cuenta con una interfaz interactiva, responsiva e intuitiva para el cliente capaz de efectuar depósitos, concretar transacciones, listar contactos frecuentes, extraer dinero, asociar tarjetas o solicitar alta de nuevas cuentas tanto en pesos argentinos como en moneda extranjera. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código". 
            </p>
          </div>
          {/* Carousel */}
          <ProjectImagesCarousel
            images={[
              "/images/Proyectos/AlkemyPocket1.jpg",
              "/images/Proyectos/AlkemyPocket2.jpg",
              "/images/Proyectos/AlkemyPocket3.jpg",
              "/images/Proyectos/AlkemyPocket4.jpg",
              "/images/Proyectos/AlkemyPocket5.jpg",
              "/images/Proyectos/AlkemyPocket6.jpg",
              "/images/Proyectos/AlkemyPocket7.jpg",
              "/images/Proyectos/AlkemyPocket8.jpg",
              "/images/Proyectos/AlkemyPocketDataBase.png"
            ]}
          />
          {/* Botones */}
          <div className="flex flex-row gap-4 mt-6">
            <button className="bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg">
              Ver código
            </button>
            <button 
              onClick={() => handleShowTechs("AlkemyPocket")}
              className="bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
            >
              Ver tecnologías
            </button>
          </div>
        </div>

        {/* PARTE 2: AppleBe */}
        <div id="apple-be" className="flex flex-col items-center w-full sm:max-w-[550px] md:max-w-[680px] lg:max-w-[830px] xl:max-w-[1150px] mx-auto">
          {/* Header unificado */}
          <div className="mb-4 w-full">
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 text-justify px-3 leading-tight">
              <span className="font-extrabold underline text-primary">AppleBe</span>: Plataforma e-commerce  dedicada  a la venta de artículos de tecnología en general pero centrada en su mayoría a la comercialización de productos Apple. El usuario puede observar productos, registrarse, loguearse y completar su carrito de compras. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código".
            </p>
          </div>
          {/* Carousel */}
          <ProjectImagesCarousel
            images={[
              "/images/Proyectos/Apple1.jpg",
              "/images/Proyectos/Apple2.jpg",
              "/images/Proyectos/Apple3.jpg",
              "/images/Proyectos/Apple4.jpg"
            ]}
          />
          {/* Botones */}
          <div className="flex flex-row gap-4 mt-6">
            <button className="bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg">
              Ver código
            </button>
            <button 
              onClick={() => handleShowTechs("AppleBe")}
              className="bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
            >
              Ver tecnologías
            </button>
          </div>
        </div>

        {/* PARTE 3: Rompiendo Barreras */}
        <div id="rompiendo-barreras" className="flex flex-col items-center w-full sm:max-w-[550px] md:max-w-[680px] lg:max-w-[830px] xl:max-w-[1150px] mx-auto">
          {/* Header unificado */}
          <div className="mb-4 w-full">
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 text-justify px-3 leading-tight">
              <span className="font-extrabold underline text-primary">RompiendoBarreras</span>: Plataforma web destinada a la enseñanza de todo tipo de idiomas. El sitio acepta el pago de determinadas membresías que posibilitan el acceso a ciertos cursos de distintos lenguajes. Cada lenguaje cuenta con distintos tipos de curso dependiendo la motivación que haya tenido el usuario a la hora de estudiar el idioma, sea rendir un exámen internacional, viajar por placer, viajar por trabajo, trabajar para extranjero, etc. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código".
            </p>
          </div>
          {/* Carousel */}
          <ProjectImagesCarousel
            images={[
              "/images/Proyectos/RB1.jpeg",
              "/images/Proyectos/RB2.jpeg",
              "/images/Proyectos/RB3.jpeg"
            ]}
          />
          {/* Botones */}
          <div className="flex flex-row gap-4 mt-6">
            <button className="bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg">
              Ver código
            </button>
            <button 
              onClick={() => handleShowTechs("RompiendoBarreras")}
              className="bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
            >
              Ver tecnologías
            </button>
          </div>
        </div>
      </section>

      {/* Modal de Tecnologías */}
      {showTechModal && (
  <>
    {/* Overlay con opacity y blur */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
      onClick={handleCloseModal} // Cierra si se clickea fuera
    />

    {/* Modal centrado */}
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleCloseModal} // Cierra si clickea fuera del modal
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // No cierra si se hace click en la imagen
      >
        {/* Imagen de tecnologías */}
        <img
          src={currentTechImage}
          alt="Tecnologías del proyecto"
          className="w-[95vw] h-auto sm:w-[500px] sm:h-[280px] md:w-[650px] md:h-[365px] lg:w-[750px] lg:h-[420px] xl:w-[900px] xl:h-[505px] object-contain"
        />
        {/* Botón de cerrar */}
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 z-10 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </>
)}

      {/* SECCIÓN 4: Proyecto Profesional */}
      <section className="flex flex-col gap-12 items-center w-full mt-8 bg-secondary py-12 px-1">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header con título y enlace */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-clearIceFullLight mb-4 sm:mb-0">
              Proyecto Profesional
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-clearIceFullLight text-lg sm:text-xl font-medium underline">
                Más imágenes
              </span>
              <svg 
                className="w-6 h-6 text-clearIceFullLight transition-transform duration-300 hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Carousel de Fullness */}
          <div className="relative overflow-hidden rounded-2xl px-2">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${fullnessCurrentSlide * 100}% - ${fullnessCurrentSlide * 1}rem))`
              }}
            >
              {fullnessSlides.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full h-[400px] sm:w-[470px] sm:h-[360px] md:w-[330px] md:h-[410px] lg:w-[450px] lg:h-[440px] xl:w-[630px] xl:h-[500px] bg-clearIceFullLight rounded-2xl overflow-hidden shadow-lg"
                >
                  {/* Imagen (80% del espacio) */}
                  <div className="w-full h-[80%] relative">
                    <img
                      src={image}
                      alt={`Fullness ${(index % fullnessImages.length) + 1}`}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>
                  {/* Contenido de texto (20% del espacio) */}
                  <div className="h-[20%] p-4 flex flex-col justify-center">
                    <p className="text-gray-700 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs leading-tight">
                      Fullness es un sitio web interactivo que ofrece servicios de medicina no farmacológica, en especial fisioterapia, conectando a los usuarios (pacientes) con los profesionales en la salud que los atenderán.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevFullnessSlide}
              className="w-12 h-12 bg-clearIceFullLight rounded-full flex items-center justify-center text-secondary hover:bg-clearIceFullLight/80 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextFullnessSlide}
              className="w-12 h-12 bg-clearIceFullLight rounded-full flex items-center justify-center text-secondary hover:bg-clearIceFullLight/80 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Título y descripción */}
          <div className="text-center mt-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-clearIceFullLight mb-4">
              Fullness
            </h2>
            <p className="text-clearIceFullLight text-justify text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-3">
              Tuve el enorme placer de trabajar en el proyecto Fullness, que conecta usuarios (pacientes) con profesionales de la salud que los atenderán según el turno acordado en agenda. En el sitio cada profesional de la salud tiene su agenda personalizada y un repertorio donde podrá subir las certificaciones y reconocimientos personales que el paciente podrá analizar al momento de elegir el servicio. Mi intervención en el proyecto se da en el marco de una pasantia en la empresa Fullness de Perú (el proyecto no le pertenece a Dr. Dev). Visita Fullness en <a href="https://www.linkedin.com/company/fisiofullness/" className="text-clearYellow underline">Fisiofullness</a>.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: Por qué Dr. Dev?? */}
      <section className="flex items-start justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 bg-clearIceFullLight">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Contenido de texto */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-primary mb-6 leading-tight">
                Por qué Dr. Dev??
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto lg:mx-0">
              Mi background consta de graduación y experiencia en una gran cantidad de rubros lo cual es fiel reflejo de mi responsabilidad, disciplina y optimismo a la hora de aprender nuevas habilidades y desenvolverme en el campo laboral, cualquiera sea la dedicacion que se requiera. Creo firmemente en el trabajo duro y en responder con mi maximo esfuerzo a quienes me brindaron su confianza, si me das la oportunidad con total seguridad te seré de gran utilidad. Dr. Dev se jacta de poseer una gran capacidad de gestión, por lo que si existe alguna solicitud que requiera de investigacion para llevarse a cabo, se encontrará la forma de concretarla. Además, la pasión por el código limpio, la arquitectura robusta y la experiencia de usuario excepcional define cada proyecto, transformando ideas en realidades digitales que impactan positivamente en la vida de las personas.
              </p>
            </motion.div>

            {/* GIF animado */}
            <motion.div
              className="flex justify-center lg:w-[45%]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
                  alt="Desarrollador trabajando en código"
                  className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: Carousel de Tecnologías */}
      <section id="tech-stack" className="bg-clearIceFullLight pb-[100px]">
        <div className="relative overflow-hidden">
          <style jsx>{`
            @keyframes slideRight {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }

            @keyframes slideLeft {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .tech-carousel-track {
              display: flex;
              gap: 1rem;
              animation: slideRight 12.5s linear infinite;
              width: fit-content;
              will-change: transform;
            }

            .tech-carousel-track-left {
              display: flex;
              gap: 1rem;
              animation: slideLeft 12.5s linear infinite;
              width: fit-content;
              will-change: transform;
            }

            /* Carousels más rápidos para pantallas pequeñas */
            @media (max-width: 640px) {
              .tech-carousel-track {
                animation: slideRight 4.17s linear infinite;
              }
              .tech-carousel-track-left {
                animation: slideLeft 4.17s linear infinite;
              }
            }
          `}</style>

          {/* Carousel para pantallas grandes (768px, 1024px, 1280px) */}
          <div className="hidden md:block">
            <div className="tech-carousel-track">
            {/* Primer conjunto de logos */}
            {[
              "/images/Logos Techs/React.png",
              "/images/Logos Techs/Next.png",
              "/images/Logos Techs/JS.png",
              "/images/Logos Techs/TS.png",
              "/images/Logos Techs/node.png",
              "/images/Logos Techs/nests.png",
              "/images/Logos Techs/Java.png",
              "/images/Logos Techs/Spring Boot.png",
              "/images/Logos Techs/SQL.png",
              "/images/Logos Techs/POSTGRESQL.png",
              "/images/Logos Techs/SQLITE.png",
              "/images/Logos Techs/DOCKER.png",
              "/images/Logos Techs/KUBERNETS.png",
              "/images/Logos Techs/Tailwind.png"
            ].map((tech, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={tech}
                  alt={`Tech ${index + 1}`}
                  className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                />
              </div>
            ))}
            {/* Segundo conjunto (duplicado para efecto infinito) */}
            {[
              "/images/Logos Techs/React.png",
              "/images/Logos Techs/Next.png",
              "/images/Logos Techs/JS.png",
              "/images/Logos Techs/TS.png",
              "/images/Logos Techs/node.png",
              "/images/Logos Techs/nests.png",
              "/images/Logos Techs/Java.png",
              "/images/Logos Techs/Spring Boot.png",
              "/images/Logos Techs/SQL.png",
              "/images/Logos Techs/POSTGRESQL.png",
              "/images/Logos Techs/SQLITE.png",
              "/images/Logos Techs/DOCKER.png",
              "/images/Logos Techs/KUBERNETS.png",
              "/images/Logos Techs/Tailwind.png"
            ].map((tech, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <img
                  src={tech}
                  alt={`Tech ${index + 1}`}
                  className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                />
              </div>
            ))}
          </div>
          </div>

          {/* Carousels para pantallas pequeñas (350px y 640px) */}
          <div className="md:hidden">
            {/* Carousels para 640px (2 carousels) */}
            <div className="hidden sm:block">
              {/* Primer carousel - hacia la derecha */}
              <div className="tech-carousel-track mb-8">
                {[
                  "/images/Logos Techs/React.png",
                  "/images/Logos Techs/Next.png",
                  "/images/Logos Techs/JS.png",
                  "/images/Logos Techs/TS.png",
                  "/images/Logos Techs/node.png",
                  "/images/Logos Techs/nests.png",
                  "/images/Logos Techs/Java.png"
                ].map((tech, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
                {/* Duplicado para efecto infinito */}
                {[
                  "/images/Logos Techs/React.png",
                  "/images/Logos Techs/Next.png",
                  "/images/Logos Techs/JS.png",
                  "/images/Logos Techs/TS.png",
                  "/images/Logos Techs/node.png",
                  "/images/Logos Techs/nests.png",
                  "/images/Logos Techs/Java.png"
                ].map((tech, index) => (
                  <div key={`duplicate-1-${index}`} className="flex-shrink-0">
                    <img

                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
              </div>

              {/* Segundo carousel - hacia la izquierda */}
              <div className="tech-carousel-track-left">
                {[
                  "/images/Logos Techs/Spring Boot.png",
                  "/images/Logos Techs/SQL.png",
                  "/images/Logos Techs/PostgreSQL.png",
                  "/images/Logos Techs/SQLITE.png",
                  "/images/Logos Techs/Docker.png",
                  "/images/Logos Techs/KUBERNETS.png",
                  "/images/Logos Techs/Tailwind.png"
                ].map((tech, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
                {/* Duplicado para efecto infinito */}
                {[
                  "/images/Logos Techs/Spring Boot.png",
                  "/images/Logos Techs/SQL.png",
                  "/images/Logos Techs/PostgreSQL.png",
                  "/images/Logos Techs/SQLITE.png",
                  "/images/Logos Techs/Docker.png",
                  "/images/Logos Techs/KUBERNETS.png",
                  "/images/Logos Techs/Tailwind.png"
                ].map((tech, index) => (
                  <div key={`duplicate-2-${index}`} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousels para 350px (3 carousels) */}
            <div className="sm:hidden">
              {/* Primer carousel - hacia la derecha (5 imágenes) */}
              <div className="tech-carousel-track mb-6">
                {[
                  "/images/Logos Techs/React.png",
                  "/images/Logos Techs/NEXT.png",
                  "/images/Logos Techs/JS.png",
                  "/images/Logos Techs/TS.png",
                  "/images/Logos Techs/node.png"
                ].map((tech, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
                {/* Duplicado para efecto infinito */}
                {[
                  "/images/Logos Techs/React.png",
                  "/images/Logos Techs/NEXT.png",
                  "/images/Logos Techs/JS.png",
                  "/images/Logos Techs/TS.png",
                  "/images/Logos Techs/node.png"
                ].map((tech, index) => (
                  <div key={`duplicate-xs-1-${index}`} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
              </div>

              {/* Segundo carousel - hacia la izquierda (5 imágenes) */}
              <div className="tech-carousel-track-left mb-6">
                {[
                  "/images/Logos Techs/nests.png",
                  "/images/Logos Techs/Java.png",
                  "/images/Logos Techs/Spring Boot.png",
                  "/images/Logos Techs/SQL.png",
                  "/images/Logos Techs/PostgreSQL.png"
                ].map((tech, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
                {/* Duplicado para efecto infinito */}
                {[
                  "/images/Logos Techs/nests.png",
                  "/images/Logos Techs/Java.png",
                  "/images/Logos Techs/Spring Boot.png",
                  "/images/Logos Techs/SQL.png",
                  "/images/Logos Techs/PostgreSQL.png"
                ].map((tech, index) => (
                  <div key={`duplicate-xs-2-${index}`} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
              </div>

              {/* Tercer carousel - hacia la derecha (4 imágenes + 1 repetida) */}
              <div className="tech-carousel-track">
                {[
                  "/images/Logos Techs/SQLITE.png",
                  "/images/Logos Techs/Docker.png",
                  "/images/Logos Techs/KUBERNETS.png",
                  "/images/Logos Techs/Tailwind.png",
                  "/images/Logos Techs/React.png" // Repetida para completar 5
                ].map((tech, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
                {/* Duplicado para efecto infinito */}
                {[
                  "/images/Logos Techs/SQLITE.png",
                  "/images/Logos Techs/Docker.png",
                  "/images/Logos Techs/KUBERNETS.png",
                  "/images/Logos Techs/Tailwind.png",
                  "/images/Logos Techs/React.png" // Repetida para completar 5
                ].map((tech, index) => (
                  <div key={`duplicate-xs-3-${index}`} className="flex-shrink-0">
                    <img
                      src={tech}
                      alt={`Tech ${index + 1}`}
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                    />
                  </div>
                ))}
              </div>
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

export default SoftwareDevelopmentPage;

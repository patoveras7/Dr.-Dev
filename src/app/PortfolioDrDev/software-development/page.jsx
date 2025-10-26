"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ProjectImagesCarousel from "../../../components/carouselComponents/ProjectImagesCarousel";
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
  ProjectCarousel,
  ProjectSection,
  IndividualProject,
  FullnessSection,
  TechCarousel
} from "../../../components/software";

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
    <ThemeWrapper>
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
              <p className="text-lg sm:text-xl md:text-2xl text-gray700 mb-4 leading-relaxed">
                Desarrollando soluciones innovadoras y aplicaciones web modernas que transforman ideas en realidad digital.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray600 mb-6 leading-relaxed">
                Dr. Dev está especializado en tecnologías frontend y backend, creando experiencias de usuario excepcionales y sistemas robustos que escalan con tu negocio. Desde aplicaciones web responsivas hasta sistemas complejos de gestión, cada proyecto es una oportunidad para innovar y superar expectativas.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray500 leading-relaxed italic font-semibold">
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
      <ProjectCarousel
        projects={projects}
        currentSlide={currentSlide}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onProjectClick={scrollToProject}
      />
      
      <ProjectSection
        projects={projects}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onProjectClick={scrollToProject}
      />

      {/* SECCIÓN 3: Proyectos individuales */}
      <section className="flex flex-col gap-12 items-center w-full mt-3 bg-clearIceFullLight pb-[48px] pt-[15px]">
        <IndividualProject
          id="alkemy-pocket"
          title="AlkemyPocket"
          description='Desarrollo de billetera virtual "digitalizando" el bolsillo del consumidor. La aplicación cuenta con una interfaz interactiva, responsiva e intuitiva para el cliente capaz de efectuar depósitos, concretar transacciones, listar contactos frecuentes, extraer dinero, asociar tarjetas o solicitar alta de nuevas cuentas tanto en pesos argentinos como en moneda extranjera. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código".'
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
          githubUrl="https://github.com/patoveras7/WalletAP-Back"
          onShowTechs={handleShowTechs}
        />

        <IndividualProject
          id="apple-be"
          title="AppleBe"
          description='Plataforma e-commerce dedicada a la venta de artículos de tecnología en general pero centrada en su mayoría a la comercialización de productos Apple. El usuario puede observar productos, registrarse, loguearse y completar su carrito de compras. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código".'
          images={[
            "/images/Proyectos/Apple1.jpg",
            "/images/Proyectos/Apple2.jpg",
            "/images/Proyectos/Apple3.jpg",
            "/images/Proyectos/Apple4.jpg"
          ]}
          githubUrl="https://github.com/patoveras7/appleBe"
          onShowTechs={handleShowTechs}
        />

        <IndividualProject
          id="rompiendo-barreras"
          title="RompiendoBarreras"
          description='Plataforma web destinada a la enseñanza de todo tipo de idiomas. El sitio acepta el pago de determinadas membresías que posibilitan el acceso a ciertos cursos de distintos lenguajes. Cada lenguaje cuenta con distintos tipos de curso dependiendo la motivación que haya tenido el usuario a la hora de estudiar el idioma, sea rendir un exámen internacional, viajar por placer, viajar por trabajo, trabajar para extranjero, etc. La integración de la API con la base de datos y el frontend puede visualizarse en "ver tecnologías" no obstante se invita a visualizar el código desde GitHub cuyo link se encuentra presente en la barra de navegación o directamente desde "ver código".'
          images={[
            "/images/Proyectos/RB1.jpeg",
            "/images/Proyectos/RB2.jpeg",
            "/images/Proyectos/RB3.jpeg"
          ]}
          githubUrl="https://github.com/patoveras7/RompiendoBarreras-Frontend"
          onShowTechs={handleShowTechs}
        />
      </section>

      {/* Modal de Tecnologías */}
      <ImageModal
        isOpen={showTechModal}
        onClose={handleCloseModal}
        imageSrc={currentTechImage}
        imageAlt="Tecnologías del proyecto"
        className="w-[95vw] h-auto sm:w-[500px] sm:h-[280px] md:w-[650px] md:h-[365px] lg:w-[750px] lg:h-[420px] xl:w-[900px] xl:h-[505px] object-contain"
        closeButtonClassName="absolute top-2 right-2 z-10 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
      />

      {/* SECCIÓN 4: Proyecto Profesional */}
      <FullnessSection
        fullnessImages={fullnessImages}
        fullnessSlides={fullnessSlides}
        fullnessCurrentSlide={fullnessCurrentSlide}
        onPrevFullnessSlide={prevFullnessSlide}
        onNextFullnessSlide={nextFullnessSlide}
      />

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-primary mb-6 leading-tight text-center">
                Por qué Dr. Dev??
              </h1>
              <p className="text-base sm:text-xl xl:text-2xl text-gray800 leading-relaxed max-w-4xl mx-auto lg:mx-0 text-center">
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
      <TechCarousel />

      {/* Botón Inicio */}
      <BackToHomeButton />
      </div>
    </ThemeWrapper>
  );
};

export default SoftwareDevelopmentPage;

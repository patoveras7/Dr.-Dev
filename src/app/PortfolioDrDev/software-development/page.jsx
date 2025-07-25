"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SoftwareDevelopmentPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

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

  const ProjectCard = ({ project, width, height }) => (
    <div
      className={`relative overflow-hidden rounded-2xl group ${
        width ? width : "xl:w-[490px] xl:h-[370px] lg:w-[300px] lg:h-[400px] w-[325px] h-[360px] sm:w-[500px] sm:h-[380px]"
      } mx-auto`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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

  return (
    <div className="min-h-screen bg-clearIceFullLight">
      {/* SECCIÓN 1 */}
      <section className="flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-10 sm:pb-[45px] md:pb-[55px] lg:pb-[70px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-[10px]">
            <motion.div
              className="flex-1 text-left lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-primary mb-6 leading-tight">
                Software Development
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                Desarrollando soluciones innovadoras y aplicaciones web modernas que transforman ideas en realidad digital.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Especializado en tecnologías frontend y backend, creando experiencias de usuario excepcionales y sistemas robustos que escalan con tu negocio.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                Desde aplicaciones web responsivas hasta sistemas complejos de gestión, cada proyecto es una oportunidad para innovar y superar expectativas.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center lg:w-[45%]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
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
      <section className="min-h-screen flex items-start justify-center px-1">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
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
        <div key={idx} className="w-full flex-shrink-0">
          <ProjectCard project={p} />
        </div>
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
            <div className="flex gap-[10px] xl:gap-[45px] justify-center">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;

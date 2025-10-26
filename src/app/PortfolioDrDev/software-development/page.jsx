"use client";
import React from "react";
import ThemeWrapper from "../../../components/ThemeWrapper";
import { BackToHomeButton } from "../../../components/common";
import {
  ProjectCarousel,
  ProjectSection,
  FullnessSection,
  TechCarousel,
  IntroductionSection,
  ProjectsShowcaseSection,
  WhyDrDevSection
} from "../../../components/software";
import { useSoftwareDevelopment } from "../../../hooks/useSoftwareDevelopment";

const SoftwareDevelopmentPage = () => {
  const {
    projects,
    currentSlide,
    isHovering,
    setIsHovering,
    nextSlide,
    prevSlide,
    scrollToProject,
    fullnessImages,
    fullnessSlides,
    fullnessCurrentSlide,
    nextFullnessSlide,
    prevFullnessSlide,
    showTechModal,
    currentTechImage,
    handleShowTechs,
    handleCloseModal
  } = useSoftwareDevelopment();

  return (
    <ThemeWrapper>
      <div className="min-h-screen bg-clearIceFullLight">
        {/* SECCIÓN 1: Introduction */}
        <IntroductionSection />

        {/* SECCIÓN 2: Project Carousels */}
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

        {/* SECCIÓN 3: Individual Projects */}
        <ProjectsShowcaseSection onShowTechs={handleShowTechs} />

      {/* Modal de Tecnologías */}
      {showTechModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl w-fit h-fit">
            {/* Imagen */}
            <img
              src={currentTechImage}
              alt="Tecnologías del proyecto"
              className="w-[345px] h-[210px] sm:w-[470px] sm:h-[290px] md:w-[700px] md:h-[400px] lg:w-[700px] lg:h-[420px] xl:w-[700px] xl:h-[420px] object-fill"
            />
            
            {/* Botón de cierre */}
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
      )}

        {/* SECCIÓN 4: Profesional Project */}
      <FullnessSection
        fullnessImages={fullnessImages}
        fullnessSlides={fullnessSlides}
        fullnessCurrentSlide={fullnessCurrentSlide}
        onPrevFullnessSlide={prevFullnessSlide}
        onNextFullnessSlide={nextFullnessSlide}
      />

        {/* SECCIÓN 5: Why Dr. Dev? */}
        <WhyDrDevSection />

        {/* SECCIÓN 6: Tech Carousel */}
      <TechCarousel />

                           {/* Botón Inicio */}
      <BackToHomeButton />
      </div>
    </ThemeWrapper>
  );
};

export default SoftwareDevelopmentPage;

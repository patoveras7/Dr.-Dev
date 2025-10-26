"use client";
import React from "react";
import ThemeWrapper from "../../../components/ThemeWrapper";
import { ImageModal, BackToHomeButton } from "../../../components/common";
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
        <ImageModal
          isOpen={showTechModal}
          onClose={handleCloseModal}
          imageSrc={currentTechImage}
          imageAlt="Tecnologías del proyecto"
          className="w-[95vw] h-auto sm:w-[500px] sm:h-[280px] md:w-[650px] md:h-[365px] lg:w-[750px] lg:h-[420px] xl:w-[900px] xl:h-[505px] object-contain"
          closeButtonClassName="absolute top-2 right-2 z-10 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
        />

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

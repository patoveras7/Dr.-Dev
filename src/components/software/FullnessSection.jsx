import React from 'react';
import { motion } from 'framer-motion';

const FullnessSection = ({ 
  fullnessImages, 
  fullnessSlides, 
  fullnessCurrentSlide, 
  onPrevFullnessSlide, 
  onNextFullnessSlide 
}) => {
  return (
    <section className="flex flex-col gap-12 items-center w-full mt-8 bg-secondary keep-original py-12 px-1">
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
                  <p className="text-gray700 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs leading-tight">
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
            onClick={onPrevFullnessSlide}
            className="w-12 h-12 bg-clearIceFullLight rounded-full flex items-center justify-center text-secondary hover:bg-clearIceFullLight/80 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={onNextFullnessSlide}
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
  );
};

export default FullnessSection;

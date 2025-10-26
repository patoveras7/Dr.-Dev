import React from 'react';
import ProjectImagesCarousel from '../carouselComponents/ProjectImagesCarousel';
import Button from '../common/Button';

const IndividualProject = ({ 
  id, 
  title, 
  description, 
  images, 
  githubUrl, 
  onShowTechs 
}) => {
  return (
    <div id={id} className="flex flex-col items-center w-full sm:max-w-[550px] md:max-w-[680px] lg:max-w-[830px] xl:max-w-[1150px] mx-auto mt-[30px] lg:mt-[50px] xl:mt-[70px]">
      {/* Header unificado */}
      <div className="mb-4 w-full">
        <p className="text-base sm:text-xl xl:text-2xl text-gray600 text-justify px-3 leading-tight">
          <span className="font-extrabold underline text-primary">{title}</span>: {description}
        </p>
      </div>
      {/* Carousel */}
      <ProjectImagesCarousel images={images} />
      {/* Botones */}
      <div className="flex flex-row gap-4 mt-6">
        <Button
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
        >
          Ver código
        </Button>
        <Button 
          onClick={() => onShowTechs(title)}
          variant="primary"
          size="md"
        >
          Ver tecnologías
        </Button>
      </div>
    </div>
  );
};

export default IndividualProject;

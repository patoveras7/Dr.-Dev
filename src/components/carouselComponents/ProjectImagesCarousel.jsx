import React from 'react';

const ProjectImagesCarousel = ({ images }) => {
  return (
    <div className="w-full overflow-hidden flex items-center justify-center">
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-track {
          display: flex;
          gap: 1rem;
          animation: slideLeft 40s linear infinite;
          width: fit-content;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="carousel-track">
        {/* Primera secuencia */}
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 rounded-xl overflow-hidden w-[500px] h-[320px] sm:w-[580px] sm:h-[340px] md:w-[630px] md:h-[360px] lg:w-[680px] lg:h-[390px] xl:w-[780px] xl:h-[430px]"
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover shadow-lg"
              draggable="false"
            />
          </div>
        ))}

        {/* Segunda secuencia (duplicada para loop) */}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 rounded-xl overflow-hidden w-[500px] h-[320px] sm:w-[580px] sm:h-[340px] md:w-[500px] md:h-[400px] lg:w-[680px] lg:h-[390px] xl:w-[780px] xl:h-[430px]"
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover shadow-lg"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImagesCarousel; 
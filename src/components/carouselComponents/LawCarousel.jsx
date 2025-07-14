"use client";
import React from 'react';

const LawCarousel = () => {
  const images = [
    '/images/Law/image.png',
    '/images/Law/image (1).png',
    '/images/Law/image (2).png',
    '/images/Law/image (3).png',
    '/images/Law/image (4).png',
    '/images/Law/image (5).png',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-screen">
      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .carousel-track {
          display: flex;
          gap: 2rem; /* separación entre imágenes */
          animation: slideRight 25s linear infinite;
          width: fit-content;
          will-change: transform;
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
            className="flex-shrink-0 rounded-[7px] overflow-hidden w-[200px] h-[180px] sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px]"
          >
            <img
              src={image}
              alt={`Law ${index + 1}`}
              className="w-full h-full object-cover shadow-lg"
              draggable="false"
            />
          </div>
        ))}

        {/* Segunda secuencia (duplicada para loop) */}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 rounded-[7px] overflow-hidden w-[200px] h-[180px] sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px]"
          >
            <img
              src={image}
              alt={`Law ${index + 1}`}
              className="w-full h-full object-cover shadow-lg"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawCarousel;

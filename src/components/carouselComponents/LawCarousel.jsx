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
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .infinite-carousel {
          display: flex;
          gap: 2rem;
          animation: slideRight 25s linear infinite;
          width: max-content;
          will-change: transform;
        }
        
        .infinite-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="infinite-carousel">
        {/* Primera secuencia */}
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-[200px] h-[180px] sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px]"
          >
            <img
              src={image}
              alt={`Law ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              draggable="false"
            />
          </div>
        ))}
        
        {/* Segunda secuencia (duplicada) */}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-[200px] h-[180px] sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px]"
          >
            <img
              src={image}
              alt={`Law ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawCarousel; 
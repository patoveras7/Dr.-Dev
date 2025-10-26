import React from 'react';

const TechCarousel = () => {
  const techLogos = [
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
  ];

  return (
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
            {techLogos.map((tech, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={tech}
                  alt={`Tech ${index + 1}`}
                  className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                />
              </div>
            ))}
            {/* Segundo conjunto (duplicado para efecto infinito) */}
            {techLogos.map((tech, index) => (
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
              {techLogos.slice(0, 7).map((tech, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={tech}
                    alt={`Tech ${index + 1}`}
                    className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                  />
                </div>
              ))}
              {/* Duplicado para efecto infinito */}
              {techLogos.slice(0, 7).map((tech, index) => (
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
              {techLogos.slice(7).map((tech, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={tech}
                    alt={`Tech ${index + 1}`}
                    className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                  />
                </div>
              ))}
              {/* Duplicado para efecto infinito */}
              {techLogos.slice(7).map((tech, index) => (
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
              {techLogos.slice(0, 5).map((tech, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={tech}
                    alt={`Tech ${index + 1}`}
                    className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                  />
                </div>
              ))}
              {/* Duplicado para efecto infinito */}
              {techLogos.slice(0, 5).map((tech, index) => (
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
              {techLogos.slice(5, 10).map((tech, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={tech}
                    alt={`Tech ${index + 1}`}
                    className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                  />
                </div>
              ))}
              {/* Duplicado para efecto infinito */}
              {techLogos.slice(5, 10).map((tech, index) => (
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
              {[...techLogos.slice(10), techLogos[0]].map((tech, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={tech}
                    alt={`Tech ${index + 1}`}
                    className={`w-20 h-20 sm:w-24 sm:h-24 object-contain ${tech.includes('Next.png') ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40' : ''}`}
                  />
                </div>
              ))}
              {/* Duplicado para efecto infinito */}
              {[...techLogos.slice(10), techLogos[0]].map((tech, index) => (
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
  );
};

export default TechCarousel;

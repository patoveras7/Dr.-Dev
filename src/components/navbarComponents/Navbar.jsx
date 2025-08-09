"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../logoComponents/Logo';
import { useNavbar } from '../../app/PortfolioDrDev/layout';

const Navbar = () => {
  const { isNavbarExpanded, setIsNavbarExpanded } = useNavbar();
  const audioRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    if (!isNavbarExpanded) {
      setShowArrows(true);
      const timer = setTimeout(() => setShowArrows(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowArrows(false);
    }
  }, [isNavbarExpanded]);

  const handleExpand = () => {
    if (!isNavbarExpanded && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;
      audioRef.current.play();
    }
    setIsNavbarExpanded(true);
  };

  const handleCollapse = () => {
    setIsNavbarExpanded(false);
  };

  const collapsedWidths = 'w-[70px] sm:w-[85px] md:w-[100px] lg:w-[115px] xl:w-[130px] flex items-center justify-center';
  // Solo XS (<=350px): usar 38% del ancho de la pantalla
  // ≤639px: 45% del viewport; ≥640px mantienen sus valores fijos
  const expandedWidths = 'w-[45vw] sm:w-[256px] md:w-[307px] lg:w-[410px] xl:w-[512px]';

  return (
    <>
      {isNavbarExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={handleCollapse}
        />
      )}

      <div
        className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out select-none
          bg-primary
          ${isNavbarExpanded ? expandedWidths : collapsedWidths}
        `}
        style={{ cursor: isNavbarExpanded ? 'default' : 'pointer' }}
        onClick={!isNavbarExpanded ? handleExpand : undefined}
      >
        {!isNavbarExpanded && (
          <div className="relative flex flex-col items-center justify-center w-full">
            {/* Flecha arriba del martillo */}
            <AnimatePresence>
              {showArrows && (
                <motion.svg
                  initial={{ y: -20 }}
                  animate={{ y: [-20, 0, -20] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                  className="mb-1 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12"
                  style={{ color: '#d6eaf4', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0l-6-6m6 6l6-6" />
                </motion.svg>
              )}
            </AnimatePresence>

            {/* Martillo */}
            <img
              src="/images/martillo1.png"
              alt="Martillo"
              className="w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px] lg:w-[95px] lg:h-[95px] xl:w-[105px] xl:h-[105px]"
              draggable="false"
            />

            {/* Flecha debajo del martillo (apunta hacia arriba ahora) */}
            <AnimatePresence>
              {showArrows && (
                <motion.svg
                  initial={{ y: 20 }}
                  animate={{ y: [20, 0, 20] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                  className="mt-1 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12"
                  style={{ color: '#d6eaf4', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18V6m0 0l-6 6m6-6l6 6" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Contenido expandido */}
        {isNavbarExpanded && (
         <div className="flex flex-col h-full overflow-y-auto scrollbar-custom">
            <div className="flex flex-col items-center p-4 border-b border-clearIce/20 md:p-2">
              <div className="relative flex justify-center items-center mb-2">
                <Logo />
              </div>
              <div className="font-bold text-clearIceFullLight text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                Dr. Dev
              </div>
            </div>

            <div className="flex justify-center items-center pt-4 pb-4 md:pt-4 md:pb-2 lg:pt-4 lg:pb-2 xl:pt-4 xl:pb-2">
              <img
                src="/images/navbarIMG.jpeg"
                alt="Foto Navbar"
                className="rounded-[10px] border-2 border-clearIceFullLight object-cover shadow-md
                  w-[110px] h-[110px]
                  sm:w-[120px] sm:h-[120px]
                  md:w-[130px] md:h-[130px]
                  lg:w-[150px] lg:h-[150px]
                  xl:w-[170px] xl:h-[170px]"
                draggable="false"
              />
            </div>

            <div className="flex justify-center items-center pb-4 md:pb-2 lg:pb-1 xl:pb-1">
              <div className="text-clearIceFullLight text-center font-medium
                text-[12px] leading-tight
                sm:text-[16px] sm:leading-tight
                md:text-[19px] md:leading-tight
                lg:text-[21px] lg:leading-tight
                xl:text-[23px] xl:leading-tight">
                <span className="block sm:inline">Veras Carrara Patricio Raul</span>
              </div>
            </div>

            <div className="flex justify-center items-center pb-4 pt-2 md:pt-2 md:pb-2 lg:pt-1 lg:pb-1 xl:pt-1 xl:pb-1 lg:mt-4">
              <div className="flex flex-col gap-3 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-5 lg:flex-row">
                <div className="flex gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5">
                  <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"
                    className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-auto h-auto">
                    <img src="/images/github.png" alt="GitHub" className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14" draggable="false" />
                  </a>
                  <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer"
                    className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-auto h-auto">
                    <img src="/images/linkedin.png" alt="LinkedIn" className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14" draggable="false" />
                  </a>
                </div>

                <div className="flex gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5">
                  <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer"
                    className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-auto h-auto">
                    <img src="/images/instagram.png" alt="Instagram" className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14" draggable="false" />
                  </a>
                  <a href="mailto:tu-email@gmail.com" target="_blank" rel="noopener noreferrer"
                    className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-auto h-auto">
                    <img src="/images/gmail.png" alt="Gmail" className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14" draggable="false" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center px-2 pb-4 md:pb-2 md:pt-1 lg:pb-1 xl:pb-1">
              <div className="text-clearIceFullLight text-center font-medium
                text-[12px] leading-tight
                sm:text-[16px] sm:leading-tight
                md:text-[17px] md:leading-tight
                lg:text-[19px] lg:leading-tight">
                Puedes contactarme por cualquier vía.
              </div>
            </div>

            <div className="flex flex-col justify-center gap-12 sm:gap-8 md:gap-6 lg:gap-4 xl:gap-6 max-[639px]:pb-0 sm:pb-4 lg:pb-2 max-[639px]:my-auto sm:mt-5 sm:mb-6">
              <div className="flex flex-col items-center gap-6 md:gap-3 lg:gap-2 xl:gap-6 sm:pt-2 md:pt-1">
                <button className="bg-primary text-clearIceFullLight border-2 border-clearIceFullLight rounded-[7px] px-3 py-2 
                  text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]
                  font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg w-auto max-w-none whitespace-nowrap sm:max-w-[140px] md:max-w-[180px] lg:max-w-[180px] xl:max-w-[200px]">
                  B2 Upper
                </button>
                <button 
                  onClick={() => {
                    handleCollapse();
                    // Navegar a Software Development y hacer scroll al tech stack
                    window.location.href = '/PortfolioDrDev/software-development#tech-stack';
                  }}
                  className="bg-primary text-clearIceFullLight border-2 border-clearIceFullLight rounded-[7px] px-3 py-2 
                    text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]
                    font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg w-auto max-w-none whitespace-nowrap sm:max-w-[140px] md:max-w-[180px] lg:max-w-[180px] xl:max-w-[200px]">
                  Stack tecnológico
                </button>
                <button className="bg-primary text-clearIceFullLight border-2 border-clearIceFullLight rounded-[7px] px-3 py-2 
                  text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]
                  font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg w-auto max-w-none whitespace-nowrap sm:max-w-[140px] md:max-w-[180px] lg:max-w-[180px] xl:max-w-[200px]">
                  Sobre mí
                </button>
              </div>

              <div className="flex flex-col items-center gap-2">
                <img src="/images/location.png" alt="Ubicación" className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14" draggable="false" />
                <div className="text-clearIceFullLight text-center font-medium
                  text-[11px] leading-tight
                  sm:text-[13px] sm:leading-tight
                  md:text-[15px] md:leading-tight
                  lg:text-[17px] lg:leading-tight
                  xl:text-[19px] xl:leading-tight">
                  Córdoba Capital, Argentina
                </div>
              </div>
            </div>

            <button
              onClick={handleCollapse}
              className="absolute top-1 right-1 sm:top-3 sm:right-3 text-clearIce hover:text-clearIceFullLight transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-auto p-4 border-t border-clearIce/20">
              <div className="text-clearIce/70 text-[12px] text-center">
                © 2025 Dr. Dev - All rights reserved
              </div>
            </div>
          </div>
        )}
        <audio ref={audioRef} src="/hammer.mp3" preload="auto" />
      </div>
    </>
  );
};

export default Navbar;

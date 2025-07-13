"use client";
import React, { useRef } from 'react';
import Logo from '../logoComponents/Logo';
import { useNavbar } from '../../app/PortfolioDrDev/layout';

const Navbar = () => {
  const { isNavbarExpanded, setIsNavbarExpanded } = useNavbar();
  const audioRef = useRef(null);

  const handleExpand = () => {
    if (!isNavbarExpanded && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1; // Asegura volumen máximo
      audioRef.current.play();
    }
    setIsNavbarExpanded(true);
  };

  const handleCollapse = () => {
    setIsNavbarExpanded(false);
  };

  // SOLO para 350px: retraída 70px (20%), expandida 140px (40%)
  // Para sm+ se mantienen los valores previos
  const collapsedWidths = 'w-[70px] sm:w-[85px] md:w-[100px] lg:w-[115px] xl:w-[130px] flex items-center justify-center';
  const expandedWidths = 'w-[160px] sm:w-[256px] md:w-[307px] lg:w-[410px] xl:w-[512px]';

  return (
    <>
      {/* Overlay para oscurecer el fondo cuando la navbar está expandida */}
      {isNavbarExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleCollapse}
        />
      )}

      {/* Navbar vertical */}
      <div
        className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out select-none
          bg-primary
          ${isNavbarExpanded ? expandedWidths : collapsedWidths}
        `}
        style={{ cursor: isNavbarExpanded ? 'default' : 'pointer' }}
        onClick={!isNavbarExpanded ? handleExpand : undefined}
      >
        {/* Martillo centrado solo cuando está colapsada */}
        {!isNavbarExpanded && (
          <img
            src="/images/martillo1.png"
            alt="Martillo"
            className="w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px] lg:w-[95px] lg:h-[95px] xl:w-[105px] xl:h-[105px]"
            draggable="false"
          />
        )}

        {/* Contenido de la navbar expandida */}
        {isNavbarExpanded && (
          <div className="flex flex-col h-full">
            {/* Header con logo y título */}
            <div className="flex flex-col items-center p-4 border-b border-clearIce/20 md:p-2">
              <div className="relative flex justify-center items-center mb-2">
                <Logo />
              </div>
              <div className="font-bold text-clearIceFullLight text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                Dr. Dev
              </div>
            </div>
            {/* Foto personal centrada debajo de la línea */}
            <div className="flex justify-center items-center pt-4 pb-4 md:pt-4 md:pb-2 lg:pt-4 lg:pb-2 xl:pt-4 xl:pb-2">
              <img
                src="/images/fotoPato.jpeg"
                alt="Foto personal"
                className="rounded-[7px] border-2 border-clearIceFullLight object-cover
                  w-[120px] h-[140px]
                  sm:w-[130px] sm:h-[150px]
                  md:w-[140px] md:h-[160px]
                  lg:w-[160px] lg:h-[180px]
                  xl:w-[175px] xl:h-[195px]"
                draggable="false"
              />
            </div>
            {/* Nombre completo centrado debajo de la foto */}
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

            {/* Logos de redes sociales */}
            <div className="flex justify-center items-center pb-4 pt-4 md:pt-2 md:pb-2 lg:pt-1 lg:pb-1 xl:pt-1 xl:pb-1">
              <div className="flex flex-col gap-3 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-5">
                {/* Primera fila */}
                <div className="flex gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-auto h-auto"
                  >
                    <img
                      src="/images/github.png"
                      alt="GitHub"
                      className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                      draggable="false"
                    />
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-auto h-auto"
                  >
                    <img
                      src="/images/linkedin.png"
                      alt="LinkedIn"
                      className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                      draggable="false"
                    />
                  </a>
                </div>
                
                {/* Segunda fila */}
                <div className="flex gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5">
                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-auto h-auto"
                  >
                    <img
                      src="/images/instagram.png"
                      alt="Instagram"
                       className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                      draggable="false"
                    />
                  </a>
                  
                  {/* Gmail */}
                  <a 
                    href="mailto:tu-email@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-auto h-auto"
                  >
                    <img
                      src="/images/gmail.png"
                      alt="Gmail"
                       className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                      draggable="false"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Texto de contacto */}
            <div className="flex justify-center items-center px-2 pb-4 md:pb-2 md:pt-1 lg:pb-1 xl:pb-1">
              <div className="text-clearIceFullLight text-center font-medium
                text-[12px] leading-tight
                sm:text-[16px] sm:leading-tight
                md:text-[17px] md:leading-tight
                lg:text-[19px] lg:leading-tight">
                Puedes contactarme por cualquier vía.
              </div>
            </div>

            {/* Contenedor unificado para botones y ubicación */}
            <div className="flex-1 flex flex-col justify-center gap-12 md:gap-6 lg:gap-4 xl:gap-6 pb-4 lg:pb-2">
              {/* Botones Stack tecnológico y Sobre mí */}
              <div className="flex flex-col items-center gap-6 md:gap-3 lg:gap-2 xl:gap-6 pt-4 md:pt-1 lg:pt-1 xl:pt-1">
                <button className="bg-primary text-clearIceFullLight border-2 border-clearIceFullLight rounded-[7px] px-3 py-2 
                  text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]
                  font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg w-full max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[180px] xl:max-w-[200px]">
                  Stack tecnológico
                </button>
                <button className="bg-primary text-clearIceFullLight border-2 border-clearIceFullLight rounded-[7px] px-3 py-2 
                  text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]
                  font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg w-full max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[180px] xl:max-w-[200px]">
                  Sobre mí
                </button>
              </div>

              {/* Información de ubicación */}
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/images/location.png"
                  alt="Ubicación"
                   className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                  draggable="false"
                />
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

            {/* Botón de toggle */}
            <button
              onClick={handleCollapse}
              className="absolute top-1 right-1 sm:top-3 sm:right-3 text-clearIce hover:text-clearIceFullLight transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Footer fijo al fondo */}
            <div className="p-4 border-t border-clearIce/20">
              <div className="text-clearIce/70 text-[12px] text-center">
                © 2025 Dr. Dev - All rights reserved
              </div>
            </div>
          </div>
        )}
        {/* Audio del martillo */}
        <audio ref={audioRef} src="/hammer.mp3" preload="auto" />
      </div>
    </>
  );
};

export default Navbar;
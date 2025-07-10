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
  const collapsedWidths = 'w-[70px] sm:w-[64px] md:w-[77px] lg:w-[102px] xl:w-[128px] flex items-center justify-center';
  const expandedWidths = 'w-[140px] sm:w-[256px] md:w-[307px] lg:w-[410px] xl:w-[512px]';

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
            className="w-2/3 max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] xl:max-w-[80px] mx-auto"
            draggable="false"
          />
        )}

        {/* Contenido de la navbar expandida */}
        {isNavbarExpanded && (
          <div className="flex flex-col h-full">
            {/* Header con logo y título */}
            <div className="flex flex-col items-center p-4 border-b border-clearIce/20">
              <div className="relative flex justify-center items-center mb-2">
                <Logo />
              </div>
              <div className="font-bold text-clearIceFullLight text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                Dr. Dev
              </div>
            </div>
            {/* Foto personal centrada debajo de la línea */}
            <div className="flex justify-center items-center py-4">
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
            <div className="flex justify-center items-center pb-4">
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
            <div className="flex justify-center items-center pb-4">
              <div className="flex flex-col gap-3 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
                {/* Primera fila */}
                <div className="flex gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-5">
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
                      className="w-14 h-14 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
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
                      className="w-14 h-14 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
                      draggable="false"
                    />
                  </a>
                </div>
                
                {/* Segunda fila */}
                <div className="flex gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
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
                      className="w-14 h-14 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
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
                      className="w-14 h-14 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
                      draggable="false"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Texto de contacto */}
            <div className="flex justify-center items-center px-2 pb-4">
              <div className="text-clearIceFullLight text-center font-medium
                text-[12px] leading-tight
                sm:text-[16px] sm:leading-tight
                md:text-[19px] md:leading-tight
                lg:text-[21px] lg:leading-tight
                xl:text-[23px] xl:leading-tight">
                Puedes contactarme por cualquier vía 🚀
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
            <div className="flex-1 flex flex-col justify-end">
              <div className="p-4 border-t border-clearIce/20">
                <div className="text-clearIce/70 text-[12px] text-center">
                  © 2025 Dr. Dev - All rights reserved
                </div>
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
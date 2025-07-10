"use client";
import React from 'react';
import Logo from '../logoComponents/Logo';
import { useNavbar } from '../../app/PortfolioDrDev/layout';

const Navbar = () => {
  const { isNavbarExpanded, setIsNavbarExpanded } = useNavbar();

  const toggleNavbar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <>
      {/* Overlay para oscurecer el fondo cuando la navbar está expandida */}
      {isNavbarExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNavbar}
        />
      )}

      {/* Navbar vertical */}
      <div className={`
        fixed left-0 top-0 h-full bg-primary z-50 transition-all duration-300 ease-in-out
        ${isNavbarExpanded 
          ? 'w-[140px] sm:w-[256px] md:w-[307px] lg:w-[410px] xl:w-[512px]' 
          : 'w-[35px] sm:w-[64px] md:w-[77px] lg:w-[102px] xl:w-[128px]'
        }
      `}>
        
        {/* Contenido de la navbar */}
        <div className="flex flex-col h-full">
          
          {/* Header con logo y título */}
          <div className="flex flex-col items-center p-4 border-b border-clearIce/20">
            <div className="relative flex justify-center items-center mb-2">
              <Logo />
            </div>
            {isNavbarExpanded && (
              <div className="font-bold text-clearIceFullLight text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                Dr. Dev
              </div>
            )}
          </div>

          {/* Botón de toggle */}
          <button 
            onClick={toggleNavbar}
            className="absolute top-4 right-2 text-clearIce hover:text-clearIceFullLight transition-colors"
          >
            {isNavbarExpanded ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Navegación */}
          <nav className="flex-1 flex flex-col justify-center items-center space-y-6">
            <button className="text-clearIce text-[14px] sm:text-[15px] lg:text-[16px] px-3 py-2 border-solid border-clearIce border-[2px] hover:bg-clearIceFullLight hover:text-red-950 hover:font-bold transition-all duration-200 rounded">
              {isNavbarExpanded ? 'Home' : '🏠'}
            </button>
            <button className="text-clearIce text-[14px] sm:text-[15px] lg:text-[16px] px-3 py-2 border-solid border-clearIce border-[2px] hover:bg-clearIceFullLight hover:text-red-950 hover:font-bold transition-all duration-200 rounded">
              {isNavbarExpanded ? 'Nuevo Lugar' : '📍'}
            </button>
          </nav>

          {/* Footer */}
          {isNavbarExpanded && (
            <div className="p-4 border-t border-clearIce/20">
              <div className="text-clearIce/70 text-[12px] text-center">
                © 2024 Dr. Dev
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
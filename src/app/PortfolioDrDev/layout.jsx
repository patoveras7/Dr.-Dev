"use client";
import Navbar from '../../components/navbarComponents/Navbar';
import TranslationButton from '../../components/TranslationButton';
import DownloadCVButton from '../../components/DownloadCVButton';
import { useState, createContext, useContext } from 'react';

// Contexto para manejar el estado de la navbar
const NavbarContext = createContext();

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};

export default function RootLayout({ children }) {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  return (
    <html lang="en">
      <body>
        <NavbarContext.Provider value={{ isNavbarExpanded, setIsNavbarExpanded }}>
          <div className="flex">
            <Navbar />
            <main className={`
              flex-1 min-h-screen transition-all duration-300 ease-in-out
              ${isNavbarExpanded 
                ? 'ml-[140px] sm:ml-[256px] md:ml-[307px] lg:ml-[410px] xl:ml-[512px]' 
                : 'ml-[70px] sm:ml-[64px] md:ml-[77px] lg:ml-[102px] xl:ml-[128px]'
              }
            `}>
              <TranslationButton />
              <DownloadCVButton />
              {children} 
            </main>
          </div>
        </NavbarContext.Provider>
      </body>
    </html>
  );
}
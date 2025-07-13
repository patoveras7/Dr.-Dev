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
    <NavbarContext.Provider value={{ isNavbarExpanded, setIsNavbarExpanded }}>
      <div className="flex overflow-hidden bg-secondary">
        <Navbar />
        <main className="flex-1 min-h-screen ml-[70px] sm:ml-[85px] md:ml-[100px] lg:ml-[115px] xl:ml-[130px] overflow-hidden">
          <TranslationButton />
          <DownloadCVButton />
          {children} 
        </main>
      </div>
    </NavbarContext.Provider>
  );
}
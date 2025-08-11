"use client";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

const ConditionalThemeButton = () => {
  const pathname = usePathname();
  
  // Solo mostrar el botón de tema en las vistas de PortfolioDrDev
  const portfolioPaths = [
    "/PortfolioDrDev/home",
    "/PortfolioDrDev/law", 
    "/PortfolioDrDev/about",
    "/PortfolioDrDev/software-development"
  ];
  
  if (!portfolioPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-[100]">
      <ThemeButton />
    </div>
  );
};

export default ConditionalThemeButton;

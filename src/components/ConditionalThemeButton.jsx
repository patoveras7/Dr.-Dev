"use client";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";
import { motion } from "framer-motion";

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
    <motion.div
      className="fixed z-50 top-2.5 right-3 sm:top-4 sm:right-5 md:top-6 md:right-7 lg:top-8 lg:right-10 xl:top-10 xl:right-12"
      initial={{ opacity: 0, y: -10, x: 10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ThemeButton />
    </motion.div>
  );
};

export default ConditionalThemeButton;

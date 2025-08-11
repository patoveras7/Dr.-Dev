"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Carousel from '../../../components/carouselComponents/Carousel';
import TranslatableText from '../../../components/TranslatableText';
import SoftwareDevelopmentCarousel from '../../../components/carouselComponents/SoftwareDevelopmentCarousel';
import LawCarousel from '../../../components/carouselComponents/LawCarousel';
import ThemeWrapper from '../../../components/ThemeWrapper';

const page = () => {
  const router = useRouter();

  const handleCard1Click = () => {
    router.push('/PortfolioDrDev/software-development');
  };

  const handleCard2Click = () => {
    router.push('/PortfolioDrDev/law');
  };

  return (
    <ThemeWrapper>
      <div className="h-screen bg-clearIceFullLight w-full overflow-hidden">
      {/* Contenedor flex para los botones */}
      <div className="flex flex-col h-full justify-center items-center">
                 {/* Primera mitad con carrusel y card */}
         <div className="h-[35%] sm:h-[45%] flex items-center justify-center relative w-full">
           {/* Carrusel de fondo */}
           <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-[80%] h-[80%] relative overflow-hidden">
               <SoftwareDevelopmentCarousel />
             </div>
           </div>
          
          {/* Primera card - aparece desde la izquierda */}
          <motion.button
            onClick={handleCard1Click}
            className="relative opacity-85 z-10 w-[280px] h-[70px] sm:w-[300px] sm:h-[100px] md:w-[320px] md:h-[110px] lg:w-[350px] lg:h-[135px] bg-primary text-clearIce border-4 border-clearIce rounded-[7px] px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg flex flex-col items-center justify-center"
            initial={{ x: -1000}}
            animate={{ x: 0}}
            transition={{ 
              type: "tween",
              duration: 0.8,
              ease: "linear"
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <h3 className="text-[18px] sm:text-[21px] md:text-[22px] lg:text-[25px] font-bold mb-1 sm:mb-2 whitespace-nowrap">Software Development 💻</h3>
          </motion.button>
        </div>

                 {/* Segunda mitad con carrusel y card */}
         <div className="h-[35%] sm:h-[45%] flex items-center justify-center relative w-full">
           {/* Carrusel de fondo */}
           <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-[80%] h-[80%] relative overflow-hidden">
               <LawCarousel />
             </div>
           </div>
          
          {/* Segunda card - aparece desde la derecha */}
          <motion.button
            onClick={handleCard2Click}
            className="relative opacity-85 z-10 w-[280px] h-[70px] sm:w-[300px] sm:h-[100px] md:w-[320px] md:h-[110px] lg:w-[350px] lg:h-[135px]
             bg-primary text-clearIce border-4 border-clearIce rounded-[7px] px-3 py-2 
             sm:px-4 sm:py-3 md:px-6 md:py-4 font-medium hover:bg-clearIce
              hover:text-primary transition-all duration-200 shadow-lg flex flex-col items-center justify-center"
            initial={{ x: 1000}}
            animate={{ x: 0}}
            transition={{ 
              type: "tween",
              duration: 0.8,
              ease: "linear"
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            <h3 className="text-[18px] sm:text-[21px] md:text-[22px] lg:text-[25px] font-bold mb-1 sm:mb-2 whitespace-nowrap">Law ✍🏻📜</h3>
          </motion.button>
        </div>
      </div>
      </div>
    </ThemeWrapper>
  );
};

export default page;
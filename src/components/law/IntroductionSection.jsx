import React from "react";
import { motion } from "framer-motion";

const IntroductionSection = () => {
  return (
    <section className="flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-10 sm:pb-[45px] md:pb-[55px] lg:pb-[70px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-[10px]">
          <motion.div
            className="flex-1 text-left lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-primary mb-6 leading-tight">
              LAW
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray700 mb-4 leading-relaxed">
              Amplio conocedor del marco legal argentino con una sólida trayectoria en el fuero penal.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray600 mb-6 leading-relaxed">
              Habiendo obtenido el título de escribano y demás reconocimientos, me encuentro comprometido con un servicio de excelencia y la actualización constante en materia jurídica, lo cual me permite lograr una integración robusta de conocimientos legales con el desarrollo de software y aplicación de IA.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray500 leading-relaxed">
              Las certificaciones obtenidas reflejan mi dedicación al estudio del derecho y mi compromiso con la justicia y el ordenamiento legal vigente.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center lg:w-[45%]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/images/FotoLawyer.jpeg"
                alt="Patricio Veras - Abogado"
                className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-cover object-top rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;

import React from 'react';
import { motion } from 'framer-motion';

const OriginsSection = () => {
  return (
    <section className="flex items-start justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-[45px] md:py-[55px] lg:py-[70px]">
      <div className="container mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Inicios
        </motion.h1>

        {/* Contenedor similar al ELEMENTO 1 de la sección anterior */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Imagen */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:items-start lg:pt-8 lg:self-start lg:mt-[200px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <img
              src="/redSocial.jpeg"
              alt="Redes Sociales"
              className="w-[280px] h-[200px] sm:w-[320px] sm:h-[240px] md:w-[360px] md:h-[280px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              The Social Network
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray700 mb-4 leading-relaxed">
            Una de las mejores películas que he visto, fue uno de los grandes detonantes a mi impulso por estudiar tecnología. 
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray600 mb-6 leading-relaxed">
            Protagonizada por Jesse Eisenberg, Andrew Garfield y Justin Timberlake "The Social Network" narra toda la trama del desarrollo y confección de la que quizás sea la red social más famosa de todos los tiempos hasta el momento. Es algo que me encantó porque no sólo muestra el desarrollo de software maratónico que hizo Mark Zuckerberg durante 42 días hasta registrar el dominio "The Facebook" a su nombre en network solutions, sino que toda la película se desenvuelve en medio de un juicio con base en una demanda por el robo de propiedad intelectual que los hermanos "Winklevoss" entablan en contra de Zuckerberg por haber supuestamente implementado la idea para beneficio propio mientras les hacía creer a los demandantes que estaba construyendo otro sitio para beneficio  conjunto llamado "Harvard Connection". Nota importantísima es que en la película también hay otro juicio, en el que mejor amigo de Zuckerberg lo demanda por haber licuado su parte accionaria de un 30% a un 0.3 % ya que con la incorporación de nuevos inversores tuvieron que cederse acciones. No te voy a contar cómo ni en qué circunstancias, basta de spoilers y si no viste este peliculón míralo!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginsSection;

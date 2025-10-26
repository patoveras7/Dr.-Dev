import React from 'react';
import { motion } from 'framer-motion';

const SportsSection = () => {
  return (
    <section className="flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-10 sm:pb-[45px] md:pb-[55px] lg:pb-[70px]">
      <div className="container mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Deportes
        </motion.h1>

        {/* ELEMENTO 1: Tenis y Padel */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Imágenes superpuestas */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:items-start lg:pt-8 lg:self-start lg:mt-[200px]">
            <motion.div
              className="relative w-[364px] h-[260px] sm:w-[416px] sm:h-[312px] md:w-[468px] md:h-[364px]"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              {/* Imagen de Padel (arriba a la izquierda) */}
              <motion.img
                src="/padel.jpeg"
                alt="Padel"
                className="absolute top-0 left-0 w-[182px] h-[130px] sm:w-[208px] sm:h-[156px] md:w-[234px] md:h-[182px] object-cover object-top rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              />
              {/* Imagen de Tenis (abajo a la derecha, superpuesta) */}
              <motion.img
                src="/tenis.jpeg"
                alt="Tenis"
                className="absolute bottom-0 right-0 w-[182px] h-[130px] sm:w-[208px] sm:h-[156px] md:w-[234px] md:h-[182px] object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              />
            </motion.div>
          </div>

          {/* Texto */}
          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Tenis y Padel
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray700 mb-4 leading-relaxed">
            Practicar deportes de todo tipo es algo que me apasiona, pero el tenis y el padel son los que ocupan mi lugar preferido.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray600 mb-6 leading-relaxed">
            El tenis es un deporte que he practicado la mayor parte de mi vida, he entrenado arduamente y logrado competir. Para mi es uno de los deportes más difíciles del mundo ya que requiere gran coordinación de la totalidad del cuerpo y buen manejo del pulso en los momentos tensos del partido, sin perjuicio de necesitarse un buen estado físico como en la mayoría de los deportes. Varios jugadores a nivel mundial confirman que es una destreza muy solitaria y cara, de hecho si uno no logra estar dentro del top 50 del ranking mundial durante mucho tiempo termina siendo un deporte que genera pérdidas para el jugador.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray500 leading-relaxed">
            El padel es algo a lo que me acerqué mucho en el último tiempo atento el gran auge que ha tomado –por lo menos en la Argentina- desde el año 2020 como uno de los primeros deportes habilitados a ser jugados en el decurso de la pandemia por Covid-19. Es un deporte mucho más grupal y elegido por muchos grupos de amigos a la hora de pasar un buen rato y divertirse.
            </p>
          </motion.div>
        </motion.div>

        {/* ELEMENTO 2: Arbitraje */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          {/* Imagen */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:items-start lg:pt-8 lg:self-start lg:mt-[200px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <img
              src="/arbitraje.jpeg"
              alt="Arbitraje"
              className="w-[280px] h-[200px] sm:w-[320px] sm:h-[240px] md:w-[360px] md:h-[280px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Arbitraje
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray700 mb-4 leading-relaxed">
            Al momento de comenzar a estudiar en la universidad, despegarme del tenis jamás fue una opción por lo que comencé a incursionar cada vez más en el ámbito del arbitraje.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray600 mb-6 leading-relaxed">
            Gracias a las formaciones impartidas por la Asociación Argentina de Tenis pude obtener certificaciones como "Juez de Línea" y "Juez de Silla" lo que me permitió formar parte del equipo de arbitraje de torneos de talla mundial siendo uno de esos torneos las ediciones del ATP 250 Córdoba Open realizado en la Ciudad de Córdoba Capital los años 2020, 2022, 2023 y 2024.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsSection;

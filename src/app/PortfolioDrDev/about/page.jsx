"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [flippedCards, setFlippedCards] = useState({
    federer: false,
    nadal: false,
    nole: false,
    murray: false
  });

  const [percentages, setPercentages] = useState({
    federer: 0,
    nadal: 0,
    nole: 0,
    murray: 0
  });

  const handleCardFlip = (player) => {
    setFlippedCards(prev => ({
      ...prev,
      [player]: !prev[player]
    }));

    // Animar el contador cuando se voltea la carta
    if (!flippedCards[player]) {
      const targetPercentage = {
        federer: 100,
        nadal: 93,
        nole: 91,
        murray: 79
      }[player];

      let currentPercentage = 0;
      const interval = setInterval(() => {
        currentPercentage += 2;
        if (currentPercentage >= targetPercentage) {
          currentPercentage = targetPercentage;
          clearInterval(interval);
        }
        setPercentages(prev => ({
          ...prev,
          [player]: currentPercentage
        }));
      }, 30);
    }
  };

  const players = [
    { name: "federer", image: "/federer.jpeg", percentage: 100, text: "ROGER FEDERER, el expreso suizo. El más elegante de todos los tiempos, para mi claramente el GOAT no solo por su impecable juego y conducta en la cancha de tenis sino por todo lo que ha generado extra court, realmente a donde iba jugaba de local no importa dónde." },
    { name: "nadal", image: "/nadal.jpeg", percentage: 93, text: "RAFAEL NADAL, la fiera de arcilla. El Rey del polvo de ladrillo siendo el máximo ganador en Roland Garros en toda la historia, eterno rival y amigo de Roger Federer. Un claro ejemplo de que la fuerza de voluntad y el sacrificio, combinados con una fuerte mentalidad te pueden llevar a lugares inpensados" },
    { name: "nole", image: "/nole.jpeg", percentage: 91, text: "NOVAK DJOKOVIC, el servio 'Nole'. Querido por muchos, odiado por otros pero admirado por todos. Máximo ganador de títulos de Grand Slam en la actualidad, siendo el único de ésta serie de jugadores que continua compitiendo gracias a su extrema flexibilidad y a su gran capacidad para mantener el estado fisico necesario para seguir incluso a sus 38 años." },
    { name: "murray", image: "/murray.jpeg", percentage: 79, text: "ANDY MURRAY, el escocés. El único jugador que ha ganado dos medallas olímpicas de oro en éste deporte. Aunque solo cuenta con 3 títulos de Grand Slam, creo que merece estar en esta mención por su gran inteligencia dentro de la cancha y porque pese a no tener la habilidad de las otras tres leyendas ha podido hacerles frente y ganarles muchas veces con base en su perseverancia." }
  ];

  return (
    <div className="min-h-screen bg-clearIceFullLight">
      {/* SECCIÓN 1: Deportes */}
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
              Gracias a las formaciones impartidas por la Asociación Argentina de Tenis pude obtener certificaciones como “Juez de Línea” y “Juez de Silla” lo que me permitió formar parte del equipo de arbitraje de torneos de talla mundial siendo uno de esos torneos las ediciones del ATP 250 Córdoba Open realizado en la Ciudad de Córdoba Capital los años 2020, 2022, 2023 y 2024.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 2: Inicios */}
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
              Protagonizada por Jesse Eisenberg, Andrew Garfield y Justin Timberlake “The Social Network” narra toda la trama del desarrollo y confección de la que quizás sea la red social más famosa de todos los tiempos hasta el momento. Es algo que me encantó porque no sólo muestra el desarrollo de software maratónico que hizo Mark Zuckerberg durante 42 días hasta registrar el dominio “The Facebook” a su nombre en network solutions, sino que toda la película se desenvuelve en medio de un juicio con base en una demanda por el robo de propiedad intelectual que los hermanos “Winklevoss” entablan en contra de Zuckerberg por haber supuestamente implementado la idea para beneficio propio mientras les hacía creer a los demandantes que estaba construyendo otro sitio para beneficio  conjunto llamado “Harvard Conection”. Nota importantísima es que en la película también hay otro juicio, en el que mejor amigo de Zuckerberg lo demanda por haber licuado su parte accionaria de un 30% a un 0.3 % ya que con la incorporación de nuevos inversores tuvieron que cederse acciones. No te voy a contar cómo ni en qué circunstancias, basta de spoilers y si no viste este peliculón míralo!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3: The fantastic four */}
      <section className="flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-10 pb-[80px] sm:py-[45px] md:py-[55px] lg:py-[70px]">
        <div className="container mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The fantastic four
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-8 text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            ¿Quién es el GOAT? clickea en las imágenes para ver mi opinión.
          </motion.h2>

          {/* Grid de cartas */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {players.map((player, index) => (
              <motion.div
                key={player.name}
                className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] cursor-pointer perspective-1000"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 + index * 0.1 }}
                onClick={() => handleCardFlip(player.name)}
                onMouseEnter={() => handleCardFlip(player.name)}
                onMouseLeave={() => handleCardFlip(player.name)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards[player.name] ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Frente de la carta */}
                  <div className="absolute w-full h-full backface-hidden">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover rounded-lg border-2 border-clearIceFullLight"
                    />
                  </div>

                  {/* Dorso de la carta */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-clearIceFullLight rounded-lg border-2 border-clearIceFullLight p-4 flex flex-col">
                    {/* Contador porcentual */}
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <div className="text-center mb-4">
                        <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                          {percentages[player.name]}%
                        </div>
                        <div className="w-full bg-gray200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${percentages[player.name]}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Texto descriptivo */}
                    <div className="flex-1 flex items-center">
                      <p className="text-sm sm:text-base text-gray700 text-center leading-relaxed">
                        {player.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

                                                                                                               {/* Botón Inicio */}
          <motion.button
            onClick={() => window.location.href = '/PortfolioDrDev/home'}
            className="fixed z-50 right-16 top-2.5 sm:top-4 sm:right-[78px] md:top-6 md:right-[88px] lg:top-8 lg:right-[102px] xl:top-10 xl:right-[115px] bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-3 py-1 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
            initial={{ opacity: 0, y: -10, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            inicio
          </motion.button>
    </div>
  );
};

export default AboutPage;

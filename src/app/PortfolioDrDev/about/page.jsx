"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeWrapper from "../../../components/ThemeWrapper";
import { BackToHomeButton } from "../../../components/common";
import {
  SportsSection,
  OriginsSection,
  FantasticFourSection
} from "../../../components/about";

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
    <ThemeWrapper>
      <div className="min-h-screen bg-clearIceFullLight">
      {/* SECCIÓN 1: Deportes */}
      <SportsSection />

      {/* SECCIÓN 2: Inicios */}
      <OriginsSection />

      {/* SECCIÓN 3: The fantastic four */}
      <FantasticFourSection
        players={players}
        flippedCards={flippedCards}
        percentages={percentages}
        onCardFlip={handleCardFlip}
      />

      {/* Botón Inicio */}
      <BackToHomeButton />
      </div>
    </ThemeWrapper>
  );
};

export default AboutPage;

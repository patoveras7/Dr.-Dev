import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from './FlipCard';

const FantasticFourSection = ({ 
  players, 
  flippedCards, 
  percentages, 
  onCardFlip 
}) => {
  return (
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
            <FlipCard
              key={player.name}
              player={player}
              isFlipped={flippedCards[player.name]}
              percentage={percentages[player.name]}
              onFlip={onCardFlip}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FantasticFourSection;

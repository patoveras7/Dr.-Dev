import React from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ 
  player, 
  isFlipped, 
  percentage, 
  onFlip 
}) => {
  return (
    <motion.div
      className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      onClick={() => onFlip(player.name)}
      onMouseEnter={() => onFlip(player.name)}
      onMouseLeave={() => onFlip(player.name)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Frente de la carta */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={player.image}
            alt={player.name}
            className={`w-full h-full rounded-lg border-2 border-clearIceFullLight ${
              player.name === "murray" 
                ? "object-cover min-[400px]:object-top sm:object-cover md:object-cover lg:object-cover xl:object-cover" 
                : "object-cover"
            }`}
          />
        </div>

        {/* Dorso de la carta */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-clearIceFullLight rounded-lg border-2 border-clearIceFullLight p-4 flex flex-col">
          {/* Contador porcentual */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="text-center mb-4">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {percentage}%
              </div>
              <div className="w-full bg-gray200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
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
  );
};

export default FlipCard;

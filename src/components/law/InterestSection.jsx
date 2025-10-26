import React from "react";
import { motion } from "framer-motion";
import { Section, AnimatedTitle } from "../common";
import { WorkExperienceTimeline } from "./";

const InterestSection = ({ lineHeight, expandedDescriptions, textTruncated, onToggleDescription }) => {
  return (
    <Section 
      className="flex items-start justify-start px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-10 pb-20"
      background="bg-clearIceFullLight"
    >
      <div className="container mx-auto">
        <AnimatedTitle
          className="text-3xl sm:text-3xl lg:text-[40px] font-bold text-primary mb-8 text-left"
        >
          De interés
        </AnimatedTitle>

        <div className="max-w-4xl">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/images/PODER JUDICIAL.png"
              alt="Poder Judicial"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain self-start"
            />
            <div className="flex flex-col">
              <h2 className="text-[18px] sm:text-2xl lg:text-3xl font-bold text-gray800">
                Poder Judicial de la Provincia de Córdoba
              </h2>
              <p className="text-sm sm:text-base text-gray600">
                Jornada Completa - 5 años
              </p>
              <p className="text-sm sm:text-base text-gray600">
                Argentina - Presencial
              </p>
            </div>
          </motion.div>

          <WorkExperienceTimeline
            lineHeight={lineHeight}
            expandedDescriptions={expandedDescriptions}
            textTruncated={textTruncated}
            onToggleDescription={onToggleDescription}
          />
        </div>
      </div>
    </Section>
  );
};

export default InterestSection;

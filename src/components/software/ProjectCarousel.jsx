import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ 
  projects, 
  currentSlide, 
  onPrevSlide, 
  onNextSlide, 
  onMouseEnter, 
  onMouseLeave, 
  onProjectClick 
}) => {
  return (
    <div className="md:hidden lg:hidden">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex gap-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 0.75}rem))`
          }}
        >
          {projects.concat(projects).map((p, idx) => (
            <motion.div 
              key={idx} 
              className="w-full flex-shrink-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut", 
                delay: idx * 0.2 
              }}
            >
              <ProjectCard 
                project={p} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onProjectClick}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Botones */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onPrevSlide}
          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-clearIce hover:bg-primary/80 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={onNextSlide}
          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-clearIce hover:bg-primary/80 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;

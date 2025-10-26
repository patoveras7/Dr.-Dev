import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectSection = ({ 
  projects, 
  onMouseEnter, 
  onMouseLeave, 
  onProjectClick 
}) => {
  return (
    <section className="flex items-start justify-center px-1">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-primary mb-8 lg:mb-12 text-left ml-[10px] sm:ml-[18px] lg:ml-[25px] xl:ml-0"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Proyectos personales
        </motion.h2>

        {/* LG/XL */}
        <div className="hidden lg:block">
          <div className="flex gap-[10px] xl:gap-[45px] justify-start">
            {projects.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut", 
                  delay: index * 0.3 
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
      </div>
    </section>
  );
};

export default ProjectSection;

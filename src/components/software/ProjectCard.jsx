import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ 
  project, 
  width, 
  height, 
  onMouseEnter, 
  onMouseLeave, 
  onClick 
}) => {
  const getProjectId = (title) => {
    switch (title) {
      case "ALKEMY POCKET":
        return "alkemy-pocket";
      case "APPLE BE":
        return "apple-be";
      case "ROMPIENDO BARRERAS":
        return "rompiendo-barreras";
      default:
        return "";
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
        width ? width : "xl:w-[490px] xl:h-[370px] lg:w-[300px] lg:h-[400px] w-[325px] h-[360px] sm:w-[500px] sm:h-[380px]"
      } mx-auto`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        const projectId = getProjectId(project.title);
        if (projectId && onClick) {
          onClick(projectId);
        }
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={height ? { height: height.replace("h-[", "").replace("]", "") } : {}}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2">
        <div className="inline-block bg-primary xl:bg-primary/70 rounded-[7px] px-2 mb-1">
          <h1 className="text-[17px] xl:text-[25px] font-bold text-clearIceFullLight">
            {project.title}
          </h1>
        </div>
        <div className="text-clearIceFullLight text-[12px] sm:text-base xl:text-[16px] pl-1 font-bold font-['Manrope',sans-serif] leading-relaxed w-[250px] sm:w-full whitespace-normal break-words">
          <p className="m-0 w-full">{project.description}</p>
          <span className="block h-0.5 bg-clearIceFullLight w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { motion } from "framer-motion";

const WhyDrDevSection = () => {
  return (
    <section className="flex items-start justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 bg-clearIceFullLight">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Contenido de texto */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-primary mb-6 leading-tight text-center">
              Por qué Dr. Dev??
            </h1>
            <p className="text-base sm:text-xl xl:text-2xl text-gray800 leading-relaxed max-w-4xl mx-auto lg:mx-0 text-center">
              Mi background consta de graduación y experiencia en una gran cantidad de rubros lo cual es fiel reflejo de mi responsabilidad, disciplina y optimismo a la hora de aprender nuevas habilidades y desenvolverme en el campo laboral, cualquiera sea la dedicacion que se requiera. Creo firmemente en el trabajo duro y en responder con mi maximo esfuerzo a quienes me brindaron su confianza, si me das la oportunidad con total seguridad te seré de gran utilidad. Dr. Dev se jacta de poseer una gran capacidad de gestión, por lo que si existe alguna solicitud que requiera de investigacion para llevarse a cabo, se encontrará la forma de concretarla. Además, la pasión por el código limpio, la arquitectura robusta y la experiencia de usuario excepcional define cada proyecto, transformando ideas en realidades digitales que impactan positivamente en la vida de las personas.
            </p>
          </motion.div>

          {/* GIF animado */}
          <motion.div
            className="flex justify-center lg:w-[45%]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
                alt="Desarrollador trabajando en código"
                className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDrDevSection;

import React from 'react';
import { motion } from 'framer-motion';

const WorkExperienceTimeline = ({ 
  lineHeight,
  expandedDescriptions,
  textTruncated,
  onToggleDescription
}) => {
  const workPositions = [
    // {
    //   id: 'fiscalia-cibercrimen',
    //   title: 'Fiscalía Cibercrimen',
    //   period: 'oct. 2025 - actualidad',
    //   description: 'ESTA ES UNA DESCRIPCION DE EJMPLO',
    //   className: 'fiscalia-cibercrimen-text',
    //   key: 'fiscalia-cibercrimen',
    //   delay: 0.1
    // },
    {
      id: 'crppa',
      title: 'CRPPA - Tribunales II',
      period: 'dic. 2021 - actualidad',
      description: 'Centro de Recepción de Procedimientos con Personas Aprehendidas (CRPPA) - Recepción e instrucción de procedimientos judiciales con aprehendidos en flagrancia por la supuesta comisión de hechos delictivos. Desarrollo de los actos iniciales de la IPP (instrucción penal preparatoria) recabando la prueba inmediata e inicial a hechos de la naturaleza mencionada.',
      className: 'escribano-text',
      key: 'escribano',
      delay: 0.2
    },
    {
      id: 'fiscalia',
      title: 'Fiscalía de Instrucción',
      period: 'feb. 2021 - dic. 2021 · 10 meses',
      description: 'Fiscalia de Instrucción del Primer Turno (Rio Tercero) - Instrucción de causas penales en general abarcando todos los actos procesales hasta la elevación a juicio. Incluye la recepción de testimonios, recepción de indagatoria, realización de diligencias probatorias de segundo grado como ruedas de reconocimiento y cámara gesell, redacción de prisiones preventivas, redacción de elevaciones a juicio y cierre de juicios abreviados.',
      className: 'procurador-text',
      key: 'procurador',
      delay: 0.4
    },
    {
      id: 'unidad-judicial',
      title: 'Unidad Judicial',
      period: 'ago. 2020 - feb. 2021 · 6 meses',
      description: 'Unidad Judicial de Rio Tercero – Dependencia judicial multifuero donde se receptaron denuncias de todo tipo v. gr: abusos sexuales, estafas, hechos de violencia familiar, robos, procedimientos con aprehendidos en flagrancia, etc. Se cumplimentó con la recepción inicial de prueba hasta la elevación del sumario en definitivo a la Fiscalía de Instrucción pertinente.',
      className: 'abogado-text',
      key: 'abogado',
      delay: 0.6
    }
  ];

  return (
    <div className="relative">
      {/* Línea vertical */}
      <motion.div
        className="absolute left-4 sm:left-6 top-0 w-0.5 bg-gray300"
        style={{ height: lineHeight }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {workPositions.map((position, index) => (
        <motion.div
          key={position.id}
          className="relative flex items-start gap-6 sm:gap-8 mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: position.delay }}
        >
          {/* Punto en la línea */}
          <div className="absolute left-2 sm:left-4 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />
          
          {/* Contenido */}
          <div className="ml-12 sm:ml-16 flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray800">
                {position.title}
              </h3>
              <img
                src="/images/MPF.png"
                alt="MPF"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain mt-1"
              />
            </div>
            <p className="text-sm sm:text-base text-gray600 mb-3">
              {position.period}
            </p>
            <div className="text-sm sm:text-base text-gray700 leading-relaxed">
              <p 
                className={`${position.className} ${expandedDescriptions[position.key] ? "" : "line-clamp-4 sm:line-clamp-3"}`}
              >
                {position.description}
              </p>
              {!expandedDescriptions[position.key] && textTruncated[position.key] && (
                <button 
                  onClick={() => onToggleDescription(position.key)}
                  className="text-secondary font-bold hover:underline mt-1 block"
                >
                  ... ver más
                </button>
              )}
              {expandedDescriptions[position.key] && (
                <button 
                  onClick={() => onToggleDescription(position.key)}
                  className="text-secondary font-bold hover:underline mt-1 block"
                >
                  ... ver menos
                </button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkExperienceTimeline;

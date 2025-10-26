import React from 'react';
import { motion } from 'framer-motion';

const SoftwareDevelopmentSection = ({ 
  expandedItems, 
  onToggleExpandedItem,
  onShowIaModal,
  onShowMaratonModal,
  onShowInvestigacionModal,
  onShowSolucionSoftwareModal
}) => {
  return (
    <section className="flex flex-col gap-12 items-center w-full bg-secondary keep-original py-12 px-1 pb-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header con título */}
        <div className="flex justify-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-clearIceFullLight text-center">
            Relacionado al Desarrollo de Software
          </h1>
        </div>

        {/* Elementos desplegables */}
        <div className="flex flex-col gap-4 w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
          
          {/* Elemento 1: IA generativa en la Justicia */}
          <div className="bg-clearIceFullLight rounded-lg overflow-hidden">
            <button
              onClick={() => onToggleExpandedItem('iaGenerativa')}
              className="w-full p-2 flex items-center gap-3 hover:bg-clearIceFullLight/90 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-secondary font-medium">IA generativa en la Justicia</span>
            </button>
            
            {expandedItems.iaGenerativa && (
              <div className="border-l-4 border-clearIceFullLight p-4 bg-clearIceFullLight/50 flex flex-col justify-center items-center">
                <div className="mb-4">
                  <p className="text-gray700 text-sm leading-relaxed text-justify">
                  Durante el año 2024 se llevó a cabo un proyecto a nivel nacional para concientizar el uso responsable y estratégico de la IA en el marco de los procedimientos judiciales en general. Se plantearon muchas razonables e inevitables automatizaciones en aras de la prestación de un mejor servicio de justicia.
                  </p>
                </div>
                <button 
                  onClick={onShowIaModal}
                  className="bg-primary sm:w-[250px] text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
                >
                  ver certificación
                </button>
              </div>
            )}
          </div>

          {/* Elemento 2: Maratón de ideas justicIA */}
          <div className="bg-clearIceFullLight rounded-lg overflow-hidden">
            <button
              onClick={() => onToggleExpandedItem('maratonIdeas')}
              className="w-full p-2 flex items-center gap-3 hover:bg-clearIceFullLight/90 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-secondary font-medium">Maratón de ideas justicIA</span>
            </button>
            
            {expandedItems.maratonIdeas && (
              <div className="border-l-4 border-clearIceFullLight p-4 bg-clearIceFullLight/50 flex flex-col justify-center items-center">
                <div className="mb-4">
                  <p className="text-gray700 text-sm leading-relaxed text-justify">
                  El 2 de Agosto del año 2025 el Poder Judicial de la Provincia de Córdoba organizó y desplegó una Maratón de ideas con el fin de que pequeños grupos de empleados, funcionarios y magistrados judiciales plantearan soluciones con integración de IA a problemas existentes en la labor judicial diaria. Junto con grupo del que formé parte plateamos una solución de software que, mediante el uso de los servicios de Azure AI Language que proporcionan un análisis semántico y vectorial de texto, permite la notificación automática de resoluciones inmediatamente luego de la firma digital de las mismas. Conocé mas haciendo <a href="https://www.instagram.com/reel/DNB1HZVS0W-/?utm_source=ig_web_copy_link&igsh=NGdhNG80NmF6cm5l" className="text-primary font-bold underline hover:text-primary/80 transition-colors">click aquí</a>.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={onShowMaratonModal}
                    className="bg-primary sm:w-[250px] text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
                  >
                    ver certificación
                  </button>
                  <button 
                    onClick={onShowSolucionSoftwareModal}
                    className="bg-primary sm:w-[250px] text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
                  >
                    Solución Software
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Elemento 3: Proyectos de Investigación Aplicada */}
          <div className="bg-clearIceFullLight rounded-lg overflow-hidden">
            <button
              onClick={() => onToggleExpandedItem('proyectosInvestigacion')}
              className="w-full p-2 flex items-center gap-3 hover:bg-clearIceFullLight/90 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-secondary font-medium sm:hidden">Investigación Aplicada</span>
              <span className="text-secondary font-medium hidden sm:block">Proyectos de Investigación Aplicada (PIA)</span>
            </button>
            
            {expandedItems.proyectosInvestigacion && (
              <div className="border-l-4 border-clearIceFullLight p-4 bg-clearIceFullLight/50 flex flex-col justify-center items-center">
                <div className="mb-4">
                  <p className="text-gray700 text-sm leading-relaxed text-justify">
                  El Ministerio Público Fiscal de la Provincia de Córdoba abrió convocatoria a la presentación de proyectos de investigación aplicada que puedan contribuir tanto a la construcción de capacidades institucionales como a la resolución de problemas en los distintos ámbitos de intervención. Dr. Dev junto a otros colaboradores está en vías de presentación de un proyecto con integración de IA que mejora procesos de trabajo institucionales y el servicio de justicia.
                  </p>
                </div>
                <button 
                  onClick={onShowInvestigacionModal}
                  className="bg-primary sm:w-[250px] text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
                >
                  ver certificación
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopmentSection;

"use client";
import React from "react";
import ThemeWrapper from "../../../components/ThemeWrapper";
import { Modal, ImageModal, BackToHomeButton } from "../../../components/common";
import {
  IntroductionSection,
  CertificationsSection,
  SoftwareDevelopmentSection,
  InterestSection
} from "../../../components/law";
import { useLawPage } from "../../../hooks/useLawPage";

const LawPage = () => {
  const {
    certificationsData,
    expandedItems,
    onToggleExpandedItem,
    onShowIaModal,
    onShowMaratonModal,
    onShowInvestigacionModal,
    onShowSolucionSoftwareModal,
    showIaModal,
    onCloseIaModal,
    showMaratonModal,
    onCloseMaratonModal,
    showInvestigacionModal,
    onCloseInvestigacionModal,
    showSolucionSoftwareModal,
    onCloseSolucionSoftwareModal,
    expandedDescriptions,
    textTruncated,
    onToggleDescription,
    lineHeight,
    showImageModal,
    currentImage,
    onImageClick,
    onCloseModal
  } = useLawPage();

  return (
    <ThemeWrapper>
      <div className="min-h-screen bg-clearIceFullLight">
        {/* SECCIÓN 1: Presentación inicial */}
        <IntroductionSection />

        {/* SECCIÓN 2: Certificaciones */}
        <CertificationsSection
          certificationsData={certificationsData}
          onImageClick={onImageClick}
        />

        {/* SECCIÓN 3: Relacionado al Desarrollo de Software */}
        <SoftwareDevelopmentSection
          expandedItems={expandedItems}
          onToggleExpandedItem={onToggleExpandedItem}
          onShowIaModal={onShowIaModal}
          onShowMaratonModal={onShowMaratonModal}
          onShowInvestigacionModal={onShowInvestigacionModal}
          onShowSolucionSoftwareModal={onShowSolucionSoftwareModal}
        />

        {/* Modal de visualización de imagen */}
        <ImageModal
          isOpen={showImageModal}
          onClose={onCloseModal}
          imageSrc={currentImage}
          imageAlt="Certificación"
        />

        {/* Modal de visualización de imagen de IA */}
        <ImageModal
          isOpen={showIaModal}
          onClose={onCloseIaModal}
          imageSrc="/certificaciones/Relacionados/IA generativa en la justicia.jpg"
          imageAlt="Certificación IA Generativa"
        />

        {/* Modal de Maratón de Ideas */}
        <Modal
          isOpen={showMaratonModal}
          onClose={onCloseMaratonModal}
          className="relative bg-clearIceFullLight rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Certificación en curso
            </h3>
            <p className="text-gray700 text-lg leading-relaxed">
              La certificación para el proyecto "Maratón de ideas justicIA" se encuentra actualmente en proceso de evaluación.
            </p>
          </div>
          
          <button
            onClick={onCloseMaratonModal}
            className="absolute top-4 right-4 text-gray500 hover:text-gray700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </Modal>

        {/* Modal de Investigación Aplicada */}
        <Modal
          isOpen={showInvestigacionModal}
          onClose={onCloseInvestigacionModal}
          className="relative bg-clearIceFullLight rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Proyecto pendiente de aprobación por comité evaluador
            </h3>
            <p className="text-gray700 text-lg leading-relaxed">
              El proyecto de investigación aplicada se encuentra actualmente en revisión por el comité evaluador correspondiente.
            </p>
          </div>
          
          <button
            onClick={onCloseInvestigacionModal}
            className="absolute top-4 right-4 text-gray500 hover:text-gray700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </Modal>

        {/* Modal de Solución Software */}
        <ImageModal
          isOpen={showSolucionSoftwareModal}
          onClose={onCloseSolucionSoftwareModal}
          imageSrc="/justicIA.jpeg"
          imageAlt="Solución Software justicIA"
          className="w-[800px] h-[400px] sm:h-[600px] md:w-[750px] md:h-[650px] md:object-contain lg:w-[850px] lg:h-[750px] xl:w-[980px] xl:h-[880px] object-fill sm:object-fill"
          closeButtonClassName="fixed z-50 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg top-44 sm:top-20 right-1/2 md:top-40 lg:top-32 xl:top-20"
        />

        {/* SECCIÓN 4: De interés */}
        <InterestSection
          lineHeight={lineHeight}
          expandedDescriptions={expandedDescriptions}
          textTruncated={textTruncated}
          onToggleDescription={onToggleDescription}
        />

        {/* Botón Inicio */}
        <BackToHomeButton />
      </div>
    </ThemeWrapper>
  );
};

export default LawPage; 
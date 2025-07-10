"use client";
import React from 'react';

const DownloadCVButton = () => {
  const handleDownload = () => {
    // Aquí puedes agregar la lógica para descargar el CV
    // Por ejemplo, abrir un enlace directo al archivo PDF
    const link = document.createElement('a');
    link.href = '/PATRICIO RAUL VERAS CARRARA.pdf'; // Asegúrate de tener el archivo CV en public/cv.pdf
    link.download = 'CV - PATRICIO RAUL VERAS CARRARA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-4 right-4 lg:bottom-7 lg:right-7 xl:bottom-16 xl:right-16 z-50 bg-primary text-clearIce border-2 border-clearIce rounded-[7px] px-4 py-2 text-sm lg:text-base xl:text-lg font-medium hover:bg-clearIce hover:text-primary transition-all duration-200 shadow-lg"
    >
      Descargar CV
    </button>
  );
};

export default DownloadCVButton; 
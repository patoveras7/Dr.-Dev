import { useState, useEffect } from "react";

export const useLawPage = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [expandedItems, setExpandedItems] = useState({
    iaGenerativa: false,
    maratonIdeas: false,
    proyectosInvestigacion: false
  });
  const [showIaModal, setShowIaModal] = useState(false);
  const [showMaratonModal, setShowMaratonModal] = useState(false);
  const [showInvestigacionModal, setShowInvestigacionModal] = useState(false);
  const [showSolucionSoftwareModal, setShowSolucionSoftwareModal] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({
    // 'fiscalia-cibercrimen': false,
    escribano: false,
    procurador: false,
    abogado: false
  });
  const [textTruncated, setTextTruncated] = useState({
    // 'fiscalia-cibercrimen': false,
    escribano: false,
    procurador: false,
    abogado: false
  });
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [lineHeight, setLineHeight] = useState('calc(100% - 12rem)');

  // Datos de certificaciones por año
  const certificationsData = {
    2021: [
      "TITULO ANVERSO Y REVERSO._page-0001.jpg",
      "WhatsApp Image 2025-07-31 at 16.31.44.jpeg"
    ],
    2022: [
      "TITULO ESCRIBANO.-_page-0001.jpg",
      "20221214_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20221226_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20221227_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20221227_JusticiaCordoba_Certificado_veras14584_page-0001.jpg"
    ],
    2023: [
      "20230321_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20230404_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20230411_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "PROGRAMA DE TUTORÍAS 30.11.2023.png",
      "Taller sobre declaración testimonial de víctimas - 2023.png"
    ],
    2024: [
      "20240930_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "PROGRAMA DE TUTORÍAS 19.12.2024.png",
      "Certificación de antecedentes, declaración de persona imputada y declaración de la víctima - 2024.png",
      "Hacia la construcción de un Sistema Integral de Flagrancia - 2024.png",
      "Solicitud de informes al Registro Nacional de Reincidencia 2024.png"
    ],
    2025: [
      "20250701_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20250701_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20250701_JusticiaCordoba_Certificado_veras14584 (2)_page-0001.jpg",
      "20250701_JusticiaCordoba_Certificado_veras14584 (3)_page-0001.jpg",
      "20250701_JusticiaCordoba_Certificado_veras14584 (4)_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (2)_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (3)_page-0001.jpg",
      "Tratamiento de la evidencia digital - 2025.png"
    ],
    destacadas: [
      "TITULO ESCRIBANO.-_page-0001.jpg",
      "TITULO ANVERSO Y REVERSO._page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (1)_page-0001.jpg",
      "20250702_JusticiaCordoba_Certificado_veras14584 (2)_page-0001.jpg"
    ]
  };

  const handleImageClick = (imagePath, selectedYear) => {
    const folder = selectedYear === "destacadas" ? "Destacadas" : selectedYear;
    setCurrentImage(`/certificaciones/${folder}/${imagePath}`);
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
    setCurrentImage("");
  };

  // Cerrar modal con Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowImageModal(false);
        setCurrentImage("");
        setShowIaModal(false);
        setShowMaratonModal(false);
        setShowInvestigacionModal(false);
        setShowSolucionSoftwareModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Manejar resize de ventana para ajustar minWidth
  useEffect(() => {
    const handleResize = () => {
      const imgElement = document.querySelector('.certification-image');
      if (imgElement) {
        if (window.innerWidth >= 640 && window.innerWidth < 768) {
          imgElement.style.minWidth = '1000px';
        } else if (window.innerWidth >= 768) {
          imgElement.style.minWidth = 'auto';
        } else {
          imgElement.style.minWidth = '700px';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [showImageModal]);

  // Timer para parpadeo del botón "ver más"
  useEffect(() => {
    if (selectedYear && certificationsData[selectedYear] && certificationsData[selectedYear].length > 4 && !showAllCertifications) {
      const blinkInterval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 1000);
      return () => clearInterval(blinkInterval);
    } else {
      setIsBlinking(false);
    }
  }, [selectedYear, showAllCertifications]);

  // Actualizar altura de la línea según el tamaño de pantalla
  useEffect(() => {
    const updateLineHeight = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setLineHeight('calc(100% - 9rem)');
      } else if (width >= 1024) {
        setLineHeight('calc(100% - 9rem)');
      } else if (width >= 768) {
        setLineHeight('calc(100% - 11rem)');
      } else if (width >= 640) {
        setLineHeight('calc(100% - 11rem)');
      } else {
        setLineHeight('calc(100% - 12rem)');
      }
    };

    updateLineHeight();
    window.addEventListener('resize', updateLineHeight);
    return () => window.removeEventListener('resize', updateLineHeight);
  }, []);

  const getCertificationDescription = (filename) => {
    return "Certificación oficial. Clickear para visualizar.";
  };

  const toggleExpandedItem = (itemKey) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const handleShowIaModal = () => {
    setShowIaModal(true);
  };

  const handleCloseIaModal = () => {
    setShowIaModal(false);
  };

  const handleShowMaratonModal = () => {
    setShowMaratonModal(true);
  };

  const handleCloseMaratonModal = () => {
    setShowMaratonModal(false);
  };

  const handleShowInvestigacionModal = () => {
    setShowInvestigacionModal(true);
  };

  const handleCloseInvestigacionModal = () => {
    setShowInvestigacionModal(false);
  };

  const handleShowSolucionSoftwareModal = () => {
    setShowSolucionSoftwareModal(true);
  };

  const handleCloseSolucionSoftwareModal = () => {
    setShowSolucionSoftwareModal(false);
  };

  const toggleDescription = (descriptionKey) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [descriptionKey]: !prev[descriptionKey]
    }));
  };

  const checkTextTruncation = (element, key) => {
    if (element) {
      const isTruncated = element.scrollHeight > element.clientHeight;
      setTextTruncated(prev => ({
        ...prev,
        [key]: isTruncated
      }));
    }
  };

  useEffect(() => {
    const checkAllTruncations = () => {
      const elements = {
        escribano: document.querySelector('.escribano-text'),
        procurador: document.querySelector('.procurador-text'),
        abogado: document.querySelector('.abogado-text')
      };

      Object.entries(elements).forEach(([key, element]) => {
        if (element) {
          checkTextTruncation(element, key);
        }
      });
    };

    checkAllTruncations();
    window.addEventListener('resize', checkAllTruncations);
    
    return () => window.removeEventListener('resize', checkAllTruncations);
  }, []);

  const toggleShowAllCertifications = () => {
    setShowAllCertifications(!showAllCertifications);
  };

  return {
    certificationsData,
    expandedItems,
    onToggleExpandedItem: toggleExpandedItem,
    onShowIaModal: handleShowIaModal,
    onShowMaratonModal: handleShowMaratonModal,
    onShowInvestigacionModal: handleShowInvestigacionModal,
    onShowSolucionSoftwareModal: handleShowSolucionSoftwareModal,
    showIaModal,
    onCloseIaModal: handleCloseIaModal,
    showMaratonModal,
    onCloseMaratonModal: handleCloseMaratonModal,
    showInvestigacionModal,
    onCloseInvestigacionModal: handleCloseInvestigacionModal,
    showSolucionSoftwareModal,
    onCloseSolucionSoftwareModal: handleCloseSolucionSoftwareModal,
    expandedDescriptions,
    textTruncated,
    onToggleDescription: toggleDescription,
    lineHeight,
    showImageModal,
    currentImage,
    onImageClick: handleImageClick,
    onCloseModal: handleCloseModal
  };
};

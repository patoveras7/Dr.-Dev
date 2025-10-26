import { useState, useEffect, useRef } from "react";

export const useSoftwareDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [showTechModal, setShowTechModal] = useState(false);
  const [currentTechImage, setCurrentTechImage] = useState("");
  const [fullnessCurrentSlide, setFullnessCurrentSlide] = useState(0);

  const mdTrackRef = useRef(null);
  const slideWidth = 300;
  const transitionTime = 500;

  const projects = [
    {
      id: 1,
      title: "ALKEMY POCKET",
      image: "/images/Proyectos/AlkemyPocketLogo.png",
      description: "Billetera virtual es bolsillo digital."
    },
    {
      id: 2,
      title: "APPLE BE",
      image: "/images/Proyectos/Apple2.jpg",
      description: "Compra rápida y segura de productos Apple."
    },
    {
      id: 3,
      title: "ROMPIENDO BARRERAS",
      image: "/images/Proyectos/RB2.jpeg",
      description: "Accede a la puerta que abre infinidad de puertas, el idioma."
    }
  ];

  const mdSlides = [...projects, ...projects];

  const fullnessImages = [
    "/images/Proyectos/Fullness1.jpg",
    "/images/Proyectos/Fullness2.jpg", 
    "/images/Proyectos/Fullness3.jpg",
    "/images/Proyectos/Fullness4.jpg",
    "/images/Proyectos/Fullness5.jpg"
  ];

  const fullnessSlides = [...fullnessImages, ...fullnessImages];

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextFullnessSlide = () => {
    setFullnessCurrentSlide((prev) => (prev + 1) % fullnessImages.length);
  };

  const prevFullnessSlide = () => {
    setFullnessCurrentSlide((prev) => (prev - 1 + fullnessImages.length) % fullnessImages.length);
  };

  const scrollToProject = (projectId) => {
    const element = document.getElementById(projectId);
    if (element) {
      const targetPosition = element.offsetTop - 100;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 2000;
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutCubic = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    if (!mdTrackRef.current) return;
    const totalWidth = slideWidth * mdSlides.length;
    const duration = mdSlides.length * 3;
    mdTrackRef.current.style.animation = `scrollLeft ${duration}s linear infinite`;

    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${totalWidth / 2}px); }
      }
    `;
    document.head.appendChild(styleTag);
    return () => {
      if (document.head.contains(styleTag)) document.head.removeChild(styleTag);
    };
  }, [mdSlides.length, slideWidth]);

  const handleShowTechs = (projectName) => {
    let techImage = "";
    switch (projectName) {
      case "AlkemyPocket":
        techImage = "/images/Proyectos/AlkemyPocketTechs.png";
        break;
      case "AppleBe":
        techImage = "/images/Proyectos/AppleTechs.jpg";
        break;
      case "RompiendoBarreras":
        techImage = "/images/Proyectos/RBTechs.png";
        break;
      default:
        techImage = "";
    }
    setCurrentTechImage(techImage);
    setShowTechModal(true);
  };

  const handleCloseModal = () => {
    setShowTechModal(false);
    setCurrentTechImage("");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return {
    projects,
    currentSlide,
    isHovering,
    setIsHovering,
    nextSlide,
    prevSlide,
    scrollToProject,
    fullnessImages,
    fullnessSlides,
    fullnessCurrentSlide,
    nextFullnessSlide,
    prevFullnessSlide,
    showTechModal,
    currentTechImage,
    handleShowTechs,
    handleCloseModal
  };
};

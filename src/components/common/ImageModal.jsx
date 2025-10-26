import React from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const ImageModal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageAlt = "Modal image",
  className = "w-[700px] h-[500px] sm:w-[800px] sm:h-[600px] md:w-[730px] md:h-[530px] md:object-contain lg:w-[850px] lg:h-[750px] xl:w-[980px] xl:h-[880px] object-fill sm:object-fill",
  closeButtonClassName = "fixed z-50 bg-primary text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg top-32 sm:top-16 right-1/2 md:top-28 lg:top-20 xl:top-9"
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative overflow-y-auto overflow-x-auto md:overflow-hidden md:max-h-none md:max-w-none">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`certification-image ${className}`}
          style={{ minWidth: '700px' }}
          onLoad={(e) => {
            if (window.innerWidth >= 640 && window.innerWidth < 768) {
              e.target.style.minWidth = '1000px';
            } else if (window.innerWidth >= 768) {
              e.target.style.minWidth = 'auto';
            }
          }}
        />
        <button
          onClick={onClose}
          className={closeButtonClassName}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;

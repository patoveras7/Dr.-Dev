import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  className = '',
  overlayClassName = '',
  closeOnEscape = true,
  closeOnOverlayClick = true
}) => {
  useEffect(() => {
    if (!closeOnEscape) return;
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, closeOnEscape]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[110] ${overlayClassName}`}
        onClick={closeOnOverlayClick ? onClose : undefined}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-0 z-[120] flex items-center justify-center p-4"
        onClick={closeOnOverlayClick ? onClose : undefined}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={`relative ${className}`}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Modal;

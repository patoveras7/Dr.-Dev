"use client";
import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      // Home page - exact text as it appears
      '"A lawyer passionate for technology and software development 💻🚀"': '"A lawyer passionate for technology and software development 💻🚀"',
      "Welcome to Dr. Dev 👨‍⚖️": "Welcome to Dr. Dev 👨‍⚖️",
      "Tap to get in 💼": "Tap to get in 💼",
      
      // Navigation
      "Home": "Home",
      "About": "About",
      "Projects": "Projects",
      "Contact": "Contact",
      
      // Common actions
      "Click": "Click",
      "Tap": "Tap",
      "Enter": "Enter",
      "Exit": "Exit",
      "Back": "Back",
      "Next": "Next",
      "Previous": "Previous",
      
      // Add more translations as needed
    },
    es: {
      // Home page - exact text as it appears
      '"A lawyer passionate for technology and software development 💻🚀"': '"Un abogado apasionado por la tecnología y el desarrollo de software 💻🚀"',
      "Welcome to Dr. Dev 👨‍⚖️": "Bienvenido a Dr. Dev 👨‍⚖️",
      "Tap to get in 💼": "Toca para entrar 💼",
      
      // Navigation
      "Home": "Inicio",
      "About": "Acerca de",
      "Projects": "Proyectos",
      "Contact": "Contacto",
      
      // Common actions
      "Click": "Hacer clic",
      "Tap": "Tocar",
      "Enter": "Entrar",
      "Exit": "Salir",
      "Back": "Atrás",
      "Next": "Siguiente",
      "Previous": "Anterior",
      
      // Add more translations as needed
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const value = {
    language,
    t,
    toggleLanguage
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}; 
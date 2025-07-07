"use client";
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const TranslatableText = ({ children, className = "" }) => {
  const { t } = useTranslation();
  
  // Si children es un string, lo traducimos directamente
  if (typeof children === 'string') {
    return <span className={className}>{t(children)}</span>;
  }
  
  // Si children es un elemento React, buscamos texto dentro de él
  const translateChildren = (child) => {
    if (typeof child === 'string') {
      return t(child);
    }
    
    if (React.isValidElement(child)) {
      const newProps = { ...child.props };
      
      // Si el elemento tiene children, los traducimos recursivamente
      if (newProps.children) {
        if (typeof newProps.children === 'string') {
          newProps.children = t(newProps.children);
        } else if (Array.isArray(newProps.children)) {
          newProps.children = newProps.children.map(translateChildren);
        } else {
          newProps.children = translateChildren(newProps.children);
        }
      }
      
      return React.cloneElement(child, newProps);
    }
    
    return child;
  };
  
  return (
    <span className={className}>
      {React.Children.map(children, translateChildren)}
    </span>
  );
};

export default TranslatableText; 
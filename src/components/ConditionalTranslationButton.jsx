"use client";
import { usePathname } from "next/navigation";
import TranslationButton from "./TranslationButton";

const ConditionalTranslationButton = () => {
  const pathname = usePathname();
  
  // Solo mostrar el botón de traducción en la landing principal (/)
  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-[100]">
      <TranslationButton />
    </div>
  );
};

export default ConditionalTranslationButton;

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GoogleTranslateProvider = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Eliminamos cualquier traducción previa
    localStorage.removeItem("googtrans");
    sessionStorage.removeItem("googtrans");
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Esperamos un poco antes de cargar Google Translate
    setTimeout(() => {
      const googleTranslateScript = document.createElement("script");
      googleTranslateScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      googleTranslateScript.async = true;
      document.body.appendChild(googleTranslateScript);
  
      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "es,fr,de,it,pt",
          },
          "google_translate_element"
        );
      };
    }, 100);
  }, []);


  const changeLanguage = () => {
  const newLang = language === "en" ? "es" : "en";
  setLanguage(newLang);

  const selectElement = document.querySelector(".goog-te-combo");
  if (selectElement) {
    selectElement.value = newLang;
    selectElement.dispatchEvent(new Event("change"));

    setTimeout(() => {
      window.location.reload();
    }, 1000); // Incrementamos el tiempo para asegurar la recarga completa
  }
};

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-20 flex items-center gap-[4px] md:gap-[7px] text-[18px] md:text-[22px] font-semibold">
      <span className={language === "es" ? "text-clearIce" : "text-secondary"}>English</span>

      <div
        className="relative w-[40px] h-[22px] md:w-[45px] md:h-[27px] bg-clearIce rounded-full flex items-center cursor-pointer"
        onClick={changeLanguage}
      >
        <motion.div
          className="absolute w-[22px] h-[22px] md:w-[27px] md:h-[27px] bg-clearYellow rounded-full"
          animate={{ x: language === "es" ? 18 : 0}}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />
      </div>

      <span className={language === "en" ? "text-clearIce" : "text-secondary"}>Español</span>

      {/*Ocultamos el selector de translate de google.*/}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default GoogleTranslateProvider;
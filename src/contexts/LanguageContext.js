import React, { createContext, useState } from "react";
import translations from "../translations.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("ru");

  const handleTranslate = () => {
    const languages = ["ru", "uk", "en"];
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    setCurrentLanguage(languages[nextIndex]);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        translations: translations[currentLanguage],
        handleTranslate
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

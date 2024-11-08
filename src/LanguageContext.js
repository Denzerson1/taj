import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // Check for a stored language in localStorage
  const storedLanguage = localStorage.getItem('language') || 'EN'; // Default to 'EN' if no language is set in localStorage

  const [language, setLanguage] = useState(storedLanguage);

  // Update localStorage whenever the language changes
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Save the language choice to localStorage
  };

  // Optional: You can use useEffect to set the language from localStorage on initial load
  useEffect(() => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'EN'); // Ensure 'EN' is set by default if no language is found
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

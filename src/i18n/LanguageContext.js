import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LANGUAGES = ['EN', 'DE'];
const STORAGE_KEY = 'language';

const LanguageContext = createContext(null);

function initialLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(stored)) return stored;
  } catch {
    // storage unavailable (private mode etc.)
  }
  return navigator.language?.toLowerCase().startsWith('de') ? 'DE' : 'EN';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  const changeLanguage = useCallback((lang) => {
    if (LANGUAGES.includes(lang)) setLanguage(lang);
  }, []);

  const value = useMemo(() => ({ language, changeLanguage, languages: LANGUAGES }), [language, changeLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Pick the current language's entry from a `{ EN, DE }` copy object, falling back to English. */
export function useCopy(copy) {
  const { language } = useLanguage();
  return copy[language] ?? copy.EN;
}

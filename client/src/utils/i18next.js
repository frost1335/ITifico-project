import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
console.log(process.env.REACT_APP_FALLBACK_LANG);
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    saveMissing: true,
    fallbackLng: process.env.REACT_APP_FALLBACK_LANG,
  });

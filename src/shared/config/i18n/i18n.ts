import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") || "ru" : "ru";

(async () => {
  await i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: savedLang,
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    });
})();

export default i18n;

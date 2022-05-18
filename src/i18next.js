import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const Languages = ["ru", "ua"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    whitelist: Languages,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/YankiShop/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path"],
      caches: ["localStorage"],
    },
  });

export default i18n;

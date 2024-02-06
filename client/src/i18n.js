import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        cache: {
            enabled: true
        },
        supportedLngs: ["en", "fr", "kr"],
        fallbackLng: "en",
        react: {useSuspense: true},
        debug: false,
        backend: {
            loadPath: "./src/data/locales/{{lng}}.json",
        }
    }).then(() => {
    console.info("i18n initialized");
})

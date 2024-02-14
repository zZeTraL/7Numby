import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import fr from "./data/locales/fr.json";
import en from "./data/locales/en.json";

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
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            }
        },
    }).then(() => {
    console.info("i18n initialized");
})

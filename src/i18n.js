import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/enTranslation.json';
import ruTranslation from './locales/ru/ruTranslation.json';

i18n.use(I18NextHttpBackend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
  },
});

export default i18n;

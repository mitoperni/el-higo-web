import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonES from './locales/es/common.json';
import menuES from './locales/es/menu.json';
import commonEN from './locales/en/common.json';
import menuEN from './locales/en/menu.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      es: {
        common: commonES,
        menu: menuES,
      },
      en: {
        common: commonEN,
        menu: menuEN,
      },
    },

    defaultNS: 'common',
    ns: ['common', 'menu', 'reviews'],

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
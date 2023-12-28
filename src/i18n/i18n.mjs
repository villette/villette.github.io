import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
    },
    fallbackLng: 'en',
    load: 'languageOnly',
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: await import('./data/en.json'),
      },
      fr: {
        translation: await import('./data/fr.json'),
      },
    },
  });

export default i18n;

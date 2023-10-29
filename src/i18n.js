import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hu from './locales/hu.json';

const resources = {
	en: {
		translation: en
	},
	hu: {
		translation: hu
	}
};

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: 'hu',
		fallbackLng: 'en',
		debug: true,
		resources,
		interpolation: {
			escapeValue: false // not needed for react as it escapes by default
		}
	});

export default i18n;

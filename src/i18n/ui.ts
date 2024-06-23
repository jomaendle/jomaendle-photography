import { about, contact, customerReviews, faq, nav, pricing } from '@/i18n/translations';
import { site } from '@/i18n/translations/global.i18n.ts';
import { startPageTranslations } from '@/i18n/translations/start.i18n.ts';
import { work } from '@/i18n/translations/work.i18n.ts';
import { servicesTranslations } from './translations/services.i18n';

export const languages = {
	en: 'English',
	de: 'Deutsch',
};

export const defaultLang = 'de';

export const ui = {
	en: {
		...pricing.en,
		...nav.en,
		...faq.en,
		...about.en,
		...contact.en,
		...customerReviews.en,
		...work.en,
		...site.en,
		...startPageTranslations.en,
		...servicesTranslations.en,
		'cta.call': 'Book Your Free Call Now',
		'cta.short': 'Contact Me',
		'common.back': 'Go Back',
		'imprint.phone': 'Phone',
		'imprint.umsatzsteuer.title': 'Umsatzsteuer-ID',
		'imprint.umsatzsteuer.desc':
			'Tax identification number in accordance with §27 a of Umsatzsteuergesetz:',
		'common.duration': 'Duration',
		'common.price': 'Price',
	},
	de: {
		...pricing.de,
		...nav.de,
		...faq.de,
		...about.de,
		...contact.de,
		...customerReviews.de,
		...work.de,
		...site.de,
		...startPageTranslations.de,
		...servicesTranslations.de,
		'cta.call': 'Jetzt kostenloses Gespräch vereinbaren',
		'cta.short': 'Kontaktieren',
		'common.back': 'Zurück',
		'imprint.phone': 'Telefon',
		'imprint.umsatzsteuer.title': 'Umsatzsteuer-ID',
		'imprint.umsatzsteuer.desc':
			'Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:',

		'common.duration': 'Dauer',
		'common.price': 'Preis',
	},
} as const;

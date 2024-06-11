import {
	about,
	contact,
	customerReviews,
	faq,
	nav,
	pricing,
	processDescriptions
} from '@/i18n/translations';

export const languages = {
	en: 'English',
	de: 'Deutsch'
};

export const defaultLang = 'de';

export const ui = {
	en: {
		...pricing.en,
		...nav.en,
		...faq.en,
		...processDescriptions.en,
		...about.en,
		...contact.en,
		...customerReviews.en,
		'cta.call': 'Book Your Free Call Now',
		'cta.short': 'Contact Me',
		'common.back': 'Go Back',
		'imprint.phone': 'Phone',
		'imprint.umsatzsteuer.title': 'Umsatzsteuer-ID',
		'imprint.umsatzsteuer.desc':
			'Tax identification number in accordance with §27 a of Umsatzsteuergesetz:',
		'start.hero.title': 'Outdoor and Portrait Photography',
		'start.hero.subtitle': 'We capture the moments that matter to you.',
		'start.hero.cta': 'Book your session today.',
		'start.hero.exploreWork': 'Explore Our Work',
		'start.hero.exploreService': 'View Services',
		'common.duration': 'Duration',
		'common.price': 'Price'
	},
	de: {
		...pricing.de,
		...nav.de,
		...faq.de,
		...processDescriptions.de,
		...about.de,
		...contact.de,
		...customerReviews.de,
		'cta.call': 'Jetzt kostenloses Gespräch buchen',
		'cta.short': 'Kontaktieren',
		'common.back': 'Zurück',
		'imprint.phone': 'Telefon',
		'imprint.umsatzsteuer.title': 'Umsatzsteuer-ID',
		'imprint.umsatzsteuer.desc':
			'Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:',
		'start.hero.title': 'Outdoor und Porträt Fotografie',
		'start.hero.subtitle': 'Wir fangen die Momente ein, die für dich wichtig sind.',
		'start.hero.cta': 'Buche noch heute deinen Termin.',
		'start.hero.exploreWork': 'Arbeit entdecken',
		'start.hero.exploreService': 'Leistungen ansehen',
		'common.duration': 'Dauer',
		'common.price': 'Preis'
	}
} as const;

import { pricing } from '@/i18n/pricing.i18n.ts';
import { nav } from '@/i18n/nav.i18n.ts';
import { faq } from '@/i18n/faq.i18n.ts';

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
		'contact.subtitle': 'Ready to book a session or have questions? Contact us today.',
		'cta.call': 'Book Your Free Call Now',
		'cta.short': 'Book Now',
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
		'contact.subtitle': 'Bereit für eine Buchung oder hast du Fragen? Kontaktiere uns noch heute.',
		'cta.call': 'Jetzt kostenloses Gespräch buchen',
		'cta.short': 'Jetzt buchen',
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

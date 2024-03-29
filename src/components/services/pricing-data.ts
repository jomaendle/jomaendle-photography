import { type TranslationKey } from '@/i18n/utils.ts';
import { offer1, offer2 } from '@/i18n/pricing.i18n.ts';

export interface PhotoShootingOffersBase {
	title: TranslationKey;
	description: TranslationKey;
	targetGroup: TranslationKey;
	cta: TranslationKey;
	duration: string;
	price: string;
	includes: TranslationKey[];
	isBusiness?: boolean;
}

export type PhotoShootingOffersTranslated = Omit<
	PhotoShootingOffersBase,
	'title' | 'targetGroup' | 'description' | 'cta' | 'includes'
> & {
	title: string;
	description: string;
	targetGroup: string;
	cta: string;
	includes: string[];
};

export const OFFERS: PhotoShootingOffersBase[] = [
	{
		duration: offer1.durationInHours,
		price: offer1.price,
		title: 'pricing.offering1.title',
		description: 'pricing.offering1.description',
		includes: [
			'pricing.offering1.included.0',
			'pricing.offering1.included.1',
			'pricing.offering1.included.2',
			'pricing.offering1.included.3'
		],
		cta: 'pricing.offering1.cta',
		targetGroup: 'pricing.offering1.targetGroup'
	},
	{
		duration: offer2.durationInHours,
		price: offer2.price,
		title: 'pricing.offering2.title',
		description: 'pricing.offering2.description',
		includes: [
			'pricing.offering2.included.0',
			'pricing.offering2.included.1',
			'pricing.offering2.included.2',
			'pricing.offering2.included.3'
		],
		cta: 'pricing.offering2.cta',
		targetGroup: 'pricing.offering2.targetGroup'
	},
	{
		duration: '30min',
		price: 'Flexible',
		title: 'pricing.offering3.title',
		description: 'pricing.offering3.description',
		includes: [
			'pricing.offering3.included.0',
			'pricing.offering3.included.1',
			'pricing.offering3.included.2',
			'pricing.offering3.included.3'
		],
		cta: 'pricing.offering3.cta',
		targetGroup: 'pricing.offering3.targetGroup',
		isBusiness: true
	}
];

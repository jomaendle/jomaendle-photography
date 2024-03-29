import type { TranslationKey } from '@/i18n/utils.ts';

export interface ProcessDescriptionBase {
	title: TranslationKey;
	description: TranslationKey;
}

export interface ProcessDescriptionTranslated {
	title: string;
	description: string;
}

export const SHOOTING_PROCESS: ProcessDescriptionBase[] = [
	{
		title: 'process.getInTouch.title',
		description: 'process.getInTouch.description'
	},
	{
		title: 'process.shoot.title',
		description: 'process.shoot.description'
	},
	{
		title: 'process.delivery.title',
		description: 'process.delivery.description'
	}
];

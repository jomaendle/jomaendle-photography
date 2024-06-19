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
		title: 'start.process.step1.title',
		description: 'start.process.step1.description',
	},
	{
		title: 'start.process.step2.title',
		description: 'start.process.step2.description',
	},
	{
		title: 'start.process.step3.title',
		description: 'start.process.step3.description',
	},
	{
		title: 'start.process.step4.title',
		description: 'start.process.step4.description',
	},
	{
		title: 'start.process.step5.title',
		description: 'start.process.step5.description',
	},
];

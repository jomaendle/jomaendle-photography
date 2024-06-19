import type { TranslationFunction, TranslationKey } from '@/i18n/utils.ts';

export function getPageTitle(t: TranslationFunction, page: TranslationKey) {
	return `${t(page)} - ${t('site.title')}`;
}

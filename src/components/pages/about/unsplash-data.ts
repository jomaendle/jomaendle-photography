import { defaultLang, ui } from '@/i18n/ui.ts';

export interface UnsplashData {
	views: number;
	downloads: number;
	totalPhotos: number;
	followers: number;
}

export function getTranslationKeyForUnsplashData(
	key: string,
): keyof (typeof ui)[typeof defaultLang] {
	return `about.unsplash.${key}` as keyof (typeof ui)[typeof defaultLang];
}

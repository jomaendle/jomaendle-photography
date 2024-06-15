import type { UnsplashData } from '@/components/pages/about/unsplash-data.ts';
import { atom } from 'nanostores';

export const $unsplashStats = atom<UnsplashData | null>(null);

$unsplashStats.subscribe((stats) => {
	console.log('Unsplash stats changed:', stats);

	if (window?.localStorage && stats) {
		window.localStorage.setItem('unsplashStats', JSON.stringify(stats));
	}
});

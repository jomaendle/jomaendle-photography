import type { UnsplashData } from '@/components/pages/about/unsplash-data.ts';
import { atom } from 'nanostores';

interface UnsplashStatsData {
	date: number;
	stats: UnsplashData;
}

const UNSPLASH_STATS_KEY = 'unsplashStats';

export const $unsplashStats = atom<UnsplashData | null>(null);

$unsplashStats.subscribe((stats) => {
	if (window?.localStorage && stats) {
		writeUnsplashStatsToLocalStorage(stats);
	}
});

export function writeUnsplashStatsToLocalStorage(stats: UnsplashData) {
	window.localStorage.setItem(
		UNSPLASH_STATS_KEY,
		JSON.stringify({
			date: Date.now(),
			stats,
		}),
	);
}

export function readUnsplashStatsFromLocalStorage(): UnsplashStatsData | null {
	const statsFromStorage = JSON.parse(window.localStorage.getItem(UNSPLASH_STATS_KEY) ?? '{}');

	// if the stats are older than 1 week, return null
	const oneWeek = 1000 * 60 * 60 * 24 * 7;
	if (statsFromStorage.date < Date.now() - oneWeek) {
		return null;
	}

	if (Object.keys(statsFromStorage).length > 0) {
		return statsFromStorage;
	}

	return null;
}

/**
 **********************************
 * Unsplash API
 * https://unsplash.com/developers
 **********************************
 */

import { config } from 'dotenv';
import fetch from 'node-fetch';

config();

const unsplashAPI = {
	accessKey: process.env.UNSPLASH_ACCESS_KEY,
	secretKey: process.env.UNSPLASH_SECRET_KEY,
};

/**
 * Get all stats from Unsplash API
 *
 * {@link UnslashData}
 * @returns {Promise<{followers: *, downloads: number | PaymentItem, totalPhotos: *, views: number | PaymentItem}|{followers: number, downloads: number, totalPhotos: number, views: number}>}
 */
async function getAllStats() {
	try {
		const responseStats = await fetch(
			`https://api.unsplash.com/users/leonardo_64/statistics?client_id=${unsplashAPI.accessKey}`,
		);

		const responseMoreStats = await fetch(
			`https://api.unsplash.com/users/leonardo_64?client_id=${unsplashAPI.accessKey}`,
		);

		const dataFirst = await responseStats.json();
		const dataSecond = await responseMoreStats.json();

		return {
			views: dataFirst.views.total,
			downloads: dataFirst.downloads.total,
			totalPhotos: dataSecond.total_photos,
			followers: dataSecond.followers_count,
		};
	} catch (error) {
		console.error(error);

		return {
			views: 0,
			downloads: 0,
			totalPhotos: 0,
			followers: 0,
		};
	}
}

export { getAllStats };

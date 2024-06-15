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
			downloads: dataFirst.downloads.total,
			views: dataFirst.views.total,
			totalPhotos: dataSecond.total_photos,
			followers: dataSecond.followers_count,
		};
	} catch (error) {
		console.error(error);

		return {
			downloads: 0,
			views: 0,
			totalPhotos: 0,
			followers: 0,
		};
	}
}

export { getAllStats };

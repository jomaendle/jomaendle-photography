import { getAllStats } from '../../scripts/unsplash.js';

export const handler = async () => {
	try {
		const data = await getAllStats();

		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		console.error(error);

		return {
			statusCode: 500,
			body: JSON.stringify({
				error: 'There was an error trying to fetch the data',
			}),
		};
	}
};

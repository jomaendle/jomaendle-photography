const { getAllStats } = require('../../scripts/unsplash.js');

export const handler = async (event, context) => {
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

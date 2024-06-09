import { getCollection } from 'astro:content';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';

export async function getStoredImages(key: string) {
	const imagesFromCollection = await getCollection(key as any);

	if (!Array.isArray(imagesFromCollection)) {
		return [];
	}

	const optimizedImages: GetImageResult[] = await Promise.all(
		imagesFromCollection.map(async (image) => {
			return await getImage({
				src: (image as any).data.image,
				width: 800,
				quality: 80
			});
		})
	);

	return optimizedImages;
}

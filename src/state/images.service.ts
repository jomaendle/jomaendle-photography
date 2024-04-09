import { getCollection } from 'astro:content';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';

export async function getStoredImages(key: string, isPreview = false) {
	const imagesFromCollection = await getCollection(key as any);

	if (!Array.isArray(imagesFromCollection)) {
		return [];
	}

	const optimizedImages: GetImageResult[] = await Promise.all(
		imagesFromCollection.map(async (image) => {
			return await getImage({
				src: (image as any).data.image,
				width: isPreview ? 30 : 1000,
				quality: isPreview ? 5 : 'high'
			});
		})
	);

	return optimizedImages;
}

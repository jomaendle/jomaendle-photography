import { $loadedImages, addLoadedImages } from '@/state/images.ts';
import { getCollection } from 'astro:content';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';

export async function getStoredImages(key: string, slug?: string) {
	const hasImages = $loadedImages.get().has(key);

	if (!hasImages) {
		const imagesFromCollection = await getCollection(key as any);

		if (!Array.isArray(imagesFromCollection)) {
			return [];
		}

		const optimizedImages: GetImageResult[] = await Promise.all(
			imagesFromCollection.map(async (image) => {
				return await getImage({
					src: (image as any).data.image,
					width: 600,
					quality: 'high'
				});
			})
		);

		addLoadedImages(key, optimizedImages);
	}

	return $loadedImages.get().get(key);
}

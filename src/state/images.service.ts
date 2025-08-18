import { getCollection } from 'astro:content';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';
import { clientProjectsKey, heroImagesKey } from '@/content/config.ts';

export type HeroImage = GetImageResult & { path: string; title: string };

export async function getHeroImages(): Promise<HeroImage[]> {
	const imagesFromCollection = await getCollection(heroImagesKey);
	const clientProjects = await getCollection(clientProjectsKey);

	imagesFromCollection[0].data.project;

	if (!Array.isArray(imagesFromCollection)) {
		return [];
	}

	return await Promise.all(
		imagesFromCollection.map(async (image) => {
			const optimizedImage = await getImage({
				src: (image as any).data.image,
				width: 700,
				quality: 85,
			});

			const title = clientProjects.find((project) => project.id === image.data.project?.id)?.data
				.title;

			return <HeroImage>{
				...optimizedImage,
				path: image?.data?.project?.id,
				title: title,
			};
		}),
	);
}

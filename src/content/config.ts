// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

export const portraitImagesKey = 'portrait-images' as const;
export const landscapesKey = 'landscapes' as const;
export const clientProjectsKey = 'client-projects' as const;
export const marieDogImagesKey = 'marie' as const;
export const akankshaImagesKey = 'akanksha' as const;
export const heroImagesKey = 'hero' as const;

// 2. Define your collection(s)
const imageCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			image: image(),
			category: z.string().optional()
		})
});

const clientProjectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			images: z.array(image()),
			titleImage: image()
		})
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	[portraitImagesKey]: imageCollection,
	[landscapesKey]: imageCollection,
	[marieDogImagesKey]: imageCollection,
	[clientProjectsKey]: clientProjectsCollection,
	[akankshaImagesKey]: imageCollection,
	[heroImagesKey]: imageCollection
};

// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

export const portraitImagesKey = 'portrait-images' as const;
export const landscapesKey = 'landscapes' as const;
export const clientProjectsKey = 'client-projects' as const;
export const marieDogImagesKey = 'marie' as const;
export const akankshaImagesKey = 'akanksha' as const;

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
	[akankshaImagesKey]: imageCollection
};

interface Image {
	src: string;
	width: number;
	height: number;
	alt: string;
}
// export the type for the client projects collection
// @ts-ignore
export interface ClientProject {
	title: string;
	description?: string;
	images: Image[];
	titleImage: Image;
}

// @ts-ignore
export type ImageContent = z.TypeOf<typeof imageCollection.schema>;

export interface CollectionItem<T> {
	id: string;
	slug: string;
	body: string;
	collection: keyof typeof collections;
	data: T;
}

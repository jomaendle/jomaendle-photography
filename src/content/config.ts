// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const imageCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      image: image(),
      category: z.string().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  ["portrait-images"]: imageCollection,
  landscapes: imageCollection,
};

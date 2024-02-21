import { getCollection } from "astro:content";

export async function getPhotoDetailsStaticPaths() {
  const allNature = await getCollection("landscapes");
  const allPortraits = await getCollection("portrait-images");

  return [...allPortraits, ...allNature].map((image) => {
    return {
      params: {
        slug: image.slug,
      },
      props: { image },
    };
  });
}

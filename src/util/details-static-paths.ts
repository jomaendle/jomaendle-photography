import { getCollection } from 'astro:content'
import { clientProjectsKey } from '@/content/config.ts'

export async function getPhotoDetailsStaticPaths() {
	const allNature = await getCollection(clientProjectsKey)

	return allNature.map((image) => {
		return {
			params: {
				slug: image.slug
			},
			props: { image }
		}
	})
}

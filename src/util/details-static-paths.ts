import { getCollection } from 'astro:content';
import { clientProjectsKey } from '@/content/config.ts';

export async function getPhotoDetailsStaticPaths() {
	const clientProjects = await getCollection(clientProjectsKey);

	return clientProjects.map((project) => {
		return {
			params: {
				slug: project.slug
			},
			props: { project }
		};
	});
}

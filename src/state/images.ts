import { atom } from 'nanostores';

export const $loadedImages = atom<Map<string, any[]>>(new Map());

export function addLoadedImages(imageKey: string, images: any[]) {
	const loadedImages = $loadedImages.get();
	loadedImages.set(imageKey, images);
	$loadedImages.set(loadedImages);
}

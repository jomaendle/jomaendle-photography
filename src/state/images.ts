import { atom } from 'nanostores';

export const $loadedImages = atom<Map<string, any[]>>(new Map());

export const $currentImageIndex = atom<number>(0);

export function addLoadedImages(imageKey: string, images: any[]) {
	const loadedImages = $loadedImages.get();
	loadedImages.set(imageKey, images);
	$loadedImages.set(loadedImages);
}

export function setCurrentImageIndex(index: number) {
	$currentImageIndex.set(index);
}

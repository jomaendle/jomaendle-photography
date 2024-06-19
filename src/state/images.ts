import { atom } from 'nanostores';

export const $currentImageIndex = atom<number>(0);

export function setCurrentImageIndex(index: number) {
	$currentImageIndex.set(index);
}

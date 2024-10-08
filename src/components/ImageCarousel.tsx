import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import type { GetImageResult } from 'astro';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { toggleModal } from '@/util/modal.util.ts';
import { $currentImageIndex, setCurrentImageIndex } from '@/state/images.ts';
import { useEffect, useState } from 'react';

export function ImageCarousel({
	images,
	showCloseOnMobile
}: {
	images: GetImageResult[];
	showCloseOnMobile?: boolean;
}) {
	const [startIndex, setStartIndex] = useState($currentImageIndex.get());

	useEffect(() => {
		$currentImageIndex.subscribe((index) => {
			if (index !== startIndex) {
				setStartIndex(index);
			}
		});
	}, []);

	function onModalCloseClick() {
		toggleModal('modal', false);

		setCurrentImageIndex(0);
	}

	return (
		<Carousel
			opts={{
				align: 'start',
				startIndex: startIndex
			}}
			onClick={(e) => e.stopPropagation()}
			className="relative mx-auto flex h-full w-full items-center justify-center gap-4 overflow-hidden sm:max-w-lg lg:max-w-2xl"
		>
			{showCloseOnMobile && (
				<div className={'absolute inset-0 z-0'}>
					<Button
						variant="ghost"
						onClick={onModalCloseClick}
						className="absolute right-4 top-4 z-10 p-4 text-white"
						aria-label="Close Image Carousel"
					>
						<X />
					</Button>
				</div>
			)}
			<CarouselPrevious className={'z-10 hidden h-10 w-10 shrink-0 sm:flex'} />
			<CarouselContent className="h-full shrink-0 items-center">
				{(images ?? []).map((img, index) => (
					<CarouselItem key={index} className="h-full">
						<div className="aspect-[2:3] flex h-full items-center justify-center">
							<img
								src={img.src}
								alt=""
								width={img.options?.width}
								height={img.options?.height}
								loading={index === 0 ? 'eager' : 'lazy'}
								className="max-h-[700px] object-contain"
							/>
							<slot />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext className={'z-10 hidden h-10 w-10 shrink-0 sm:flex'} />
		</Carousel>
	);
}

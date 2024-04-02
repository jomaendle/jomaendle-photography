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

export function ImageCarousel({
	images,
	showCloseOnMobile
}: {
	images: GetImageResult[];
	showCloseOnMobile?: boolean;
}) {
	function onModalCloseClick() {
		toggleModal('modal', false);
	}

	return (
		<Carousel
			opts={{
				align: 'start'
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
			<CarouselPrevious className={'z-10 hidden shrink-0 sm:flex'} />
			<CarouselContent className="h-full shrink-0">
				{(images ?? []).map((img, index) => (
					<CarouselItem key={index} className="h-full">
						<div className="aspect-[2:3] flex h-full max-h-[700px] items-center justify-center">
							<img
								src={img.src}
								alt=""
								width={img.options?.width}
								height={img.options?.height}
								loading={index === 0 ? 'eager' : 'lazy'}
								className="h-full w-full object-contain object-left sm:object-center md:object-left"
							/>
							<slot />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext className={'z-10 hidden shrink-0 sm:flex'} />
		</Carousel>
	);
}

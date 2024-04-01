import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import type { GetImageResult } from 'astro';

export function ImageCarousel({ images }: { images: GetImageResult[] }) {
	return (
		<Carousel
			opts={{
				align: 'start'
			}}
			onClick={(e) => e.stopPropagation()}
			className="relative mx-auto flex h-full w-full items-center justify-center gap-4 overflow-hidden sm:max-w-lg lg:max-w-2xl"
		>
			<CarouselPrevious className={'shrink-0'} />
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
			<CarouselNext className={'shrink-0'} />
		</Carousel>
	);
}

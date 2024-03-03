import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ImageCarousel({ images }: { images: any[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="relative mx-auto flex h-full w-full max-w-lg flex-col justify-center overflow-hidden"
    >
      <CarouselContent className="h-full">
        {images.map((img, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="aspect-[2:3] flex h-full max-h-[700px] items-center justify-center">
              <img
                src={img.data.image.src}
                alt=""
                className="h-full w-full object-contain object-left sm:object-center md:object-left"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative flex gap-3 pt-2 sm:justify-center md:justify-start">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}

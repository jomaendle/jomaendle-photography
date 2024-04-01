import { useState, useEffect, useRef } from 'react';
import { getImage } from 'astro:assets';
import type { GetImageResult } from 'astro';

const loadImagesRecord: Map<string, GetImageResult> = new Map();

function LazyLoadedImage({ lowResSrc, originalImage, width, height, alt, id }) {
	const [isHighResLoaded, setIsHighResLoaded] = useState(false);
	const [highResImg, setHighResImg] = useState(null);
	const imgRef = useRef(null);
	const lowResRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(async (entry) => {
				if (entry.isIntersecting && !isHighResLoaded) {
					const id = entry.target.id;

					if (!id) {
						throw new Error('Image ID is missing');
					}

					if (loadImagesRecord.has(id)) {
						setHighResImg(loadImagesRecord.get(id));
						return;
					}

					const optimizedQualityImage = await getImage({
						src: originalImage,
						width: width,
						height: height,
						quality: 94
					});

					loadImagesRecord.set(id, optimizedQualityImage);

					setHighResImg(optimizedQualityImage);
				}
			});
		});

		if (imgRef.current) {
			setTimeout(() => {
				observer.observe(imgRef.current);
			}, 0);
		}

		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, [originalImage, isHighResLoaded, highResImg]);

	useEffect(() => {
		if (highResImg) {
			imgRef.current.onload = () => {
				setIsHighResLoaded(true);
			};
		}
	}, [highResImg]);

	return (
		<div
			ref={lowResRef}
			className={`z-0 h-full w-full bg-cover bg-center ${isHighResLoaded ? 'fade-out-blur' : 'blur-[30px]'}`}
			style={{
				backgroundImage: `url(${lowResSrc})`,
				transition: 'all 1s ease'
			}}
		>
			<img
				id={id}
				ref={imgRef}
				src={highResImg?.src}
				width={width}
				height={height}
				alt={alt}
				decoding="async"
				loading="lazy"
				className={`preview z-10 h-full w-full flex-shrink object-cover object-top ${isHighResLoaded ? 'fade-in-animation' : 'opacity-0'}`}
				style={{ transition: `opacity 1s ease-in-out` }}
			/>
		</div>
	);
}

export default LazyLoadedImage;

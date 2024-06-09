import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';

export default function ImageScroll() {
	const { scrollY, scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);

	console.log('Page scroll: ', scrollY);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		console.log('Page scroll: ', latest);
	});

	return (
		<div className={'h-10 w-10 bg-gray-200'}>
			<motion.div style={{ scaleX }} />
		</div>
	);
}

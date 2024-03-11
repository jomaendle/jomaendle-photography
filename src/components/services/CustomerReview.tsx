import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';

const reviews = [
	{
		name: 'Walwala',
		rating: 5,
		quote:
			'We really loved the shoot hope the pictures will turn out good. [...] I really like the pictures! They are perfect. The texture, contrast, brightness, everything is perfect'
	},
	{
		quote:
			'One of the greatest photographer in Bremen. Very nice and friendly and yet very professional.',
		name: 'Akanksha',
		rating: 5
	},
	{
		quote: '',
		name: 'Tobias',
		rating: 5
	}
];

function getStars(rating: number) {
	const stars = [];
	for (let i = 0; i < 5; i++) {
		stars.push(
			<StarIcon
				key={i}
				className={`h-5 w-5 ${i < rating ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
			/>
		);
	}
	return stars;
}

function getAverageRating() {
	const total = reviews.reduce((acc, review) => acc + review.rating, 0);
	return total / reviews.length;
}

export default function CustomerReview() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1
			}}
			viewport={{
				margin: '-200px',
				once: true
			}}
		>
			<div className="mx-auto grid w-full max-w-5xl gap-6 lg:gap-12">
				<div className="flex flex-col items-center gap-2 text-center">
					<h2 className="text-3xl font-bold">Customer Reviews</h2>
					<div className="flex items-center gap-2">
						{getStars(getAverageRating())}
						<span className="text-2xl font-bold">{getAverageRating().toFixed(1)}</span>
					</div>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						Average Rating based on {reviews.length} personal reviews and from
						<a
							href="https://maps.app.goo.gl/zfsgASCDqqe2e6pJ6"
							target="_blank"
							rel="nofollow"
							className="px-1"
						>
							<Button variant="link" size="link">
								Google Maps
							</Button>
						</a>
					</p>
				</div>

				<div className="grid items-start gap-6 md:grid-cols-2">
					{reviews.map((review, index) => (
						<Card key={index}>
							<CardHeader>
								<div className="flex items-center gap-0.5">
									{getStars(review.rating)}
									<span className="ml-0.5 text-sm text-gray-500">{review.rating.toFixed(1)}</span>
								</div>
							</CardHeader>

							<CardContent className="flex flex-col gap-4">
								{review.quote && (
									<div className="text-sm leading-loose text-gray-500 empty:hidden">
										<p className="leading-5">{review.quote}</p>
									</div>
								)}

								<p className="text-sm">{review.name}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function StarIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	);
}

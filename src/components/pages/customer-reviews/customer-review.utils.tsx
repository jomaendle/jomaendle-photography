import { CUSTOMER_REVIEW_DATA } from '@/components/pages/customer-reviews/customer-review.data.ts';

export function getStars(rating: number) {
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

export function getAverageRating() {
	const total = CUSTOMER_REVIEW_DATA.reduce((acc, review) => acc + review.rating, 0);
	return total / CUSTOMER_REVIEW_DATA.length;
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

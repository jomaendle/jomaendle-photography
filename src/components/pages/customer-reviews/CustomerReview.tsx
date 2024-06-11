import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import {
	getAverageRating,
	getStars
} from '@/components/pages/customer-reviews/customer-review.utils.tsx';
import {
	CUSTOMER_REVIEW_DATA,
	type CustomerReviewData
} from '@/components/pages/customer-reviews/customer-review.data.ts';

export function CustomerReviewPreview() {
	return (
		<div className="flex flex-col items-center gap-2 text-center">
			<h2 className="text-3xl font-bold">Customer Reviews</h2>
			<div className="flex items-center gap-2">
				{getStars(getAverageRating())}
				<span className="text-2xl font-bold">{getAverageRating().toFixed(1)}</span>
			</div>
			<p className="text-sm text-gray-500 dark:text-gray-400">
				Average Rating based on {CUSTOMER_REVIEW_DATA.length} personal reviews and from
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
	);
}

export function CustomerReview({
	translatedCustomerReview
}: {
	translatedCustomerReview: CustomerReviewData[];
}) {
	return (
		<div className="mx-auto grid w-full max-w-5xl gap-6 lg:gap-12">
			<CustomerReviewPreview />

			<div className="grid items-start gap-6 md:grid-cols-2">
				{translatedCustomerReview.map((review, index) => (
					<Card key={index}>
						<CardHeader>
							<div className="flex items-center gap-0.5">
								{getStars(review.rating)}
								<span className="ml-0.5 text-sm text-gray-500">{review.rating.toFixed(1)}</span>
							</div>
						</CardHeader>

						<CardContent className="flex flex-col gap-4">
							{review.translation && (
								<div className="text-sm leading-loose text-gray-500 empty:hidden">
									<p className="leading-5">{review.translation}</p>
								</div>
							)}

							<p className="text-sm">{review.name}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

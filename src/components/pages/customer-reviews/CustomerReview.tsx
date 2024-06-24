import {
	CUSTOMER_REVIEW_DATA,
	type CustomerReviewData,
} from '@/components/pages/customer-reviews/customer-review.data.ts';
import {
	getAverageRating,
	getStars,
} from '@/components/pages/customer-reviews/customer-review.utils.tsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { useState } from 'react';

export interface CustomerReviewPreviewTranslations {
	title: string;
	description: string;
	readMoreReviews: string;
	readMoreCta: string;
	readLessCta: string;
}

export function CustomerReviewPreview({
	translations,
	showMoreLink,
}: {
	translations: CustomerReviewPreviewTranslations;
	showMoreLink?: string;
}) {
	const updatedDescription = translations.description.replace(
		'{count}',
		CUSTOMER_REVIEW_DATA.length + '',
	);

	return (
		<div className="flex flex-col items-center gap-2 text-center">
			<h2 className="text-3xl font-bold">{translations.title}</h2>
			<div className="flex items-center gap-2">
				{getStars(getAverageRating())}
				<span className="text-2xl font-bold">{getAverageRating().toFixed(1)}</span>
			</div>
			<p className="text-sm text-gray-500 dark:text-gray-400">
				{updatedDescription}
				<a
					href="https://maps.app.goo.gl/zfsgASCDqqe2e6pJ6"
					target="_blank"
					rel="nofollow"
					className="px-1"
				>
					<Button variant="link" size="link">
						Google Maps.
					</Button>
				</a>
			</p>

			{showMoreLink && (
				<div className="mt-4">
					<a href={showMoreLink}>
						<Button variant="outline" size="lg">
							{translations.readMoreReviews}
						</Button>
					</a>
				</div>
			)}
		</div>
	);
}

export function CustomerReview({
	translatedCustomerReview,
	customerReviewTranslations,
}: {
	customerReviewTranslations: CustomerReviewPreviewTranslations;
	translatedCustomerReview: CustomerReviewData[];
}) {
	const [showMore, setShowMore] = useState<boolean[]>(
		new Array(translatedCustomerReview.length).fill(false),
	);

	function toggleShowMore(index: number) {
		const newShowMore = [...showMore];
		newShowMore[index] = !newShowMore[index];
		setShowMore(newShowMore);
	}

	return (
		<div className="mx-auto grid w-full max-w-5xl gap-6 lg:gap-12">
			<CustomerReviewPreview translations={customerReviewTranslations} />

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
									<p
										className={`overflow-hidden leading-5 ${showMore[index] ? null : 'line-clamp-3'}`}
									>
										{review.translation}
									</p>
									<Button variant="link" size="link" onClick={() => toggleShowMore(index)}>
										{showMore[index]
											? customerReviewTranslations.readLessCta
											: customerReviewTranslations.readMoreCta}
									</Button>
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

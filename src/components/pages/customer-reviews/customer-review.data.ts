import { defaultLang, ui } from '@/i18n/ui.ts';

export const CUSTOMER_REVIEW_DATA: CustomerReviewData[] = [
	{
		name: 'Daria',
		quote: 'customerReviews.daria.review',
		rating: 5
	},
	{
		name: 'Marie',
		quote: 'customerReviews.marie.review',
		rating: 5
	},
	{
		name: 'Oksana',
		quote: 'customerReviews.oksana.review',
		rating: 5
	},
	{
		name: 'Robin',
		rating: 5,
		quote: 'customerReviews.robin.review'
	},
	{
		name: 'Walwala',
		rating: 5,
		quote: 'customerReviews.walwala.review'
	},
	{
		quote: 'customerReviews.akanksha.review',
		name: 'Akanksha',
		rating: 5
	}
];

export interface CustomerReviewData {
	name: string;
	quote: keyof (typeof ui)[typeof defaultLang];
	translation?: string;
	rating: number;
}

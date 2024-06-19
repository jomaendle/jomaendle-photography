import {
	OFFERS,
	type PhotoShootingOffersTranslated,
} from '@/components/pages/services/pricing-data.ts';
import {
	type ProcessDescriptionTranslated,
	SHOOTING_PROCESS,
} from '@/components/pages/services/process-data.ts';
import {
	CUSTOMER_REVIEW_DATA,
	type CustomerReviewData,
} from '@/components/pages/customer-reviews/customer-review.data.ts';
import type { TranslationFunction } from '@/models/i18n.ts';

export const getTranslatedOffers: (t: TranslationFunction) => PhotoShootingOffersTranslated[] = (
	t,
) =>
	OFFERS.map((offer) => {
		return {
			...offer,
			title: t(offer.title),
			description: t(offer.description),
			targetGroup: t(offer.targetGroup),
			cta: t(offer.cta),
			includes: offer.includes.map((include) => t(include)),
		};
	});

export const getTranslatedShootingDescriptions: (
	t: TranslationFunction,
) => ProcessDescriptionTranslated[] = (t) =>
	SHOOTING_PROCESS.map((step) => {
		return {
			title: t(step.title),
			description: t(step.description),
		};
	});

export const getTranslatedCustomerReviews: (t: TranslationFunction) => CustomerReviewData[] = (t) =>
	CUSTOMER_REVIEW_DATA.map((review) => ({
		...review,
		translation: t(review.quote),
	}));

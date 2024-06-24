import type { CustomerReviewPreviewTranslations } from '@/components/pages/customer-reviews/CustomerReview.tsx';
import type { DatePickerTranslations } from '@/components/ui/datePicker.tsx';
import type { TranslationFunction } from '@/models/i18n.ts';

export interface ContactFormTranslations {
	title: string;
	cta: string;
	description: string;
	or: string;
	formTitle: string;
	formDescription: string;
	requiredFields: string;
	formName: string;
	formDate: string;
	formEmail: string;
	formMessage: string;
	formSubmit: string;
	date: string;
	placeholder: {
		name: string;
		email: string;
		message: string;
	};
	messages: {
		success: string;
		error: string;
		formIncomplete: string;
	};
	offers: {
		title: string;
		searchPlaceholder: string;
		noResults: string;
		selectPlaceholder: string;
	};
}

export const getContactTranslations: (t: TranslationFunction) => ContactFormTranslations = (t) => {
	return {
		cta: t('cta.call'),
		title: t('contact.title'),
		formEmail: t('contact.formEmail'),
		formName: t('contact.formName'),
		formMessage: t('contact.formMessage'),
		formSubmit: t('contact.formSubmit'),
		formDate: t('contact.formDate'),
		formTitle: t('contact.formTitle'),
		formDescription: t('contact.formDescription'),
		requiredFields: t('contact.requiredFields'),
		date: t('contact.date'),
		placeholder: {
			email: t('contact.form.placeholder.email'),
			name: t('contact.form.placeholder.name'),
			message: t('contact.form.placeholder.message'),
		},
		messages: {
			error: t('contact.messages.error'),
			formIncomplete: t('contact.messages.formIncomplete'),
			success: t('contact.messages.success'),
		},
		description: t('contact.form.description'),
		or: t('contact.or'),
		offers: {
			title: t('contact.offers.title'),
			searchPlaceholder: t('contact.offers.searchPlaceholder'),
			noResults: t('contact.offers.noResults'),
			selectPlaceholder: t('contact.offers.selectPlaceholder'),
		},
	};
};

export const getCustomerReviewTranslations: (
	t: TranslationFunction,
) => CustomerReviewPreviewTranslations = (t) => ({
	title: t('customerReviews.title'),
	description: t('customerReviews.averageRating'),
	readMoreReviews: t('start.readMoreReviews'),
	readMoreCta: t('start.readMoreCta'),
	readLessCta: t('start.readLessCta'),
});

export function getDatePickerTranslations(t: TranslationFunction): DatePickerTranslations {
	return {
		apply: t('common.apply'),
		cancel: t('common.cancel'),
		placeholder: t('contact.date'),
	};
}

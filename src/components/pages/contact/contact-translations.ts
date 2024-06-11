import type { ContactFormTranslations } from '@/components/ui/ContactForm.tsx';
import type { TranslationFunction } from '@/models/i18n.ts';
import type { CustomerReviewPreviewTranslations } from '@/components/pages/customer-reviews/CustomerReview.tsx';

export const getContactTranslations: (t: TranslationFunction) => ContactFormTranslations = (t) => {
	return {
		cta: t('cta.call'),
		title: t('contact.title'),
		formEmail: t('contact.formEmail'),
		formName: t('contact.formName'),
		formMessage: t('contact.formMessage'),
		formSubmit: t('contact.formSubmit'),
		formTitle: t('contact.formTitle'),
		placeholder: {
			email: t('contact.form.placeholder.email'),
			name: t('contact.form.placeholder.name'),
			message: t('contact.form.placeholder.message')
		},
		messages: {
			error: t('contact.messages.error'),
			formIncomplete: t('contact.messages.formIncomplete'),
			success: t('contact.messages.success')
		},
		description: t('contact.form.description'),
		or: t('contact.or')
	};
};

export const getCustomerReviewTranslations: (
	t: TranslationFunction
) => CustomerReviewPreviewTranslations = (t) => ({
	title: t('customerReviews.title'),
	description: t('customerReviews.averageRating')
});

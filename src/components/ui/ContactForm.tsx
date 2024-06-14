import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { toast } from 'sonner';
import PageTitle from '@/components/ui/PageTitle.tsx';
import { DatePicker } from '@/components/ui/datePicker.tsx';
import * as React from 'react';
import { Combobox } from '@/components/ui/combobox.tsx';
import type { PhotoShootingOffersTranslated } from '@/components/pages/services/pricing-data.ts';
import type { ContactFormTranslations } from '@/components/pages/contact/contact-translations.ts';
import {
	encodeFormData,
	getContactFormData,
	isContactFormValid,
	resetContactForm,
} from '@/components/pages/contact/contact-form.util.ts';

function Separator() {
	return <div className="h-[1px] w-8 bg-gray-300"></div>;
}

export default function ContactForm({
	showHeader,
	translations,
	offers,
}: {
	showHeader?: boolean;
	translations: ContactFormTranslations;
	offers?: PhotoShootingOffersTranslated[];
}) {
	function onDateChange(date: Date) {
		if (!date) {
			return;
		}

		const dateInput = document.getElementById('date') as HTMLInputElement;
		dateInput.value = date.toISOString();
	}

	function onOfferChange(offer: string) {
		const offerInput = document.getElementById('offer') as HTMLInputElement;
		offerInput.value = offer;
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!isContactFormValid()) {
			toast.error(translations.messages.formIncomplete, {
				duration: 10000,
				important: true,
			});
			return;
		}

		const formDataAsUrlParams = getContactFormData();

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encodeFormData({ 'form-name': 'contact', ...formDataAsUrlParams }),
		})
			.then(() => {
				toast.success(translations.messages.success, {
					duration: 10000,
					closeButton: true,
					important: true,
				});
				resetContactForm();
			})
			.catch(() => {
				toast.error(translations.messages.error, {
					duration: 10000,
					closeButton: true,
					important: true,
				});
			})
			.finally(() => {
				window.dispatchEvent(new Event('resetForm'));
			});
	};

	return (
		<div className="space-y-4">
			{showHeader && (
				<div className="space-y-2">
					<PageTitle title={translations.title} />

					<div className={'flex flex-col items-center justify-center gap-4 py-8'}>
						<a
							href="https://calendly.com/jo-maendle/erstgespraech"
							rel="noreferrer"
							target="_blank"
						>
							<Button variant="outline" className={'text-blue-700'}>
								{translations.cta}
							</Button>
						</a>

						<div className={'flex items-center gap-2'}>
							<Separator />
							<span className={'text-sm text-gray-500'}>{translations.or}</span>
							<Separator />
						</div>

						<p className="text-center text-gray-500">{translations.description}</p>
					</div>
				</div>
			)}
			<Card>
				<CardHeader>
					<CardTitle>{translations.formTitle}</CardTitle>
					<p className="mt-4 text-sm text-gray-500">{translations.formDescription}</p>
				</CardHeader>
				<CardContent>
					<form
						id="contact-form"
						className="space-y-4"
						method="post"
						name="contact"
						onSubmit={handleSubmit}
					>
						<p className="text-xs text-gray-500">{translations.requiredFields}</p>
						<input type="hidden" name="form-name" value="contact" />
						<div className="grid gap-4">
							<Label htmlFor="name">{translations.formName} (*)</Label>
							<Input id="name" placeholder={translations.placeholder.name} required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">{translations.formEmail} (*)</Label>
							<Input
								id="email"
								placeholder={translations.placeholder.email}
								type="email"
								required
							/>
						</div>

						<div className="flex flex-col gap-2">
							<Label htmlFor="date-picker">{translations.formDate}</Label>
							<DatePicker
								id="date-picker"
								fullWidth={true}
								onChange={onDateChange}
								placeholder={translations.date}
							/>

							<input type="hidden" name="date" id="date" />
						</div>

						<div className="flex flex-col gap-2">
							<Label>{translations.offers.title}</Label>
							<Combobox offers={offers} translations={translations} onSelect={onOfferChange} />
							<input type="hidden" name="offer" id="offer" />
						</div>

						<div className="space-y-2">
							<Label htmlFor="message">{translations.formMessage}</Label>
							<Textarea
								className="min-h-[100px]"
								id="message"
								placeholder={translations.placeholder.message}
							/>
						</div>
						<Button type="submit">{translations.formSubmit}</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}

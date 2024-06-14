import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { toast } from 'sonner';
import PageTitle from '@/components/ui/PageTitle.tsx';
import { DatePicker } from '@/components/ui/datePicker.tsx';
import * as React from 'react';

export interface ContactFormTranslations {
	title: string;
	cta: string;
	description: string;
	or: string;
	formTitle: string;
	formName: string;
	formDate: string;
	formEmail: string;
	formMessage: string;
	formSubmit: string;
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
}

function Separator() {
	return <div className="h-[1px] w-8 bg-gray-300"></div>;
}

const encode = (data: unknown) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

export default function ContactForm({
	showHeader,
	translations,
}: {
	showHeader?: boolean;
	translations: ContactFormTranslations;
}) {
	function getFormData() {
		const message = document.getElementById('message') as HTMLTextAreaElement;
		const email = document.getElementById('email') as HTMLInputElement;
		const name = document.getElementById('name') as HTMLInputElement;
		const date = document.getElementById('date') as HTMLInputElement;

		return {
			name: name.value,
			email: email.value,
			message: message.value,
			date: date.value,
		};
	}

	function isFormValid() {
		const form = document.getElementById('contact-form') as HTMLFormElement;
		return form.checkValidity();
	}

	function resetForm() {
		const form = document.getElementById('contact-form') as HTMLFormElement;
		form.reset();
	}

	function onDateChange(date: Date) {
		console.log('date', date);

		if (!date) {
			return;
		}

		const dateInput = document.getElementById('date') as HTMLInputElement;
		dateInput.value = date.toISOString();
		console.log('dateInput', dateInput.value);
	}

	const handleSubmit = (event) => {
		console.log('submit', event);

		event.preventDefault();

		if (!isFormValid()) {
			toast.error(translations.messages.formIncomplete, {
				duration: 6000,
				important: true,
			});
			return;
		}

		const formDataAsUrlParams = getFormData();

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...formDataAsUrlParams }),
		})
			.then(() => {
				toast.success(translations.messages.success, {
					duration: 6000,
					closeButton: true,
					important: true,
				});
				resetForm();
			})
			.catch(() => {
				toast.error(translations.messages.error, {
					duration: 6000,
					closeButton: true,
					important: true,
				});
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
				</CardHeader>
				<CardContent>
					<form
						id="contact-form"
						className="space-y-4"
						method="post"
						name="contact"
						onSubmit={handleSubmit}
					>
						<input type="hidden" name="form-name" value="contact" />
						<div className="grid gap-4">
							<Label htmlFor="name">{translations.formName}</Label>
							<Input id="name" placeholder={translations.placeholder.name} required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">{translations.formEmail}</Label>
							<Input
								id="email"
								placeholder={translations.placeholder.email}
								type="email"
								required
							/>
						</div>

						<div className="flex flex-col gap-2">
							<Label htmlFor="date-picker">{translations.formDate}</Label>
							<DatePicker id="date-picker" fullWidth={true} onChange={onDateChange} />

							<input type="hidden" name="date" id="date" />
						</div>

						<Label>Dein gewünschtes Angebot</Label>
						<div className="grid grid-cols-2 gap-3">
							<div className="rounded-xl bg-gray-200 p-4 text-sm shadow">
								Bildbearbeitung - 1 Foto
							</div>
							<div className="rounded-xl bg-gray-200 p-4 text-sm shadow">
								Bildbearbeitung - 1 Foto
							</div>
							<div className="rounded-xl bg-gray-200 p-4 text-sm shadow">
								Bildbearbeitung - 1 Foto
							</div>
							<div className="rounded-xl bg-gray-200 p-4 text-sm shadow">
								Bildbearbeitung - 1 Foto
							</div>
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

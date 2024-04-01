import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { toast } from 'sonner';

function Separator() {
	return <div className="h-[1px] w-8 bg-gray-300"></div>;
}

const encode = (data: unknown) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

export default function ContactForm({ translatedCta }: { translatedCta: string }) {
	function getFormData() {
		const message = document.getElementById('message') as HTMLTextAreaElement;
		const email = document.getElementById('email') as HTMLInputElement;
		const name = document.getElementById('name') as HTMLInputElement;

		return {
			name: name.value,
			email: email.value,
			message: message.value
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

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!isFormValid()) {
			toast.error('Please fill out all required fields');
			return;
		}

		const formDataAsUrlParams = getFormData();

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...formDataAsUrlParams })
		})
			.then(() => {
				toast.success('Message sent successfully', {
					duration: 6000,
					closeButton: true
				});
				resetForm();
			})
			.catch(() => {
				toast.error('An error occurred while sending the message');
			});
	};

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<h1 className="text-center text-3xl font-bold">Get in touch</h1>
				<div className={'flex flex-col items-center justify-center gap-4 py-8'}>
					<a href="https://calendly.com/jo-maendle/erstgespraech" rel="noreferrer" target="_blank">
						<Button variant="link" size={'linkLg'}>
							{translatedCta}
						</Button>
					</a>

					<div className={'flex items-center gap-2'}>
						<Separator />
						<span className={'text-sm text-gray-500'}>or</span>
						<Separator />
					</div>

					<p className="text-gray-500">Fill out the form below to contact us.</p>
				</div>
			</div>
			<Card>
				<CardHeader>
					<CardTitle>Contact us</CardTitle>
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
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Enter your name" required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="Enter your email" type="email" required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
						</div>
						<Button type="submit">Send message</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}

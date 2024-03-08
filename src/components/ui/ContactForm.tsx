import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { type SyntheticEvent, useState } from 'react';

function Separator() {
	return <div className="h-[1px] w-8 bg-gray-300"></div>;
}

export default function ContactForm({ translatedCta }: { translatedCta: string }) {
	function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
		console.log(event.type, event.target);
	}

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
						className="space-y-4"
						data-netlify="true"
						method="POST"
						name="contact"
						onInput={handleSubmit}
					>
						<div className="grid gap-4">
							<Label htmlFor="first-name">Name</Label>
							<Input id="first-name" placeholder="Enter your name" required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="Enter your email" type="email" required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
						</div>
						<Button>Send message</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}

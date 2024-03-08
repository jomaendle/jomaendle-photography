import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<h2 className="text-3xl font-bold">Get in touch</h2>
				<p className="text-gray-500 dark:text-gray-400">
					Please fill out the form below to contact us.
				</p>
			</div>
			<div className="space-y-4">
				<div className="grid gap-4">
					<Label htmlFor="first-name">Name</Label>
					<Input id="first-name" placeholder="Enter your name" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" placeholder="Enter your email" type="email" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="message">Message</Label>
					<Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
				</div>
				<Button>Send message</Button>
			</div>
		</div>
	);
}

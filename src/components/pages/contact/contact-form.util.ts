export function getContactForm() {
	return document.getElementById('contact-form') as HTMLFormElement;
}

export const encodeFormData = (data: unknown) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

export function getContactFormData() {
	const message = document.getElementById('message') as HTMLTextAreaElement;
	const email = document.getElementById('email') as HTMLInputElement;
	const name = document.getElementById('name') as HTMLInputElement;
	const date = document.getElementById('date') as HTMLInputElement;
	const offer = document.getElementById('offer') as HTMLInputElement;

	return {
		name: name.value,
		email: email.value,
		message: message.value,
		date: date.value,
		offer: offer.value,
	};
}

export function isContactFormValid() {
	const form = getContactForm();

	if (!form) {
		console.error('Form not found');
		return false;
	}

	return form.checkValidity();
}

export function resetContactForm() {
	const form = getContactForm();

	if (!form) {
		console.error('Form not found');
		return;
	}

	form.reset();
}

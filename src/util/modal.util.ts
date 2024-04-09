export function toggleModal(modalId: string, show: boolean = true) {
	const modal = document.getElementById(modalId);

	if (show) {
		modal.classList.add('flex');
		modal.classList.remove('hidden');
		document.body.classList.add('overflow-hidden');
		animateModal(modal);
	} else {
		animateModal(modal, false);

		setTimeout(() => {
			modal.classList.add('hidden');
			modal.classList.remove('flex');
			document.body.classList.remove('overflow-hidden');
		}, 300);
	}
}

function animateModal(modal: HTMLElement, show: boolean = true) {
	modal.animate(
		{
			opacity: show ? [0, 1] : [1, 0]
		},
		{
			duration: 350,
			easing: 'ease-in-out',
			fill: 'forwards'
		}
	);
}

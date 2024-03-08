function registerToggleDetailsListener() {
	document.querySelectorAll('details').forEach((details) => {
		details.addEventListener('click', (e) => {
			e.preventDefault();

			if (details.hasAttribute('open')) {
				animateDetailsState(details, false);
				setTimeout(() => {
					details.removeAttribute('open');
				}, 300);
			} else {
				details.setAttribute('open', 'open');
			}
		});

		details.addEventListener('toggle', (e: ToggleEvent) => {
			e.preventDefault();
			animateDetailsState(details, (e.target as HTMLDetailsElement).open);
		});
	});
}

registerToggleDetailsListener();

function animateDetailsState(details: HTMLElement, open: boolean) {
	const content = details.querySelector('summary + *') as HTMLElement;
	if (content) {
		requestAnimationFrame(() => {
			content.style.overflow = 'hidden';
			content.style.willChange = 'height, opacity';
			content.style.transition = 'height 300ms, opacity 300ms';
			content.style.zIndex = '10';

			content.animate(
				{
					height: [`${open ? 0 : content.scrollHeight}px`, `${open ? content.scrollHeight : 0}px`],
					opacity: [open ? 0 : 1, open ? 1 : 0]
				},
				{ duration: 300, fill: 'forwards' }
			);
		});
	}
}

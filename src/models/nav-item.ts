import type { ui } from '../i18n/ui.ts';

export type NavItem = {
	labelKey: keyof (typeof ui)['de'];
	url: string;
};

export const LINKS: NavItem[] = [
	{
		labelKey: 'nav.work',
		url: '/work'
	},
	{
		url: '/services',
		labelKey: 'nav.services'
	},
	{
		labelKey: 'nav.about',
		url: '/about'
	},
	{
		labelKey: 'nav.contact',
		url: '/contact'
	}
];

export const MOBILE_LINKS: NavItem[] = [
	{
		url: '/',
		labelKey: 'nav.home'
	},
	...LINKS
];

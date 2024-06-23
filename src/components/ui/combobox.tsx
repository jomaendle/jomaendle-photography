'use client';

import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import * as React from 'react';

import type { ContactFormTranslations } from '@/components/pages/contact/contact-translations.ts';
import type { PhotoShootingOffersTranslated } from '@/components/pages/services/pricing-data.ts';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

export function Combobox({
	offers,
	translations,
	onSelect,
	initialValue,
}: {
	offers: PhotoShootingOffersTranslated[];
	translations: ContactFormTranslations;
	onSelect: (value: string) => void;
	initialValue?: string;
}) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	const updatedOffers = offers.map((offer) => ({
		value: offer.title,
		label: offer.title,
	}));

	useEffect(() => {
		if (initialValue) {
			setValue(initialValue);
		}
	}, [initialValue]);

	useEffect(() => {
		window.addEventListener('resetForm', () => {
			setValue('');
		});
	}, []);

	useEffect(() => {
		onSelect(value);
	}, [value]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="defaultBorderOutline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{value
						? updatedOffers.find((offer) => offer.value === value)?.label
						: translations.offers.selectPlaceholder}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={translations.offers.searchPlaceholder} className="h-9" />
					<CommandList>
						<CommandEmpty>{translations.offers.noResults}</CommandEmpty>
						<CommandGroup>
							{updatedOffers.map((offer) => (
								<CommandItem
									key={offer.value}
									value={offer.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? '' : currentValue);
										setOpen(false);
									}}
								>
									{offer.label}
									<CheckIcon
										className={cn(
											'ml-auto h-4 w-4',
											value === offer.value ? 'opacity-100' : 'opacity-0',
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

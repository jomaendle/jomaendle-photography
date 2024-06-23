import type { PhotoShootingOffersTranslated } from '@/components/pages/services/pricing-data.ts';
import PageTitle from '@/components/ui/PageTitle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card.tsx';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx';
import type { Language } from '@/i18n/utils.ts';
import { CameraIcon, ImageIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface PricingOptionsTranslations {
	shooting: string;
	editing: string;
}

export default function PricingOptions({
	title,
	subtitle,
	shootings,
	translations,
	lang,
}: {
	title: string;
	subtitle: string;
	translations: PricingOptionsTranslations;
	shootings: PhotoShootingOffersTranslated[];
	lang: Language;
}) {
	const [selectedShooting, setSelectedShooting] = useState<'shooting' | 'editing'>('shooting');
	const [shootingOffers, setShootingOffers] = useState<PhotoShootingOffersTranslated[]>(
		shootings.filter((shooting) => shooting.type === selectedShooting),
	);

	useEffect(() => {
		setShootingOffers(shootings.filter((shooting) => shooting.type === selectedShooting));
	}, [selectedShooting]);

	return (
		<div className="grid w-full items-center gap-6 md:mx-auto md:max-w-5xl lg:gap-12">
			<PageTitle title={title} subtitle={subtitle} />

			<div className={'flex justify-center gap-4'}>
				<ToggleGroup type="single" value={selectedShooting}>
					<ToggleGroupItem
						value="shooting"
						className={'flex items-center gap-2'}
						onClick={() => setSelectedShooting('shooting')}
					>
						<CameraIcon size={18} className={'text-gray-500'} />
						{translations.shooting}
					</ToggleGroupItem>
					<ToggleGroupItem
						value="editing"
						className={'flex items-center gap-2'}
						onClick={() => setSelectedShooting('editing')}
					>
						<ImageIcon size={18} className={'text-gray-500'} />
						{translations.editing}
					</ToggleGroupItem>
				</ToggleGroup>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{shootingOffers.map((shooting, index) => (
					<Card
						className={`flex cursor-pointer flex-col gap-4 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg`}
						key={index}
					>
						<CardHeader className="bg-gray-50 p-6">
							<h3 className="text-xl font-bold">{shooting.title}</h3>
							<p className="mt-1 text-sm text-gray-500">{shooting.targetGroup}</p>
						</CardHeader>
						<CardContent className="grid flex-1 gap-4 bg-white px-6 py-4">
							<h2 className="text-3xl font-semibold">{shooting.price}</h2>

							<ul>
								{shooting.includes.map((include, index) => (
									<li key={index} className="flex gap-1 text-sm text-gray-500">
										<span>&bull;</span> <span>{include}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<a href={`/${lang}/contact?offer=${shooting.title}`} className="w-full">
								<Button variant="outline" size="lg" className={'w-full'}>
									{shooting.cta}
								</Button>
							</a>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

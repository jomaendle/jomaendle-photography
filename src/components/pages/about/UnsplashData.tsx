import { useEffect, useState } from 'react';
import { type UnsplashData } from '@/components/pages/about/unsplash-data.ts';
import { DownloadIcon, EyeIcon, ImageIcon, UsersIcon, ExternalLinkIcon } from 'lucide-react';
import { $unsplashStats, readUnsplashStatsFromLocalStorage } from '@/state/unsplash.ts';
import { Button } from '@/components/ui/button.tsx';

const formatter = new Intl.NumberFormat('de', { notation: 'compact' });

interface Props {
	translations: UnsplashViewTranslations;
}

type UnsplashViewTranslations = {
	[k in keyof UnsplashData]: string;
} & {
	title: string;
	description: string;
	cta: string;
};

export function UnsplashData({ translations }: Props) {
	const [unsplashData, setUnsplashData] = useState<UnsplashData>({
		views: 0,
		downloads: 0,
		totalPhotos: 0,
		followers: 0,
	});

	useEffect(() => {
		const statsFromStorage = readUnsplashStatsFromLocalStorage();

		if (statsFromStorage?.stats && Object.keys(statsFromStorage.stats).length > 0) {
			setUnsplashData(statsFromStorage.stats);
			return;
		}

		fetchUnsplashData(window.origin).then((res) => {
			$unsplashStats.set(res);
			setUnsplashData(res);
		});
	}, []);

	async function fetchUnsplashData(baseUrl: string): Promise<UnsplashData> {
		try {
			return await fetch(`${baseUrl}/api/unsplash`).then((res) => res.json());
		} catch (error) {
			console.error('Failed loading Unsplash data:', error);

			return {
				views: 0,
				downloads: 0,
				totalPhotos: 0,
				followers: 0,
			};
		}
	}

	return (
		<>
			{unsplashData?.views > 0 && (
				<section className="flex flex-col gap-6 pt-12 text-center md:gap-10">
					<header className="flex w-full flex-col items-center gap-2">
						<h3 className="mt-12 text-2xl font-bold">{translations.title}</h3>
						<p className="max-w-lg text-gray-500">{translations.description}</p>
					</header>
					<div className="flex grid-cols-2 flex-col gap-4 sm:grid md:gap-6 lg:grid-cols-4">
						{Object.keys(unsplashData).map((key) => (
							<div key={key} className="flex flex-col gap-2 rounded-xl bg-gray-100 p-6">
								<header className="flex items-center gap-2 text-sm">
									{key === 'downloads' && (
										<DownloadIcon size="16" className="shrink-0 text-gray-500" />
									)}
									{key === 'views' && <EyeIcon size="16" className="shrink-0 text-gray-500" />}
									{key === 'followers' && (
										<UsersIcon size="16" className="shrink-0 text-gray-500" />
									)}
									{key === 'totalPhotos' && (
										<ImageIcon size="16" className="shrink-0 text-gray-500" />
									)}

									<span className="overflow-hidden text-ellipsis whitespace-nowrap">
										{translations[key]}
									</span>
								</header>
								<span className="flex items-start text-xl font-bold sm:text-2xl">
									{formatter.format(Number(unsplashData[key] ?? 0))}
								</span>
							</div>
						))}
					</div>

					<div>
						<a href="https://unsplash.com/@leonardo_64" rel="noreferrer" target="_blank">
							<Button variant="link" size="linkLg" className="flex items-center gap-2">
								{translations.cta}
								<ExternalLinkIcon size="12" className="shrink-0" />
							</Button>
						</a>
					</div>
				</section>
			)}
		</>
	);
}

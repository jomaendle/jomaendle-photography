import { getTranslationKeyForUnsplashData } from '@/components/pages/about/unsplash-data.ts';
import { useEffect, useState } from 'react';
import { type UnsplashData } from '@/components/pages/about/unsplash-data.ts';
import { DownloadIcon, EyeIcon, ImageIcon, UsersIcon } from 'lucide-react';
import { $unsplashStats } from '@/state/unsplash.ts';

const formatter = new Intl.NumberFormat('en', { notation: 'compact' });

export function UnsplashData() {
	const [unsplashData, setUnsplashData] = useState<UnsplashData>({
		views: 0,
		downloads: 0,
		totalPhotos: 0,
		followers: 0,
	});

	useEffect(() => {
		console.log('fetching Unsplash data');
		const statsFromStorage = JSON.parse(window.localStorage.getItem('unsplashStats') ?? '{}');

		console.log('statsFromStorage:', statsFromStorage);
		if (Object.keys(statsFromStorage).length > 0) {
			setUnsplashData(statsFromStorage);
			console.log('Unsplash data loaded from storage:', statsFromStorage);
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
				<section className="flex flex-col gap-6 pt-6">
					<h3 className="mt-12 text-2xl font-bold">title</h3>
					<div className="grid grid-cols-2 flex-col gap-4 md:grid-cols-4">
						{Object.keys(unsplashData).map((key) => (
							<div key={key} className="flex flex-col gap-2 rounded-xl bg-gray-100 p-6">
								<header className="flex items-center gap-2 text-sm">
									{key === 'downloads' && <DownloadIcon size="16" className="shrink-0" />}
									{key === 'views' && <EyeIcon size="16" className="shrink-0" />}
									{key === 'followers' && <UsersIcon size="16" className="shrink-0" />}
									{key === 'totalPhotos' && <ImageIcon size="16" className="shrink-0" />}

									<span className="overflow-hidden text-ellipsis whitespace-nowrap">{key}</span>
								</header>
								<span className="text-xl font-bold sm:text-2xl">
									{formatter.format(Number(unsplashData[key] ?? 0))}
								</span>
							</div>
						))}
					</div>
				</section>
			)}
		</>
	);
}

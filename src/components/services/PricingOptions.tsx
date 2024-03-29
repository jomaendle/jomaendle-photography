import { Button } from '@/components/ui/button';
import { type PhotoShootingOffersTranslated } from '@/components/services/pricing-data.ts';

export default function PricingOptions({
	title,
	subtitle,
	shootings
}: {
	title: string;
	subtitle: string;
	shootings: PhotoShootingOffersTranslated[];
}) {
	return (
		<div className="grid w-full items-center gap-6 md:mx-auto md:max-w-5xl lg:gap-12">
			<div className="text-center">
				<h1 className="text-3xl font-bold tracking-tight">{title}</h1>
				<p className="mt-2 max-w-2xl text-gray-500 sm:text-lg md:mx-auto lg:text-gray-400">
					{subtitle}
				</p>
			</div>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{shootings.map((shooting, index) => (
					<div
						className={`card-layout flex cursor-pointer flex-col gap-4 overflow-hidden bg-gray-50 sm:gap-8`}
						key={index}
					>
						<div className="bg-gray-50 p-6">
							<h3 className="text-xl font-bold">{shooting.title}</h3>
							<p className="mt-1 text-sm text-gray-500">For {shooting.targetGroup}</p>
						</div>
						<div className="grid flex-1 gap-4 bg-white p-6">
							<h2 className="text-3xl font-semibold">
								{shooting.price}
								{shooting.isBusiness && <p className="inline text-base ">/month</p>}
							</h2>

							<ul>
								{shooting.includes.map((include, index) => (
									<li key={index} className="flex gap-1 text-sm text-gray-500">
										<span>&bull;</span> <span>{include}</span>
									</li>
								))}
							</ul>

							<Button size="sm" variant="outline">
								{shooting.cta}
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

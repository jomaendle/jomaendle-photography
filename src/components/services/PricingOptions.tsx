import { Button } from '@/components/ui/button';

interface PhotoShootingOffers {
	title: string;
	duration: string;
	price: string;
	description: string;
	includes: string[];
	cta: string;
	targetGroup: string;
	isBusiness?: boolean;
}

const shootings: PhotoShootingOffers[] = [
	{
		duration: '1h',
		price: '149€',
		title: 'Portrait - Basic',
		description:
			'A portrait shooting is perfect for you if you want to have some professional pictures of yourself. Whether you need them for your CV, your social media profiles or just for yourself, I will make sure you get the best pictures possible.',
		includes: [
			'1h outdoor shooting',
			'1 person',
			'7 edited pictures',
			'Outdoor location nearby Bremen'
		],
		cta: 'Start with Basic',
		targetGroup: 'individuals'
	},
	{
		duration: '2h',
		price: '249€',
		title: 'Portrait - Premium',
		description:
			'A couple shooting is perfect if you and your partner want to have a beautiful memory of your relationship. Whether you are together for a few months or many years, I will make sure you get the best pictures possible.',
		includes: [
			'2h outdoor shooting',
			'Up to 2 people',
			'15 edited pictures',
			'Outdoor location nearby Bremen, Hamburg or Oldenburg'
		],
		cta: 'Start with Premium',
		targetGroup: 'couples, families or professionals'
	},
	{
		duration: '30min',
		price: '399€',
		title: 'Business',
		description:
			'A portrait shooting is perfect for you if you want to have some professional pictures of yourself. Whether you need them for your CV, your social media profiles or just for yourself, I will make sure you get the best pictures possible.',
		includes: [
			'Multiple shootings per month',
			'Up to 10 people',
			'Up to 30 edited pictures per month',
			'Location of your choice'
		],
		cta: 'Start with Business',
		targetGroup: 'social media personalities & businesses',
		isBusiness: true
	}
];

export default function PricingOptions() {
	return (
		<div className="grid w-full items-center gap-6 md:mx-auto md:max-w-5xl lg:gap-12">
			<div className="text-center">
				<h1 className="text-3xl font-bold tracking-tight">Photography Services</h1>
				<p className="mt-2 max-w-2xl text-gray-500 sm:text-lg md:mx-auto lg:text-gray-400">
					Choose the perfect option for your needs.
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

import type { ProcessDescriptionTranslated } from '@/components/services/process-data.ts';

export default function ProcessDescription({
	shootingSteps,
	title,
	subtitle
}: {
	title: string;
	subtitle: string;
	shootingSteps: ProcessDescriptionTranslated[];
}) {
	return (
		<div className="mx-auto grid w-full max-w-5xl justify-center gap-6 lg:gap-12">
			<div>
				<h2 className="text-center text-3xl font-bold">{title}</h2>
				<p className="mt-2 max-w-2xl text-center text-gray-500 sm:text-lg md:mx-auto lg:text-gray-400">
					{subtitle}
				</p>
			</div>

			<div className="flex max-w-xs flex-col gap-12 md:max-w-none md:flex-row ">
				{shootingSteps.map((step, index) => (
					<div className="flex flex-col items-center" key={index}>
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
							{index + 1}
						</div>
						<div className="mt-4 text-center">
							<h3 className="text-xl font-bold">{step.title}</h3>
							<p className="mt-2 max-w-md text-pretty text-gray-500">{step.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

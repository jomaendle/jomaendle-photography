import type { ProcessDescriptionTranslated } from '@/components/pages/services/process-data.ts';

export default function ProcessDescription({
	shootingSteps,
	title,
	subtitle,
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

			<div className="flex flex-col items-center gap-10 sm:items-start">
				{shootingSteps.map((step, index) => (
					<div
						className="flex max-w-[85%] flex-col items-center gap-4 text-center sm:max-w-none sm:flex-row sm:items-start sm:text-start"
						key={index}
					>
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground">
							{index + 1}
						</div>
						<div className="flex-1">
							<h3 className="text-lg font-medium">{step.title}</h3>
							<p className="mt-2 text-muted-foreground">{step.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

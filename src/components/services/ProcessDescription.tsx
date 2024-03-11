import { motion } from 'framer-motion';

const shootingSteps = [
	{
		title: 'Get in touch',
		description:
			'Contact me and we will discuss your needs and ideas and agree on a date and location for the shoot.'
	},
	{
		title: 'The shoot',
		description:
			'We will meet at the agreed location and spend a between 1 and 2 hours capturing the images we need.'
	},
	{
		title: 'Delivery',
		description:
			'I will deliver the final images to you within 7 days in the format and resolution we agreed on.'
	}
];

export default function ProcessDescription() {
	return (
		<div className="mx-auto grid w-full max-w-5xl justify-center gap-6 lg:gap-12">
			<div>
				<h2 className="text-center text-3xl font-bold">Process</h2>
				<p className="mt-2 max-w-2xl text-center text-gray-500 sm:text-lg md:mx-auto lg:text-gray-400">
					How the shooting works.
				</p>
			</div>

			<div className="flex max-w-xs flex-col gap-12 md:max-w-none md:flex-row ">
				{shootingSteps.map((step, index) => (
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{
							margin: '-200px',
							once: true
						}}
						key={index}
						transition={{
							duration: 1
						}}
					>
						<div className="flex flex-col items-center">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
								{index + 1}
							</div>
							<div className="mt-4 text-center">
								<h3 className="text-xl font-bold">{step.title}</h3>
								<p className="mt-2 max-w-md text-pretty text-gray-500">{step.description}</p>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold tracking-tight">{title}</h1>

			{/* Optional subtitle */}
			{subtitle && (
				<p className="mt-2 max-w-2xl text-gray-500 sm:text-lg md:mx-auto lg:text-gray-400">
					{subtitle}
				</p>
			)}
		</div>
	);
}

export function SecondaryPageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
	return (
		<div className="text-center">
			<h1 className="text-2xl font-bold tracking-tight">{title}</h1>

			{/* Optional subtitle */}
			{subtitle && (
				<p className="mt-2 max-w-2xl text-gray-500 sm:text-lg md:mx-auto lg:text-gray-400">
					{subtitle}
				</p>
			)}
		</div>
	);
}

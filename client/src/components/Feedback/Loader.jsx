export default function Loader() {
	return (
		<div className="flex h-screen flex-col items-center justify-center opacity-50">
			<span className="loading loading-dots loading-lg"></span>
			<div className="mt-4 animate-pulse text-center text-2xl font-semibold text-black">
				Please Wait!! Data is fetching...
			</div>
		</div>
	);
}

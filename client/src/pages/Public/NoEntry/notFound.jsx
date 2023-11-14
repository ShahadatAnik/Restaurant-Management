export default function NotFound() {
	return (
		<section className="flex items-center p-16">
			<div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
				<div className="max-w-md text-center">
					<h2 className="mb-8 text-9xl font-extrabold text-red-600">
						<span className="sr-only">Error</span>404
					</h2>
					<p className="text-2xl font-semibold md:text-3xl">
						Sorry, we couldn't find this page.
					</p>
					<p className="mb-8 mt-4">
						But don't worry, you can find plenty of other things on
						our homepage.
					</p>
					<a
						href="/"
						className="transform rounded-md bg-red-600 px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in-out hover:bg-red-700 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50"
					>
						Go back home
					</a>
				</div>
			</div>
		</section>
	);
}

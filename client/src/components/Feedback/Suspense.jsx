import { Suspense } from "react";

export default function Index({ children }) {
	return (
		<Suspense
			fallback={<span className="loading loading-dots loading-lg z-50" />}
		>
			{children}
		</Suspense>
	);
}

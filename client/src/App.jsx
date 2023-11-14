import { Suspense } from "@components/Feedback";
import MainLayout from "@layouts/Main";
import { PROTECTED_ROUTES, PUBLIC_ROUTES, ProtectedRoutes } from "@routes";
import { Route } from "react-router-dom";

function App() {
	return (
		<MainLayout>
			<Route element={<ProtectedRoutes />}>
				{PROTECTED_ROUTES?.map((route) => (
					<Route
						key={route?.path}
						path={route?.path}
						element={
							<Suspense>
								<route.element />
							</Suspense>
						}
					/>
				))}
			</Route>
			{PUBLIC_ROUTES?.map((route) => (
				<Route
					key={route?.path}
					path={route?.path}
					element={
						<Suspense>
							<route.element />
						</Suspense>
					}
				/>
			))}
		</MainLayout>
	);
}

export default App;

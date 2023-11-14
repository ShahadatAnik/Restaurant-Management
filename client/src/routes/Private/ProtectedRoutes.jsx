import { useAuth } from "@context/auth";
import { PROTECTED_ROUTES } from "@routes";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
	const { signed, loading, user } = useAuth();
	const location = useLocation();

	if (loading)
		return <span className="loading loading-dots loading-lg z-50" />;

	if (!signed) return <Navigate to="/login" replace={true} />;

	const haveAccess = PROTECTED_ROUTES?.find(
		(route) => route?.path === location?.pathname
	)?.assigned?.includes(user?.department);

	const adminAccess =
		["update"].some((path) => location?.pathname?.includes(path)) &&
		user?.department === "admin";

	const specialAccess = ["details"].some((path) =>
		location?.pathname?.includes(path)
	);

	return haveAccess || adminAccess || specialAccess ? (
		<Outlet />
	) : (
		<Navigate to="/no-access" replace={true} />
	);
}

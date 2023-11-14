import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { Aside, Header, MobileMenu, Sidebar } from "./utils";

const Drawer = ({ children }) => {
	const location = useLocation();
	const isHidden = location?.pathname.includes("/login", "/") ? true : false;
	const id = "navbar-drawer";

	return (
		<div className="drawer md:drawer-open">
			<input id={id} type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col overflow-x-hidden">
				{!isHidden && <Header {...{ id }} />}
				<main className="min-h-screen flex-1 overflow-x-hidden">
					{children}
				</main>
			</div>
			{!isHidden && <Aside {...{ id }} />}
		</div>
	);
};

const Index = ({ children }) => {
	const location = useLocation();
	const isHidden = location?.pathname.includes("/login", "/") ? true : false;

	return (
		<nav className={clsx("md:flex", !isHidden && "relative min-h-screen")}>
			<MobileMenu {...{ isHidden }} />
			<aside
				id="sidebar"
				className={clsx(
					"absolute inset-y-0 left-0 max-h-screen transform overflow-y-scroll bg-primary pb-4 text-primary-content transition duration-200 ease-in-out md:relative",
					isHidden && "hidden"
				)}
			>
				<Sidebar />
			</aside>
			<main className="max-h-screen flex-1 overflow-x-hidden">
				{children}
			</main>
		</nav>
	);
};

export default Drawer;

import { useAuth } from "@context/auth";
import { LogoutIcon, MenuDown, MenuOpenClose } from "@icons";
import { PROTECTED_ROUTES } from "@routes";
import clsx from "clsx";
import { Fragment, memo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.css";

// Utility function to capitalize the first letter of each word and remove underscores
const capitalize = (text) => {
	return text.replace(/_/g, " ").replace(/\w\S*/g, (w) => {
		return w.replace(/^\w/, (c) => c.toUpperCase());
	});
};

const SectionButton = ({ isOpened, setIsOpened, children }) => {
	const handleClick = () => setIsOpened(!isOpened);
	return (
		<button
			type="button"
			className={clsx({
				"btn btn-ghost btn-sm w-full justify-between text-primary-content": true,
				"btn-active": isOpened,
				"rounded-md border-2 border-primary-content": !isOpened,
			})}
			onClick={handleClick}
		>
			<div className="flex items-center gap-x-2 capitalize">
				{children}
			</div>
			<MenuDown
				className={clsx({
					"h-5 w-5 transform duration-500 ease-in-out": true,
					"rotate-180": isOpened,
				})}
			/>
		</button>
	);
};

const Menu = ({ children, items }) => {
	const [isOpened, setIsOpened] = useState(true);
	const cls = `block border-l-[3.5px] border-secondary px-2 py-[5px] duration-500`;
	const getClassName = (isActive) =>
		isActive
			? `thick-border-active rounded-r-md text-secondary-content ${cls}`
			: `thick-border hover:text-secondary-content ${cls}`;
	return (
		<Fragment>
			<SectionButton {...{ isOpened, setIsOpened }}>
				{children}
			</SectionButton>
			{isOpened && (
				<ul className="text-md px-2 font-mono text-primary-content md:px-4">
					{items.map((item, idx) => (
						<li key={idx}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									getClassName(isActive)
								}
							>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			)}
		</Fragment>
	);
};

const BrandLink = ({ ...props }) => {
	const { user } = useAuth();
	const go = PROTECTED_ROUTES?.filter((route) =>
		route?.assigned?.includes(user?.department)
	);

	return (
		<NavLink to={go[0]?.path} {...props}>
			FZL
		</NavLink>
	);
};

const LogoutButton = memo(() => {
	const history = useLocation();
	const { Logout, user } = useAuth();

	const handleLogout = () => {
		Logout();
		history.push("/login");
	};

	return (
		<li>
			<NavLink
				to="/login"
				className="flex items-center gap-x-2 rounded-lg bg-error/80 p-2 text-error-content duration-150 hover:bg-error/50"
				onClick={handleLogout}
			>
				<LogoutIcon className="h-5 w-5" />
				<span className="text-sm capitalize text-error-content">
					{user?.department}
				</span>
			</NavLink>
		</li>
	);
});

const Sidebar = () => {
	const { user } = useAuth();

	function filterRoutes(type) {
		return PROTECTED_ROUTES.filter(
			(item) =>
				item.type === type &&
				!item?.hidden &&
				item?.assigned?.includes(user?.department)
		);
	}

	const pages = {
		report: filterRoutes("report"),
		order: filterRoutes("order"),
		issue: filterRoutes("issue"),
		purchase: filterRoutes("purchase"),
		material: filterRoutes("material"),
		admin: filterRoutes("admin"),
	};

	return (
		<div className="min-h-full bg-primary">
			<BrandLink className="flex items-center justify-center py-1 font-mono text-2xl font-bold text-primary-content md:text-4xl" />
			<hr className="my-2 border-primary-content border-opacity-90" />
			<div className="flex flex-col overflow-auto px-4">
				<ul className="my-2 flex-1 space-y-6 text-sm font-medium">
					{Object.entries(pages).map(
						([type, items]) =>
							items.length > 0 && (
								<li key={type}>
									<Menu items={items}>
										{capitalize(type)}
									</Menu>
								</li>
							)
					)}
					<LogoutButton />
				</ul>
			</div>
		</div>
	);
};

const MobileMenu = ({ isHidden = false }) => {
	return (
		<Fragment>
			<input type="checkbox" id="menu-open" className="hidden" />
			<header
				id="mobile-menu-bar"
				className={clsx(
					"flex items-center justify-between bg-primary px-2 text-primary-content md:hidden",
					isHidden && "hidden"
				)}
			>
				<BrandLink className="block truncate whitespace-nowrap font-mono text-2xl font-bold text-primary-content" />
				<div className="flex items-center">
					<label
						htmlFor="menu-open"
						id="mobile-menu-button"
						className="btn btn-circle btn-ghost cursor-pointer"
					>
						<MenuOpenClose
							id1="menu-open-icon"
							id2="menu-close-icon"
							className="h-6 w-6 transition duration-700 ease-in-out"
						/>
					</label>
				</div>
			</header>
		</Fragment>
	);
};

const MenuIcon = ({ id }) => {
	return (
		<div className="flex-none md:hidden">
			<label htmlFor={id} className="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="inline-block h-6 w-6 stroke-current"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</label>
		</div>
	);
};

const Aside = ({ id }) => {
	return (
		<aside className="drawer-side">
			<label htmlFor={id} className="drawer-overlay" />
			<Sidebar />
		</aside>
	);
};

const Header = ({ id }) => {
	return (
		<header className="flex items-center justify-between bg-primary px-2 text-primary-content md:hidden">
			<BrandLink className="block truncate whitespace-nowrap font-mono text-2xl font-bold text-primary-content" />
			<div className="flex items-center">
				<MenuIcon id={id} />
			</div>
		</header>
	);
};

export { Aside, Header, MobileMenu, Sidebar };

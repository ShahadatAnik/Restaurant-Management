import {
	ManagerUser,
	PPCUser,
	ProcurementUser,
	SparePartsUser,
	Store,
	UserShield,
	Viewer,
} from "@icons";
import clsx from "clsx";

// "admin", "viewer", "manager", "store", "ppc", "procurement";
const iconAndName = {
	admin: {
		icon: <UserShield className="w-5" />,
		name: "Admin",
		style: "bg-red-200 text-red-800",
	},
	viewer: {
		icon: <Viewer className="w-5" />,
		name: "Viewer",
		style: "bg-purple-200 text-purple-800",
	},
	store: {
		icon: <Store className="w-5" />,
		name: "Store",
		style: "bg-yellow-200 text-yellow-800",
	},
	ppc: {
		icon: <PPCUser className="w-5" />,
		name: "PPC",
		style: "bg-blue-200 text-blue-800",
	},
	procurement: {
		icon: <ProcurementUser className="w-5" />,
		name: "Procurement",
		style: "bg-green-200 text-green-800",
	},
	manager: {
		icon: <ManagerUser className="w-5" />,
		name: "Manager",
		style: "bg-pink-200 text-pink-800",
	},
	"spare-parts": {
		icon: <SparePartsUser className="w-5" />,
		name: "Spare Parts",
		style: "bg-indigo-200 text-indigo-800",
	},
};
const DepartmentShow = ({ department }) => {
	return (
		<span
			className={clsx(
				"flex w-fit items-center gap-2 rounded-md bg-opacity-50 p-1.5 text-xs font-medium uppercase tracking-wider",
				iconAndName[department]?.style
			)}
		>
			{iconAndName[department]?.icon} {iconAndName[department]?.name}
		</span>
	);
};

export { DepartmentShow };

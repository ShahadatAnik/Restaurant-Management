import { lazy } from "react";

// Pages
// Admin


// assign roles: "admin", "viewer", "manager", "store", "ppc", "procurement", "spare-parts"
const PROTECTED_ROUTES = [
	{
		id: 1,
		name: "Stock",
		path: "/item/stock",
		element: Stock,
		assigned: ["admin", "viewer", "manager", "store", "ppc", "procurement"], // edit: admin, store
		type: "item",
	},
];

export { PROTECTED_ROUTES };


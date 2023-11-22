import { lazy } from "react";

// Pages
const Stock = lazy(() => import("@pages/Private/Item/Stock"));
const Purchase = lazy(() => import("@pages/Private/Item/Purchase"));

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
	{
		id: 2,
		name: "Purchase",
		path: "/item/purchase",
		element: Purchase,
		assigned: ["admin", "viewer", "manager", "store", "ppc", "procurement"], // edit: admin, store
		type: "item",
	},
	{
		id: 21,
		name: "Purchase",
		path: "/item/purchase/:itemId",
		element: Purchase,
		assigned: ["admin", "viewer", "manager", "store", "ppc", "procurement"], // edit: admin, store
		type: "item",
		hidden: true,
	},
];

export { PROTECTED_ROUTES };

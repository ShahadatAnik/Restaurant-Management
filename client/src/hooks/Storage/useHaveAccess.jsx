import { useAuth } from "@context/auth";

function useHaveAccess() {
	const { user } = useAuth();
	const canAccess = (departments) =>
		departments.some((department) =>
			user?.department?.includes(department)
		);

	// admin
	const USER_EDIT_ACCESS = canAccess(["admin"]);
	// material
	const STOCK_EDIT_ACCESS = canAccess(["admin", "procurement"]);
	const CATEGORY_EDIT_ACCESS = canAccess(["admin"]);
	const TYPE_EDIT_ACCESS = canAccess(["admin"]);
	// purchase
	const PURCHASE_EDIT_ACCESS = canAccess(["admin", "procurement"]);
	const RECEIVED_EDIT_ACCESS = canAccess(["admin", "store", "spare-parts"]);
	const VENDOR_EDIT_ACCESS = canAccess(["admin", "procurement"]);
	// issue
	const ISSUE_EDIT_ACCESS = canAccess(["admin"]);
	const MAINTENANCE_EDIT_ACCESS = canAccess(["admin", "store"]);
	const SPARE_PARTS_ADD_ACCESS = canAccess(["admin", "spare-parts"]);
	const SPARE_PARTS_EDIT_ACCESS = canAccess(["admin"]);
	const WASTAGE_EDIT_ACCESS = canAccess(["admin"]);
	// order details
	const ORDER_DETAILS_EDIT_ACCESS = canAccess(["admin"]);
	const ORDER_DETAILS_ISSUE_EDIT_ACCESS = canAccess(["admin", "store"]);
	// order entry
	const BUYER_EDIT_ACCESS = canAccess(["admin", "ppc"]);
	const MARKETING_EDIT_ACCESS = canAccess(["admin", "ppc"]);

	return {
		USER_EDIT_ACCESS,
		STOCK_EDIT_ACCESS,
		CATEGORY_EDIT_ACCESS,
		TYPE_EDIT_ACCESS,
		PURCHASE_EDIT_ACCESS,
		RECEIVED_EDIT_ACCESS,
		VENDOR_EDIT_ACCESS,
		ISSUE_EDIT_ACCESS,
		WASTAGE_EDIT_ACCESS,
		ORDER_DETAILS_ISSUE_EDIT_ACCESS,
		BUYER_EDIT_ACCESS,
		MARKETING_EDIT_ACCESS,
		MAINTENANCE_EDIT_ACCESS,
		ORDER_DETAILS_EDIT_ACCESS,
		SPARE_PARTS_EDIT_ACCESS,
		SPARE_PARTS_ADD_ACCESS,
	};
}

export { useHaveAccess };

import { compareItems, rankItem } from "@tanstack/match-sorter-utils";
import { sortingFns } from "@tanstack/react-table";
import Cookies from "js-cookie";

const FuzzyFilter = (row, columnId, value, addMeta) => {
	const itemRank = rankItem(row.getValue(columnId), String(value));
	addMeta({ itemRank });
	return itemRank.passed;
};

const fuzzySort = (rowA, rowB, columnId) => {
	let dir = 0;

	// Only sort by rank if the column has ranking information
	if (rowA.columnFiltersMeta[columnId]) {
		dir = compareItems(
			rowA.columnFiltersMeta[columnId].itemRank,
			rowB.columnFiltersMeta[columnId].itemRank
		);
	}

	// Provide an alphanumeric fallback for when the item ranks are equal
	return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

const isWithinRange = (row) => {
	const start = new Date(Cookies.get("startDate"));
	const end = new Date(Cookies.get("endDate"));
	const date = new Date(row.getValue("created_at"));

	//If one filter defined and date is null filter it
	if ((start || end) && !date) return false;
	if (start && !end) {
		return date.getTime() >= start.getTime();
	} else if (!start && end) {
		return date.getTime() <= end.getTime();
	} else if (start && end) {
		return (
			date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
		);
	} else return true;
};

export default FuzzyFilter;
export { fuzzySort, isWithinRange };

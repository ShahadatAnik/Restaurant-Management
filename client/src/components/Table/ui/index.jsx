import { ArrowUpDown, Up } from "@icons";
import ExportCSV from "./CSV";
import DebouncedInput from "./DebouncedInput";
import DropdownMenu from "./DropdownMenu";
import {
	FilterColumn,
	FilterColumnValue,
	FuzzyFilter,
	fuzzySort,
	isWithinRange,
} from "./Filter";
import NoDataFound from "./NoDataFound";
import Title, { AddButton, TitleOnly } from "./Title";

const SortingIndicator = ({ type, canSort }) => {
	if (!canSort) {
		return null;
	}

	const cls =
		"h-4 w-4 text-secondary group-hover:opacity-100 transition-transform";

	switch (type) {
		case "asc":
			return (
				<Up
					className={`${cls} rotate-180 transform opacity-100 duration-500`}
				/>
			);
		case "desc":
			return (
				<Up className={`${cls} transform opacity-100 duration-500`} />
			);
		default:
			return (
				<ArrowUpDown
					className={`${cls} transform opacity-0 duration-500`}
				/>
			);
	}
};

const PaginationButton = ({ onClick, disabled, icon }) => {
	return (
		<button
			type="button"
			className={`btn btn-circle btn-primary btn-sm rounded-full`}
			onClick={onClick}
			disabled={disabled}
		>
			{icon}
		</button>
	);
};

export {
	AddButton,
	DebouncedInput,
	DropdownMenu,
	ExportCSV,
	FilterColumn,
	FilterColumnValue,
	FuzzyFilter,
	NoDataFound,
	PaginationButton,
	SortingIndicator,
	Title,
	TitleOnly,
	fuzzySort,
	isWithinRange,
};

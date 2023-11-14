import {
	// Import React Table functions
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { set } from "date-fns";
import { Fragment, useState } from "react";
import Header from "./Header";
import Pagination from "./Pagination";
import Row from "./Row";
import TableHead from "./TableHead";
import { FuzzyFilter, NoDataFound, TitleOnly, isWithinRange } from "./ui";

function Table({
	title = "",
	subtitle = "",
	handelAdd = () => {},
	accessor,
	data,
	columns,
	searchData = "",
	extraClass = "",
	showSearchBox = true,
	showPagination = true,
	showColumns = true,
	showTitleOnly = false,
	pdfButton,
	extraButton,
	children,
	select,
	date,
	setDate,
	showSingleDateRange = false,
	fromDate,
	toDate,
	setFromDate,
	setToDate,
	multiDateRange = false,
}) {
	// Define state variables
	const [columnFilters, setColumnFilters] = useState([]);
	const [globalFilter, setGlobalFilter] = useState(searchData);
	const [columnVisibility, setColumnVisibility] = useState(
		columns.reduce((acc, column) => {
			acc[column.accessorKey] = !column.hidden;
			return acc;
		}, {})
	);
	const [rowSelection, setRowSelection] = useState({});

	// Initialize React Table
	const table = useReactTable({
		data,
		columns,
		filterFns: {
			fuzzy: FuzzyFilter,
			isWithinRange,
		},
		state: {
			columnFilters,
			globalFilter,
			columnVisibility,
			rowSelection,
		},
		onColumnFiltersChange: setColumnFilters,
		onGlobalFilterChange: setGlobalFilter,
		globalFilterFn: FuzzyFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
	});

	// Extract React Table functions
	const {
		getAllLeafColumns,
		getRowModel,
		getHeaderGroups,
		getPreFilteredRowModel,
		// For Pagination
		getState,
		setPageSize,
		setPageIndex,
		getPageCount,
		getCanPreviousPage,
		getCanNextPage,
		nextPage,
		previousPage,
	} = table;

	// Extract rows from React Table
	const { rows } = getRowModel();
	const hasAnyRow = rows?.length > 0;
	const filteredRows = table._getFilteredRowModel()?.rows || [];
	if (showTitleOnly) {
		showPagination = false;
	}

	// Render table components
	return (
		<div className="flex flex-col">
			{showTitleOnly ? (
				<TitleOnly
					{...{
						title,
						subtitle,
						handelAdd,
					}}
				/>
			) : (
				<Header
					{...{
						title,
						subtitle,
						handelAdd,
						accessor,
						showSearchBox,
						globalFilter,
						setGlobalFilter,
						extraButton,
						getAllLeafColumns,
						select,
						showColumns,
						filteredRows,
						getHeaderGroups,
						getPreFilteredRowModel,
						hasAnyRow,
						pdfButton,
						date,
						setDate,
						showSingleDateRange,
						fromDate,
						toDate,
						setFromDate,
						setToDate,
						multiDateRange,
					}}
				/>
			)}
			<div
				className={`overflow-x-auto rounded-md border border-gray-200 shadow-md ${
					showTitleOnly && "mb-6"
				}`}
			>
				<table className="w-full">
					<TableHead
						{...{ getHeaderGroups, getPreFilteredRowModel }}
					/>
					<tbody className="divide-y-2 divide-secondary">
						{hasAnyRow ? (
							<Fragment>
								{rows?.map(({ id, getVisibleCells }) => {
									return (
										<Row
											key={id}
											{...{
												getVisibleCells,
												extraClass,
											}}
										/>
									);
								})}
							</Fragment>
						) : (
							<NoDataFound colSpan={columns.length} />
						)}
						{children}
					</tbody>
				</table>
			</div>
			{showPagination && (
				<Pagination
					{...{
						getState,
						setPageSize,
						setPageIndex,
						getPageCount,
						getCanPreviousPage,
						getCanNextPage,
						nextPage,
						previousPage,
					}}
				/>
			)}
		</div>
	);
}

export default Table;

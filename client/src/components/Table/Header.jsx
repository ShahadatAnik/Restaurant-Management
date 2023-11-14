import { useState } from "react";
import { DebouncedInput, ExportCSV, FilterColumn, Title } from "./ui";

export default function Index({
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
	pdfButton,
}) {
	const [open, setOpen] = useState({
		columns: false,
		dateRange: false,
		singleDateRange: false,
		multiDateRange: false,
	});

	const showDateRange = getAllLeafColumns().some(
		(column) => column.id === "created_at"
	);

	return (
		<div className="my-2 flex flex-col items-start justify-between gap-1">
			<Title
				{...{
					title,
					subtitle,
					handelAdd,
					accessor,
				}}
			/>
			<div className="flex flex-col items-start justify-between gap-2 md:w-full md:flex-row md:items-center">
				<div className="flex basis-2/3 flex-col items-baseline  space-x-2 space-y-2 md:space-y-0">
					<span className="space-x-2 space-y-2">
						{showColumns && (
							<FilterColumn
								columns={getAllLeafColumns().filter((column) =>
									column.getCanHide()
								)}
								open={open.columns}
								setOpen={setOpen}
							/>
						)}

						{select}
						{extraButton}

						<ExportCSV
							{...{ getAllLeafColumns, filteredRows, title }}
						/>
						{pdfButton}
					</span>
				</div>
				{showSearchBox && (
					<div className="flex w-60 basis-1/3">
						<DebouncedInput
							placeholder="Search..."
							value={globalFilter ?? ""}
							onChange={(value) => setGlobalFilter(String(value))}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

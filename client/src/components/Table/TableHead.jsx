import { flexRender } from "@tanstack/react-table";
import clsx from "clsx";
import { FilterColumnValue, SortingIndicator } from "./ui";

export default function TableHead({ getHeaderGroups, getPreFilteredRowModel }) {
	return (
		<thead className="text-md select-none border-b-2 border-gray-200 bg-primary font-mono text-primary-content">
			{getHeaderGroups().map(({ id, headers }) => (
				<tr key={id}>
					{headers.map(
						({
							id,
							getContext,
							column,
							colSpan,
							isPlaceholder,
						}) => (
							<th
								key={id}
								colSpan={colSpan}
								className={clsx(
									"max-w-8 text-md group whitespace-nowrap px-3 py-2 text-left font-semibold tracking-wide text-primary-content",
									column?.columnDef?.width,
									column.getCanSort() &&
										"cursor-pointer select-none transition duration-300 hover:bg-primary-focus"
								)}
								onClick={column.getToggleSortingHandler()}
							>
								{!isPlaceholder && (
									<div
										className={
											column.getCanSort()
												? "flex cursor-pointer select-none items-center justify-start gap-2"
												: null
										}
									>
										{flexRender(
											column.columnDef.header,
											getContext()
										)}
										<SortingIndicator
											type={column.getIsSorted()}
											canSort={column.getCanSort()}
										/>
									</div>
								)}
								{column.getCanFilter() ? (
									<FilterColumnValue
										{...{ column, getPreFilteredRowModel }}
									/>
								) : null}
							</th>
						)
					)}
				</tr>
			))}
		</thead>
	);
}

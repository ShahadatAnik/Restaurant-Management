import { flexRender } from "@tanstack/react-table";

export default function Row({ getVisibleCells, extraClass = "" }) {
	return (
		<tr className="cursor-pointer transition duration-200 ease-in hover:bg-secondary/30">
			{getVisibleCells().map(({ id, getContext, column }) => {
				return (
					<td
						key={id}
						className={`whitespace-nowrap px-3 text-sm ${extraClass}`}
					>
						{flexRender(column.columnDef.cell, getContext())}
					</td>
				);
			})}
		</tr>
	);
}

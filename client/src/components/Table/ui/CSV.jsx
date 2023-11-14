import { Excel } from "@icons";
import { CSVLink } from "react-csv";

export default function ExportCSV({ getAllLeafColumns, filteredRows, title }) {
	const filteredCsvColumn = getAllLeafColumns().filter(
		(column) => !column.id.includes("action")
	);
	const csvHeaders = filteredCsvColumn.map(
		(column) => column.columnDef.header
	);
	const csvHeadersId = filteredCsvColumn.map((column) => column.id);

	const csvData = [
		csvHeaders,
		...filteredRows.map((row) =>
			csvHeadersId.map((column) => row.original[column])
		),
	];

	const filename = `${new Date().toLocaleString("en-GB", {
		month: "short",
		day: "numeric",
		year: "numeric",
	})} ${title}.csv`;

	return (
		<CSVLink
			type="button"
			className="btn btn-xs rounded-full bg-secondary font-mono text-secondary-content"
			data={csvData}
			filename={filename}
		>
			Excel <Excel className="h-5 w-5 text-secondary-content" />
		</CSVLink>
	);
}

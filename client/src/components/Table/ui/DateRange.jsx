import { addDays } from "date-fns";
import Cookies from "js-cookie";
import { useCallback, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FilterButton } from "./Filter";

const ISOconversion = (date) =>
	date.toISOString().split("T")[0] + "T23:59:59.999Z";

function DateRangePickerFunction({ column }) {
	const { setFilterValue, getFacetedMinMaxValues } = column;

	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const handleDateRangeChange = useCallback(
		(item) => {
			setState([item.selection]);

			const startDate = ISOconversion(item.selection.startDate);
			const endDate = ISOconversion(
				addDays(new Date(item.selection.endDate), 1)
			);

			setFilterValue([startDate, endDate]);
			Cookies.set("startDate", startDate);
			Cookies.set("endDate", endDate);
		},
		[column]
	);

	return (
		<DateRangePicker
			minDate={new Date(getFacetedMinMaxValues()?.[0])}
			maxDate={new Date(getFacetedMinMaxValues()?.[1])}
			ranges={state}
			onChange={handleDateRangeChange}
			direction="vertical"
			scroll={{ enabled: true }}
			rangeColors={["#4F496F"]}
		/>
	);
}

function DateRange({ getHeaderGroups, open, setOpen }) {
	const column = getHeaderGroups()
		.map(({ headers }) =>
			headers.filter((column) => column?.id === "created_at")
		)
		.map((column) => column[0].column);

	const handleToggle = () =>
		setOpen((prev) => ({
			...prev,
			dateRange: !prev.dateRange,
		}));

	return (
		<FilterButton title="Date Range" open={open} onClick={handleToggle}>
			<DateRangePickerFunction column={column[0] || []} />
		</FilterButton>
	);
}

export default DateRange;

import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { FilterButton } from "./Filter";
const ISOconversion = (date) => addDays(date, 1).toISOString().split("T")[0];

export default function SingleDateRange({
	fromDate,
	setFromDate,
	toDate,
	setToDate,
	open,
	setOpen,
}) {
	const handleToggle = () =>
		setOpen((prev) => ({
			...prev,
			multiDateRange: !prev.multiDateRange,
		}));
	const [state, setState] = useState([
		{
			startDate: new Date(fromDate),
			endDate: new Date(toDate),
			key: "selection",
		},
	]);
	const handleDateRange = (item) => {
		setState([item]);
		var start_date = ISOconversion(item.startDate);
		var end_date = ISOconversion(item.endDate);

		setFromDate(start_date);
		setToDate(end_date);
	};

	return (
		<FilterButton title="Date Range" open={open} onClick={handleToggle}>
			<DateRangePicker
				onChange={(item) => handleDateRange(item.selection)}
				ranges={state}
				direction="horizontal"
			/>
		</FilterButton>
	);
}

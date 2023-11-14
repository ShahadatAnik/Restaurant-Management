import { addDays } from "date-fns";
import { Calendar, enUS } from "react-date-range";
import { FilterButton } from "./Filter";

export default function SingleDateRange({ date, setDate, open, setOpen }) {
	const handleToggle = () =>
		setOpen((prev) => ({
			...prev,
			singleDateRange: !prev.singleDateRange,
		}));

	return (
		<FilterButton title="Date" open={open} onClick={handleToggle}>
			<Calendar
				locale={enUS}
				date={addDays(new Date(date), 0)}
				onChange={(item) =>
					setDate(
						addDays(new Date(item), 1).toISOString().slice(0, 10)
					)
				}
				maxDate={new Date()}
				color="#4F496F"
			/>
		</FilterButton>
	);
}

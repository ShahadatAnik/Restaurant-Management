import { Fragment, useCallback, useMemo } from "react";
import DebouncedInput from "../DebouncedInput";

function FilterColumnValue({ column, getPreFilteredRowModel }) {
	const {
		id,
		getFacetedUniqueValues,
		getFilterValue,
		setFilterValue,
		getFacetedMinMaxValues,
	} = column;

	const firstValue = getPreFilteredRowModel().flatRows[0]?.getValue(id);

	const sortedUniqueValues = useMemo(
		() =>
			typeof firstValue === "number"
				? []
				: Array.from(getFacetedUniqueValues().keys()).sort(),
		[getFacetedUniqueValues(), firstValue]
	);

	const handleMinValueChange = useCallback(
		(value) => setFilterValue((old) => [value, old?.[1]]),
		[column]
	);

	const handleMaxValueChange = useCallback(
		(value) => setFilterValue((old) => [old?.[0], value]),
		[column]
	);

	const handleTextValueChange = useCallback(
		(value) => setFilterValue(value),
		[column]
	);

	return typeof firstValue === "number" ? (
		<div className="flex space-x-2">
			<DebouncedInput
				type="number"
				min={Number(getFacetedMinMaxValues()?.[0] ?? "")}
				max={Number(getFacetedMinMaxValues()?.[1] ?? "")}
				// placeholder={`Min ${
				// 	getFacetedMinMaxValues()?.[0] &&
				// 	`(${getFacetedMinMaxValues()?.[0]})`
				// }`}
				value={getFilterValue()?.[0] ?? ""}
				onChange={handleMinValueChange}
			/>
			<DebouncedInput
				type="number"
				min={Number(getFacetedMinMaxValues()?.[0] ?? "")}
				max={Number(getFacetedMinMaxValues()?.[1] ?? "")}
				// placeholder={`Max ${
				// 	getFacetedMinMaxValues()?.[1]
				// 		? `(${getFacetedMinMaxValues()?.[1]})`
				// 		: ""
				// }`}
				value={getFilterValue()?.[1] ?? ""}
				onChange={handleMaxValueChange}
			/>
		</div>
	) : (
		<Fragment>
			<datalist id={id + "list"}>
				{sortedUniqueValues.slice(0, 100).map((value) => (
					<option value={value} key={value} />
				))}
			</datalist>
			<DebouncedInput
				type="text"
				value={getFilterValue() ?? ""}
				onChange={handleTextValueChange}
				// placeholder={`Search... (${
				// 	getFacetedUniqueValues().size
				// })`}
				list={id + "list"}
			/>
		</Fragment>
	);
}

export default FilterColumnValue;

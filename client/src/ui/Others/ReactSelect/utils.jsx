import clsx from "clsx";

const controlStyles = {
	base: "input w-full rounded-lg hover:cursor-pointer",
	focus: "border-primary ring-2 ring-primary ring-offset-1",
	nonFocus: "border-primary hover:border-primary-800",
	disabled:
		"cursor-not-allowed border-error bg-error/10 text-opacity-20 placeholder-primary-content placeholder-opacity-20",
};
const placeholderStyles = "text-primary placeholder-primary";

// Single Value
const selectInputStyles = "py-0.5";
const singleValueStyles = "leading-7 ml-1";

// Multi Value
const multiValueStyles =
	"bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5";
const multiValueRemoveStyles =
	"border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";

// Indicators
const indicatorsContainerStyles = "text-primary px-1";
const clearIndicatorStyles =
	"text-gray-500 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-primary";

// drop down menu
const dropdownIndicatorStyles =
	"ml-2 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "border-2 bg-white rounded-md overflow-y-hidden";

// group heading
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
	base: "px-2 py-2 rounded-lg shadow-sm text-sm hover:cursor-pointer hover:bg-secondary",
	focus: "bg-primary text-primary-content",
	selected:
		"after:content-['✔'] after:ml-2 after:text-success flex justify-between bg-primary text-primary-content active:bg-primary",
};
const noOptionsMessageStyles =
	"text-error-content p-2 bg-error/60 border border-dashed border-gray-200 rounded-md";

const classNames = {
	control: ({ isFocused, isDisabled }) =>
		clsx(
			isDisabled && controlStyles.disabled,
			isFocused ? controlStyles.focus : controlStyles.nonFocus,
			controlStyles.base
		),
	placeholder: () => placeholderStyles,
	input: () => selectInputStyles,
	singleValue: () => singleValueStyles,
	multiValue: () => multiValueStyles,
	multiValueLabel: () => multiValueLabelStyles,
	multiValueRemove: () => multiValueRemoveStyles,
	indicatorsContainer: () => indicatorsContainerStyles,
	clearIndicator: () => clearIndicatorStyles,
	indicatorSeparator: () => indicatorSeparatorStyles,
	dropdownIndicator: () => dropdownIndicatorStyles,
	menu: () => menuStyles,
	groupHeading: () => groupHeadingStyles,
	option: ({ isFocused, isSelected }) =>
		clsx(
			isFocused && optionStyles.focus,
			isSelected && optionStyles.selected,
			optionStyles.base
		),
	noOptionsMessage: () => noOptionsMessageStyles,
};
const styles = {
	input: (base) => ({
		...base,
		"input:focus": {
			border: "none",
		},
	}),
	multiValueLabel: (base) => ({
		...base,
		whiteSpace: "normal",
		overflow: "visible",
	}),
};
export { classNames, styles };

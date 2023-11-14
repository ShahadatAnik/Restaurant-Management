import { Close, DropDown } from "@icons";
import { components } from "react-select";

const DropdownIndicator = (props) => {
	const { selectProps } = props;
	const isMenuOpen = selectProps.menuIsOpen;

	return (
		<components.DropdownIndicator {...props}>
			<DropDown
				className={`h-4 text-primary transition-transform ${
					isMenuOpen
						? "rotate-180 transform duration-500"
						: "transform duration-500"
				}`}
			/>
		</components.DropdownIndicator>
	);
};

const ClearIndicator = (props) => {
	return (
		<components.ClearIndicator {...props}>
			<Close />
		</components.ClearIndicator>
	);
};

const MultiValueRemove = (props) => {
	return (
		<components.MultiValueRemove {...props}>
			<Close />
		</components.MultiValueRemove>
	);
};

const ButtonComponents = {
	DropdownIndicator,
	ClearIndicator,
	MultiValueRemove,
};

export { ButtonComponents };

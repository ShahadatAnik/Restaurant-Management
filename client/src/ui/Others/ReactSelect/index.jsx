import Select from "react-select";
import { ButtonComponents } from "./buttons";
import { classNames, styles } from "./utils";

const ReactSelect = (props) => (
	<Select
		closeMenuOnSelect={true}
		hideSelectedOptions={false}
		unstyled
		classNamePrefix={"react-select-"}
		styles={styles}
		components={ButtonComponents}
		classNames={classNames}
		{...props}
	/>
);

export default ReactSelect;

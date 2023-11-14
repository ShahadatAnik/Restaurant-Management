import DropdownMenu from "../DropdownMenu";

const FilterButton = ({ title, open, onClick, children }) => {
	return (
		<details className="-z-1 dropdown dropdown-bottom">
			<summary
				className="btn btn-xs rounded-full bg-secondary font-mono text-secondary-content"
				onClick={onClick}
			>
				{title} <DropdownMenu open={open} />
			</summary>
			<ul className="menu dropdown-content rounded-box z-[1] bg-secondary text-secondary-content transition delay-300 ease-in-out">
				{children}
			</ul>
		</details>
	);
};

export default FilterButton;

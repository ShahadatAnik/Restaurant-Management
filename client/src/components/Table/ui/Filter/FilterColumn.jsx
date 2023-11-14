import FilterButton from "./FIlterButton";

function FilterColumn({ columns, open, setOpen }) {
	const filteredColumns = columns?.filter((column) => {
		return (
			column.id !== "created_at" &&
			column.id !== "updated_at" &&
			column.id !== "actions"
		);
	});

	const handleToggle = () =>
		setOpen((prev) => ({
			...prev,
			columns: !prev.columns,
		}));

	return (
		<FilterButton title="Columns" open={open} onClick={handleToggle}>
			{filteredColumns?.map(
				({
					id,
					getIsVisible,
					getToggleVisibilityHandler,
					columnDef,
				}) => {
					return (
						<li key={id}>
							<label>
								<input
									className="checkbox-primary checkbox checkbox-xs"
									type="checkbox"
									checked={getIsVisible()}
									onChange={getToggleVisibilityHandler()}
								/>
								{columnDef.header}
							</label>
						</li>
					);
				}
			)}
		</FilterButton>
	);
}

export default FilterColumn;

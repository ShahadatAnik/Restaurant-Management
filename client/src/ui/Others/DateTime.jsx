function DateTime({ date, isDate = true, isTime = true }) {
	if (!date) return null;

	const cls = "px-1 text-[0.6rem] font-semibold capitalize";

	const customizedDate = new Date(date).toLocaleString("en-GB", {
		day: "numeric",
		month: "numeric",
		year: "2-digit",
	});

	const customizedTime = new Date(date).toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});

	return (
		<div className="flex flex-col items-start justify-center first:rounded-t-md last:rounded-b-md">
			{isDate && (
				<span className={`${cls} bg-pink-100 text-pink-800`}>
					{customizedDate}
				</span>
			)}
			{isTime && (
				<span
					className={`${cls} -mt-1.5 bg-violet-100 text-violet-800`}
				>
					{customizedTime}
				</span>
			)}
		</div>
	);
}
export { DateTime };

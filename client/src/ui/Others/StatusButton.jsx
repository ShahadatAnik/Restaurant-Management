import { Check, Close } from "@icons";
import clsx from "clsx";

export default function StatusButton({ value = 0, ...props }) {
	return (
		<button
			type="button"
			className={clsx("btn btn-circle btn-md font-semibold", {
				"bg-green-300 text-green-800": value === 1,
				"bg-pink-300 text-pink-800": value === 0,
			})}
			{...props}
		>
			{value === 1 ? (
				<Check className="w-4" />
			) : (
				<Close className="w-4" />
			)}
		</button>
	);
}

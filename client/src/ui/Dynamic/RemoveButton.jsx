import { Close } from "@icons";

export default function RemoveButton({ showButton, onClick }) {
	if (!showButton) return null;
	return (
		<div className="flex items-center justify-center">
			<Close
				className="btn btn-circle btn-error btn-ghost btn-xs text-error"
				onClick={onClick}
			/>
		</div>
	);
}

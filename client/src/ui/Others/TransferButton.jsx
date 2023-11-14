import { TransferIn } from "@/assets/icons";

const TransferButton = ({ onClick }) => {
	return (
		<button
			type="button"
			className="btn btn-circle btn-sm bg-pink-300 font-mono font-semibold text-pink-800"
			onClick={onClick}
		>
			<TransferIn className="w-4" />
		</button>
	);
};

export default TransferButton;

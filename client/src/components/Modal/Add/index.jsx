import { Close } from "@icons";
import clsx from "clsx";

function AddModal({ id, title, onSubmit, onClose, children, isSmall = false }) {
	return (
		<dialog id={id} className="modal modal-bottom sm:modal-middle">
			<form
				onSubmit={onSubmit}
				noValidate
				method="dialog"
				className={clsx(
					"modal-box bg-secondary text-secondary-content",
					!isSmall && "sm:max-w-5xl"
				)}
			>
				<div className="modal-header mb-4 flex items-center justify-between">
					<p className="mb-0 text-2xl font-semibold">{title}</p>
					<button
						type="button"
						onClick={onClose}
						className="group btn btn-circle btn-error btn-outline"
					>
						<Close className="h-5 w-5 text-error group-hover:text-primary-content" />
					</button>
				</div>
				{children}
				<div className="modal-action">
					<button
						type="submit"
						className="text-md btn btn-primary btn-block"
					>
						Save
					</button>
				</div>
			</form>
		</dialog>
	);
}

export default AddModal;

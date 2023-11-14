import { ShowToastMain } from "@components/Toast";
import { Copy } from "@icons";
import clsx from "clsx";
import { Link } from "react-router-dom";

function IdLink({ id, uri = "", extraClass = "" }) {
	const handleOnClick = () => {
		navigator.clipboard.writeText(id);
		ShowToastMain({
			type: "create",
			message: `${id} copied`,
		});
	};

	return (
		<div
			className={clsx(
				"flex items-center justify-start text-info hover:underline",
				extraClass
			)}
		>
			<Link
				to={uri !== "" && `${uri}/${id}`}
				target={uri !== "" && "_blank"}
				className={clsx({
					"text-md inline-flex items-center gap-1 rounded-full px-2 py-1 font-semibold": true,
				})}
			>
				{id}
			</Link>
			<button
				className="btn btn-link btn-sm"
				onClick={handleOnClick}
				aria-label="Copy ID to clipboard"
			>
				<Copy className="h-4 w-4 text-primary" />
			</button>
		</div>
	);
}
function IdLinkWithoutStyle({ id, uri = "", extraClass = "" }) {
	const handleOnClick = () => {
		navigator.clipboard.writeText(id);
		ShowToastMain({
			type: "create",
			message: `${id} copied`,
		});
	};

	return (
		<span className="flex items-center justify-start hover:underline">
			<Link
				to={uri !== "" && `${uri}/${id}`}
				target={uri !== "" && "_blank"}
			>
				{id}
				<button
					className="btn btn-link btn-xs"
					onClick={handleOnClick}
					aria-label="Copy ID to clipboard"
				>
					<Copy className=" w-4 text-white" />
				</button>
			</Link>
		</span>
	);
}

function IdOnlyCopy({ id, extraClass = "" }) {
	const handleOnClick = () => {
		navigator.clipboard.writeText(id);
		ShowToastMain({
			type: "create",
			message: `${id} copied`,
		});
	};

	return (
		<div className={clsx("flex items-center justify-start", extraClass)}>
			<span className="text-md font-semibold">{id}</span>
			<button
				className="btn btn-link btn-sm"
				onClick={handleOnClick}
				aria-label="Copy ID to clipboard"
			>
				<Copy className="h-4 w-4 text-primary" />
			</button>
		</div>
	);
}

function IdOnlyLink({ id, uri = "", extraClass = "" }) {
	return (
		<div
			className={clsx(
				"text-md flex items-center justify-start font-semibold text-info hover:underline",
				extraClass
			)}
		>
			<Link
				to={uri !== "" && `${uri}/${id}`}
				target={uri !== "" && "_blank"}
			>
				{id}
			</Link>
		</div>
	);
}

export { IdLink, IdLinkWithoutStyle, IdOnlyCopy, IdOnlyLink };

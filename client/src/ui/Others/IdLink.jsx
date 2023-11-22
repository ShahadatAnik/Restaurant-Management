import { ShowToastMain } from "@components/Toast";
import { Copy } from "@icons";
import clsx from "clsx";
import { Link } from "react-router-dom";

const handleOnClick = (id) => {
	navigator.clipboard.writeText(id);
	ShowToastMain({
		type: "create",
		message: `${id} copied`,
	});
};

const CopyButton = ({ id, className = "h-4 w-4 text-primary" }) => (
	<button
		className="btn btn-link btn-sm"
		onClick={() => handleOnClick(id)}
		aria-label="Copy ID to clipboard"
	>
		<Copy className={className} />
	</button>
);

const BaseBody = ({
	linkClassName = "",
	uri = "",
	id,
	label = "",
	divClassName = "",
	showCopyButton = true,
}) => {
	if (uri === "" || uri === null) return null;
	const showId = label !== "" ? label : id;
	return (
		<div className={divClassName}>
			<Link to={`${uri}/${id}`} target="_blank" className={linkClassName}>
				{showId}
			</Link>
			{showCopyButton && <CopyButton id={showId} />}
		</div>
	);
};

const IdLink = ({ id, uri = "", extraClass = "" }) => (
	<BaseBody
		id={id}
		uri={uri}
		linkClassName="text-md inline-flex items-center gap-1 rounded-full px-2 py-1 font-semibold text-info"
		divClassName={
			"flex items-center justify-start text-info hover:underline " +
			extraClass
		}
	/>
);

const IdLinkWithoutStyle = ({ id, uri = "" }) => (
	<BaseBody
		id={id}
		uri={uri}
		divClassName="flex items-center justify-start hover:underline"
	/>
);

const IdOnlyCopy = ({ id, extraClass = "" }) => (
	<div className={clsx("flex items-center justify-start", extraClass)}>
		<span className="text-md font-semibold">{id}</span>
		<button
			className="btn btn-link btn-sm"
			onClick={() => handleOnClick(id)}
			aria-label="Copy ID to clipboard"
		>
			<Copy className="h-4 w-4 text-primary" />
		</button>
	</div>
);

const IdOnlyLink = ({ id, uri = "", extraClass = "" }) => (
	<BaseBody
		id={id}
		uri={uri}
		divClassName={
			"text-md flex items-center justify-start font-semibold text-info hover:underline " +
			extraClass
		}
		showCopyButton={false}
	/>
);

export { IdLink, IdLinkWithoutStyle, IdOnlyCopy, IdOnlyLink };

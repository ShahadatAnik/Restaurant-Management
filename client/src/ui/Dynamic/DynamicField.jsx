import { Add } from "@icons";

export default function DynamicField({ title = "", handelAppend, children }) {
	return (
		<div className="mb-8 rounded-md bg-secondary/60 text-secondary-content">
			<label className="label">
				<span className="label-text flex items-center gap-4 px-2 text-lg font-semibold capitalize text-secondary-content">
					{title}
					<button
						type="button"
						onClick={handelAppend}
						className="btn btn-primary btn-xs"
					>
						<Add className="w-4 text-primary-content" /> NEW
					</button>
				</span>
			</label>

			<div className="form-control w-full gap-0.5 px-2">{children}</div>
		</div>
	);
}

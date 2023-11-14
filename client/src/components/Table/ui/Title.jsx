import { Add } from "@icons";

const AddButton = ({ onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="btn btn-primary btn-sm font-mono"
		>
			<Add /> NEW
		</button>
	);
};

function Title({ title, subtitle, handelAdd = () => {}, accessor }) {
	return (
		<div className="mb-4 flex items-center justify-between gap-2 md:justify-start">
			<div className="flex flex-col">
				<h1 className="font-mono text-2xl font-semibold capitalize leading-tight text-primary md:text-3xl">
					{title}
				</h1>
				{subtitle && (
					<p className="-mt-1 font-mono text-[0.8rem] capitalize text-secondary-content">
						{subtitle}
					</p>
				)}
			</div>
			{accessor && handelAdd.toString() !== "()=>{}" && (
				<AddButton onClick={handelAdd} />
			)}
		</div>
	);
}

function TitleOnly({ title, subtitle, handelAdd = () => {} }) {
	return (
		<div className="mb-1 flex items-center justify-between gap-2 md:justify-start">
			<div className="flex flex-col">
				<h1 className="font-mono text-2xl font-semibold capitalize leading-tight text-primary md:text-3xl">
					{title}
				</h1>
				{subtitle && (
					<p className="-mt-1 font-mono text-[0.8rem] capitalize text-secondary-content">
						{subtitle}
					</p>
				)}
			</div>
		</div>
	);
}

export default Title;
export { AddButton, TitleOnly };

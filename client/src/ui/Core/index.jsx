import { FormField } from "./base";
import { capitalize } from "./utils";

const Input = ({ register, ...props }) => (
	<FormField {...props}>
		<input
			className="input input-primary w-full text-primary transition-all duration-100 ease-in-out"
			id={props.label}
			name={props.label}
			{...register(props?.label)}
			{...props}
		/>
	</FormField>
);

const CheckBox = ({ register, ...props }) => (
	<div className="form-control">
		<label className="label cursor-pointer">
			<input
				type="checkbox"
				className="checkbox-primary checkbox"
				{...register(props.label)}
				{...props}
			/>
			<span className="ml-2 font-semibold capitalize text-primary">
				{props.title
					? capitalize(props.title)
					: capitalize(props.label)}
			</span>
		</label>
	</div>
);

const Switch = ({ register, ...props }) => (
	<FormField {...props}>
		<input
			type="checkbox"
			className="toggle toggle-primary"
			{...register(props.label)}
			{...props}
		/>
	</FormField>
);

const Select = ({ register, ...props }) => (
	<FormField {...props}>
		<select
			className="select select-bordered select-primary"
			{...register(props.label)}
		>
			{props.option?.map((item, index) => (
				<option key={index} value={item.value}>
					{item.label}
				</option>
			))}
		</select>
	</FormField>
);

// const Radio = ({ register, ...props }) => (
// 	<FormField {...props}>
// 		<div className="flex gap-6 rounded-md border border-primary bg-white px-2 py-2.5">
// 			{props.option?.map((item) => (
// 				<label
// 					key={item.value}
// 					className="flex cursor-pointer items-center gap-2"
// 				>
// 					<input
// 						type="checkbox"
// 						className="radio checked:bg-primary"
// 						value={item.value}
// 						// defaultChecked={
// 						// 	item.value === props.assignedValue ? true : false
// 						// }
// 						// checked={
// 						// 	item.value === props?.assignedValue ? true : false
// 						// }
// 						{...register(props.label)}
// 					/>
// 					<span className="label-text">{item.label}</span>
// 				</label>
// 			))}
// 		</div>
// 	</FormField>
// );

const Radio = ({ register, checker, value, ...props }) => (
	<FormField {...props}>
		<div className="flex gap-6 rounded-md border border-primary bg-white px-2 py-2.5">
			{props.option?.map((item) => (
				<label
					key={item.value}
					className="flex cursor-pointer items-center gap-2"
				>
					<input
						type="radio"
						className="radio checked:bg-primary"
						{...register(props.label)}
						value={value == null ? item.value : value}
					/>
					<span className="label-text">{item.label}</span>
				</label>
			))}
		</div>
	</FormField>
);

const Textarea = ({ register, ...props }) => (
	<FormField {...props}>
		<textarea
			className="textarea textarea-bordered textarea-accent textarea-md w-full"
			{...register(props.label)}
			{...props}
		/>
	</FormField>
);

const FileInput = ({ register, ...props }) => (
	<FormField {...props}>
		<input
			type="file"
			className="file-input file-input-bordered file-input-primary file-input-sm w-full"
			{...register(props.label)}
			{...props}
		/>
	</FormField>
);

const JoinInput = ({ register, ...props }) => (
	<FormField {...props}>
		<div className="join">
			<input
				className="input join-item input-bordered input-accent w-full"
				{...register(props.label)}
				{...props}
			/>
			<span className="btn-bordered btn btn-accent join-item">
				{props.unit}
			</span>
		</div>
	</FormField>
);

const JoinInputSelect = ({ register, ...props }) => (
	<FormField {...props}>
		<div className="join">
			<input
				className="input join-item input-primary w-full text-primary transition-all duration-100 ease-in-out"
				id={props.label}
				{...register(props?.label)}
			/>

			<select
				className="join-item select select-bordered select-primary"
				{...register(props.join)}
			>
				{props.option?.map((item, index) => (
					<option key={index} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	</FormField>
);

const SearchBox = ({ ...props }) => (
	<input
		{...props}
		className="input input-primary h-10 w-full rounded-md border-[0.1px] border-primary p-2 text-sm shadow-md duration-100 placeholder:text-primary"
	/>
);

const DescriptionStyle = ({ description }) => (
	<span className="text-md  rounded-md bg-indigo-100 px-1 font-sans font-semibold capitalize text-indigo-800">
		{description}
	</span>
);

export {
	CheckBox,
	DescriptionStyle,
	FileInput,
	FormField,
	Input,
	JoinInput,
	JoinInputSelect,
	Radio,
	SearchBox,
	Select,
	Switch,
	Textarea
};


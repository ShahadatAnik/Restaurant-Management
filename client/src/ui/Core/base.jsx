import { capitalize } from "./utils";

const ErrorBody = ({ msg = "" }) => (
	<label className="label">
		<span className="label-text-alt">
			<span className="text-xs text-red-600">{msg}</span>
		</span>
	</label>
);

const DynamicError = ({ dynamicerror = {} }) => {
	return <ErrorBody msg={dynamicerror?.message} />;
};

const Error = ({ label = "", errors = {} }) => {
	return <ErrorBody msg={errors[label]?.message} />;
};

// Generic Form Field Component
const FormField = ({
	label = "",
	title = "",
	sub_label = "",
	errors = {},
	dynamicerror = {},
	children,
}) => {
	return (
		<div className="form-control w-full">
			<label name={label} className="label">
				<span className="label-text font-semibold capitalize text-secondary-content">
					{title ? capitalize(title) : capitalize(label)}
				</span>
				{sub_label && (
					<span className="label-text-alt ml-2">{sub_label}</span>
				)}
			</label>
			{children}
			{dynamicerror.message ? (
				<DynamicError {...{ dynamicerror }} />
			) : (
				<Error {...{ label, errors }} />
			)}
		</div>
	);
};

export { DynamicError, Error, ErrorBody, FormField };

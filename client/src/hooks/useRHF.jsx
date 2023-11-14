import { yupResolver } from "@hookform/resolvers/yup";
import {
	Controller,
	useController,
	useFieldArray,
	useForm,
} from "react-hook-form";
import { object } from "yup";

export default function useRHF(schema = {}, defaultValues = {}) {
	const form = useForm({
		resolver: yupResolver(object(schema)),
		defaultValues,
	});
	const {
		register,
		handleSubmit,
		control,
		formState,
		reset,
		getValues,
		setValue,
		watch,
	} = form;
	const { errors } = formState;

	return {
		Controller,
		control,
		errors,
		getValues,
		handleSubmit,
		watch,
		reset,
		register,
		setValue,
		useController,
		useFieldArray,
	};
}

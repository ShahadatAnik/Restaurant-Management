import { useFetch } from "@/hooks";
import { FormField, ReactSelect, Select } from "@/ui";
import { AddModal } from "@components/Modal";
import {
	useFetchForRhfReset,
	usePostFunc,
	useRHF,
	useUpdateFunc,
} from "@hooks";
import { Input, JoinInputSelect, Textarea } from "@ui";
import { MATERIAL_NULL, MATERIAL_SCHEMA } from "@util/Schema";

export default function Index({
	modalId = "",
	setStock,
	updateStock = {
		id: null,
	},
	setUpdateStock,
}) {
	const { register, handleSubmit, errors, reset, Controller, control } =
		useRHF(MATERIAL_SCHEMA, MATERIAL_NULL);

	useFetchForRhfReset(
		`/get/stock/${updateStock?.id}`,
		updateStock?.id,
		reset
	);

	const onClose = () => {
		setUpdateStock((prev) => ({
			...prev,
			id: null,
		}));
		reset(MATERIAL_NULL);
		window[modalId].close();
	};

	const onSubmit = async (data) => {
		const quantity = 0;
		// Update item
		if (updateStock?.id !== null) {
			const updatedData = {
				...data,
				quantity,
				category_name,
				material_type_name,
				updated_at: new Date().toISOString(),
			};
			useUpdateFunc({
				uri: `/change/stock/${updateStock?.id}/${data?.name}`,
				itemId: updateStock.id,
				data: data,
				updatedData: updatedData,
				setItems: setStock,
				onClose: onClose,
			});

			return;
		}
		const updatedData = {
			...data,
			quantity,
		};

		await usePostFunc({
			uri: "/add/stock",
			data: updatedData,
			setItems: setStock,
			onClose: onClose,
		});
	};

	return (
		<AddModal
			id={modalId}
			title={updateStock?.id !== null ? "Update Stock" : "Stock"}
			onSubmit={handleSubmit(onSubmit)}
			onClose={onClose}
			isSmall={true}
		>
			<Input label="name" {...{ register, errors }} />
			<Input label="description" {...{ register, errors }} />
		</AddModal>
	);
}

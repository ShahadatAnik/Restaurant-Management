import { AddModal } from "@components/Modal";
import {
	useFetchForRhfReset,
	usePostFunc,
	useRHF,
	useUpdateFunc,
} from "@hooks";
import { Input } from "@ui";
import { STOCK_NULL, STOCK_SCHEMA } from "@util/Schema";

export default function Index({
	modalId = "",
	setStock,
	updateStock = {
		id: null,
	},
	setUpdateStock,
}) {
	const { register, handleSubmit, errors, reset, Controller, control } =
		useRHF(STOCK_SCHEMA, STOCK_NULL);

	useFetchForRhfReset(`/stock/${updateStock?.id}`, updateStock?.id, reset);

	const onClose = () => {
		setUpdateStock((prev) => ({
			...prev,
			id: null,
		}));
		reset(STOCK_NULL);
		window[modalId].close();
	};

	const onSubmit = async (data) => {
		// Update item
		if (updateStock?.id !== null) {
			const updatedData = {
				...data,
			};
			useUpdateFunc({
				uri: `/stock/${updateStock?.id}`,
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
			quantity: 0,
		};

		await usePostFunc({
			uri: "/stock",
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

import { AddModal } from "@components/Modal";
import {
	useFetch,
	useFetchForRhfReset,
	usePostFunc,
	useRHF,
	useUpdateFunc,
} from "@hooks";
import { FormField, Input, ReactSelect } from "@ui";
import { PURCHASE_NULL, PURCHASE_SCHEMA } from "@util/Schema";

export default function Index({
	modalId = "",
	setPurchase,
	updatePurchase = {
		id: null,
		itemId: "",
	},
	setUpdatePurchase,
}) {
	const { register, handleSubmit, errors, reset, Controller, control } =
		useRHF(PURCHASE_SCHEMA, PURCHASE_NULL);

	useFetchForRhfReset(
		`/purchase/${updatePurchase?.id}`,
		updatePurchase?.id,
		reset
	);
	const { value: item } = useFetch("/stock/label/value");

	const onClose = () => {
		setUpdatePurchase((prev) => ({
			...prev,
			id: null,
		}));
		reset(PURCHASE_NULL);
		window[modalId].close();
	};

	const onSubmit = async (data) => {
		const itemName = item?.find(
			(item) => item.value == data?.itemId
		)?.label;
		// Update item
		if (updatePurchase?.id !== null) {
			const updatedData = {
				...data,
				itemName,
			};
			useUpdateFunc({
				uri: `/purchase/${updatePurchase?.id}`,
				itemId: updatePurchase.id,
				data: data,
				updatedData: updatedData,
				setItems: setPurchase,
				onClose: onClose,
			});

			return;
		}
		const updatedData = {
			...data,
			itemName,
		};

		await usePostFunc({
			uri: "/purchase",
			data: updatedData,
			setItems: setPurchase,
			onClose: onClose,
		});
	};

	return (
		<AddModal
			id={modalId}
			title={updatePurchase?.id !== null ? "Update Purchase" : "Purchase"}
			onSubmit={handleSubmit(onSubmit)}
			onClose={onClose}
			isSmall={true}
		>
			<FormField label="itemId" title="Item" errors={errors}>
				<Controller
					name={"itemId"}
					control={control}
					render={({ field: { onChange } }) => {
						return (
							<ReactSelect
								placeholder="Select Category"
								options={item}
								value={item?.find(
									(item) =>
										item.value == updatePurchase?.itemId
								)}
								onChange={(e) => {
									onChange(parseInt(e.value));
								}}
								isDisabled={updatePurchase?.id !== null}
							/>
						);
					}}
				/>
			</FormField>
			<Input label="quantity" {...{ register, errors }} />
			<Input label="price" {...{ register, errors }} />
		</AddModal>
	);
}

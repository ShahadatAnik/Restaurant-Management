import { ShowToast } from "@components/Toast";
import { api } from "@lib/api";

async function useUpdateFunc({
	uri,
	data,
	itemId,
	updatedData,
	setItems,
	onClose = () => {},
}) {
	try {
		const response = await api.put(uri, updatedData);
		console.log("response", response);
		setItems((prev) =>
			prev.map((item) => {
				return item.id == itemId
					? {
							...data,
							...updatedData,
					  }
					: item;
			})
		);
		console.log("response", response);

		ShowToast(response);
	} catch (error) {
		ShowToast(error?.response);
	} finally {
		onClose();
	}
}

export { useUpdateFunc };

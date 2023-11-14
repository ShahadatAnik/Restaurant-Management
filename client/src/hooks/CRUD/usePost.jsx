import { ShowToast } from "@components/Toast";
import { api } from "@lib/api";

async function usePostFunc({
	uri,
	data,
	setItems = () => {},
	onClose = () => {},
}) {
	try {
		const response = await api.post(uri, data);

		setItems((prev) => [
			{
				id: response?.data?.id,
				...data,
			},
			...prev,
		]);

		ShowToast(response);
	} catch (error) {
		ShowToast(error?.response);
	} finally {
		onClose();
	}
}

export { usePostFunc };

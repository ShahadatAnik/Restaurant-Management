import { ShowToast } from "@components/Toast";
import { api } from "@lib/api";

async function useDeleteFunc({ uri, itemId, setItems, onClose }) {
	try {
		const response = await api.delete(uri);
		setItems((prev) => prev.filter((item) => item.id !== itemId));
		ShowToast(response);
	} catch (error) {
		ShowToast(error?.response);
	} finally {
		onClose();
	}
}

export { useDeleteFunc };

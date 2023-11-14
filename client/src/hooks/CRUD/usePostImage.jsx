import { ShowToast } from "@components/Toast";
import { BASE_API } from "@lib/secret";
import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	baseURL: BASE_API,
	headers: {
		"Content-Type": "multipart/form-data;",
	},
});

api.interceptors.request.use(
	async (config) => {
		const token = Cookies?.get("auth");

		if (token) {
			config.headers = {
				...config.headers,
				Authorization: token,
			};
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

async function usePostImage({
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

export { usePostImage };

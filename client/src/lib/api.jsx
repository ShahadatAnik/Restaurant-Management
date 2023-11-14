import axios from "axios";
import { BASE_API } from "./secret";

export const api = axios.create({
	baseURL: BASE_API,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	async (config) => {
		config.headers = {
			...config.headers,
		};

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

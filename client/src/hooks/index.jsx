import useAsync from "./CRUD/useAsync";
import { useDeleteFunc } from "./CRUD/useDelete";
import {
	useFetch,
	useFetchForRhfReset,
	useFetchForRhfResetForOrder,
	useFetchFunc,
} from "./CRUD/useFetch";
import { usePostFunc } from "./CRUD/usePost";
import { usePostImage } from "./CRUD/usePostImage";
import { useUpdateFunc } from "./CRUD/useUpdate";
import useCookie from "./Storage/useCookie";
import { useHaveAccess } from "./Storage/useHaveAccess";
import { useLocalStorage, useSessionStorage } from "./Storage/useStorage";
import { useToken } from "./Storage/useToken";
import useRHF from "./useRHF";

export {
	useAsync,
	useCookie,
	useDeleteFunc,
	useFetch,
	useFetchForRhfReset,
	useFetchForRhfResetForOrder,
	useFetchFunc,
	useHaveAccess,
	useLocalStorage,
	usePostFunc,
	usePostImage,
	useRHF,
	useSessionStorage,
	useToken,
	useUpdateFunc,
};

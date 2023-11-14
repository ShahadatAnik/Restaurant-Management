import { ShowToast } from "@components/Toast";
import { useCookie } from "@hooks";
import { api } from "@lib/api";
import { PROTECTED_ROUTES } from "@routes";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const [authCookie, updateAuthCookie, removeAuthCookie] = useCookie("auth");
	const [userCookie, updateUserCookie, removeUserCookie] = useCookie("user");

	useEffect(() => {
		async function loadCookieData() {
			if (authCookie && userCookie) {
				setUser(JSON.parse(userCookie));
			}
			setLoading(false);
		}

		loadCookieData();
	}, []);

	const Login = async (data) => {
		try {
			const res = await api.post("/get/user/login", data);
			const { token, user: loginUser } = res?.data;

			updateAuthCookie(token || "");
			const userData = JSON.stringify(loginUser);
			updateUserCookie(userData || "");
			setUser(userData);

			ShowToast(res);

			if (token && userData) {
				const go = PROTECTED_ROUTES.filter((route) => {
					return route?.assigned?.includes(loginUser?.department);
				});

				window.location.href = go[0]?.path;
			}
		} catch (error) {
			ShowToast(error.response);
		}
	};

	const Logout = () => {
		removeAuthCookie();
		removeUserCookie();
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ signed: !!user, user, loading, Login, Logout }}
			// value={{ signed: true, user, loading, Login, Logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

export default AuthProvider;

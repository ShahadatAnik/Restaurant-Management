import Sidebar from "@components/Sidebar";
import { Toast } from "@components/Toast";
import AuthProvider from "@context/auth";
import { BrowserRouter, Routes } from "react-router-dom";

const MainLayout = ({ children }) => {
	return (
		<BrowserRouter>
			<Sidebar>
				<Routes>{children}</Routes>
			</Sidebar>
			<Toast />
		</BrowserRouter>
	);
};

export default MainLayout;

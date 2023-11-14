import Sidebar from "@components/Sidebar";
import { Toast } from "@components/Toast";
import AuthProvider from "@context/auth";
import { BrowserRouter, Routes } from "react-router-dom";

const MainLayout = ({ children }) => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Sidebar>
					<Routes>{children}</Routes>
				</Sidebar>
				<Toast />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default MainLayout;

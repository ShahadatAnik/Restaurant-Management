import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastBody = ({ text }) => (
	<div className="flex items-center">
		<div className="flex-1">
			<p className="text-sm font-medium text-gray-900">{text}</p>
		</div>
	</div>
);

const SuccessToast = (text) => toast.success(<ToastBody {...{ text }} />);
const WarningToast = (text) => toast.warn(<ToastBody {...{ text }} />);
const ErrorToast = (text) => toast.error(<ToastBody {...{ text }} />);

const ShowToastMain = ({ type, message }) => {
	switch (type) {
		case "create":
		case "update":
			SuccessToast(message);
			break;
		case "delete":
		case "error":
			ErrorToast(message);
			break;
		case "warning":
			WarningToast(message);
			break;
		default:
			toast(<ToastBody text={message} />);
	}
};

const ShowToast = (toast) => {
	console.log("toast", toast?.data);
	const { type, message } = toast?.data?.value;
	ShowToastMain({ ...{ type, message } });
};

const DefaultConfig = {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	closeButton: false,
};

const Toast = () => {
	return (
		<ToastContainer
			style={{ width: "auto" }}
			transition={Slide}
			{...DefaultConfig}
		/>
	);
};

export {
	ErrorToast,
	ShowToast,
	ShowToastMain,
	SuccessToast,
	Toast,
	WarningToast,
};

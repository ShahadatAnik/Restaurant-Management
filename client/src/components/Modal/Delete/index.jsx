import { useDeleteFunc } from "@hooks";
import { DeleteFooter, Header } from "../ui";

const Body = ({ item }) => (
	<p className="text-center text-2xl font-light text-black">
		Do you want to delete <span className="font-semibold">{item}</span>?
	</p>
);

export default function Index({
	modalId = "",
	title = "",
	uri = "",
	deleteItem,
	setDeleteItem,
	setItems,
}) {
	const handelClose = () => {
		setDeleteItem((prev) => ({
			...prev,
			itemId: null,
			itemName: null,
		}));
		window[modalId].close();
	};

	const onSubmit = async () => {
		await useDeleteFunc({
			uri: `${uri}/${deleteItem?.itemId}/${deleteItem?.itemName}`,
			itemId: deleteItem?.itemId,
			setItems,
			onClose: handelClose,
		});
	};

	return (
		<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
			<form
				onSubmit={onSubmit}
				noValidate
				method="dialog"
				className="modal-box bg-secondary text-secondary-content"
			>
				<Header title={`Delete ${title}`} onClose={handelClose} />
				<Body item={deleteItem?.itemName} />
				<DeleteFooter {...{ handelClose }} />
			</form>
		</dialog>
	);
}

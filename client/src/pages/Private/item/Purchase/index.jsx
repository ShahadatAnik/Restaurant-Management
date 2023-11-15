import { Suspense } from "@/components/Feedback";
import PageInfo from "@/util/PageInfo";
import ReactTable from "@components/Table";
import { useFetchFunc } from "@hooks";
import { EditDelete } from "@ui";
import { lazy, useEffect, useMemo, useState } from "react";

const AddOrUpdate = lazy(() => import("./AddOrUpdate"));
const DeleteModal = lazy(() => import("@components/Modal/Delete"));

export default function Index() {
	const info = new PageInfo("Purchase", "purchase");
	const [purchase, setPurchase] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const columns = useMemo(
		() => [
			{
				accessorKey: "itemName",
				header: "Name",
				enableColumnFilter: false,
				cell: (info) => info.getValue(),
			},
			{
				accessorKey: "quantity",
				header: "Quantity",
				enableColumnFilter: false,
				cell: (info) => info.getValue(),
			},
			{
				accessorKey: "price",
				header: "Price",
				enableColumnFilter: false,
				cell: (info) => info.getValue(),
			},
			{
				accessorKey: "actions",
				header: "Actions",
				enableColumnFilter: false,
				enableSorting: false,
				width: "w-24",
				cell: (info) => {
					return (
						<EditDelete
							idx={info.row.index}
							handelUpdate={handelUpdate}
							handelDelete={handelDelete}
						/>
					);
				},
			},
		],
		[purchase]
	);

	// Fetching data from server
	useEffect(() => {
		useFetchFunc(info.getFetchUrl(), setPurchase, setLoading, setError);
	}, []);

	// Add
	const handelAdd = () => {
		window[info.getAddOrUpdateModalId()].showModal();
	};

	// Update
	const [updatePurchase, setUpdatePurchase] = useState({
		id: null,
		itemId: null,
	});

	const handelUpdate = (idx) => {
		setUpdatePurchase((prev) => ({
			...prev,
			id: purchase[idx].id,
			itemId: purchase[idx].itemId,
		}));
		window[info.getAddOrUpdateModalId()].showModal();
	};

	// Delete
	const [deleteItem, setDeleteItem] = useState({
		itemId: null,
		itemName: null,
	});
	const handelDelete = (idx) => {
		setDeleteItem((prev) => ({
			...prev,
			itemId: purchase[idx].id,
			itemName: purchase[idx].name,
		}));

		window[info.getDeleteModalId()].showModal();
	};

	if (loading)
		return <span className="loading loading-dots loading-lg z-50" />;
	// if (error) return <h1>Error:{error}</h1>;

	return (
		<div className="container mx-auto px-2 md:px-4">
			<ReactTable
				title={info.getTitle()}
				handelAdd={handelAdd}
				accessor={true}
				data={purchase} // change
				columns={columns}
				extraClass={"py-2"}
			/>

			<Suspense>
				<AddOrUpdate
					modalId={info.getAddOrUpdateModalId()}
					{...{
						setPurchase, // change
						updatePurchase, // change
						setUpdatePurchase, // change
					}}
				/>
			</Suspense>
			<Suspense>
				<DeleteModal
					modalId={info.getDeleteModalId()}
					title={info.getTitle()}
					deleteItem={deleteItem}
					setDeleteItem={setDeleteItem}
					setItems={setPurchase} // change
					uri={info.getDeleteUrl()}
				/>
			</Suspense>
		</div>
	);
}

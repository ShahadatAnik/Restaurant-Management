export default function NoDataFound({ colSpan }) {
	return (
		<tr>
			<td
				colSpan={colSpan}
				className="py-6 text-center text-2xl text-error"
			>
				No data found
			</td>
		</tr>
	);
}

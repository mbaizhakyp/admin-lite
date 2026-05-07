import StatusBadge from "./StatusBadge";

function OrderRow({ order }) {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.customerName}</td>
      <td>${order.total.toFixed(2)}</td>
      <td>
        <StatusBadge status={order.status} />
      </td>
      <td>{order.Shopper?.name ?? "Unassigned"}</td>
    </tr>
  );
}

export default OrderRow;

import StatusBadge from "./StatusBadge";

function OrderRow() {
  return (
    <tr>
      <td>id</td>
      <td>customer</td>
      <td>date</td>
      <td>
        <StatusBadge status />
      </td>
    </tr>
  );
}

export default OrderRow;

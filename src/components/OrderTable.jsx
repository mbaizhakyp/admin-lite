import OrderRow from "./OrderRow";

function orderTable() {
  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <OrderRow />
        <OrderRow />
        <OrderRow />
      </tbody>
    </table>
  );
}

export default orderTable;

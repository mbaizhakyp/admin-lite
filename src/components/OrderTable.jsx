import OrderRow from "./OrderRow";

function OrderTable({ orders }) {
  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Total</th>
          <th>Status</th>
          <th>Shopper</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;

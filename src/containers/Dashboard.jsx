import { useState } from "react";
import { useQuery } from "@apollo/client/react";

import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import OrderTable from "../components/OrderTable";
import { ALL_ORDERS } from "../graphql/queries";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const { data, loading, error } = useQuery(ALL_ORDERS);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p>Error loading orders: {error.message}</p>;
  }

  const orders = data?.allOrders ?? [];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.customerName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || order.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="dashboard">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <StatusFilter
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
      <OrderTable orders={filteredOrders} />
    </div>
  );
}

export default Dashboard;

import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import OrderTable from "../components/OrderTable";

function Dashboard() {
  return (
    <div className="dashboard">
      <SearchBar />
      <StatusFilter />
      <OrderTable />
    </div>
  );
}

export default Dashboard;

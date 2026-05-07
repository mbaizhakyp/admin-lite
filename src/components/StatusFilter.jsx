function StatusFilter({ selectedStatus, onStatusChange }) {
  return (
    <div className="status-filter">
      <label htmlFor="status-filter">Status:</label>
      <select
        id="status-filter"
        value={selectedStatus}
        onChange={(event) => onStatusChange(event.target.value)}
      >
        <option value="All">All</option>
        <option value="PENDING">PENDING</option>
        <option value="PICKING">PICKING</option>
        <option value="SHIPPED">SHIPPED</option>
      </select>
    </div>
  );
}

export default StatusFilter;

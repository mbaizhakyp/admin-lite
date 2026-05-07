function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input"
        type="text"
        value={searchTerm}
        placeholder="Search by customer name"
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;

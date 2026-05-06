function SearchBar() {
    return (
        <div className="search-bar">
            <label htmlFor="search-input">
                Search:
                <input type="text" placeholder="Start typing" />
            </label>
        </div>
    )
}

export default SearchBar
import React from "react";

function SearchBar({ setSearchValue, searchValue }) {
  return (
    <input
      className="mb-4 h-10 w-full rounded-md p-2 text-lg font-medium outline-0"
      type="text"
      placeholder="search..."
      id="search-bar"
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
    />
  );
}

export default SearchBar;

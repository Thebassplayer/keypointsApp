import React, { useState } from "react";

function SearchBar({ setSearchValue, searchValue }) {
  return (
    <input
      className="mb-4 h-10 w-full rounded-md p-3 text-lg font-medium shadow-lg outline-0"
      type="text"
      placeholder="search..."
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
    />
  );
}

export default SearchBar;

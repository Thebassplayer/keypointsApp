import React, { InputHTMLAttributes } from "react";

type SearchBarProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue?: string;
};

function SearchBar({
  setSearchValue,
  searchValue = "",
}: SearchBarProps): JSX.Element {
  const clearSearchInput = () => {
    setSearchValue("");
  };

  const handleOnChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="relative mb-4 h-10 w-full">
      <input
        className=" h-full w-full rounded-md p-2 text-lg font-medium outline-0"
        type="text"
        placeholder="search..."
        id="search-bar"
        value={searchValue}
        onChange={handleOnChange}
      />
      {searchValue && (
        <button
          className="absolute inset-y-0 right-0 w-10 rounded-r-md"
          onClick={clearSearchInput}
        >
          <span className="flex justify-center">
            <svg
              className="h-6 w-6 fill-current text-gray-400 hover:text-gray-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Clear</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default SearchBar;

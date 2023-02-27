import { useState, useEffect } from "react";

export const useSearch = (concepts, searchValue, tags, selectedTag) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = concepts
      .filter(
        ({ title }) =>
          title && title.toLowerCase().includes(searchValue.toLowerCase())
      )
      .filter(({ tags }) =>
        !selectedTag ? true : tags && tags.includes(selectedTag)
      );
    setSearchResults(results);
  }, [concepts, searchValue, tags]);

  return { searchResults };
};

import { useState, useEffect } from "react";

export const useSearch = (concepts, searchValue, tags) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = concepts.filter(({ title }) =>
      title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
  }, [concepts, searchValue]);

  useEffect(() => {
    const results = concepts.filter(({ tags }) => tags && tags.includes(tags));
    setSearchResults(results);
  }, [concepts, tags]);

  return { searchResults };
};

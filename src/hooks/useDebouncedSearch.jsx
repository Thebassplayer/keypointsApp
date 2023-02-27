import { useState, useEffect } from "react";

export const useDebouncedSearch = (
  concepts,
  searchValue,
  tags,
  selectedTag,
  delay
) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchValue && !selectedTag) {
      setSearchResults(concepts);
      return;
    }

    // Update debounced value after delay
    const handler = setTimeout(() => {
      const results = concepts
        .filter(
          ({ title }) =>
            title && title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter(({ tags }) =>
          !selectedTag ? true : tags && tags.includes(selectedTag)
        );
      setSearchResults(results);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [concepts, searchValue, tags, delay]);

  return { searchResults };
};

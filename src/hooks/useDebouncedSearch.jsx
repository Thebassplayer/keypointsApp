/**
 * UseDebouncedSearch hook perform a search on the concepts array. It receives 5 arguments:
 * @param {Array} concepts - Array of concepts
 * @param {String} searchValue - Value of the search input
 * @param {Array} tags - Array of tags
 * @param {String} selectedTag - Value of the selected tag
 * @param {Number} delay - Delay in milliseconds
 *
 * @returns {Object} - Object with the search results
 *
 * @file useDebouncedSearch.jsx
 */

import { useState, useEffect, useRef } from "react";

export const useDebouncedSearch = (
  concepts,
  searchValue,
  tags,
  selectedTag,
  delay
) => {
  const [searchResults, setSearchResults] = useState([]);
  const timeoutId = useRef(null);

  // Tag filter
  useEffect(() => {
    // If selectedTag is empty, return all concepts
    if (!selectedTag) {
      setSearchResults(concepts);
      return;
    }

    const resultsFilteredByTag = concepts.filter(({ tags }) =>
      !selectedTag ? true : tags && tags.includes(selectedTag)
    );
    setSearchResults(resultsFilteredByTag);
  }, [tags, selectedTag]);

  // Search filter
  useEffect(() => {
    // If searchValue is empty, return all concepts
    if (!searchValue) {
      setSearchResults(concepts);
      return;
    }

    // Update debounced value after delay
    timeoutId.current = setTimeout(() => {
      const resultsFilteredBySearch = concepts.filter(
        ({ title }) =>
          title && title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(resultsFilteredBySearch);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [concepts, searchValue, delay]);

  return { searchResults };
};

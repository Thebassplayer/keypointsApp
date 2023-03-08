import React from "react";

import { useSanityData } from "../contexts/SanityConceptsContext";
import { useTag } from "../contexts/selectedTagsContext";
import { useDebouncedSearch } from "../hooks/useDebouncedSearch";

import ConceptCard from "./ConceptCard.component";
import TableHeading from "./TableHeading.component";
import Spinner from "./Spinner.component";
import ErrorMessage from "./ErrorMessage.component";

import type { Concept } from "../hooks/useDebouncedSearch";

interface ConceptsListProps {
  searchValue: string;
}

const ConceptsList = ({ searchValue }: ConceptsListProps): JSX.Element => {
  const { concepts, globalTags, loading, error } = useSanityData();

  const selectedTag = useTag();
  const delay = 600;
  const { searchResults } = useDebouncedSearch({
    concepts,
    searchValue,
    selectedTag,
    delay,
  });

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="flex h-min w-full max-w-4xl flex-col overflow-hidden rounded-md bg-white">
      <TableHeading globalTags={globalTags} />
      <div className="w-full snap-y divide-y divide-[color:var(--color-300)] overflow-y-auto overscroll-none scroll-smooth rounded-b-md">
        {searchResults
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
          .map(({ _id, title, explanation, example, tags }) => {
            return (
              <ConceptCard
                key={_id}
                props={{ _id, title, explanation, example, tags } as Concept}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ConceptsList;

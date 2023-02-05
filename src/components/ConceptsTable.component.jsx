import React, { useEffect } from "react";

import { useSanityData } from "../contexts/SanityConceptsContext";
import { useTag } from "../contexts/selectedTagsContext";

import ConceptCard from "./ConceptCard.component";
import TableHeading from "./TableHeading.component";
import Spinner from "./Spinner.component";

const ConceptsList = ({ searchValue }) => {
  const { concepts, loading, error } = useSanityData();

  const selectedTag = useTag();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="continer py-8 text-center text-red-500">
        An error occurred: {error.message}
      </div>
    );
  }

  return (
    <div className="flex h-full max-w-4xl flex-col rounded-md bg-white">
      <TableHeading />
      <div className="w-full snap-y divide-y divide-[color:var(--color-300)] overflow-y-auto scroll-smooth rounded-b-md">
        {concepts
          .filter(({ title }) =>
            title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .filter(({ tags }) =>
            !selectedTag ? true : tags && tags.includes(selectedTag)
          )
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
          .map(({ _id, title, explanation, example, tags }) => {
            return (
              <ConceptCard
                key={_id}
                props={{ _id, title, explanation, example, tags }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ConceptsList;

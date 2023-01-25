import React from "react";

import { useSanityData } from "../contexts/SanityConceptsContext";

import ConceptCard from "./ConceptCard.component";
import TableHeading from "./TableHeading.component";

const ConceptsList = () => {
  const { concepts, loading, error } = useSanityData();

  if (loading) {
    return <div className="py-8 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="continer py-8 text-center text-red-500">
        An error occurred: {error.message}
      </div>
    );
  }

  return (
    <div className="mx-auto h-3/4 w-full max-w-4xl rounded-md bg-white">
      <TableHeading />
      <div className="h-full w-full divide-y divide-[color:var(--color-300)] overflow-y-auto">
        {concepts
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
          .map(({ title, explanation, example, tags, _id }) => {
            return (
              <ConceptCard
                key={_id}
                props={{ title, explanation, example, tags, _id }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ConceptsList;

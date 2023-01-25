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
    <div className="h-full w-full px-4 pt-16 ">
      <div className="mx-auto h-full w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-2 shadow-md">
        <TableHeading />
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

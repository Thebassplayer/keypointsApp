import React from "react";
import { useFetchConcepts } from "../hooks/useFetchConcepts";

import ConceptCard from "./ConceptCard.component";
import TableHeading from "./TableHeading.component";

const ConceptsList = () => {
  const { concepts, loading, error } = useFetchConcepts();

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        An error occurred: {error.message}
      </div>
    );
  }

  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white shadow-md p-2">
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

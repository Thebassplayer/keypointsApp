import React from "react";
import { useFetchConcepts } from "../hooks/useFetchConcepts";

import Concept from "./Concept.component";

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
        {concepts.map(({ title, explanation, example }, index) => (
          <Concept
            key={`${title.slice(0, 5)}-${index}`}
            props={{ title, explanation, example }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConceptsList;

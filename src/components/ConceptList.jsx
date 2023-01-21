import React from "react";
import { useFetchConcepts } from "../hooks/useFetchConcepts";

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
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-medium text-gray-200 mb-4">Concepts</h2>
      <ul>
        {concepts.map(concept => (
          <li key={concept.title} className="flex items-center mb-4">
            <div
              className="bg-cover h-12 w-12 rounded-full mr-4"
              style={{ backgroundImage: `url(${concept.imageUrl})` }}
            ></div>
            <div className="text-gray-200">
              <h3 className="text-lg font-medium">{concept.title}</h3>
              <p className="text-sm">{concept.explanation}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConceptsList;

import React, { createContext, useContext, useState } from "react";

import { useFetchSanityConcepts } from "../hooks/useFetchSanityConcepts";

const SanityConceptsContext = createContext();

export function useSanityData() {
  return useContext(SanityConceptsContext);
}

export function SanityDataProvider({ children }) {
  return (
    <SanityConceptsContext.Provider value={useFetchSanityConcepts()}>
      {children}
    </SanityConceptsContext.Provider>
  );
}

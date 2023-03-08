import React, { createContext, useContext } from "react";

import { useFetchSanityConcepts } from "../hooks/useFetchSanityConcepts";

const SanityConceptsContext = createContext<any>(null);

export function useSanityData() {
  return useContext(SanityConceptsContext);
}

interface SanityDataProviderProps {
  children: React.ReactNode;
}

export function SanityDataProvider({ children }: SanityDataProviderProps) {
  return (
    <SanityConceptsContext.Provider value={useFetchSanityConcepts()}>
      {children}
    </SanityConceptsContext.Provider>
  );
}

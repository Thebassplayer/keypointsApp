import React, { createContext, useContext, useState } from "react";

import { useFetchSanityConcepts } from "../hooks/useFetchSanityConcepts";

const SanityContext = createContext();

export function useSanityData() {
  return useContext(SanityContext);
}

export function SanityDataProvider({ children }) {
  return (
    <SanityContext.Provider value={useFetchSanityConcepts()}>
      {children}
    </SanityContext.Provider>
  );
}

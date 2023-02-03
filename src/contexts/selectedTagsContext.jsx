import React, { createContext, useContext, useState } from "react";

const GetSelectedTagsContext = createContext();
const SetSelectedTagsContext = createContext();

export function useTag() {
  return useContext(GetSelectedTagsContext);
}

export function useTagUpdate() {
  return useContext(SetSelectedTagsContext);
}

export function TagProvider({ children }) {
  const [tag, setTag] = useState("");

  const updateTag = selectedTag => {
    setTag(selectedTag);
  };

  return (
    <GetSelectedTagsContext.Provider value={tag}>
      <SetSelectedTagsContext.Provider value={updateTag}>
        {children}
      </SetSelectedTagsContext.Provider>
    </GetSelectedTagsContext.Provider>
  );
}

import React, { createContext, useContext, useState } from "react";

const GetSelectedTagsContext = createContext<string>("");
const SetSelectedTagsContext = createContext((selectedTag: string) => {});

export function useTag() {
  return useContext(GetSelectedTagsContext);
}

export function useTagUpdate() {
  return useContext(SetSelectedTagsContext);
}

interface TagProviderProps {
  children: React.ReactNode;
}

export function TagProvider({ children }: TagProviderProps) {
  const [tag, setTag] = useState("");

  const updateTag = (selectedTag: React.SetStateAction<string>) => {
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

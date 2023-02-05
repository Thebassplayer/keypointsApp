import React from "react";
import { useTagUpdate } from "../contexts/selectedTagsContext";

function TagSelector({ globalTags }) {
  const updateTag = useTagUpdate();

  return (
    <>
      <select
        className="h-min w-min rounded-sm text-xs text-lime-700 outline-0"
        name="tags"
        id="tags"
        onChange={e => updateTag(e.target.value)}
      >
        <option value="">all</option>
        {globalTags.map(tag => (
          <option value={tag}>{tag}</option>
        ))}
      </select>
    </>
  );
}

export default TagSelector;

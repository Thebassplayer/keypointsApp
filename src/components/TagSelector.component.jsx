import React from "react";
import { useTagUpdate } from "../contexts/selectedTagsContext";

function TagSelector() {
  const updateTag = useTagUpdate();

  return (
    <>
      <select
        className="h-min w-min rounded-sm text-black outline-0"
        name="tags"
        id="tags"
        onChange={e => updateTag(e.target.value)}
      >
        <option value="">tag</option>
        <option value="javascript">javascript</option>
      </select>
    </>
  );
}

export default TagSelector;

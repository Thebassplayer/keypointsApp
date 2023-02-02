import React from "react";

function TagSelector() {
  return (
    <>
      <select
        className="h-min w-min rounded-sm text-black"
        name="tags"
        id="tags"
      >
        <option value="">tag</option>
        <option value="javascript">javascript</option>
      </select>
    </>
  );
}

export default TagSelector;

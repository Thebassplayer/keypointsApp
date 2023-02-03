import React from "react";

function TagSelector() {
  return (
    <>
      <select
        className="h-min w-min rounded-sm text-black outline-0"
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

import React from "react";

import TagSelector from "./TagSelector.component";

function TableHeading() {
  return (
    <div className="flex w-full justify-between rounded-t-md bg-[color:var(--color-900)] px-4 py-3 text-left text-lg font-medium text-[color:var(--color-50)] ">
      <span className="">Concept</span>

      <span className="mr-20">
        <TagSelector />
      </span>
    </div>
  );
}

export default TableHeading;

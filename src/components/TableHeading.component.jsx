import React from "react";

import TagSelector from "./TagSelector.component";

function TableHeading({ globalTags }) {
  return (
    <div className="flex w-full justify-between rounded-t-md bg-[color:var(--color-900)] px-4 py-3  text-base font-medium text-[color:var(--color-50)] ">
      <span className="">Concept</span>

      <span className="mr-8">
        <TagSelector globalTags={globalTags} />
      </span>
    </div>
  );
}

export default TableHeading;

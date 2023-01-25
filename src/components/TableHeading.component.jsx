import React from "react";

function TableHeading() {
  return (
    <div className="flex w-full rounded-t-md bg-[color:var(--color-900)] px-4 py-3 text-left text-lg font-medium text-[color:var(--color-50)] ">
      <span className="w-full">Concept</span>
      <span className="mr-20">Tags</span>
    </div>
  );
}

export default TableHeading;

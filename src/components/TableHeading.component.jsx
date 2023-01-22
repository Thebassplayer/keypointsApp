import React from "react";

function TableHeading() {
  return (
    <div className="flex w-full rounded-lg bg-lime-900 px-4 py-3 text-left text-lg font-medium text-lime-100 ">
      <span className="w-full">Concept</span>
      <span className="mr-20">Tags</span>
    </div>
  );
}

export default TableHeading;

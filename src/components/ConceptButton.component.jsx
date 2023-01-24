import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function ConceptButton({ title, tags }) {
  return (
    <Disclosure.Button className="flex w-full rounded-lg bg-[color:var(--color-100)] px-4 py-2 text-left text-lg font-medium text-color-black hover:bg-[color:var(--color-hover)] focus:outline-none focus-visible:ring focus-visible:ring-[color:var(--color-500)] focus-visible:ring-opacity-75">
      <span className="w-full">{title}</span>
      <span className="text-xs mr-16 my-auto text-lime-700">{tags}</span>
      <ChevronUpIcon
        className={`${
          open ? "rotate-180 transform" : ""
        } h-5 w-5 text-color-black my-auto`}
      />
    </Disclosure.Button>
  );
}

export default ConceptButton;

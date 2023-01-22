import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function ConceptButton({ title }) {
  return (
    <Disclosure.Button className="flex w-full rounded-lg bg-lime-100 px-4 py-2 text-left text-lg font-medium text-lime-900 hover:bg-lime-200 focus:outline-none focus-visible:ring focus-visible:ring-lime-500 focus-visible:ring-opacity-75">
      <span className="w-full">{title}</span>
      <span className="mr-16">Tags</span>
      <ChevronUpIcon
        className={`${
          open ? "rotate-180 transform" : ""
        } h-5 w-5 text-lime-500 my-auto`}
      />
    </Disclosure.Button>
  );
}

export default ConceptButton;

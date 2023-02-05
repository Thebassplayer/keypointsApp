import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function ConceptButton({ title, tags }) {
  return (
    <Disclosure.Button className="text-color-black flex w-full bg-[color:var(--color-100)] px-4 py-2 text-left text-lg font-medium hover:bg-[color:var(--color-hover)] focus:outline-none focus-visible:ring focus-visible:ring-[color:var(--color-500)] focus-visible:ring-opacity-75">
      <span className="w-full">{title}</span>
      <span className="my-auto mr-16 w-min text-xs text-lime-700">
        {tags ? tags.join(" ") : ""}
      </span>
      <ChevronUpIcon
        className={`${
          open ? "rotate-180 transform" : ""
        } text-color-black my-auto h-5 w-5`}
      />
    </Disclosure.Button>
  );
}

export default ConceptButton;

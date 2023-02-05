import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function ConceptButton({ title, tags, isOpen }) {
  return (
    <Disclosure.Button className="text-color-black flex w-full items-center bg-[color:var(--color-100)] px-4 py-2 text-left text-base font-medium hover:bg-[color:var(--color-hover)] focus:outline-none focus-visible:ring focus-visible:ring-[color:var(--color-500)] focus-visible:ring-opacity-75">
      <span className="w-full">{title}</span>
      <span className="my-auto mr-8 w-min text-xs text-lime-700">
        {tags ? tags.join(" ") : ""}
      </span>
      <span>
        <ChevronDownIcon
          className={`${
            isOpen
              ? "rotate-180 transform transition duration-200"
              : "transform transition duration-200"
          } h-5 w-5`}
        />
      </span>
    </Disclosure.Button>
  );
}

export default ConceptButton;

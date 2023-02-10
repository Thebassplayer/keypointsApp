import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function ConceptButton({ title, tags, isOpen }) {
  const buttonBackgroundColor = isOpen
    ? "bg-[color:var(--color-active)]"
    : "bg-[color:var(--color-100)] hover:bg-[color:var(--color-hover)]";
  return (
    <Disclosure.Button
      className={`text-color-black flex w-full items-center px-4 py-2 text-left text-base font-medium ${buttonBackgroundColor} focus:outline-none`}
    >
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

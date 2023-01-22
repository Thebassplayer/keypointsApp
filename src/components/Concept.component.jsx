import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import React from "react";

function Concept({ props }) {
  const { title, explanation } = props;
  return (
    <Disclosure as="div" className="mt-4 ">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-lime-100 px-4 py-2 text-left text-lg font-medium text-lime-900 hover:bg-lime-200 focus:outline-none focus-visible:ring focus-visible:ring-lime-500 focus-visible:ring-opacity-75">
            <span>{title}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-lime-500 my-auto`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            {explanation}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Concept;

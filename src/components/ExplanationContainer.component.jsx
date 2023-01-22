import React from "react";

import { Disclosure } from "@headlessui/react";

function ExplanationContainer({ explanation }) {
  return (
    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
      {explanation}
    </Disclosure.Panel>
  );
}

export default ExplanationContainer;

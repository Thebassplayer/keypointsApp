import React from "react";

import { Disclosure } from "@headlessui/react";
import ExampleCode from "./ExampleCode.component";
function ExplanationContainer({ explanation, example, id }) {
  return (
    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
      <div>{explanation}</div>
      <ExampleCode example={example} id={id} />
    </Disclosure.Panel>
  );
}

export default ExplanationContainer;

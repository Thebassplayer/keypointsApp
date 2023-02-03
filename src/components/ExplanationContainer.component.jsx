import React from "react";

import { Disclosure } from "@headlessui/react";
import ExampleCodeContainer from "./ExampleCodeContainer.component";
import StackBlitzCode from "./StackblitzCode.component";
function ExplanationContainer({ title, explanation, example, id }) {
  return (
    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
      <div>{explanation}</div>
      {example ? <ExampleCodeContainer example={example} /> : ""}
      <StackBlitzCode example={example} id={id} title={title} />
    </Disclosure.Panel>
  );
}

export default ExplanationContainer;

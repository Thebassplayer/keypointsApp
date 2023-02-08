import React from "react";
import { PortableText } from "@portabletext/react";
import SanityCodehighlighted from "./SanityCodeHighlighted/SanityCodeHighlighted.component";

import { Disclosure } from "@headlessui/react";
import ExampleCodeContainer from "./ExampleCodeContainer.component";
import StackBlitzCode from "./StackblitzCode.component";
function ExplanationContainer({ props }) {
  const { _id, title, explanation, example } = props;

  const sanityCode = ({ value }) =>
    value && <SanityCodehighlighted language="js" code={value.code} />;
  const sanityComponents = {
    types: {
      code: sanityCode,
    },
  };

  return (
    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
      {explanation && (
        <div className="prose max-w-none pb-2">
          <PortableText value={explanation} components={sanityComponents} />
        </div>
      )}
      {example ? <ExampleCodeContainer example={example} /> : ""}
      <StackBlitzCode example={example} id={_id} title={title} />
    </Disclosure.Panel>
  );
}

export default ExplanationContainer;

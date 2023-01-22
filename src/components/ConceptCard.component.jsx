import { Disclosure } from "@headlessui/react";

import ConceptButton from "./ConceptButton.component";
import ExplanationContainer from "./ExplanationContainer.component";

import React from "react";

function Concept({ props }) {
  const { title, explanation } = props;
  return (
    <Disclosure as="div" className="mt-4 ">
      {({ open }) => (
        <>
          <ConceptButton title={title} />
          <ExplanationContainer explanation={explanation} />
        </>
      )}
    </Disclosure>
  );
}

export default Concept;

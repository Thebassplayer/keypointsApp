import { Disclosure } from "@headlessui/react";

import ConceptButton from "./ConceptButton.component";
import ExplanationContainer from "./ExplanationContainer.component";

import React from "react";

function ConceptCard({ props }) {
  const { title, explanation, example, tags, _id } = props;

  return (
    <Disclosure as="div" className="mt-4">
      {({ open }) => (
        <>
          <ConceptButton title={title} tags={tags} />
          <ExplanationContainer
            explanation={explanation}
            example={example}
            id={_id}
          />
        </>
      )}
    </Disclosure>
  );
}

export default ConceptCard;

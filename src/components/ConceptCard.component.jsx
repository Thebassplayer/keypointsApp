import { Disclosure } from "@headlessui/react";

import ConceptButton from "./ConceptButton.component";

import ExplanationContainer from "./ExplanationContainer.component";

import React from "react";

function ConceptCard({ props }) {
  const { title, explanation, example, tags, _id } = props;

  return (
    <Disclosure as="div" className="snap-start">
      {({ open }) => (
        <>
          <ConceptButton title={title} tags={tags} />
          <ExplanationContainer
            title={title}
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

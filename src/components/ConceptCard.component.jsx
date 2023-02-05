import { Disclosure } from "@headlessui/react";

import ConceptButton from "./ConceptButton.component";

import ExplanationContainer from "./ExplanationContainer.component";

import React from "react";

function ConceptCard({ props }) {
  const { title, tags } = props;

  return (
    <Disclosure as="div" className="snap-start">
      {({ open }) => (
        <>
          <ConceptButton title={title} tags={tags} />
          <ExplanationContainer props={{ ...props }} />
        </>
      )}
    </Disclosure>
  );
}

export default ConceptCard;

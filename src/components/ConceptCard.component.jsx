import { Disclosure } from "@headlessui/react";

import ConceptButton from "./ConceptButton.component";

import ExplanationContainer from "./ExplanationContainer.component";

import React from "react";

function ConceptCard({ props }) {
  const { title, tags } = props;

  return (
    <Disclosure as="div" className="snap-start">
      {({ open }) => (
        <div
          className={open ? "border border-[color:var(--color-active)]" : ""}
        >
          <ConceptButton title={title} tags={tags} isOpen={open} />
          <ExplanationContainer props={{ ...props }} />
        </div>
      )}
    </Disclosure>
  );
}

export default ConceptCard;

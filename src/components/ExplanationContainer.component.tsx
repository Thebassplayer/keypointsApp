import { PortableText } from "@portabletext/react";
import SanityCodehighlighted from "./SanityCodeHighlighted/SanityCodeHighlighted.component";

import { Disclosure } from "@headlessui/react";
import ExampleCodeContainer from "./ExampleCodeContainer.component";
import StackBlitzCode from "./StackblitzCode.component";

interface ExplanationContainerProps {
  props: {
    _id: string;
    title: string;
    explanation: any;
    example: any;
  };
}

function ExplanationContainer({ props }: ExplanationContainerProps) {
  const { _id, title, explanation, example } = props;

  const sanityCode = ({ value }: any) =>
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
          <PortableText
            // style={{ "p > code": { color: "red" } }}
            value={explanation}
            components={sanityComponents}
          />
        </div>
      )}
      {example ? <ExampleCodeContainer example={example} /> : ""}
      <StackBlitzCode example={example} id={_id} title={title} />
    </Disclosure.Panel>
  );
}

export default ExplanationContainer;

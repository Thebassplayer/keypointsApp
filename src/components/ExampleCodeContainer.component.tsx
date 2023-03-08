import React from "react";

interface ExampleCodeContainerProps {
  example: any;
}

function ExampleCodeContainer({
  example,
}: ExampleCodeContainerProps): JSX.Element {
  return (
    <div className="w-full bg-[color:var(--color-100)] p-4">
      <p>{example}</p>
    </div>
  );
}

export default ExampleCodeContainer;

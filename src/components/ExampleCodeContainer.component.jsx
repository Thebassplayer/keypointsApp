import React from "react";

function ExampleCodeContainer({ example }) {
  return (
    <div className="bg-[color:var(--color-100)] p-4">
      <pre>{example}</pre>
    </div>
  );
}

export default ExampleCodeContainer;

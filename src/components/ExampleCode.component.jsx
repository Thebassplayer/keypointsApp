import React, { useEffect } from "react";

import embedProject from "../utils/stackblitz/embedCode.utils";

function ExampleCode({ example, id }) {
  if (example) {
    useEffect(() => {
      embedProject(example, id);
    }, []);
  }

  return <>{example ? <div id={`embed-${id}`} className="pt-4"></div> : ""}</>;
}

export default ExampleCode;

import React, { useEffect } from "react";

import embedProject from "../utils/stackblitz/embedCode.utils";

function ExampleCode({ example, id }) {
  if (example) {
    useEffect(() => {
      console.log("id: ", id);
      embedProject(example, id);
    }, []);
  }

  return <>{example ? <div id={`embed-${id}`} className="pt-4"></div> : ""}</>;
}

export default ExampleCode;

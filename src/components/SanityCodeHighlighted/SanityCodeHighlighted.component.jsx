import React from "react";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";

import "./SanityCodeHighlighted.styles.css";

// Then register them
Refractor.registerLanguage(js);

function SanityCodehighlighted({ code, language }) {
  return <Refractor language={language} value={code} />;
}

export default SanityCodehighlighted;

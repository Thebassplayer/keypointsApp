import React from "react";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";

import "./SanityCodeHighlighted.styles.css";

// Then register them
Refractor.registerLanguage(js);

interface SanityCodehighlightedProps {
  code: string;
  language: string;
}

function SanityCodehighlighted({ code, language }: SanityCodehighlightedProps) {
  return <Refractor language={language} value={code} />;
}

export default SanityCodehighlighted;

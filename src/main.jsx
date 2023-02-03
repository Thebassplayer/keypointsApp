import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { SanityDataProvider } from "./contexts/SanityConceptsContext";
import { TagProvider } from "./contexts/selectedTagsContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SanityDataProvider>
      <TagProvider>
        <App />
      </TagProvider>
    </SanityDataProvider>
  </React.StrictMode>
);

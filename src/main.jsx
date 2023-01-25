import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { SanityDataProvider } from "./contexts/sanityContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SanityDataProvider>
      <App />
    </SanityDataProvider>
  </React.StrictMode>
);

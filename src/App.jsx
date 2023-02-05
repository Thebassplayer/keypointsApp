import { useState } from "react";

import Heading from "./components/Heading.component";
import SearchBar from "./components/SearchBar.component";
import ConceptsTable from "./components/ConceptsTable.component";

import "./index.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-start overflow-hidden bg-[color:var(--color-600)] p-4">
      <div className="container flex h-3/4 w-full min-w-min max-w-4xl flex-col items-center">
        <Heading />
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
        <ConceptsTable searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;

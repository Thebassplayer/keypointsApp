import { useState } from "react";

import Nav from "./components/Nav.component";
import SearchBar from "./components/SearchBar.component";
import ConceptsTable from "./components/ConceptsTable.component";

import "./index.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-start overflow-hidden bg-[color:var(--color-600)] p-4">
      <div className="container h-3/4 w-full min-w-min max-w-4xl">
        <Nav />
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
        <ConceptsTable searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;

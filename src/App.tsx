import { useState } from "react";

import Heading from "./components/Heading.component";
import SearchBar from "./components/SearchBar.component";
import ConceptsTable from "./components/ConceptsTable.component";
import Footer from "./components/Footer.component";

import "./index.css";

function App(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between bg-[color:#242424] pt-4">
      <div className="container flex h-full w-full min-w-min max-w-4xl flex-col items-center overflow-hidden px-2">
        <Heading />
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
        <ConceptsTable searchValue={searchValue} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

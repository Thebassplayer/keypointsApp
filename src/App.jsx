import "./index.css";

import ConceptsTable from "./components/ConceptsTable.component";
import Nav from "./components/nav.component";

function App() {
  return (
    <div className="flex w-full flex-col bg-[color:var(--color-600)]">
      <Nav />
      <ConceptsTable />
    </div>
  );
}

export default App;

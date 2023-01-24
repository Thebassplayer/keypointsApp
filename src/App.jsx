import "./index.css";

import ConceptsTable from "./components/ConceptsTable.component";
import Head from "./components/Nav.component";

function App() {
  return (
    <div className="w-full flex flex-col bg-[color:var(--color-600)]">
      <Head />
      <ConceptsTable />
    </div>
  );
}

export default App;

import "./index.css";

import ConceptsTable from "./components/ConceptsTable.component";
import Nav from "./components/nav.component";

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start overflow-hidden bg-[color:var(--color-600)] p-4">
      <Nav />
      <ConceptsTable />
    </div>
  );
}

export default App;

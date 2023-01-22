import "./index.css";

import ConceptsTable from "./components/ConceptsTable.component";
import Nav from "./components/nav.component";

function App() {
  return (
    <div className="w-full">
      <Nav />
      <ConceptsTable />
    </div>
  );
}

export default App;

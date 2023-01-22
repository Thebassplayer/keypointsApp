import "./index.css";

import ConceptsTable from "./components/ConceptsTable.component";
import Head from "./components/Head.component";

function App() {
  return (
    <div className="w-full">
      <Head />
      <ConceptsTable />
    </div>
  );
}

export default App;

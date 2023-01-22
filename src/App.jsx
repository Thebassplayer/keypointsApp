import "./index.css";

import ConceptsList from "./components/ConceptList.component";
import Nav from "./components/nav.component";

function App() {
  return (
    <div className="w-full">
      <Nav />
      <ConceptsList />
    </div>
  );
}

export default App;

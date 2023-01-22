import "./index.css";

import ConceptsList from "./components/ConceptList";
import Nav from "./components/nav.component";

function App() {
  return (
    <div className="bg-gradient-to-r-darkpurple-orange">
      <Nav />
      <ConceptsList />
    </div>
  );
}

export default App;

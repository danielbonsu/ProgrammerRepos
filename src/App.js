import NavbarComponent from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ProgrammerReposState from "./context/ProgrammersReposState";

import "./App.css";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ProgrammerReposState>
        <NavbarComponent />
        <Header />
      </ProgrammerReposState>
    </div>
  );
}

export default App;

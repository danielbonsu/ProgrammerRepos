import NavbarComponent from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ProgrammerReposState from "./context/ProgrammersReposState";
import UsersDisplayContainer from "./components/UserUI/container/UsersDisplayContainer";

import "./App.css";
import { Container, Nav } from "react-bootstrap";
import { useEffect } from "react";
const  App = () => {

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <ProgrammerReposState>
        <NavbarComponent />
        <Header />
        <UsersDisplayContainer />
  
      </ProgrammerReposState>
    </div>
  );
}

export default App;

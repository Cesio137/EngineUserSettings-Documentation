import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const activeLink:string = useLocation().pathname;

  return (
    <div className="App">
      <header className="App-header">

        <Navbar className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} className={"fw-bold"} to={'/'}>EngineUserSettings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className={activeLink === '/' || activeLink === null ? 'nav-link fw-bold active' : 'nav-link fw-bold'} to={"/"}>Home</NavLink>
                <NavLink className={activeLink === 'setup' ? 'nav-link fw-bold active' : 'nav-link fw-bold'} to={"setup"}>Setup</NavLink>
                <NavLink className={activeLink === 'documentation' ? 'nav-link fw-bold active' : 'nav-link fw-bold'} to={"documentation/intro"}>Documentation</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Outlet/>
        

        <footer className="mt-auto text-white-50 fixed-bottom">
          <p>Plugin made by <a href="https://github.com/Cesio137" target={"_blank"} className="text-white">Nathan Miguel</a>!</p>
        </footer>

      </header>
    </div>
  );
}

export default App;

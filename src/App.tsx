import React from 'react';
import { useState, useRef } from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import logo from './logo.svg';
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
                <NavDropdown className={activeLink === 'ue4' ? 'fw-bold' : 'fw-bold'} title="Features" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"features"}>UE4</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"ue5"}>UE5</NavDropdown.Item>
                </NavDropdown>
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

import React from 'react';
import { useState, useRef } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Outlet, useLocation} from "react-router";
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';



function Root() {
  const activeLink:string = useLocation().pathname;

  return (
     <div className="App">
      <header className="App-header">
        <Navbar className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand className={"fw-bold"} href={"/"}>EngineUserSettings</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className={activeLink === '/' || activeLink === null ? 'fw-bold active' : 'fw-bold'} href={"/"}>Home</Nav.Link>
                <Nav.Link className={activeLink === '/setup' ? 'fw-bold active' : 'fw-bold'} href="setup">Setup</Nav.Link>
                <NavDropdown className={"fw-bold"} title="Features" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">UE4</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">UE5</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Outlet/>

        <footer className="mt-auto text-white-50 fixed-bottom">
          <p>Plugin made by <a href="https://github.com/Cesio137" target={"_blank"} className="text-white">Nathan Miguel</a>!</p>
        </footer>
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       */}
      </header>
    </div>
    );
}

export default Root;
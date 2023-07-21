import React from 'react';
import { useState, useRef } from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function UE4() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
            <Container>
                <Navbar.Brand as={Link} to="/" className="mb-3">
                Logo da sua empresa
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="sidebar-nav" />
                <Navbar.Collapse id="sidebar-nav">
                <Nav className="flex-column">
                    <Nav.Link as={Link} to="/" className="mb-2">
                    Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className="mb-2">
                    Sobre
                    </Nav.Link>
                    <NavDropdown title="Produtos" id="produtos-dropdown" className="mb-2">
                    <NavDropdown.Item as={Link} to="/produtos/produto1">
                        Produto 1
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/produtos/produto2">
                        Produto 2
                    </NavDropdown.Item>
                    </NavDropdown>
                    {/* Adicione mais links aqui, conforme necessário */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default UE4;

import React, { useState } from 'react';
import {Button, Container, Nav, Navbar, Dropdown, Row, Col, Collapse} from "react-bootstrap";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import logo from '../../logo.svg';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Documentation() {
    const activeLink:string = useLocation().pathname;
    const [open, setOpen] = useState(false);

    return (
    <div className="bg-purple">
        <header className="" data-bs-theme="dark">
            <Navbar expand="lg" className="bg-body-tertiary">
                <div className={"navbar-inner"}>
                    <Navbar.Brand as={Link} className={"fw-bold"} to={"intro"}>Documentation</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={activeLink === '../' || activeLink === null ? 'nav-link fw-bold active' : 'nav-link fw-bold'} to={"../"}>Home</NavLink>
                            <NavLink className={activeLink === 'setup' ? 'nav-link fw-bold active' : 'nav-link fw-bold'} to={"../setup"}>Setup</NavLink>
                            <NavLink className={'nav-link fw-bold active'} to={"intro"}>Documentation</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <Container fluid>
                <Row>
                <Col className={"bg-dark"} sm={2}>
                    {/* Botão para abrir/fechar a subnavbar em telas menores */}
                    <Button className="btn btn-secondary d-lg-none mt-2" aria-controls="subnavbar" aria-expanded={open} onClick={() => setOpen(!open)}>
                        <span className="navbar-toggler-icon"></span>
                    </Button>

                    {/* Subnavbar */}
                    <Collapse in={open} className="d-lg-block">
                        <Nav className="flex-column">
                            <Nav.Link className={"fw-semibold"} as={Link} to="intro">Intro</Nav.Link>
                            <Nav className={"text-white fw-semibold"}>UE4 DOC</Nav>
                            <Nav.Link className={"fw-semibold"} as={Link} to="/contact">RHI</Nav.Link>
                            <Nav.Link className={"fw-semibold"} as={Link} to="/contact">Render</Nav.Link>
                            <Nav className={"text-white fw-semibold"}>UE5 DOC</Nav>
                            <Nav.Link className={"fw-semibold"} as={Link} to="/contact">RHI</Nav.Link>
                            <Nav.Link className={"fw-semibold"} as={Link} to="/contact">Shaders</Nav.Link>
                            <Nav.Link className={"fw-semibold"} as={Link} to="/contact">Render</Nav.Link>
                            {/* Adicione mais links conforme necessário */}
                        </Nav>
                    </Collapse>
                </Col>
                <Col sm={9}>
                    <Outlet/>
                </Col>
                </Row>
            </Container>
        </header>
    </div>
    );
}

export default Documentation;
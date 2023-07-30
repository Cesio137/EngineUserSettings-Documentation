import React from 'react';
import { useState, useRef } from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown, Table } from 'react-bootstrap'
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import logo from '../../logo.svg';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Intro() {
  return (
      <div className="App">
          <header className="App-header-documentation">
              <h1 className={"fw-bold"}>Intro</h1>
              <h5 className={"text-start"}>Fortnite has certain options to change the graphic API and Feature Levels. There was no way to change them via blueprint and have it work in-game. The EngineUserSettings plugin was created so that you can change and save these options in the easiest way possible.</h5>
              <Container className={"Alingn-Center"}>
                  <Table className={"w-75"} striped bordered hover>
                    <thead>
                        <tr>
                        <th>Features</th>
                        <th>UE4</th>
                        <th>UE5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>RHI</td>
                        <td>☑</td>
                        <td>☑</td>
                        </tr>
                        <tr>
                        <td>Features Level</td>
                        <td>❌</td>
                        <td>☑</td>
                        </tr>
                        <tr>
                        <td>Render</td>
                        <td colSpan={2}>☑</td>
                        </tr>
                    </tbody>
                    </Table>
              </Container>
          </header>
      </div>
  );
}

export default Intro;

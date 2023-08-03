import React from 'react';
import { useState, useRef } from 'react';
import { Container, Col, Image, Table, ListGroup } from 'react-bootstrap'
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import SearchNode from '../../media/img/ue4/1.png';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Intro() {
  return (
      <div className="App">
          <header className="App-header-documentation">
              <h1 className={"fw-bold"}>Intro</h1>
              <h5 className={"text-start"}>Fortnite has certain options to change the graphic API and Feature Levels. There was no way to change them via blueprint and have it work in-game. The EngineUserSettings plugin was created so that you can change and save these options in the easiest way possible.</h5>
              <h3 className={"fw-bold p-top-5"}>How to find nodes?</h3>
              <ListGroup>
                  <ListGroup.Item className={"text-start"}>1. Click with right mouse button to open BP search.</ListGroup.Item>
                  <ListGroup.Item className={"text-start"}>2. Then scroll down until you find the "EngineUserSettings" section.</ListGroup.Item>
                  <ListGroup.Item className={"text-center"}> <Image src={SearchNode} rounded /> </ListGroup.Item>
              </ListGroup>
              <h3 className={"fw-bold p-top-5"}>Features</h3>
              <Container className={""}>
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
                        <td>☑</td>
                        <td>☑</td>
                        </tr>
                    </tbody>
                    </Table>
              </Container>
          </header>
      </div>
  );
}

export default Intro;

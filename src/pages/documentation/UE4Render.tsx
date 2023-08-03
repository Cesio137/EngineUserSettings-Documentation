import React from 'react';
import { useState, useRef } from 'react';
import {Accordion, Image} from 'react-bootstrap'
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import setaamethod from '../../media/img/ue4/5.png';
import getaamethod from '../../media/img/ue4/6.png';
import setmsaaquality from '../../media/img/ue4/7.png';
import getmsaaquality from '../../media/img/ue4/8.png';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function UE4Render() {
  return (
      <div className="App">
          <header className="App-header-documentation">
              <h1 className={"fw-bold"}>UE4 Render</h1>
              <h5 className={"text-start"}>Enable or disable some render features to optimize your game.</h5>
              <h3 className={"fw-bold p-top-5"}>Nodes</h3>
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                      <Accordion.Header className={"fw-bold"}>Set | Get AAMethod</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Change Antialiasing method ( None, FXAA, MSAA, TAA ).</h6>
                          <Image src={setaamethod} rounded />
                          <Image className={"p-left-2"} src={getaamethod} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                      <Accordion.Header className={"fw-bold"}>Set | Get MSAA Quality</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Change MSAA quality ( 0x, 2x, 4x, 8x ).</h6>
                          <Image src={setmsaaquality} rounded />
                          <Image className={"p-left-2"} src={getmsaaquality} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </header>
      </div>
  );
}

export default UE4Render;

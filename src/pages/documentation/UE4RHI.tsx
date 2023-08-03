import React from 'react';
import { useState, useRef } from 'react';
import {Accordion, Image} from 'react-bootstrap'
import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
import setrhi from '../../media/img/ue4/2.png';
import getrhi from '../../media/img/ue4/3.png';
import getpreferredrhi from '../../media/img/ue4/4.png';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function UE4RHI() {
  return (
      <div className="App">
          <header className="App-header-documentation">
              <h1 className={"fw-bold"}>UE4 RHI</h1>
              <h5 className={"text-start"}>RHI mean Render Hardware Interface, responsible for handling the graphics APIs (DX11, DX12, VULKAN).</h5>
              <h3 className={"fw-bold p-top-5"}>Nodes</h3>
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                      <Accordion.Header className={"fw-bold"}>Set Preferred RHI</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Change between DX11, DX12 or VULKAN.</h6>
                          <Image src={setrhi} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                      <Accordion.Header className={"fw-bold"}>Get Current RHI</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Show if game is running using DX11, DX12 or VULKAN.</h6>
                          <Image src={getrhi} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                      <Accordion.Header className={"fw-bold"}>Get Preferred RHI</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Show if game will use DX11, DX12 or VULKAN after restart.</h6>
                          <Image src={getpreferredrhi} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </header>
      </div>
  );
}

export default UE4RHI;

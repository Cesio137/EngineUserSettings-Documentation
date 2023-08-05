import React from 'react';
import {Accordion, Image} from 'react-bootstrap'
import setfl from '../../media/img/ue5/1.png';
import getfl from '../../media/img/ue5/2.png';
import getpreferredfl from '../../media/img/ue5/3.png';
import getmaxfl from '../../media/img/ue5/4.png';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function UE5Shaders() {
  return (
      <div className="App">
          <header className="App-header-documentation">
              <h1 className={"fw-bold"}>UE5 Feature Level</h1>
              <h5 className={"text-start"}>Feature Level mean the Shaders version, allowing you to enable specific features like nanite, performance mode and more.</h5>
              <h3 className={"fw-bold p-top-5"}>Nodes</h3>
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                      <Accordion.Header className={"fw-bold"}>Set Feature Level</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Change between Shaders 5, 6 and Performance Mode.</h6>
                          <Image src={setfl} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                      <Accordion.Header className={"fw-bold"}>Get Current Feature Level</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Show if game is running using Shaders 5, 6 or Performance Mode.</h6>
                          <Image src={getfl} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                      <Accordion.Header className={"fw-bold"}>Get Preferred Feature Level</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Show if game will use Shaders 5, 6 or Performance Mode after restart.</h6>
                          <Image src={getpreferredfl} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                      <Accordion.Header className={"fw-bold"}>Get Max Feature Level</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Get max Feature Level supported by current hardware.</h6>
                          <Image src={getmaxfl} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </header>
      </div>
  );
}

export default UE5Shaders;

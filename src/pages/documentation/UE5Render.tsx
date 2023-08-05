import React from 'react';
import {Accordion, Image} from 'react-bootstrap'
import setaamethod from '../../media/img/ue4/5.png';
import getaamethod from '../../media/img/ue4/6.png';
import setmsaaquality from '../../media/img/ue4/7.png';
import getmsaaquality from '../../media/img/ue4/8.png';
import setgi from '../../media/img/ue5/5.png';
import getgi from '../../media/img/ue5/6.png';
import setrm from '../../media/img/ue5/7.png';
import getrm from '../../media/img/ue5/8.png';
import setsm from '../../media/img/ue5/9.png';
import getsm from '../../media/img/ue5/10.png';
import setao from '../../media/img/ue4/11.png';
import getao from '../../media/img/ue4/12.png';
import setbloom from '../../media/img/ue4/13.png';
import getbloom from '../../media/img/ue4/14.png';
import setlensflare from '../../media/img/ue4/15.png';
import getlensflare from '../../media/img/ue4/16.png';
import setmotionblur from '../../media/img/ue4/17.png';
import getmotionblur from '../../media/img/ue4/18.png';
import setnanite from '../../media/img/ue5/11.png';
import getnanite from '../../media/img/ue5/12.png';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function UE5Render() {
  return (
      <div className="App">
          <header className="App-header-documentation">
              <h1 className={"fw-bold"}>UE5 Render</h1>
              <h5 className={"text-start"}>Enable or disable some render features to optimize your game.</h5>
              <h3 className={"fw-bold p-top-5"}>Nodes</h3>
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                      <Accordion.Header className={"fw-bold"}>Set | Get AAMethod</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Change Antialiasing method ( None, FXAA, MSAA, TAA, TSR ).</h6>
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
                  <Accordion.Item eventKey="2">
                      <Accordion.Header className={"fw-bold"}>Set | Get Global Illumination Method</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Change Global Illumination method ( Lumen, SSR, Raytraced, None ).</h6>
                          <Image src={setgi} rounded />
                          <Image className={"p-left-2"} src={getgi} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                      <Accordion.Header className={"fw-bold"}>Set | Get Reflection Method</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Change the reflection method ( Lumen, SSR, Raytraced, None ).</h6>
                          <Image src={setrm} rounded />
                          <Image className={"p-left-2"} src={getrm} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8">
                      <Accordion.Header className={"fw-bold"}>Set | Get Shadow Method</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Change the shadow method ( Shadow Map, Virtual Shadow Maps ).</h6>
                          <Image src={setsm} rounded />
                          <Image className={"p-left-2"} src={getsm} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                      <Accordion.Header className={"fw-bold"}>Set | Get Ambient Occlusion</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Enable or disable Ambient Occlusion.</h6>
                          <Image src={setao} rounded />
                          <Image className={"p-left-2"} src={getao} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                      <Accordion.Header className={"fw-bold"}>Set | Get Bloom</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Enable or disable Bloom.</h6>
                          <Image src={setbloom} rounded />
                          <Image className={"p-left-2"} src={getbloom} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                      <Accordion.Header className={"fw-bold"}>Set | Get Lens Flare</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Enable or disable Lens Flare.</h6>
                          <Image src={setlensflare} rounded />
                          <Image className={"p-left-2"} src={getlensflare} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                      <Accordion.Header className={"fw-bold"}>Set | Get Motion Blur</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Enable or disable Motion Blur.</h6>
                          <Image src={setmotionblur} rounded />
                          <Image className={"p-left-2"} src={getmotionblur} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="9">
                      <Accordion.Header className={"fw-bold"}>Set | Get Nanite</Accordion.Header>
                      <Accordion.Body className={"text-start"}>
                          <h6 className={"fw-bold"}>Enable or disable Nanite ( Work only with Shaders 6 ).</h6>
                          <Image src={setnanite} rounded />
                          <Image className={"p-left-2"} src={getnanite} rounded />
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </header>
      </div>
  );
}

export default UE5Render;

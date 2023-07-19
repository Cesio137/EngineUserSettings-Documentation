import React from 'react';
import { useState, useRef } from 'react';
import { Button, ButtonGroup, Container, Modal, Ratio } from 'react-bootstrap'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

function Setup() {
    const [show, setShow] = useState(false);
    let [videoLink, setVideoLink] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = (link:string) => {
      setVideoLink(link);
      setShow(true);
    }

    return (
        <Container>
            <div className="App" data-bs-theme="dark">
            <header className="App-header">
                <main className="container">
                    <div className="my-3 p-3 bg-body rounded shadow-sm">
                        <h3 className="border-bottom pb-2 mb-0 fw-bold">PROJECT SETUP</h3>
                        <div className="d-flex text-body-secondary pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"/>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                <div className="d-flex justify-content-between">
                                    <strong className="text-white">1°</strong>
                                    <a>STEP ONE</a>
                                </div>
                                <p className="pb-3 mb-0 small lh-sm d-flex fw-bold text-white">
                                    Open your project.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex text-body-secondary pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"/>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                <div className="d-flex justify-content-between">
                                    <strong className="text-white">2°</strong>
                                    <a>STEP TWO</a>
                                </div>
                                <p className="pb-3 mb-0 small lh-sm d-flex fw-bold text-white">
                                    Go to "Edit {'>'} Project Settings {'>'} Windows".
                                </p>
                            </div>
                        </div>
                        <div className="d-flex text-body-secondary pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"/>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                <div className="d-flex justify-content-between">
                                    <strong className="text-white">3°</strong>
                                    <a>STEP THREE</a>
                                </div>
                                <p className="pb-3 mb-0 small lh-sm d-flex fw-bold text-white">
                                    Then check the boxes under "Targeted RHIs" tab that you need.
                                </p>
                            </div>
                        </div>
                        <small className="d-block text-center mt-3">
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" onClick={() => handleShow("https://www.youtube.com/embed/zpOULjyy-n8?rel=0")}>UE4 Video Tutorial</Button>
                                <Button variant="secondary" onClick={() => handleShow("https://www.youtube.com/embed/Krp-hiL2W88")}>UE5 Video Tutorial</Button>
                            </ButtonGroup>

                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Ratio aspectRatio="16x9">
                                        <iframe src={videoLink} title="YouTube video" allowFullScreen></iframe>
                                    </Ratio>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                </Modal.Footer>
                            </Modal>

                        </small>
                    </div>
                </main>

            </header>
        </div>
        </Container>
    );
}

export default Setup;
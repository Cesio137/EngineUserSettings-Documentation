import React from 'react';
import { Outlet, Link } from "react-router-dom";
import ReactCompareImage from "react-compare-image";
import logo from "../../logo.svg";

import specoff from './img/SpecOff.png'
import specon from './img/SpecOn.png'


function Intro() {
    return (
        <div className="App">

            <nav className="navbar navbar-light p-2">
                <Link type="Button" to="/" className="btn btn-dark">RETURN</Link>
            </nav>

            <header className="App-header p-5">

                <main className="Container p-3 mw-70">

                    <h1 className="text-dark border-bottom">INTRODUCTION</h1>

                    <p className="lead mt-3 fw-bold h5 text-dark text-xxl-start">Project Landscape Automaterial is created to provide developers
                        an easy away
                        to create a beautiful landscape material. The template includes a texture control parameters,
                        procedural specular map,
                        layer paint, splines/<code>water plugin</code> support and virtual textures.
                    </p>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Procedural Specular Map</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Specular map is procedurally controlled by material</h5>

                            <ReactCompareImage leftImage={specoff} leftImageLabel={'Auto Specular OFF'} rightImage={specon} rightImageLabel={'Auto Specular ON'} />

                        </div>
                    </div>

                </main>

                <img src={logo} className="App-logo" alt="logo" />

            </header>

        </div>
    );
}

export default Intro;
import React, { useState, Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import ReactCompareImage from "react-compare-image";
import PlyrComponent from '../../components/video-player';
import ReactPlayer from 'react-player';

import logo from "../../logo.svg";
import specoff from './img/SpecOff.png';
import specon from './img/SpecOn.png';


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
                        layer paint, splines <code>water plugin</code> support and virtual textures.
                    </p>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Procedural Specular Map</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Specular map is procedurally controlled by material</h5>

                            <ReactCompareImage leftImage={specoff} leftImageLabel={'Auto Specular OFF'} rightImage={specon} rightImageLabel={'Auto Specular ON'} />

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Texture Control Parameters</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Adjust the texture maps of each layers with simple parameters</h5>

                           

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Texture Variation</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Hide the tile repetition with custom texture variation</h5>

                           

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Paintable Layers</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Paint a specifc part of landscape</h5>

                           

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Spline Layers</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Create smooth paths and roads with splines</h5>

                           

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Water Plugin</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Create custom textures around sea and rivers using <code className='p-1'>Water Plugin</code></h5>

                           

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Displacement Based on Distance</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Optimize your landscape details with subdivision based on distance</h5>

                            <div className='text-center'>
                                <div className='player-wrapper'>
                                    <ReactPlayer className='react-player' controls url={'https://github.com/Cesio137/landscapematerial-react-ts/blob/master/src/routers/intro/img/Displacement.webm?raw=true'} width='100%' height='100%' />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Virtual Textures</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Blend Objects, rocks and a lot of things to landscape</h5>

                           

                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header fw-bold">Vegetation</div>
                        <div className="card-body text-center">

                            <h5 className="card-title d-flex">Add vegetation to landscape with few clicks</h5>

                           

                        </div>
                    </div>


                </main>

                <img src={logo} className="App-logo" alt="logo" />

            </header>

        </div>
    );
}

export default Intro;
import React from 'react';
import { Button } from 'react-bootstrap'
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header" data-bs-theme="dark">
        
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main className="px-3">
                <h1>Documentation Introduction</h1>
                <div className="d-flex justify-content-center">
                    <hr className="border border-white border-2 opacity-75 w-100"/>
                </div>
                <p className="lead fw-bold">Welcome to EngineUserSettings Documentation.</p>
                <p className="lead fw-bold">Supported Unreal Versions: 4.26 | 4.27 | 5.1 | 5.2</p>
                <div className="d-flex justify-content-center">
                    <hr className="border border-white border-2 opacity-75 w-100"/>
                </div>
                <p className="lead">
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <Button type="button" className="btn btn-danger">Video Showcase</Button>
                        <Button type="button" className="btn btn-primary">Get Plugin</Button>
                    </div>
                </p>
            </main>         
        </div>

      </header>
    </div>
  );
}

export default Home;
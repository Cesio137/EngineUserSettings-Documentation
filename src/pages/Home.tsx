import React from 'react';
import { Button } from 'react-bootstrap'
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
                        <Button type="button" as={"a"} href="https://github.com/Cesio137" target={"_blank"} className="btn btn-danger">Video Showcase</Button>
                        <Button type="button" as={"a"} href="https://www.unrealengine.com/marketplace/en-US/product/ef7fb07b25c045889222aeada7e375b2" target={"_blank"} className="btn btn-primary">Get UE5 Plugin</Button>
                        <Button type="button" as={"a"} href="https://9919057686333.gumroad.com/l/EngineUserSettings" target={"_blank"} className="btn btn-primary">Get UE4 Plugin</Button>
                    </div>
                </p>
            </main>         
        </div>

      </header>
    </div>
  );
}

export default Home;
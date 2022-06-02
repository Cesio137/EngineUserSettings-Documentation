import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from "../../logo.svg";

function Setup() {
    return (
        <div className="App">

            <nav className="navbar navbar-light p-2">
                <Link type="Button" to="/" className="btn btn-dark">RETURN</Link>
            </nav>

            <header className="App-header p-5">

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React.js
                </a>

            </header>

        </div>
    );
}

export default Setup;
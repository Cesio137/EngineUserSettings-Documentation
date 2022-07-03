import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
          <header className="App-header p-5">

              <div className="Container p-3">

                  <h4 className="border-bottom pb-2 mb-0 text-dark">Landscape Automaterial Documentation</h4>

                  <div className="d-flex text-muted pt-3">
                      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                           preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#007bff"/>
                          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                      </svg>

                      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                          <div className="d-flex justify-content-between">
                              <strong className="text-gray-dark d-f">INTRODUCTION</strong>
                              <Link to="/intro">See More</Link>
                          </div>
                          <span className="d-flex">Introduction of features</span>
                      </div>
                  </div>
                  <div className="d-flex text-muted pt-3">
                      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                           preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#007bff"/>
                          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                      </svg>

                      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                          <div className="d-flex justify-content-between">
                              <strong className="text-gray-dark">INITIAL SETUP</strong>
                              <Link to="/setup">See More</Link>
                          </div>
                          <span className="d-flex">Basic setup for Landscape Automaterial</span>
                      </div>
                  </div>
                  <div className="d-flex text-muted pt-3">
                      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                           preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#007bff"/>
                          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                      </svg>

                      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                          <div className="d-flex justify-content-between">
                              <strong className="text-gray-dark">PARAMETERS</strong>
                              <Link to="/intro">See More</Link>
                          </div>
                          <span className="d-flex">How each parameters work</span>
                      </div>
                  </div>

                  <div className="d-flex text-muted pt-3">
                      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                           preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#007bff"/>
                          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                      </svg>

                      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                          <div className="d-flex justify-content-between">
                              <strong className="text-gray-dark">LAYER PAINT</strong>
                              <Link to="/intro">See More</Link>
                          </div>
                          <span className="d-flex">How layer paint work</span>
                      </div>
                  </div>

                  <div className="d-flex text-muted pt-3">
                      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                           preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#007bff"/>
                          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                      </svg>

                      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                          <div className="d-flex justify-content-between">
                              <strong className="text-gray-dark">SPLINES LAYERS</strong>
                              <Link to="/intro">See More</Link>
                          </div>
                          <span className="d-flex">Create custom paths with splines</span>
                      </div>
                  </div>

                  <div className="d-flex text-muted pt-3">
                      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                           preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#007bff"/>
                          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                      </svg>

                      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                          <div className="d-flex justify-content-between">
                              <strong className="text-gray-dark">VEGETATION</strong>
                              <Link to="/intro">See More</Link>
                          </div>
                          <span className="d-flex">Add custom vegetation to Landscape</span>
                      </div>
                  </div>

                  <div className="d-flex text-muted pt-3">
                      <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                           xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                           preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#007bff"/>
                          <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                      </svg>

                      <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                          <div className="d-flex justify-content-between">
                              <strong className="text-gray-dark">RVT</strong>
                              <Link to="/intro">See More</Link>
                          </div>
                          <span className="d-flex">Setup the virtual textures</span>
                      </div>
                  </div>

                  <small className="d-block text-end mt-3">
                      <a href="https://www.youtube.com/watch?v=DzFZaeRBoEo" target="_blank">Video Demo</a>
                      <a className="text-black"> | </a>
                      <a href="#">Marketplace</a>
                      <a className="text-black"> | </a>
                      <a href="https://github.com/Cesio137/landscapematerial-react-ts/issues" target="_blank">Report Issues</a>
                  </small>

              </div>

              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Documentation built using <code>React.js</code> and <code>Typescript</code>.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React

                 
              </a>
          </header>
      </div>
  );
}

export default App;

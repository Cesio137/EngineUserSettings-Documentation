import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Link} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Root from './routes/Root';
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import home from "./pages/Home";
const router = createBrowserRouter([
    {
        path: "/EngineUserSettings-Documentation",
        element: <Root/>,
        children: [
            {
                path: "/EngineUserSettings-Documentation",
                element: <Home/>
            },
            {
                path: "EngineUserSettings-Documentation/setup",
                element: <Setup/>
            }
        ]
    }
]);

const rootElement = document.getElementById('root');
if (rootElement) 
{
  ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

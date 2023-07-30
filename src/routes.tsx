import { createHashRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Documentation from "./pages/documentation/Documentation";
import Intro from "./pages/documentation/Intro";

function RouteApps() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="setup" element={<Setup/>} />
                </Route>
                <Route path="documentation" element={<Documentation/>}>
                    <Route path={"intro"} element={<Intro/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteApps;
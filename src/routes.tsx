import { createHashRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Features from "./pages/features/Features";
import Intro from "./pages/features/Intro";

function RouteApps() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="setup" element={<Setup/>} />
                </Route>
                <Route path="features" element={<Features/>}>
                    <Route path={"features"} element={<Intro/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteApps;
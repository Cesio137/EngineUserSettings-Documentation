import { createHashRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Documentation from "./pages/documentation/Documentation";
import Intro from "./pages/documentation/Intro";
import UE4RHI from "./pages/documentation/UE4RHI";
import UE4Render from "./pages/documentation/UE4Render";

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
                    <Route path={"ue4rhi"} element={<UE4RHI/>} />
                    <Route path={"ue4render"} element={<UE4Render/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteApps;
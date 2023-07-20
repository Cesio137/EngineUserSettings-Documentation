import { createHashRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Setup from "./pages/Setup";

function RouteApps() {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/*" element={<App/>}>
                    <Route path="/*" element={<Home/>} />
                    <Route path="setup" element={<Setup/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default RouteApps;
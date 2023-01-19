import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main/Main";
import LodgingDetail from "./lodgingDetail/LodgingDetail";

function ProjectRouter(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path={"lodgingDetail"} element={<LodgingDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default ProjectRouter;
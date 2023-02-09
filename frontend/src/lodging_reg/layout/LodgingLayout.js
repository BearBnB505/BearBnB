import React from "react";
import {Outlet} from "react-router-dom";
import LodgingRegHeader from "./LodgingRegHeader";

function LodgingLayout(props) {
    return (
        <div>
            <LodgingRegHeader />


            <Outlet />
        </div>
    );
}

export default LodgingLayout;